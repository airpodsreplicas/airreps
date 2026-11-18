// Where guide readers reach the AirReps community, and what the guide says
// about it. One place for the tracked links, the member counts and the copy in
// all nine languages, shared by the help block (components/CommunityCta.vue),
// the mobile nav pill, the home hero line and the nav config.

// Each placement has its own airreps.link short link, and each short link opens
// its own Discord invite, so joins can be counted per placement. Keep one link
// per placement; theme/guide-metrics.ts counts all of them as Discord clicks.
export const COMMUNITY_LINKS = {
    /** "Still stuck?" block on help and troubleshooting pages. */
    help: 'https://airreps.link/dghelp',
    /** Home hero line and button. */
    home: 'https://airreps.link/dghome',
    /** Discord icon in the nav and the mobile top-bar pill. */
    nav: 'https://airreps.link/dgnav',
    /** Join button on /community. */
    page: 'https://airreps.link/dgcomm',
    /** Quiz result line (Quiz.vue keeps its own copy of this URL). */
    quiz: 'https://airreps.link/dgquiz',
    reddit: 'https://reddit.com/r/airreps',
} as const;

// Counted on 18 Nov 2026: Discord from the server invite, r/AirReps from the
// subreddit. Copy rounds down to whole thousands. When these change, update the
// `asOf` phrases below and the counts on the /community pages and llms files.
export const COMMUNITY_STATS = {
    countedOn: '2026-11-18',
    discordMembers: 73_722,
    redditMembers: 73_256,
};

export type CtaVariant = 'stuck' | 'unit' | 'apps' | 'ask' | 'eq' | 'join';

interface CtaCopy {
    body: string;
    title: string;
}

export interface CommunityCopy {
    aboutCommunity: string;
    askOnDiscord: string;
    /** Date the counts were taken, e.g. "as of Nov 2026". */
    asOf: string;
    /** Accessible name of the help block. */
    blockLabel: string;
    joinDiscord: string;
    /** Member count with `{k}` for the thousands, e.g. "{k}k+ members". */
    members: string;
    /** Accessible name of the mobile nav pill. */
    navPill: string;
    /** "{members} on Discord" for the home hero line. */
    onDiscord: string;
    /** "{members} on r/AirReps". */
    onReddit: string;
    openReddit: string;
    variants: Record<CtaVariant, CtaCopy>;
}

const AI_EN = 'or ask the AI assistant in #ai-assistant for an answer in seconds.';
const AI_DA = 'eller spørg AI-assistenten i #ai-assistant og få svar på få sekunder.';
const AI_DE = 'oder frag den KI-Assistenten in #ai-assistant, der in Sekunden antwortet.';
const AI_ES = 'o pregunta al asistente de IA en #ai-assistant y obtén respuesta en segundos.';
const AI_FR =
    "ou posez la question à l'assistant IA dans #ai-assistant : il répond en quelques secondes.";
const AI_PL = 'albo zapytaj asystenta AI na #ai-assistant, który odpowiada w kilka sekund.';
const AI_PT = 'ou pergunte ao assistente de IA no #ai-assistant e receba a resposta em segundos.';
const AI_RU = 'или спросите ИИ-ассистента в #ai-assistant — он отвечает за секунды.';
const AI_TR =
    'ya da #ai-assistant kanalındaki yapay zekâ asistanına sorun; saniyeler içinde yanıt verir.';

