// Festive touches that switch themselves on and off by the visitor's local date.
// `seasonFor` is inlined into every page's <head> (see seasonScript), so
// html[data-season] is set before first paint and the CSS-only parts (hero
// name colors, the hat on the navbar logo) never flash. Keep it self-contained:
// no imports and no references to anything outside its own body.

export const SEASONS = [
    'halloween',
    'christmas',
    'newyear',
    'lunarnewyear',
    'valentines',
    'easter',
] as const;

export type Season = (typeof SEASONS)[number];

/** The festive season for a local calendar date, or null on an ordinary day. */
export function seasonFor(date: Date): Season | null {
    const year = date.getFullYear();
    const monthDay = (date.getMonth() + 1) * 100 + date.getDate();
    if (monthDay >= 1018 && monthDay <= 1031) {
        return 'halloween';
    }
    if (monthDay >= 1201 && monthDay <= 1226) {
        return 'christmas';
    }
    if (monthDay >= 1227 || monthDay <= 102) {
        return 'newyear';
    }
    const dayMs = 86_400_000;
    const today = Date.UTC(year, date.getMonth(), date.getDate()) / dayMs;
    // Lunar New Year's Day (MMDD) for 2027-2040, from published tables: browser
    // Chinese calendars put 2027 and 2030 a day late. Eve through the eighth day.
    const lunar = [206, 126, 213, 203, 123, 211, 131, 219, 208, 128, 215, 204, 124, 212][
        year - 2027
    ];
    if (lunar) {
        const offset = today - Date.UTC(year, Math.floor(lunar / 100) - 1, lunar % 100) / dayMs;
        if (offset >= -1 && offset <= 7) {
            return 'lunarnewyear';
        }
    }
    if (monthDay >= 208 && monthDay <= 214) {
        return 'valentines';
    }
    // Western Easter Sunday (anonymous Gregorian algorithm); Palm Sunday to Easter Monday.
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - Math.floor(b / 4) - g + 15) % 30;
    const l = (32 + 2 * (b % 4) + 2 * Math.floor(c / 4) - h - (c % 4)) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const n = h + l - 7 * m + 114;
    const offset = today - Date.UTC(year, Math.floor(n / 31) - 1, (n % 31) + 1) / dayMs;
    return offset >= -7 && offset <= 1 ? 'easter' : null;
}

/**
 * Inline <head> script that sets html[data-season]. `?season=<name>` previews a
 * season on any date and `?season=none` turns the touches off.
 */
export function seasonScript(): string {
    return `try{var s=new URLSearchParams(location.search).get('season');s=s===null?(${seasonFor.toString()})(new Date()):${JSON.stringify(SEASONS)}.indexOf(s)<0?null:s;if(s)document.documentElement.dataset.season=s}catch(e){}`;
}
