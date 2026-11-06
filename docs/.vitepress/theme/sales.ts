// Store-wide sales whose codes are already public (announced in the AirReps
// Discord and on r/AirReps). While one runs, SaleBanner.vue shows a small bar
// with each seller's code at the bottom of every page. Times are UTC: `start`
// is the public announcement (10:00 Copenhagen), `end` is one minute before the
// coupons expire in the stores, so the bar never shows a dead code.
//
// To add a sale: add an entry here once its codes are public. The short links
// apply the code on the store (YOURLS on airreps.link).

export type SaleKind = 'blackfriday' | 'easter' | 'summer';

export interface SaleOffer {
    store: 'Jenny' | 'HiCity' | 'Earhive';
    code: string;
    href: string;
}

export interface Sale {
    id: string;
    kind: SaleKind;
    start: string;
    end: string;
    offers: SaleOffer[];
}

const offers = (codes: [string, string, string], suffix: string): SaleOffer[] => [
    { store: 'Jenny', code: codes[0], href: `https://airreps.link/jenny${suffix}` },
    { store: 'HiCity', code: codes[1], href: `https://airreps.link/hicity${suffix}` },
    { store: 'Earhive', code: codes[2], href: `https://airreps.link/earhive${suffix}` },
];

export const SALES: readonly Sale[] = [
    {
        id: 'bf26',
        kind: 'blackfriday',
        start: '2026-11-19T09:00:00Z',
        end: '2026-12-01T22:59:00Z',
        offers: offers(['JBLACK10', 'HCBLACK10', 'EHBLACK10'], 'bf26'),
    },
    {
        id: 'easter27',
        kind: 'easter',
        start: '2027-03-18T09:00:00Z',
        end: '2027-03-29T21:59:00Z',
        offers: offers(['JEASTER10', 'HCEASTER10', 'EHEASTER10'], 'easter27'),
    },
];

/** The sale running at `now`, or null. */
export function activeSale(now: Date, sales: readonly Sale[] = SALES): Sale | null {
    const t = now.getTime();
    return sales.find((s) => t >= Date.parse(s.start) && t < Date.parse(s.end)) ?? null;
}

type Locale = 'da' | 'de' | 'en' | 'es' | 'fr' | 'pl' | 'pt' | 'ru' | 'tr';

const HEADLINES: Record<SaleKind, Record<Locale, string>> = {
    blackfriday: {
        da: 'Black Friday',
        de: 'Black Friday',
        en: 'Black Friday',
        es: 'Black Friday',
        fr: 'Black Friday',
        pl: 'Black Friday',
        pt: 'Black Friday',
        ru: 'Чёрная пятница',
        tr: 'Black Friday',
    },
    easter: {
        da: 'Påsketilbud',
        de: 'Oster-Sale',
        en: 'Easter sale',
        es: 'Rebajas de Pascua',
        fr: 'Soldes de Pâques',
        pl: 'Promocja wielkanocna',
        pt: 'Promoção de Páscoa',
        ru: 'Пасхальная распродажа',
        tr: 'Paskalya indirimi',
    },
    summer: {
        da: 'Sommertilbud',
        de: 'Sommer-Sale',
        en: 'Summer sale',
        es: 'Rebajas de verano',
        fr: 'Soldes d’été',
        pl: 'Letnia promocja',
        pt: 'Promoção de verão',
        ru: 'Летняя распродажа',
        tr: 'Yaz indirimi',
    },
};

const OFFER: Record<Locale, string> = {
    da: '10 % rabat på alt hos alle tre sælgere til og med {date}',
    de: '10 % Rabatt auf alles bei allen drei Verkäufern bis {date}',
    en: '10% off everything at all three sellers until {date}',
    es: '10 % de descuento en todo en los tres vendedores hasta el {date}',
    fr: '10 % de réduction sur tout chez les trois vendeurs jusqu’au {date}',
    pl: '10% zniżki na wszystko u wszystkich trzech sprzedawców do {date}',
    pt: '10% de desconto em tudo nos três vendedores até {date}',
    ru: 'Скидка 10% на всё у всех трёх продавцов до {date}',
    tr: '{date} tarihine kadar üç satıcının hepsinde her şeyde %10 indirim',
};

const CLOSE: Record<Locale, string> = {
    da: 'Luk',
    de: 'Schließen',
    en: 'Close',
    es: 'Cerrar',
    fr: 'Fermer',
    pl: 'Zamknij',
    pt: 'Fechar',
    ru: 'Закрыть',
    tr: 'Kapat',
};

// Accessible name for a code link: "Jenny: code JBLACK10 is applied for you".
const APPLIED: Record<Locale, string> = {
    da: '{store}: koden {code} bliver lagt på for dig',
    de: '{store}: Code {code} wird automatisch eingelöst',
    en: '{store}: code {code} is applied for you',
    es: '{store}: el código {code} se aplica automáticamente',
    fr: '{store} : le code {code} est appliqué automatiquement',
    pl: '{store}: kod {code} zostanie dodany automatycznie',
    pt: '{store}: o código {code} é aplicado automaticamente',
    ru: '{store}: код {code} применится автоматически',
    tr: '{store}: {code} kodu otomatik uygulanır',
};

export interface SaleText {
    headline: string;
    offer: string;
    close: string;
    linkLabel: (offer: SaleOffer) => string;
}

/** Banner copy for a sale in the page language (VitePress `lang`, e.g. "de-DE"). */
export function saleText(sale: Sale, lang: string): SaleText {
    const short = lang.slice(0, 2).toLowerCase();
    const locale: Locale = short in OFFER ? (short as Locale) : 'en';
    // Shown in Copenhagen time, like the Discord announcement and the coupons.
    const date = new Intl.DateTimeFormat(lang || 'en', {
        day: 'numeric',
        month: 'short',
        timeZone: 'Europe/Copenhagen',
    }).format(new Date(sale.end));
    return {
        headline: HEADLINES[sale.kind][locale],
        offer: OFFER[locale].replace('{date}', date),
        close: CLOSE[locale],
        linkLabel: (o) => APPLIED[locale].replace('{store}', o.store).replace('{code}', o.code),
    };
}