export const COMMUNITY_COPY: Record<string, CommunityCopy> = {
    da: {
        aboutCommunity: 'Om fællesskabet',
        askOnDiscord: 'Spørg på Discord',
        asOf: 'pr. november 2026',
        blockLabel: 'Spørg AirReps-fællesskabet',
        joinDiscord: 'Deltag på Discord',
        members: '{k}.000+ medlemmer',
        navPill: 'Deltag på AirReps-Discorden',
        onDiscord: '{members} på Discord',
        onReddit: '{members} på r/AirReps',
        openReddit: 'Åbn r/AirReps',
        variants: {
            apps: {
                body: `Skriv din model og sælger i #help-and-advice, ${AI_DA}`,
                title: 'Usikker på, hvilken app der passer til dit par?',
            },
            ask: {
                body: `Skriv din model og enhed i #help-and-advice, ${AI_DA}`,
                title: 'Har du et spørgsmål om dit par?',
            },
            eq: {
                body: 'Medlemmer deler deres EQ-indstillinger i #help-and-advice, og de fleste er fastgjort der. Skriv din model, og hvad du gerne vil ændre.',
                title: 'Vil du have en EQ-indstilling til dit par?',
            },
            join: {
                body: 'Stil spørgsmål på Discord, og læs ejeres anmeldelser på r/AirReps. Begge dele er gratis.',
                title: 'Bliv en del af AirReps-fællesskabet',
            },
            stuck: {
                body: `Skriv din model, og hvad du har prøvet, i #help-and-advice, ${AI_DA}`,
                title: 'Sidder du stadig fast? Spørg fællesskabet',
            },
            unit: {
                body: 'Før du kontakter sælgeren, så skriv din model, sælger og fejlen i #help-and-advice. Ejere af samme version kan se forskel på en kendt særhed og et defekt par.',
                title: 'Er du i tvivl om, det er enheden?',
            },
        },
    },
    de: {
        aboutCommunity: 'Über die Community',
        askOnDiscord: 'Auf Discord fragen',
        asOf: 'Stand: November 2026',
        blockLabel: 'Frag die AirReps-Community',
        joinDiscord: 'Discord beitreten',
        members: '{k}.000+ Mitglieder',
        navPill: 'Dem AirReps-Discord beitreten',
        onDiscord: '{members} auf Discord',
        onReddit: '{members} auf r/AirReps',
        openReddit: 'r/AirReps öffnen',
        variants: {
            apps: {
                body: `Poste Modell und Verkäufer in #help-and-advice ${AI_DE}`,
                title: 'Unsicher, welche App zu deinem Paar passt?',
            },
            ask: {
                body: `Poste Modell und Gerät in #help-and-advice ${AI_DE}`,
                title: 'Hast du eine Frage zu deinem Paar?',
            },
            eq: {
                body: 'Mitglieder teilen ihre EQ-Einstellungen in #help-and-advice, die meisten Presets sind dort angepinnt. Poste dein Modell und was du ändern möchtest.',
                title: 'Suchst du ein EQ-Preset für dein Paar?',
            },
            join: {
                body: 'Stell Fragen auf Discord und lies Erfahrungsberichte von Besitzern auf r/AirReps. Beides ist kostenlos.',
                title: 'Werde Teil der AirReps-Community',
            },
            stuck: {
                body: `Poste dein Modell und was du schon versucht hast in #help-and-advice ${AI_DE}`,
                title: 'Kommst du nicht weiter? Frag die Community',
            },
            unit: {
                body: 'Bevor du den Verkäufer kontaktierst, poste Modell, Verkäufer und Fehler in #help-and-advice. Besitzer derselben Version erkennen, ob es eine bekannte Eigenheit oder ein defektes Paar ist.',
                title: 'Unsicher, ob es am Gerät liegt?',
            },
        },
    },
    en: {
        aboutCommunity: 'About the community',
        askOnDiscord: 'Ask on Discord',
        asOf: 'as of Nov 2026',
        blockLabel: 'Ask the AirReps community',
        joinDiscord: 'Join the Discord',
        members: '{k}k+ members',
        navPill: 'Join the AirReps Discord',
        onDiscord: '{members} on Discord',
        onReddit: '{members} on r/AirReps',
        openReddit: 'Open r/AirReps',
        variants: {
            apps: {
                body: `Post your model and seller in #help-and-advice, ${AI_EN}`,
                title: 'Not sure which app fits your pair?',
            },
            ask: {
                body: `Post your model and device in #help-and-advice, ${AI_EN}`,
                title: 'Have a question about your pair?',
            },
            eq: {
                body: "Members share their EQ settings in #help-and-advice, and most presets are pinned there. Post your model and what you'd like to change.",
                title: 'Want an EQ preset for your pair?',
            },
            join: {
                body: 'Ask questions on Discord and read owner reviews on r/AirReps. Both are free.',
                title: 'Join the AirReps community',
            },
            stuck: {
                body: `Post your model and what you've tried in #help-and-advice, ${AI_EN}`,
                title: 'Still stuck? Ask the community',
            },
            unit: {
                body: 'Before you contact the seller, post your model, seller and the fault in #help-and-advice. Owners of the same version can tell a known quirk from a faulty pair.',
                title: "Not sure it's the unit?",
            },
        },
    },
    es: {
        aboutCommunity: 'Sobre la comunidad',
        askOnDiscord: 'Pregunta en Discord',
        asOf: 'a noviembre de 2026',
        blockLabel: 'Pregunta a la comunidad de AirReps',
        joinDiscord: 'Únete al Discord',
        members: 'más de {k}.000 miembros',
        navPill: 'Únete al Discord de AirReps',
        onDiscord: '{members} en Discord',
        onReddit: '{members} en r/AirReps',
        openReddit: 'Abrir r/AirReps',
        variants: {
            apps: {
                body: `Publica tu modelo y vendedor en #help-and-advice, ${AI_ES}`,
                title: '¿No sabes qué app va con tus auriculares?',
            },
            ask: {
                body: `Publica tu modelo y dispositivo en #help-and-advice, ${AI_ES}`,
                title: '¿Tienes una pregunta sobre tus auriculares?',
            },
            eq: {
                body: 'Los miembros comparten sus ajustes de EQ en #help-and-advice y la mayoría están fijados allí. Publica tu modelo y lo que quieres cambiar.',
                title: '¿Buscas un ajuste de EQ para tus auriculares?',
            },
            join: {
                body: 'Haz preguntas en Discord y lee reseñas de usuarios en r/AirReps. Ambos son gratis.',
                title: 'Únete a la comunidad AirReps',
            },
            stuck: {
                body: `Publica tu modelo y lo que ya probaste en #help-and-advice, ${AI_ES}`,
                title: '¿Sigues atascado? Pregunta a la comunidad',
            },
            unit: {
                body: 'Antes de contactar al vendedor, publica tu modelo, el vendedor y el fallo en #help-and-advice. Quienes tienen la misma versión saben distinguir una peculiaridad conocida de un par defectuoso.',
                title: '¿No sabes si es la unidad?',
            },
        },
    },
    fr: {
        aboutCommunity: 'À propos de la communauté',
        askOnDiscord: 'Demander sur Discord',
        asOf: 'en novembre 2026',
        blockLabel: 'Demander à la communauté AirReps',
        joinDiscord: 'Rejoindre le Discord',
        members: 'plus de {k} 000 membres',
        navPill: 'Rejoindre le Discord AirReps',
        onDiscord: '{members} sur Discord',
        onReddit: '{members} sur r/AirReps',
        openReddit: 'Ouvrir r/AirReps',
        variants: {
            apps: {
                body: `Indiquez votre modèle et le vendeur dans #help-and-advice, ${AI_FR}`,
                title: 'Quelle application pour votre paire ?',
            },
            ask: {
                body: `Indiquez votre modèle et votre appareil dans #help-and-advice, ${AI_FR}`,
                title: 'Une question sur votre paire ?',
            },
            eq: {
                body: "Les membres partagent leurs réglages d'égaliseur dans #help-and-advice, et la plupart y sont épinglés. Indiquez votre modèle et ce que vous voulez changer.",
                title: "Envie d'un réglage d'égaliseur pour votre paire ?",
            },
            join: {
                body: 'Posez vos questions sur Discord et lisez les avis des propriétaires sur r/AirReps. Les deux sont gratuits.',
                title: 'Rejoignez la communauté AirReps',
            },
            stuck: {
                body: `Indiquez votre modèle et ce que vous avez essayé dans #help-and-advice, ${AI_FR}`,
                title: 'Toujours bloqué ? Demandez à la communauté',
            },
            unit: {
                body: "Avant de contacter le vendeur, indiquez votre modèle, le vendeur et le problème dans #help-and-advice. Les propriétaires de la même version savent distinguer une particularité connue d'une paire défectueuse.",
                title: "Vous ne savez pas si c'est l'appareil ?",
            },
        },
    },
    pl: {
        aboutCommunity: 'O społeczności',
        askOnDiscord: 'Zapytaj na Discordzie',
        asOf: 'stan na listopad 2026',
        blockLabel: 'Zapytaj społeczność AirReps',
        joinDiscord: 'Dołącz do Discorda',
        members: 'ponad {k} tys. członków',
        navPill: 'Dołącz do Discorda AirReps',
        onDiscord: '{members} na Discordzie',
        onReddit: '{members} na r/AirReps',
        openReddit: 'Otwórz r/AirReps',
        variants: {
            apps: {
                body: `Napisz model i sprzedawcę na #help-and-advice ${AI_PL}`,
                title: 'Nie wiesz, która aplikacja pasuje do Twojej pary?',
            },
            ask: {
                body: `Napisz model i urządzenie na #help-and-advice ${AI_PL}`,
                title: 'Masz pytanie o swoją parę?',
            },
            eq: {
                body: 'Członkowie dzielą się ustawieniami EQ na #help-and-advice, a większość z nich jest tam przypięta. Napisz, jaki masz model i co chcesz zmienić.',
                title: 'Szukasz ustawień EQ dla swojej pary?',
            },
            join: {
                body: 'Zadawaj pytania na Discordzie i czytaj recenzje właścicieli na r/AirReps. Oba są darmowe.',
                title: 'Dołącz do społeczności AirReps',
            },
            stuck: {
                body: `Napisz na #help-and-advice, jaki masz model i co już próbowałeś, ${AI_PL}`,
                title: 'Nadal nie działa? Zapytaj społeczność',
            },
            unit: {
                body: 'Zanim skontaktujesz się ze sprzedawcą, napisz na #help-and-advice model, sprzedawcę i opis usterki. Właściciele tej samej wersji odróżnią znaną przypadłość od wadliwej pary.',
                title: 'Nie wiesz, czy to wina egzemplarza?',
            },
        },
    },
    pt: {
        aboutCommunity: 'Sobre a comunidade',
        askOnDiscord: 'Pergunte no Discord',
        asOf: 'em novembro de 2026',
        blockLabel: 'Pergunte à comunidade AirReps',
        joinDiscord: 'Entrar no Discord',
        members: 'mais de {k} mil membros',
        navPill: 'Entre no Discord da AirReps',
        onDiscord: '{members} no Discord',
        onReddit: '{members} no r/AirReps',
        openReddit: 'Abrir r/AirReps',
        variants: {
            apps: {
                body: `Poste seu modelo e o vendedor no #help-and-advice, ${AI_PT}`,
                title: 'Não sabe qual app serve para o seu par?',
            },
            ask: {
                body: `Poste seu modelo e aparelho no #help-and-advice, ${AI_PT}`,
                title: 'Tem alguma dúvida sobre o seu par?',
            },
            eq: {
                body: 'Os membros compartilham seus ajustes de EQ no #help-and-advice, e a maioria fica fixada lá. Poste seu modelo e o que você quer mudar.',
                title: 'Quer um ajuste de EQ para o seu par?',
            },
            join: {
                body: 'Tire dúvidas no Discord e leia avaliações de donos no r/AirReps. Os dois são gratuitos.',
                title: 'Faça parte da comunidade AirReps',
            },
            stuck: {
                body: `Poste seu modelo e o que você já tentou no #help-and-advice, ${AI_PT}`,
                title: 'Ainda com problema? Pergunte à comunidade',
            },
            unit: {
                body: 'Antes de falar com o vendedor, poste seu modelo, o vendedor e o problema no #help-and-advice. Quem tem a mesma versão sabe diferenciar uma peculiaridade conhecida de um par com defeito.',
                title: 'Não sabe se o problema é a unidade?',
            },
        },
    },
    ru: {
        aboutCommunity: 'О сообществе',
        askOnDiscord: 'Спросить в Discord',
        asOf: 'на ноябрь 2026 г.',
        blockLabel: 'Спросите сообщество AirReps',
        joinDiscord: 'Присоединиться к Discord',
        members: 'более {k} тыс. участников',
        navPill: 'Присоединиться к Discord AirReps',
        onDiscord: '{members} в Discord',
        onReddit: '{members} на r/AirReps',
        openReddit: 'Открыть r/AirReps',
        variants: {
            apps: {
                body: `Напишите в #help-and-advice модель и продавца ${AI_RU}`,
                title: 'Не знаете, какое приложение подходит?',
            },
            ask: {
                body: `Напишите в #help-and-advice модель и устройство ${AI_RU}`,
                title: 'Есть вопрос о ваших наушниках?',
            },
            eq: {
                body: 'Участники делятся настройками эквалайзера в #help-and-advice, и большинство из них там закреплены. Напишите модель и что хотите изменить.',
                title: 'Нужна настройка эквалайзера?',
            },
            join: {
                body: 'Задавайте вопросы в Discord и читайте отзывы владельцев на r/AirReps. И то и другое бесплатно.',
                title: 'Присоединяйтесь к сообществу AirReps',
            },
            stuck: {
                body: `Напишите в #help-and-advice свою модель и что уже пробовали, ${AI_RU}`,
                title: 'Не получается? Спросите сообщество',
            },
            unit: {
                body: 'Прежде чем писать продавцу, опишите в #help-and-advice модель, продавца и проблему. Владельцы той же версии отличат известную особенность от брака.',
                title: 'Не уверены, что дело в экземпляре?',
            },
        },
    },
    tr: {
        aboutCommunity: 'Topluluk hakkında',
        askOnDiscord: "Discord'da sor",
        asOf: 'Kasım 2026 itibarıyla',
        blockLabel: 'AirReps topluluğuna sorun',
        joinDiscord: "Discord'a katıl",
        members: '{k} bin+ üye',
        navPill: "AirReps Discord'una katıl",
        onDiscord: "Discord'da {members}",
        onReddit: "r/AirReps'te {members}",
        openReddit: "r/AirReps'i aç",
        variants: {
            apps: {
                body: `Modelinizi ve satıcıyı #help-and-advice kanalına yazın ${AI_TR}`,
                title: 'Hangi uygulamanın uygun olduğundan emin değil misiniz?',
            },
            ask: {
                body: `Modelinizi ve cihazınızı #help-and-advice kanalına yazın ${AI_TR}`,
                title: 'Kulaklığınızla ilgili bir sorunuz mu var?',
            },
            eq: {
                body: 'Üyeler EQ ayarlarını #help-and-advice kanalında paylaşıyor; çoğu orada sabitlenmiş durumda. Modelinizi ve neyi değiştirmek istediğinizi yazın.',
                title: 'Kulaklığınız için EQ ayarı mı arıyorsunuz?',
            },
            join: {
                body: "Discord'da soru sorun, r/AirReps'te kullanıcı incelemelerini okuyun. İkisi de ücretsiz.",
                title: 'AirReps topluluğuna katılın',
            },
            stuck: {
                body: `Modelinizi ve neler denediğinizi #help-and-advice kanalına yazın ${AI_TR}`,
                title: 'Hâlâ çözemediniz mi? Topluluğa sorun',
            },
            unit: {
                body: 'Satıcıyla iletişime geçmeden önce modelinizi, satıcıyı ve arızayı #help-and-advice kanalına yazın. Aynı sürümü kullananlar bilinen bir tuhaflığı arızalı bir çiftten ayırt edebilir.',
                title: 'Sorunun cihazda olduğundan emin değil misiniz?',
            },
        },
    },
};

/** Accepts a locale key ('da') or VitePress's 'root' for English. */
export function localeKey(locale: string): string {
    return Object.hasOwn(COMMUNITY_COPY, locale) ? locale : 'en';
}

export function communityCopy(locale: string): CommunityCopy {
    return COMMUNITY_COPY[localeKey(locale)];
}

/** The locale's /community page. */
export function communityPath(locale: string): string {
    const key = localeKey(locale);
    return key === 'en' ? '/community' : `/${key}/community`;
}

/** "73k+ members" (or the locale's form), rounded down to whole thousands. */
export function membersLabel(locale: string, count: number): string {
    return communityCopy(locale).members.replace('{k}', String(Math.floor(count / 1000)));
}

/** "73k+ members on Discord · 73k+ members on r/AirReps · as of Nov 2026". */
export function statsLine(locale: string): string {
    const copy = communityCopy(locale);
    return [
        copy.onDiscord.replace('{members}', membersLabel(locale, COMMUNITY_STATS.discordMembers)),
        copy.onReddit.replace('{members}', membersLabel(locale, COMMUNITY_STATS.redditMembers)),
        copy.asOf,
    ].join(' · ');
}
