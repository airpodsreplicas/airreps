<script setup lang="ts">
import { computed, ref } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();

// --- i18n ---
const i18n: Record<string, Record<string, string>> = {
  'en-US': {
    // Questions
    q_formFactor: 'What style are you looking for?',
    o_inEar: 'In-ear (sealed fit)',
    o_inEar_d: 'Like AirPods Pro — best sound isolation & ANC',
    o_openFit: 'Open-fit (no seal)',
    o_openFit_d: 'Like AirPods 4 — natural feel, less isolation',
    o_overEar: 'Over-ear headphones',
    o_overEar_d: 'Like AirPods Max — premium, full-size',
    q_device: 'What will you primarily use them with?',
    o_iphone: 'iPhone / iPad',
    o_iphone_d: 'iOS devices only',
    o_mac: 'Mac (macOS)',
    o_mac_d: 'MacBook, iMac, Mac Mini, etc.',
    o_appleMix: 'Multiple Apple devices',
    o_appleMix_d: 'iPhone + Mac, want seamless switching',
    o_other: 'Windows / Android',
    o_other_d: 'Non-Apple devices',
    q_useCase: 'What will you mainly use them for?',
    o_commute: 'Commute / travel',
    o_commute_d: 'Transparency mode matters, ANC for transit noise',
    o_gym: 'Gym / sports',
    o_gym_d: 'Sweatproof, durable, secure fit',
    o_calls: 'Phone calls / meetings',
    o_calls_d: 'Best microphone quality matters',
    o_casual: 'Casual listening',
    o_casual_d: 'All-around everyday use',
    q_priority: 'What matters most to you?',
    o_anc: 'Best noise cancelling',
    o_anc_d: 'Block out as much noise as possible',
    o_features: 'Most features',
    o_features_d: 'iCloud Connect, adaptive audio, latest tech',
    o_stable: 'Most stable & proven',
    o_stable_d: 'Reliable, well-tested, community favorite',
    o_latest: 'Latest & newest',
    o_latest_d: 'Newest design, latest model — AirPods Pro 3 look',
    o_budget: 'Best value',
    o_budget_d: 'Good quality without spending too much',
    q_sound: 'What sound do you prefer?',
    o_bass: 'Bass-heavy',
    o_bass_d: 'Punchy lows, great for hip-hop/EDM',
    o_balanced: 'Balanced',
    o_balanced_d: 'Even sound, best transparency mode',
    q_ordering: 'How do you want to order?',
    q_ordering_hint: 'Agents like KakoBuy let you order from Weidian stores, consolidate shipping, and get QC photos before shipping.',
    o_agent: 'Through an agent (KakoBuy)',
    o_agent_d: 'Consolidate shipping, QC photos, more options',
    o_direct: 'Direct from a trusted seller',
    o_direct_d: 'Order from seller websites directly',
    o_alibaba: 'Via Alibaba',
    o_alibaba_d: 'Easy ordering, familiar platform',
    o_unsure: 'Not sure yet',
    o_unsure_d: "I'll decide later",
    q_seller: 'What matters most in a seller?',
    o_price: 'Cheapest prices',
    o_price_d: 'Lowest prices across the board',
    o_shipping: 'Fastest shipping',
    o_shipping_d: 'Quickest delivery times',
    o_support: 'Best customer support',
    o_support_d: 'Great support & most payment options',
    o_any: "Don't mind",
    o_any_d: "They're all good — just show me the result",
    q_payment: 'Do you need a specific payment method?',
    q_payment_hint: 'All sellers accept Credit Card, Revolut, Wise, Crypto, and Bank Transfer.',
    o_card: 'Credit / Debit Card',
    o_card_d: 'Accepted by all sellers',
    o_alipay: 'AliPay',
    o_alipay_d: 'Earhive & Jenny',
    o_regional: 'Regional (PIX, Afterpay, Blik, etc.)',
    o_regional_d: 'HiCity has the most regional options',
    o_payAny: "Don't care",
    o_payAny_d: 'Any payment method is fine',
    // Results
    learnMore: 'Learn more',
    orderLink: 'Learn more about ordering options.',
    readyToBuy: 'Ready to buy?',
    ourPick: 'Our Pick',
    fromEarhive: 'from Earhive',
    orderViaKakoBuy: 'Order via KakoBuy',
    viewWeidianLinks: 'View Weidian links',
    orderFromAlibaba: 'Order from Earhive (Alibaba)',
    howToBuyGuide: 'How to Buy Guide',
    orderFrom: 'Order from',
    allSellerLinks: 'All seller links',
    comparePayments: 'Compare payment methods',
    bestPrices: 'Best prices',
    fastestShipping: 'Fastest shipping',
    bestSupport: 'Best support',
    orUseKakoBuy: 'Or use KakoBuy (agent)',
    allLinksWeidian: 'All links & Weidian',
    weidianStore: 'Weidian Store (via KakoBuy)',
    kakobuySignup: 'Sign up for KakoBuy — coupon package included',
    back: 'Back',
    changeLastAnswer: 'Change last answer',
    startOver: 'Start over',
    step: 'Step',
    of: 'of',
  },
  'es-ES': {
    q_formFactor: '\u00bfQu\u00e9 estilo buscas?',
    o_inEar: 'In-ear (ajuste sellado)',
    o_inEar_d: 'Como AirPods Pro — mejor aislamiento y ANC',
    o_openFit: 'Abierto (sin sello)',
    o_openFit_d: 'Como AirPods 4 — sensaci\u00f3n natural, menos aislamiento',
    o_overEar: 'Auriculares over-ear',
    o_overEar_d: 'Como AirPods Max — premium, tama\u00f1o completo',
    q_device: '\u00bfCon qu\u00e9 dispositivo los usar\u00e1s principalmente?',
    o_iphone: 'iPhone / iPad', o_iphone_d: 'Solo dispositivos iOS',
    o_mac: 'Mac (macOS)', o_mac_d: 'MacBook, iMac, Mac Mini, etc.',
    o_appleMix: 'Varios dispositivos Apple', o_appleMix_d: 'iPhone + Mac, cambio fluido',
    o_other: 'Windows / Android', o_other_d: 'Dispositivos no Apple',
    q_useCase: '\u00bfCu\u00e1l ser\u00e1 tu uso principal?',
    o_commute: 'Viajes / transporte', o_commute_d: 'Modo transparencia importante, ANC para el transporte',
    o_gym: 'Gimnasio / deporte', o_gym_d: 'Resistente al sudor, duradero',
    o_calls: 'Llamadas / reuniones', o_calls_d: 'La mejor calidad de micr\u00f3fono importa',
    o_casual: 'Uso casual', o_casual_d: 'Uso diario general',
    q_priority: '\u00bfQu\u00e9 es lo m\u00e1s importante para ti?',
    o_anc: 'Mejor cancelaci\u00f3n de ruido', o_anc_d: 'Bloquear el mayor ruido posible',
    o_features: 'M\u00e1s funciones', o_features_d: 'iCloud Connect, audio adaptativo, \u00faltima tecnolog\u00eda',
    o_stable: 'M\u00e1s estable y probado', o_stable_d: 'Fiable, bien probado, favorito de la comunidad',
    o_latest: '\u00daltimo y m\u00e1s nuevo', o_latest_d: 'Dise\u00f1o m\u00e1s reciente — look de AirPods Pro 3',
    o_budget: 'Mejor relaci\u00f3n calidad-precio', o_budget_d: 'Buena calidad sin gastar mucho',
    q_sound: '\u00bfQu\u00e9 sonido prefieres?',
    o_bass: 'Graves potentes', o_bass_d: 'Bajos fuertes, genial para hip-hop/EDM',
    o_balanced: 'Equilibrado', o_balanced_d: 'Sonido uniforme, mejor modo transparencia',
    q_ordering: '\u00bfC\u00f3mo quieres hacer el pedido?',
    q_ordering_hint: 'Agentes como KakoBuy te permiten pedir en tiendas Weidian, consolidar env\u00edos y obtener fotos QC antes del env\u00edo.',
    o_agent: 'A trav\u00e9s de un agente (KakoBuy)', o_agent_d: 'Consolidar env\u00edos, fotos QC, m\u00e1s opciones',
    o_direct: 'Directo de un vendedor', o_direct_d: 'Pedir directamente en sitios web de vendedores',
    o_alibaba: 'V\u00eda Alibaba', o_alibaba_d: 'Pedido f\u00e1cil, plataforma conocida',
    o_unsure: 'A\u00fan no estoy seguro', o_unsure_d: 'Lo decidir\u00e9 despu\u00e9s',
    q_seller: '\u00bfQu\u00e9 es lo m\u00e1s importante en un vendedor?',
    o_price: 'Precios m\u00e1s baratos', o_price_d: 'Los precios m\u00e1s bajos',
    o_shipping: 'Env\u00edo m\u00e1s r\u00e1pido', o_shipping_d: 'Los tiempos de entrega m\u00e1s r\u00e1pidos',
    o_support: 'Mejor atenci\u00f3n al cliente', o_support_d: 'Gran soporte y m\u00e1s m\u00e9todos de pago',
    o_any: 'No me importa', o_any_d: 'Todos son buenos — muestra el resultado',
    q_payment: '\u00bfNecesitas un m\u00e9todo de pago espec\u00edfico?',
    q_payment_hint: 'Todos los vendedores aceptan tarjeta, Revolut, Wise, cripto y transferencia bancaria.',
    o_card: 'Tarjeta de cr\u00e9dito/d\u00e9bito', o_card_d: 'Aceptada por todos los vendedores',
    o_alipay: 'AliPay', o_alipay_d: 'Earhive y Jenny',
    o_regional: 'Regional (PIX, Afterpay, Blik, etc.)', o_regional_d: 'HiCity tiene m\u00e1s opciones regionales',
    o_payAny: 'No me importa', o_payAny_d: 'Cualquier m\u00e9todo de pago est\u00e1 bien',
    learnMore: 'M\u00e1s informaci\u00f3n', orderLink: 'M\u00e1s sobre opciones de pedido.',
    readyToBuy: '\u00bfListo para comprar?', ourPick: 'Nuestra Elecci\u00f3n',
    fromEarhive: 'en Earhive', orderViaKakoBuy: 'Pedir v\u00eda KakoBuy',
    viewWeidianLinks: 'Ver enlaces Weidian', orderFromAlibaba: 'Pedir en Earhive (Alibaba)',
    howToBuyGuide: 'Gu\u00eda de compra', orderFrom: 'Pedir en',
    allSellerLinks: 'Todos los enlaces', comparePayments: 'Comparar m\u00e9todos de pago',
    bestPrices: 'Mejores precios', fastestShipping: 'Env\u00edo m\u00e1s r\u00e1pido',
    bestSupport: 'Mejor soporte', orUseKakoBuy: 'O usa KakoBuy (agente)',
    allLinksWeidian: 'Todos los enlaces y Weidian',
    back: 'Atr\u00e1s', changeLastAnswer: 'Cambiar \u00faltima respuesta',
    weidianStore: 'Tienda Weidian (v\u00eda KakoBuy)',
    kakobuySignup: 'Reg\u00edstrate en KakoBuy — paquete de cupones incluido',
    startOver: 'Empezar de nuevo', step: 'Paso', of: 'de',
  },
  'pt-BR': {
    q_formFactor: 'Qual estilo voc\u00ea procura?',
    o_inEar: 'In-ear (ajuste vedado)', o_inEar_d: 'Como AirPods Pro — melhor isolamento e ANC',
    o_openFit: 'Aberto (sem veda\u00e7\u00e3o)', o_openFit_d: 'Como AirPods 4 — sensa\u00e7\u00e3o natural, menos isolamento',
    o_overEar: 'Fones over-ear', o_overEar_d: 'Como AirPods Max — premium, tamanho completo',
    q_device: 'Com qual dispositivo voc\u00ea vai usar principalmente?',
    o_iphone: 'iPhone / iPad', o_iphone_d: 'Apenas dispositivos iOS',
    o_mac: 'Mac (macOS)', o_mac_d: 'MacBook, iMac, Mac Mini, etc.',
    o_appleMix: 'V\u00e1rios dispositivos Apple', o_appleMix_d: 'iPhone + Mac, troca autom\u00e1tica',
    o_other: 'Windows / Android', o_other_d: 'Dispositivos n\u00e3o Apple',
    q_useCase: 'Qual ser\u00e1 seu uso principal?',
    o_commute: 'Viagens / transporte', o_commute_d: 'Modo transpar\u00eancia importante, ANC para transporte',
    o_gym: 'Academia / esportes', o_gym_d: '\u00c0 prova de suor, dur\u00e1vel',
    o_calls: 'Liga\u00e7\u00f5es / reuni\u00f5es', o_calls_d: 'Melhor qualidade de microfone importa',
    o_casual: 'Uso casual', o_casual_d: 'Uso di\u00e1rio geral',
    q_priority: 'O que \u00e9 mais importante para voc\u00ea?',
    o_anc: 'Melhor cancelamento de ru\u00eddo', o_anc_d: 'Bloquear o m\u00e1ximo de ru\u00eddo poss\u00edvel',
    o_features: 'Mais recursos', o_features_d: 'iCloud Connect, \u00e1udio adaptativo, \u00faltima tecnologia',
    o_stable: 'Mais est\u00e1vel e comprovado', o_stable_d: 'Confi\u00e1vel, bem testado, favorito da comunidade',
    o_latest: 'Mais recente e novo', o_latest_d: 'Design mais recente — visual do AirPods Pro 3',
    o_budget: 'Melhor custo-benef\u00edcio', o_budget_d: 'Boa qualidade sem gastar muito',
    q_sound: 'Que som voc\u00ea prefere?',
    o_bass: 'Graves potentes', o_bass_d: 'Baixos fortes, \u00f3timo para hip-hop/EDM',
    o_balanced: 'Equilibrado', o_balanced_d: 'Som uniforme, melhor modo transpar\u00eancia',
    q_ordering: 'Como voc\u00ea quer fazer o pedido?',
    q_ordering_hint: 'Agentes como KakoBuy permitem encomendar em lojas Weidian, consolidar envios e receber fotos QC antes do envio.',
    o_agent: 'Atrav\u00e9s de um agente (KakoBuy)', o_agent_d: 'Consolidar envios, fotos QC, mais op\u00e7\u00f5es',
    o_direct: 'Direto de um vendedor', o_direct_d: 'Pedir diretamente nos sites dos vendedores',
    o_alibaba: 'Via Alibaba', o_alibaba_d: 'Pedido f\u00e1cil, plataforma conhecida',
    o_unsure: 'Ainda n\u00e3o sei', o_unsure_d: 'Vou decidir depois',
    q_seller: 'O que \u00e9 mais importante em um vendedor?',
    o_price: 'Pre\u00e7os mais baratos', o_price_d: 'Os pre\u00e7os mais baixos',
    o_shipping: 'Envio mais r\u00e1pido', o_shipping_d: 'Os tempos de entrega mais r\u00e1pidos',
    o_support: 'Melhor suporte ao cliente', o_support_d: '\u00d3timo suporte e mais m\u00e9todos de pagamento',
    o_any: 'Tanto faz', o_any_d: 'Todos s\u00e3o bons — mostre o resultado',
    q_payment: 'Precisa de um m\u00e9todo de pagamento espec\u00edfico?',
    q_payment_hint: 'Todos os vendedores aceitam cart\u00e3o, Revolut, Wise, cripto e transfer\u00eancia banc\u00e1ria.',
    o_card: 'Cart\u00e3o de cr\u00e9dito/d\u00e9bito', o_card_d: 'Aceito por todos os vendedores',
    o_alipay: 'AliPay', o_alipay_d: 'Earhive e Jenny',
    o_regional: 'Regional (PIX, Afterpay, Blik, etc.)', o_regional_d: 'HiCity tem mais op\u00e7\u00f5es regionais',
    o_payAny: 'Tanto faz', o_payAny_d: 'Qualquer m\u00e9todo de pagamento serve',
    learnMore: 'Saiba mais', orderLink: 'Mais sobre op\u00e7\u00f5es de pedido.',
    readyToBuy: 'Pronto para comprar?', ourPick: 'Nossa Escolha',
    fromEarhive: 'na Earhive', orderViaKakoBuy: 'Pedir via KakoBuy',
    viewWeidianLinks: 'Ver links Weidian', orderFromAlibaba: 'Pedir na Earhive (Alibaba)',
    howToBuyGuide: 'Guia de compra', orderFrom: 'Pedir na',
    allSellerLinks: 'Todos os links', comparePayments: 'Comparar m\u00e9todos de pagamento',
    bestPrices: 'Melhores pre\u00e7os', fastestShipping: 'Envio mais r\u00e1pido',
    bestSupport: 'Melhor suporte', orUseKakoBuy: 'Ou use KakoBuy (agente)',
    allLinksWeidian: 'Todos os links e Weidian',
    back: 'Voltar', changeLastAnswer: 'Mudar \u00faltima resposta',
    weidianStore: 'Loja Weidian (via KakoBuy)',
    kakobuySignup: 'Cadastre-se no KakoBuy — pacote de cupons incluso',
    startOver: 'Recome\u00e7ar', step: 'Passo', of: 'de',
  },
  'da-DK': {
    q_formFactor: 'Hvilken stil leder du efter?',
    o_inEar: 'In-ear (forseglet)', o_inEar_d: 'Som AirPods Pro — bedste lydisolering og ANC',
    o_openFit: '\u00c5ben pasform (ingen forsegling)', o_openFit_d: 'Som AirPods 4 — naturlig f\u00f8lelse, mindre isolering',
    o_overEar: 'Over-ear hovedtelefoner', o_overEar_d: 'Som AirPods Max — premium, fuld st\u00f8rrelse',
    q_device: 'Hvad vil du prim\u00e6rt bruge dem med?',
    o_iphone: 'iPhone / iPad', o_iphone_d: 'Kun iOS-enheder',
    o_mac: 'Mac (macOS)', o_mac_d: 'MacBook, iMac, Mac Mini, etc.',
    o_appleMix: 'Flere Apple-enheder', o_appleMix_d: 'iPhone + Mac, problemfri skift',
    o_other: 'Windows / Android', o_other_d: 'Ikke-Apple enheder',
    q_useCase: 'Hvad vil du prim\u00e6rt bruge dem til?',
    o_commute: 'Pendling / rejser', o_commute_d: 'Transparency mode vigtigt, ANC til transport',
    o_gym: 'Fitness / sport', o_gym_d: 'Svedresistent, holdbar',
    o_calls: 'Telefonopkald / m\u00f8der', o_calls_d: 'Bedste mikrofonkvalitet er vigtigt',
    o_casual: 'Casual brug', o_casual_d: 'Daglig generel brug',
    q_priority: 'Hvad er vigtigst for dig?',
    o_anc: 'Bedste st\u00f8jreduktion', o_anc_d: 'Bloker s\u00e5 meget st\u00f8j som muligt',
    o_features: 'Flest funktioner', o_features_d: 'iCloud Connect, adaptiv lyd, nyeste teknologi',
    o_stable: 'Mest stabil og gennempr\u00f8vet', o_stable_d: 'P\u00e5lidelig, veltestet, f\u00e6llesskabets favorit',
    o_latest: 'Nyeste og seneste', o_latest_d: 'Nyeste design — AirPods Pro 3 look',
    o_budget: 'Bedste v\u00e6rdi', o_budget_d: 'God kvalitet uden at bruge for meget',
    q_sound: 'Hvilken lyd foretr\u00e6kker du?',
    o_bass: 'Bas-tung', o_bass_d: 'Kraftige basser, godt til hip-hop/EDM',
    o_balanced: 'Balanceret', o_balanced_d: 'J\u00e6vn lyd, bedste transparency mode',
    q_ordering: 'Hvordan vil du bestille?',
    q_ordering_hint: 'Agenter som KakoBuy lader dig bestille fra Weidian-butikker, konsolidere forsendelser og f\u00e5 QC-billeder f\u00f8r afsendelse.',
    o_agent: 'Gennem en agent (KakoBuy)', o_agent_d: 'Konsolider forsendelser, QC-billeder, flere muligheder',
    o_direct: 'Direkte fra en s\u00e6lger', o_direct_d: 'Bestil direkte fra s\u00e6lgers hjemmesider',
    o_alibaba: 'Via Alibaba', o_alibaba_d: 'Nem bestilling, kendt platform',
    o_unsure: 'Ikke sikker endnu', o_unsure_d: 'Jeg beslutter senere',
    q_seller: 'Hvad er vigtigst ved en s\u00e6lger?',
    o_price: 'Billigste priser', o_price_d: 'De laveste priser',
    o_shipping: 'Hurtigste forsendelse', o_shipping_d: 'De hurtigste leveringstider',
    o_support: 'Bedste kundesupport', o_support_d: 'God support og flest betalingsmuligheder',
    o_any: 'Ligegyldigt', o_any_d: 'De er alle gode — vis mig resultatet',
    q_payment: 'Har du brug for en bestemt betalingsmetode?',
    q_payment_hint: 'Alle s\u00e6lgere accepterer kreditkort, Revolut, Wise, krypto og bankoverf\u00f8rsel.',
    o_card: 'Kredit-/debetkort', o_card_d: 'Accepteret af alle s\u00e6lgere',
    o_alipay: 'AliPay', o_alipay_d: 'Earhive og Jenny',
    o_regional: 'Regional (PIX, Afterpay, Blik, etc.)', o_regional_d: 'HiCity har flest regionale muligheder',
    o_payAny: 'Ligegyldigt', o_payAny_d: 'Enhver betalingsmetode er fin',
    learnMore: 'L\u00e6s mere', orderLink: 'Mere om bestillingsmuligheder.',
    readyToBuy: 'Klar til at k\u00f8be?', ourPick: 'Vores Valg',
    fromEarhive: 'fra Earhive', orderViaKakoBuy: 'Bestil via KakoBuy',
    viewWeidianLinks: 'Se Weidian-links', orderFromAlibaba: 'Bestil fra Earhive (Alibaba)',
    howToBuyGuide: 'K\u00f8bsguide', orderFrom: 'Bestil fra',
    allSellerLinks: 'Alle s\u00e6lgerlinks', comparePayments: 'Sammenlign betalingsmetoder',
    bestPrices: 'Bedste priser', fastestShipping: 'Hurtigste forsendelse',
    bestSupport: 'Bedste support', orUseKakoBuy: 'Eller brug KakoBuy (agent)',
    allLinksWeidian: 'Alle links og Weidian',
    back: 'Tilbage', changeLastAnswer: '\u00c6ndr sidste svar',
    weidianStore: 'Weidian-butik (via KakoBuy)',
    kakobuySignup: 'Tilmeld dig KakoBuy — kuponpakke inkluderet',
    startOver: 'Start forfra', step: 'Trin', of: 'af',
  },
  'fr-FR': {
    q_formFactor: 'Quel style recherchez-vous ?',
    o_inEar: 'Intra-auriculaire (ajustement scell\u00e9)', o_inEar_d: "Comme les AirPods Pro — meilleur isolement et ANC",
    o_openFit: 'Ouvert (sans scellement)', o_openFit_d: 'Comme les AirPods 4 — sensation naturelle, moins d\'isolation',
    o_overEar: 'Casque circum-aural', o_overEar_d: 'Comme les AirPods Max — premium, taille compl\u00e8te',
    q_device: 'Avec quel appareil les utiliserez-vous principalement ?',
    o_iphone: 'iPhone / iPad', o_iphone_d: 'Appareils iOS uniquement',
    o_mac: 'Mac (macOS)', o_mac_d: 'MacBook, iMac, Mac Mini, etc.',
    o_appleMix: 'Plusieurs appareils Apple', o_appleMix_d: 'iPhone + Mac, commutation fluide',
    o_other: 'Windows / Android', o_other_d: 'Appareils non Apple',
    q_useCase: 'Quelle sera votre utilisation principale ?',
    o_commute: 'Trajet / voyage', o_commute_d: 'Mode transparence important, ANC pour les transports',
    o_gym: 'Sport / fitness', o_gym_d: 'R\u00e9sistant \u00e0 la transpiration, durable',
    o_calls: 'Appels / r\u00e9unions', o_calls_d: 'La meilleure qualit\u00e9 de micro compte',
    o_casual: '\u00c9coute casual', o_casual_d: 'Utilisation quotidienne g\u00e9n\u00e9rale',
    q_priority: "Qu'est-ce qui compte le plus pour vous ?",
    o_anc: 'Meilleure r\u00e9duction de bruit', o_anc_d: 'Bloquer le maximum de bruit',
    o_features: 'Plus de fonctionnalit\u00e9s', o_features_d: 'iCloud Connect, audio adaptatif, derni\u00e8re technologie',
    o_stable: 'Le plus stable et prouv\u00e9', o_stable_d: 'Fiable, bien test\u00e9, favori de la communaut\u00e9',
    o_latest: 'Le plus r\u00e9cent', o_latest_d: 'Design le plus r\u00e9cent — look AirPods Pro 3',
    o_budget: 'Meilleur rapport qualit\u00e9-prix', o_budget_d: 'Bonne qualit\u00e9 sans trop d\u00e9penser',
    q_sound: 'Quel son pr\u00e9f\u00e9rez-vous ?',
    o_bass: 'Basses puissantes', o_bass_d: 'Basses lourdes, id\u00e9al pour hip-hop/EDM',
    o_balanced: '\u00c9quilibr\u00e9', o_balanced_d: 'Son uniforme, meilleur mode transparence',
    q_ordering: 'Comment voulez-vous commander ?',
    q_ordering_hint: "Les agents comme KakoBuy vous permettent de commander dans les boutiques Weidian, consolider les envois et recevoir des photos QC avant l'exp\u00e9dition.",
    o_agent: 'Via un agent (KakoBuy)', o_agent_d: 'Consolider les envois, photos QC, plus d\'options',
    o_direct: 'Direct chez un vendeur', o_direct_d: 'Commander directement sur les sites des vendeurs',
    o_alibaba: 'Via Alibaba', o_alibaba_d: 'Commande facile, plateforme connue',
    o_unsure: 'Pas encore s\u00fbr', o_unsure_d: 'Je d\u00e9ciderai plus tard',
    q_seller: "Qu'est-ce qui compte le plus chez un vendeur ?",
    o_price: 'Prix les plus bas', o_price_d: 'Les prix les plus bas',
    o_shipping: 'Livraison la plus rapide', o_shipping_d: 'Les d\u00e9lais les plus courts',
    o_support: 'Meilleur support client', o_support_d: 'Excellent support et plus de m\u00e9thodes de paiement',
    o_any: 'Peu importe', o_any_d: 'Ils sont tous bons — montrez le r\u00e9sultat',
    q_payment: "Avez-vous besoin d'un mode de paiement sp\u00e9cifique ?",
    q_payment_hint: 'Tous les vendeurs acceptent CB, Revolut, Wise, crypto et virement bancaire.',
    o_card: 'Carte de cr\u00e9dit/d\u00e9bit', o_card_d: 'Accept\u00e9e par tous les vendeurs',
    o_alipay: 'AliPay', o_alipay_d: 'Earhive et Jenny',
    o_regional: 'R\u00e9gional (PIX, Afterpay, Blik, etc.)', o_regional_d: 'HiCity a le plus d\'options r\u00e9gionales',
    o_payAny: 'Peu importe', o_payAny_d: "N'importe quel moyen de paiement",
    learnMore: 'En savoir plus', orderLink: 'Plus sur les options de commande.',
    readyToBuy: 'Pr\u00eat \u00e0 acheter ?', ourPick: 'Notre Choix',
    fromEarhive: 'chez Earhive', orderViaKakoBuy: 'Commander via KakoBuy',
    viewWeidianLinks: 'Voir les liens Weidian', orderFromAlibaba: 'Commander chez Earhive (Alibaba)',
    howToBuyGuide: "Guide d'achat", orderFrom: 'Commander chez',
    allSellerLinks: 'Tous les liens', comparePayments: 'Comparer les m\u00e9thodes de paiement',
    bestPrices: 'Meilleurs prix', fastestShipping: 'Livraison la plus rapide',
    bestSupport: 'Meilleur support', orUseKakoBuy: 'Ou utilisez KakoBuy (agent)',
    allLinksWeidian: 'Tous les liens et Weidian',
    back: 'Retour', changeLastAnswer: 'Modifier la derni\u00e8re r\u00e9ponse',
    weidianStore: 'Boutique Weidian (via KakoBuy)',
    kakobuySignup: "S'inscrire sur KakoBuy — pack de coupons inclus",
    startOver: 'Recommencer', step: '\u00c9tape', of: 'sur',
  },
  'pl-PL': {
    q_formFactor: 'Jakiego stylu szukasz?',
    o_inEar: 'Dokana\u0142owe (zamkni\u0119te)', o_inEar_d: 'Jak AirPods Pro — najlepsza izolacja i ANC',
    o_openFit: 'Otwarte (bez uszczelnienia)', o_openFit_d: 'Jak AirPods 4 — naturalne uczucie, mniejsza izolacja',
    o_overEar: 'Nauszne', o_overEar_d: 'Jak AirPods Max — premium, pe\u0142nowymiarowe',
    q_device: 'Z jakim urz\u0105dzeniem b\u0119dziesz ich u\u017cywa\u0107?',
    o_iphone: 'iPhone / iPad', o_iphone_d: 'Tylko urz\u0105dzenia iOS',
    o_mac: 'Mac (macOS)', o_mac_d: 'MacBook, iMac, Mac Mini, itp.',
    o_appleMix: 'Wiele urz\u0105dze\u0144 Apple', o_appleMix_d: 'iPhone + Mac, p\u0142ynne prze\u0142\u0105czanie',
    o_other: 'Windows / Android', o_other_d: 'Urz\u0105dzenia inne ni\u017c Apple',
    q_useCase: 'Do czego b\u0119dziesz ich g\u0142\u00f3wnie u\u017cywa\u0107?',
    o_commute: 'Dojazdy / podr\u00f3\u017ce', o_commute_d: 'Tryb transparentno\u015bci wa\u017cny, ANC w transporcie',
    o_gym: 'Si\u0142ownia / sport', o_gym_d: 'Odporny na pot, wytrzyma\u0142y',
    o_calls: 'Rozmowy / spotkania', o_calls_d: 'Najlepsza jako\u015b\u0107 mikrofonu si\u0119 liczy',
    o_casual: 'Codzienne s\u0142uchanie', o_casual_d: 'Og\u00f3lne codzienne u\u017cytkowanie',
    q_priority: 'Co jest dla Ciebie najwa\u017cniejsze?',
    o_anc: 'Najlepsza redukcja szumu', o_anc_d: 'Zablokuj jak najwi\u0119cej ha\u0142asu',
    o_features: 'Najwi\u0119cej funkcji', o_features_d: 'iCloud Connect, adaptacyjny d\u017awi\u0119k, najnowsza technologia',
    o_stable: 'Najbardziej stabilny i sprawdzony', o_stable_d: 'Niezawodny, dobrze przetestowany, ulubieniec spo\u0142eczno\u015bci',
    o_latest: 'Najnowszy', o_latest_d: 'Najnowszy design — wygl\u0105d AirPods Pro 3',
    o_budget: 'Najlepszy stosunek jako\u015bci do ceny', o_budget_d: 'Dobra jako\u015b\u0107 bez du\u017cych wydatk\u00f3w',
    q_sound: 'Jaki d\u017awi\u0119k preferujesz?',
    o_bass: 'Basowy', o_bass_d: 'Mocne basy, \u015bwietne do hip-hop/EDM',
    o_balanced: 'Zbalansowany', o_balanced_d: 'R\u00f3wny d\u017awi\u0119k, najlepszy tryb transparentno\u015bci',
    q_ordering: 'Jak chcesz zam\u00f3wi\u0107?',
    q_ordering_hint: 'Agenci jak KakoBuy pozwalaj\u0105 zam\u00f3wi\u0107 ze sklep\u00f3w Weidian, konsolidowa\u0107 wysy\u0142ki i otrzyma\u0107 zdj\u0119cia QC przed wys\u0142aniem.',
    o_agent: 'Przez agenta (KakoBuy)', o_agent_d: 'Konsolidacja wysy\u0142ek, zdj\u0119cia QC, wi\u0119cej opcji',
    o_direct: 'Bezpo\u015brednio od sprzedawcy', o_direct_d: 'Zam\u00f3w bezpo\u015brednio na stronach sprzedawc\u00f3w',
    o_alibaba: 'Przez Alibab\u0119', o_alibaba_d: '\u0141atwe zamawianie, znana platforma',
    o_unsure: 'Jeszcze nie wiem', o_unsure_d: 'Zdecyduj\u0119 p\u00f3\u017aniej',
    q_seller: 'Co jest najwa\u017cniejsze u sprzedawcy?',
    o_price: 'Najni\u017csze ceny', o_price_d: 'Najni\u017csze ceny ze wszystkich',
    o_shipping: 'Najszybsza wysy\u0142ka', o_shipping_d: 'Najkr\u00f3tsze czasy dostawy',
    o_support: 'Najlepsze wsparcie klienta', o_support_d: '\u015awietne wsparcie i najwi\u0119cej metod p\u0142atno\u015bci',
    o_any: 'Nie ma znaczenia', o_any_d: 'Wszyscy s\u0105 dobrzy — poka\u017c wynik',
    q_payment: 'Potrzebujesz konkretnej metody p\u0142atno\u015bci?',
    q_payment_hint: 'Wszyscy sprzedawcy akceptuj\u0105 karty, Revolut, Wise, krypto i przelew bankowy.',
    o_card: 'Karta kredytowa/debetowa', o_card_d: 'Akceptowana przez wszystkich sprzedawc\u00f3w',
    o_alipay: 'AliPay', o_alipay_d: 'Earhive i Jenny',
    o_regional: 'Regionalne (PIX, Afterpay, Blik, itp.)', o_regional_d: 'HiCity ma najwi\u0119cej opcji regionalnych',
    o_payAny: 'Nie wa\u017cne', o_payAny_d: 'Ka\u017cda metoda p\u0142atno\u015bci jest ok',
    learnMore: 'Dowiedz si\u0119 wi\u0119cej', orderLink: 'Wi\u0119cej o opcjach zamawiania.',
    readyToBuy: 'Gotowy do zakupu?', ourPick: 'Nasz Wyb\u00f3r',
    fromEarhive: 'w Earhive', orderViaKakoBuy: 'Zam\u00f3w przez KakoBuy',
    viewWeidianLinks: 'Zobacz linki Weidian', orderFromAlibaba: 'Zam\u00f3w w Earhive (Alibaba)',
    howToBuyGuide: 'Poradnik zakupowy', orderFrom: 'Zam\u00f3w w',
    allSellerLinks: 'Wszystkie linki', comparePayments: 'Por\u00f3wnaj metody p\u0142atno\u015bci',
    bestPrices: 'Najlepsze ceny', fastestShipping: 'Najszybsza wysy\u0142ka',
    bestSupport: 'Najlepsze wsparcie', orUseKakoBuy: 'Lub u\u017cyj KakoBuy (agent)',
    allLinksWeidian: 'Wszystkie linki i Weidian',
    back: 'Wstecz', changeLastAnswer: 'Zmie\u0144 ostatni\u0105 odpowied\u017a',
    weidianStore: 'Sklep Weidian (przez KakoBuy)',
    kakobuySignup: 'Zarejestruj si\u0119 w KakoBuy — pakiet kupon\u00f3w w zestawie',
    startOver: 'Zacznij od nowa', step: 'Krok', of: 'z',
  },
  'ru-RU': {
    q_formFactor: '\u041a\u0430\u043a\u043e\u0439 \u0441\u0442\u0438\u043b\u044c \u0432\u044b \u0438\u0449\u0435\u0442\u0435?',
    o_inEar: '\u0412\u043d\u0443\u0442\u0440\u0438\u043a\u0430\u043d\u0430\u043b\u044c\u043d\u044b\u0435 (\u0433\u0435\u0440\u043c\u0435\u0442\u0438\u0447\u043d\u044b\u0435)', o_inEar_d: '\u041a\u0430\u043a AirPods Pro — \u043b\u0443\u0447\u0448\u0430\u044f \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044f \u0438 ANC',
    o_openFit: '\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0435 (\u0431\u0435\u0437 \u0443\u043f\u043b\u043e\u0442\u043d\u0435\u043d\u0438\u044f)', o_openFit_d: '\u041a\u0430\u043a AirPods 4 — \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0435, \u043c\u0435\u043d\u044c\u0448\u0435 \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438',
    o_overEar: '\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u0435 \u043d\u0430\u0443\u0448\u043d\u0438\u043a\u0438', o_overEar_d: '\u041a\u0430\u043a AirPods Max — \u043f\u0440\u0435\u043c\u0438\u0443\u043c, \u043f\u043e\u043b\u043d\u043e\u0440\u0430\u0437\u043c\u0435\u0440\u043d\u044b\u0435',
    q_device: '\u0421 \u043a\u0430\u043a\u0438\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e\u043c \u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0438\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c?',
    o_iphone: 'iPhone / iPad', o_iphone_d: '\u0422\u043e\u043b\u044c\u043a\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 iOS',
    o_mac: 'Mac (macOS)', o_mac_d: 'MacBook, iMac, Mac Mini \u0438 \u0442.\u0434.',
    o_appleMix: '\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 Apple', o_appleMix_d: 'iPhone + Mac, \u043f\u043b\u0430\u0432\u043d\u043e\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435',
    o_other: 'Windows / Android', o_other_d: '\u041d\u0435 Apple \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430',
    q_useCase: '\u041a\u0430\u043a \u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0438\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c?',
    o_commute: '\u041f\u043e\u0435\u0437\u0434\u043a\u0438 / \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442', o_commute_d: '\u0420\u0435\u0436\u0438\u043c \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u0438 \u0432\u0430\u0436\u0435\u043d, ANC \u0434\u043b\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430',
    o_gym: '\u0421\u043f\u043e\u0440\u0442\u0437\u0430\u043b / \u0441\u043f\u043e\u0440\u0442', o_gym_d: '\u0412\u043b\u0430\u0433\u043e\u0437\u0430\u0449\u0438\u0442\u0430, \u043f\u0440\u043e\u0447\u043d\u043e\u0441\u0442\u044c',
    o_calls: '\u0417\u0432\u043e\u043d\u043a\u0438 / \u0432\u0441\u0442\u0440\u0435\u0447\u0438', o_calls_d: '\u041b\u0443\u0447\u0448\u0435\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d\u0430 \u0432\u0430\u0436\u043d\u043e',
    o_casual: '\u041f\u043e\u0432\u0441\u0435\u0434\u043d\u0435\u0432\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u043b\u0443\u0448\u0438\u0432\u0430\u043d\u0438\u0435', o_casual_d: '\u041e\u0431\u0449\u0435\u0435 \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435',
    q_priority: '\u0427\u0442\u043e \u0434\u043b\u044f \u0432\u0430\u0441 \u0432\u0430\u0436\u043d\u0435\u0435 \u0432\u0441\u0435\u0433\u043e?',
    o_anc: '\u041b\u0443\u0447\u0448\u0435\u0435 \u0448\u0443\u043c\u043e\u043f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435', o_anc_d: '\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0448\u0443\u043c\u0430',
    o_features: '\u0411\u043e\u043b\u044c\u0448\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0439', o_features_d: 'iCloud Connect, \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0435 \u0430\u0443\u0434\u0438\u043e, \u043d\u043e\u0432\u0435\u0439\u0448\u0438\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438',
    o_stable: '\u0421\u0430\u043c\u044b\u0439 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0439', o_stable_d: '\u041d\u0430\u0434\u0451\u0436\u043d\u044b\u0439, \u0445\u043e\u0440\u043e\u0448\u043e \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439, \u0444\u0430\u0432\u043e\u0440\u0438\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430',
    o_latest: '\u041d\u043e\u0432\u0435\u0439\u0448\u0438\u0439', o_latest_d: '\u041d\u043e\u0432\u0435\u0439\u0448\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043d — \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434 AirPods Pro 3',
    o_budget: '\u041b\u0443\u0447\u0448\u0435\u0435 \u0441\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u0446\u0435\u043d\u0430/\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e', o_budget_d: '\u0425\u043e\u0440\u043e\u0448\u0435\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0435\u0437 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0437\u0430\u0442\u0440\u0430\u0442',
    q_sound: '\u041a\u0430\u043a\u043e\u0439 \u0437\u0432\u0443\u043a \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0435\u0442\u0435?',
    o_bass: '\u0411\u0430\u0441\u043e\u0432\u044b\u0439', o_bass_d: '\u041c\u043e\u0449\u043d\u044b\u0435 \u0431\u0430\u0441\u044b, \u043e\u0442\u043b\u0438\u0447\u043d\u043e \u0434\u043b\u044f \u0445\u0438\u043f-\u0445\u043e\u043f/EDM',
    o_balanced: '\u0421\u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439', o_balanced_d: '\u0420\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u044b\u0439 \u0437\u0432\u0443\u043a, \u043b\u0443\u0447\u0448\u0438\u0439 \u0440\u0435\u0436\u0438\u043c \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u0438',
    q_ordering: '\u041a\u0430\u043a \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c?',
    q_ordering_hint: '\u0410\u0433\u0435\u043d\u0442\u044b \u043a\u0430\u043a KakoBuy \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u0437 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u043e\u0432 Weidian, \u043a\u043e\u043d\u0441\u043e\u043b\u0438\u0434\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0444\u043e\u0442\u043e QC \u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439.',
    o_agent: '\u0427\u0435\u0440\u0435\u0437 \u0430\u0433\u0435\u043d\u0442\u0430 (KakoBuy)', o_agent_d: '\u041a\u043e\u043d\u0441\u043e\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043e\u043a, \u0444\u043e\u0442\u043e QC, \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432',
    o_direct: '\u041d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043e\u0442 \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u0430', o_direct_d: '\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430 \u0441\u0430\u0439\u0442\u0430\u0445 \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u043e\u0432',
    o_alibaba: '\u0427\u0435\u0440\u0435\u0437 Alibaba', o_alibaba_d: '\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0437\u0430\u043a\u0430\u0437, \u0437\u043d\u0430\u043a\u043e\u043c\u0430\u044f \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430',
    o_unsure: '\u0415\u0449\u0451 \u043d\u0435 \u0443\u0432\u0435\u0440\u0435\u043d', o_unsure_d: '\u0420\u0435\u0448\u0443 \u043f\u043e\u0437\u0436\u0435',
    q_seller: '\u0427\u0442\u043e \u0432\u0430\u0436\u043d\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u0432 \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u0435?',
    o_price: '\u0421\u0430\u043c\u044b\u0435 \u043d\u0438\u0437\u043a\u0438\u0435 \u0446\u0435\u043d\u044b', o_price_d: '\u0421\u0430\u043c\u044b\u0435 \u043d\u0438\u0437\u043a\u0438\u0435 \u0446\u0435\u043d\u044b \u0438\u0437 \u0432\u0441\u0435\u0445',
    o_shipping: '\u0411\u044b\u0441\u0442\u0440\u0435\u0439\u0448\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430', o_shipping_d: '\u0421\u0430\u043c\u044b\u0435 \u0431\u044b\u0441\u0442\u0440\u044b\u0435 \u0441\u0440\u043e\u043a\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438',
    o_support: '\u041b\u0443\u0447\u0448\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430', o_support_d: '\u041e\u0442\u043b\u0438\u0447\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0438 \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u043e\u043f\u043b\u0430\u0442\u044b',
    o_any: '\u041d\u0435 \u0432\u0430\u0436\u043d\u043e', o_any_d: '\u0412\u0441\u0435 \u0445\u043e\u0440\u043e\u0448\u0438 — \u043f\u043e\u043a\u0430\u0436\u0438\u0442\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442',
    q_payment: '\u041d\u0443\u0436\u0435\u043d \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b?',
    q_payment_hint: '\u0412\u0441\u0435 \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442 \u043a\u0430\u0440\u0442\u044b, Revolut, Wise, \u043a\u0440\u0438\u043f\u0442\u043e \u0438 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434.',
    o_card: '\u041a\u0440\u0435\u0434\u0438\u0442\u043d\u0430\u044f/\u0434\u0435\u0431\u0435\u0442\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430', o_card_d: '\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u0432\u0441\u0435\u043c\u0438 \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u0430\u043c\u0438',
    o_alipay: 'AliPay', o_alipay_d: 'Earhive \u0438 Jenny',
    o_regional: '\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 (PIX, Afterpay, Blik \u0438 \u0442.\u0434.)', o_regional_d: 'HiCity \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u043f\u0446\u0438\u0439',
    o_payAny: '\u041d\u0435 \u0432\u0430\u0436\u043d\u043e', o_payAny_d: '\u041b\u044e\u0431\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b',
    learnMore: '\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435', orderLink: '\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u0445 \u0437\u0430\u043a\u0430\u0437\u0430.',
    readyToBuy: '\u0413\u043e\u0442\u043e\u0432\u044b \u043a\u0443\u043f\u0438\u0442\u044c?', ourPick: '\u041d\u0430\u0448 \u0412\u044b\u0431\u043e\u0440',
    fromEarhive: '\u0432 Earhive', orderViaKakoBuy: '\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 KakoBuy',
    viewWeidianLinks: '\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0438 Weidian', orderFromAlibaba: '\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0432 Earhive (Alibaba)',
    howToBuyGuide: '\u0413\u0430\u0439\u0434 \u043f\u043e \u043f\u043e\u043a\u0443\u043f\u043a\u0435', orderFrom: '\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0432',
    allSellerLinks: '\u0412\u0441\u0435 \u0441\u0441\u044b\u043b\u043a\u0438', comparePayments: '\u0421\u0440\u0430\u0432\u043d\u0438\u0442\u044c \u0441\u043f\u043e\u0441\u043e\u0431\u044b \u043e\u043f\u043b\u0430\u0442\u044b',
    bestPrices: '\u041b\u0443\u0447\u0448\u0438\u0435 \u0446\u0435\u043d\u044b', fastestShipping: '\u0411\u044b\u0441\u0442\u0440\u0435\u0439\u0448\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430',
    bestSupport: '\u041b\u0443\u0447\u0448\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430', orUseKakoBuy: '\u0418\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 KakoBuy (\u0430\u0433\u0435\u043d\u0442)',
    allLinksWeidian: '\u0412\u0441\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0438 Weidian',
    back: '\u041d\u0430\u0437\u0430\u0434', changeLastAnswer: '\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043e\u0442\u0432\u0435\u0442',
    weidianStore: '\u041c\u0430\u0433\u0430\u0437\u0438\u043d Weidian (\u0447\u0435\u0440\u0435\u0437 KakoBuy)',
    kakobuySignup: '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0432 KakoBuy — \u043f\u0430\u043a\u0435\u0442 \u043a\u0443\u043f\u043e\u043d\u043e\u0432 \u0432\u043a\u043b\u044e\u0447\u0451\u043d',
    startOver: '\u041d\u0430\u0447\u0430\u0442\u044c \u0441\u043d\u0430\u0447\u0430\u043b\u0430', step: '\u0428\u0430\u0433', of: '\u0438\u0437',
  },
};

function t(key: string): string {
  const locale = i18n[lang.value] || i18n['en-US'];
  return locale[key] || i18n['en-US'][key] || key;
}

// --- Direct product links per seller ---
const productLinks: Record<string, { earhive: string; jenny: string; hicity: string }> = {
  'pro2-v5.4-huilian': { earhive: 'https://airreps.link/eprov54hl', jenny: 'https://airreps.link/jprov54hl', hicity: 'https://airreps.link/hcprov54hl' },
  'pro2-v5.3-tb': { earhive: 'https://airreps.link/eprov53tb', jenny: 'https://airreps.link/jprov53tb', hicity: 'https://airreps.link/hcprov53tb' },
  'pro2-v5.3-huilian': { earhive: 'https://airreps.link/eprov53hl', jenny: 'https://airreps.link/jprov53hl', hicity: 'https://airreps.link/hcprov53hl' },
  'pro2-v5.3-hr': { earhive: 'https://airreps.link/eprov53hr2', jenny: 'https://airreps.link/jprov53hr2', hicity: 'https://airreps.link/hcprov53hr2' },
  'pro2-v5.3-hrplus': { earhive: 'https://airreps.link/eprov53hrp', jenny: 'https://airreps.link/jprov53hrp', hicity: 'https://airreps.link/hcprov53hrp' },
  'pro3-v6-tb': { earhive: 'https://airreps.link/eprov6tb', jenny: 'https://airreps.link/jprov6tb', hicity: 'https://airreps.link/hcprov6tb' },
  'pro3-v6-huilian': { earhive: 'https://airreps.link/eprov6hl', jenny: 'https://airreps.link/jprov6hl', hicity: 'https://airreps.link/hcprov6hl' },
  'pro3-v5.5': { earhive: 'https://airreps.link/eprov55', jenny: 'https://airreps.link/jprov55', hicity: 'https://airreps.link/hcprov55' },
  'airpods4-v3-tb': { earhive: 'https://airreps.link/e4v3tb', jenny: 'https://airreps.link/j4v3tb', hicity: 'https://airreps.link/hc4v3tb' },
  'airpods4-v2-tb': { earhive: 'https://airreps.link/e4v2tb', jenny: 'https://airreps.link/j4v2tb', hicity: 'https://airreps.link/hc4v2tb' },
  'airpods4-v2-huilian': { earhive: 'https://airreps.link/e4v2hl', jenny: 'https://airreps.link/j4v2hl', hicity: 'https://airreps.link/hc4v2hl' },
  'max-v3-tb': { earhive: 'https://airreps.link/emaxv3tb', jenny: 'https://airreps.link/jmaxv3tb', hicity: 'https://airreps.link/hcmaxv3tb' },
  'max-v3p-tb': { earhive: 'https://airreps.link/emaxv3p', jenny: 'https://airreps.link/jmaxv3p', hicity: 'https://airreps.link/hcmaxv3p' },
};

// --- Pricing data (from earhive.com/store) ---
const prices: Record<string, number> = {
  'pro2-v5.4-huilian': 58,
  'pro2-v5.3-tb': 55,
  'pro2-v5.3-huilian': 56,
  'pro2-v5.3-hr': 50,
  'pro2-v5.3-hrplus': 58,
  'pro3-v6-tb': 37,
  'pro3-v6-huilian': 43,
  'pro3-v5.5': 27,
  'airpods4-v3-tb': 52,
  'airpods4-v2-huilian': 39,
  'airpods4-v2-tb': 29,
  'max-v3-tb': 126,
  'max-v3p-tb': 93,
  'gen2-v3e': 26,
  'airpods3-v1e': 30,
};

// --- Seller data ---
const sellers = {
  earhive: {
    name: 'Earhive',
    url: 'https://earhive.com',
    weidian: 'https://airreps.link/earhivew',
    strength: 'Best prices',
    payments: ['Credit Card', 'AliPay', 'Revolut', 'Wise', 'Cash App', 'Bitcoin/Crypto', 'Bank Transfer', 'Alibaba'],
  },
  jenny: {
    name: 'Jenny',
    url: 'https://jenny.airreps.info',
    weidian: 'https://airreps.link/jennyw',
    strength: 'Fastest shipping',
    payments: ['Credit Card', 'AliPay', 'Revolut', 'Wise', 'Cash App', 'Bitcoin/Crypto', 'Bank Transfer'],
  },
  hicity: {
    name: 'HiCity',
    url: 'https://hicitypods.com',
    weidian: 'https://airreps.link/hicityw',
    strength: 'Best support & most payment options',
    payments: ['Credit Card', 'Revolut', 'Wise', 'Cash App', 'Bitcoin/Crypto', 'Bank Transfer', 'Skrill', 'Trustly', 'Afterpay', 'PIX', 'Boleto', 'Mercado Pago', 'Blik', 'PayU', 'Bancontact', 'EPS', 'MBWAY', 'Multibanco', 'Swish', 'Zip', 'Satispay'],
  },
};

// Payment methods that are unique to specific sellers
const regionalPayments = [
  { value: 'alipay', label: 'AliPay', sellers: ['earhive', 'jenny'] },
  { value: 'afterpay', label: 'Afterpay / Zip', sellers: ['hicity'] },
  { value: 'pix', label: 'PIX / Boleto / Mercado Pago', sellers: ['hicity'] },
  { value: 'blik', label: 'Blik / PayU', sellers: ['hicity'] },
  { value: 'bancontact', label: 'Bancontact / EPS', sellers: ['hicity'] },
  { value: 'mbway', label: 'MBWAY / Multibanco', sellers: ['hicity'] },
  { value: 'swish', label: 'Swish', sellers: ['hicity'] },
  { value: 'skrill', label: 'Skrill / Trustly', sellers: ['hicity'] },
];

// --- State ---
const currentStep = ref(0);
const answers = ref<Record<string, string>>({});

// --- Dynamic questions ---
interface QuizOption {
  value: string;
  label: string;
  desc: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  hint?: string;
  options: QuizOption[];
}

const activeQuestions = computed<QuizQuestion[]>(() => {
  const qs: QuizQuestion[] = [
    {
      id: 'formFactor',
      question: t('q_formFactor'),
      options: [
        { value: 'in-ear', label: t('o_inEar'), desc: t('o_inEar_d') },
        { value: 'open-fit', label: t('o_openFit'), desc: t('o_openFit_d') },
        { value: 'over-ear', label: t('o_overEar'), desc: t('o_overEar_d') },
      ],
    },
    {
      id: 'device',
      question: t('q_device'),
      options: [
        { value: 'iphone', label: t('o_iphone'), desc: t('o_iphone_d') },
        { value: 'mac', label: t('o_mac'), desc: t('o_mac_d') },
        { value: 'apple-mix', label: t('o_appleMix'), desc: t('o_appleMix_d') },
        { value: 'other', label: t('o_other'), desc: t('o_other_d') },
      ],
    },
  ];

  // Use case question — only for in-ear
  if (answers.value.formFactor === 'in-ear') {
    qs.push({
      id: 'useCase',
      question: t('q_useCase'),
      options: [
        { value: 'commute', label: t('o_commute'), desc: t('o_commute_d') },
        { value: 'gym', label: t('o_gym'), desc: t('o_gym_d') },
        { value: 'calls', label: t('o_calls'), desc: t('o_calls_d') },
        { value: 'casual', label: t('o_casual'), desc: t('o_casual_d') },
      ],
    });
  }

  // Priority question
  qs.push({
    id: 'priority',
    question: t('q_priority'),
    options: [
      { value: 'anc', label: t('o_anc'), desc: t('o_anc_d') },
      { value: 'features', label: t('o_features'), desc: t('o_features_d') },
      { value: 'stable', label: t('o_stable'), desc: t('o_stable_d') },
      { value: 'latest', label: t('o_latest'), desc: t('o_latest_d') },
      { value: 'budget', label: t('o_budget'), desc: t('o_budget_d') },
    ],
  });

  // Sound preference question — only for in-ear, non-Mac, when priority is anc/stable, and useCase is not calls
  if (
    answers.value.formFactor === 'in-ear' &&
    !needsMac.value &&
    (answers.value.priority === 'anc' || answers.value.priority === 'stable') &&
    answers.value.useCase !== 'calls'
  ) {
    qs.push({
      id: 'sound',
      question: t('q_sound'),
      options: [
        { value: 'bass', label: t('o_bass'), desc: t('o_bass_d') },
        { value: 'balanced', label: t('o_balanced'), desc: t('o_balanced_d') },
      ],
    });
  }

  // Ordering question
  qs.push({
    id: 'ordering',
    question: t('q_ordering'),
    hint: t('q_ordering_hint'),
    options: [
      { value: 'agent', label: t('o_agent'), desc: t('o_agent_d') },
      { value: 'direct', label: t('o_direct'), desc: t('o_direct_d') },
      { value: 'alibaba', label: t('o_alibaba'), desc: t('o_alibaba_d') },
      { value: 'unsure', label: t('o_unsure'), desc: t('o_unsure_d') },
    ],
  });

  // Both agent and direct need a seller recommendation
  if (answers.value.ordering === 'agent' || answers.value.ordering === 'direct') {
    qs.push({
      id: 'sellerPriority',
      question: t('q_seller'),
      options: [
        { value: 'shipping', label: t('o_shipping'), desc: t('o_shipping_d') },
        { value: 'support', label: t('o_support'), desc: t('o_support_d') },
        { value: 'price', label: t('o_price'), desc: t('o_price_d') },
        { value: 'any', label: t('o_any'), desc: t('o_any_d') },
      ],
    });

    // Only ask payment for direct orders when seller isn't already clear
    if (answers.value.ordering === 'direct' && (answers.value.sellerPriority === 'support' || answers.value.sellerPriority === 'any')) {
      qs.push({
        id: 'payment',
        question: t('q_payment'),
        hint: t('q_payment_hint'),
        options: [
          { value: 'card', label: t('o_card'), desc: t('o_card_d') },
          { value: 'alipay', label: t('o_alipay'), desc: t('o_alipay_d') },
          { value: 'regional', label: t('o_regional'), desc: t('o_regional_d') },
          { value: 'any', label: t('o_payAny'), desc: t('o_payAny_d') },
        ],
      });
    }
  }

  return qs;
});

const needsMac = computed(
  () => answers.value.device === 'mac' || answers.value.device === 'apple-mix'
);

const isDone = computed(() => currentStep.value >= activeQuestions.value.length);

// Fair rotation — rotates daily so no single seller is always first/default
const dayIndex = new Date().getDate() % 3;
const sellerOrder = [
  { key: 'earhive', seller: sellers.earhive, labelKey: 'bestPrices' },
  { key: 'jenny', seller: sellers.jenny, labelKey: 'fastestShipping' },
  { key: 'hicity', seller: sellers.hicity, labelKey: 'bestSupport' },
];
const rotatedSellers = [...sellerOrder.slice(dayIndex), ...sellerOrder.slice(0, dayIndex)];
const rotatedDefault = rotatedSellers[0].seller;

// --- Seller recommendation ---
const recommendedSeller = computed(() => {
  const { ordering, sellerPriority, payment } = answers.value;

  if (ordering === 'alibaba') return sellers.earhive;

  if (ordering === 'agent' || ordering === 'direct') {
    if (sellerPriority === 'price') return sellers.earhive;
    if (sellerPriority === 'shipping') return sellers.jenny;
    if (sellerPriority === 'support') {
      if (payment === 'alipay') return sellers.jenny;
      return sellers.hicity;
    }
    // sellerPriority === 'any' — fair rotation
    if (payment === 'alipay') return sellers.earhive;
    if (payment === 'regional') return sellers.hicity;
    return rotatedDefault;
  }

  return null; // unsure
});

// --- Product recommendation ---
interface ProductRec {
  title: string;
  subtitle: string;
  priceKey: string;
  reasons: string[];
  links: { text: string; url: string }[];
}

const product = computed<ProductRec | null>(() => {
  if (!isDone.value) return null;
  const { formFactor, priority, useCase, sound } = answers.value;

  if (formFactor === 'over-ear') {
    if (priority === 'budget') {
      return {
        title: 'AirPods Max V3P TB',
        subtitle: 'Airoha 1561M — Budget over-ear with plastic build',
        priceKey: 'max-v3p-tb',
        reasons: [
          'Solid ANC with spatial audio & head tracking',
          'Plastic ear cups and headband keep the price down',
          'Same core audio experience as V3 at a lower cost',
        ],
        links: [
          { text: 'AirPods Max Version Info', url: '/version-info/airpods-max' },
          { text: 'Build Quality', url: '/introduction/build-quality' },
        ],
      };
    }
    return {
      title: 'AirPods Max V3',
      subtitle: 'Airoha 1562AE — Premium over-ear pick',
      priceKey: 'max-v3-tb',
      reasons: [
        'Metal ear cups and headband — premium build quality',
        'Upgraded hybrid ANC with spatial audio & head tracking',
        '~50 hours battery life',
        needsMac.value ? 'Works with macOS — check the volume slider fix in troubleshooting' : 'Great with all devices',
      ],
      links: [
        { text: 'AirPods Max Version Info', url: '/version-info/airpods-max' },
        { text: 'ANC Explained', url: '/introduction/anc-explained' },
        ...(needsMac.value ? [{ text: 'macOS Volume Fix', url: '/troubleshooting/macOS-volume-slider-fixup' }] : []),
      ],
    };
  }

  if (formFactor === 'open-fit') {
    if (priority === 'budget') {
      return {
        title: 'AirPods 4 V2 TB',
        subtitle: 'Budget open-fit — solid basics',
        priceKey: 'airpods4-v2-tb',
        reasons: [
          'Cheapest AirPods 4 option at just $' + prices['airpods4-v2-tb'],
          'Good entry point for the open-fit form factor',
          needsMac.value ? 'Consider V2 Huilian ($' + prices['airpods4-v2-huilian'] + ') for better Mac support' : 'Great starter pick',
        ],
        links: [
          { text: 'AirPods 4 Version Info', url: '/version-info/airpods-4' },
          { text: 'Features Overview', url: '/introduction/features' },
        ],
      };
    }
    const variant = needsMac.value ? 'Huilian' : 'TB';
    return {
      title: `AirPods 4 V3 ${variant}`,
      subtitle: needsMac.value ? 'Huilian 247 — Best open-fit for Mac users' : 'Airoha 1571AM — Best open-fit overall',
      priceKey: 'airpods4-v3-tb',
      reasons: [
        'USB-C, ANC, transparency mode, spatial audio with head tracking',
        '8h battery without ANC, 6h with ANC',
        needsMac.value ? 'Huilian variant — iCloud switching works on macOS' : 'TB variant offers the strongest ANC performance',
        'Force touch controls, volume swipe',
      ],
      links: [
        { text: 'AirPods 4 Version Info', url: '/version-info/airpods-4' },
        { text: 'Features Overview', url: '/introduction/features' },
        ...(needsMac.value ? [{ text: 'macOS Volume Fix', url: '/troubleshooting/macOS-volume-slider-fixup' }] : []),
      ],
    };
  }

  // --- In-ear logic ---

  // In-ear: latest -> Pro 3 V6
  if (priority === 'latest') {
    const variant = needsMac.value ? 'Huilian' : 'TB';
    const key = needsMac.value ? 'pro3-v6-huilian' : 'pro3-v6-tb';
    return {
      title: `AirPods Pro 3 V6 ${variant}`,
      subtitle: needsMac.value
        ? 'Huilian 247 — Newest design with iCloud Connect & Live Translation'
        : 'Airoha 1563E — Newest AirPods Pro design',
      priceKey: key,
      reasons: [
        'Newest AirPods Pro 3 form factor — the latest design from Apple replicated',
        'Good ANC, spatial audio, iOS 26 support',
        needsMac.value
          ? 'Huilian variant includes iCloud Connect and Live Translation'
          : 'TB variant for solid ANC performance',
        'Starting at just $' + prices[key],
      ],
      links: [
        { text: 'AirPods Pro 3 Version Info', url: '/version-info/airpods-pro-3' },
        { text: 'AirPods Pro 2 Version Info', url: '/version-info/airpods-pro-2' },
        { text: 'Features Overview', url: '/introduction/features' },
        { text: 'Battery Life', url: '/introduction/battery-life' },
      ],
    };
  }

  // In-ear: calls use case overrides only for ANC/features priority — stable/budget/latest respect the priority
  if (useCase === 'calls' && (priority === 'anc' || priority === 'features')) {
    return {
      title: 'AirPods Pro 2 V5.3 HR+',
      subtitle: 'Sealed construction, isolated mic design — best call quality',
      priceKey: 'pro2-v5.3-hrplus',
      reasons: [
        'Sealed construction with isolated mic design — best call quality on any rep',
        '34.5 dB ANC — top-tier noise cancelling',
        '7.5h battery without ANC, 5.5h with ANC',
        'Premium build for professional use',
      ],
      links: [
        { text: 'AirPods Pro 2 Version Info', url: '/version-info/airpods-pro-2' },
        { text: 'ANC Explained', url: '/introduction/anc-explained' },
        { text: 'Battery Life', url: '/introduction/battery-life' },
      ],
    };
  }

  // In-ear: Mac users
  if (needsMac.value) {
    if (priority === 'features') {
      return {
        title: 'AirPods Pro 2 V5.4 Huilian',
        subtitle: 'Huilian 377 — Most feature-complete for Apple ecosystem',
        priceKey: 'pro2-v5.4-huilian',
        reasons: [
          'iCloud Connect, adaptive audio, conversation awareness, OTA updates',
          'Almost 1:1 hinge, improved ANC',
          'Works seamlessly with macOS — iCloud device switching',
          'The newest and most feature-packed Pro 2 variant',
        ],
        links: [
          { text: 'AirPods Pro 2 Version Info', url: '/version-info/airpods-pro-2' },
          { text: 'Connectivity Details', url: '/introduction/connectivity' },
          { text: 'Features Overview', url: '/introduction/features' },
          { text: 'Battery Life', url: '/introduction/battery-life' },
        ],
      };
    }
    if (priority === 'budget') {
      return {
        title: 'AirPods Pro 3 V6 Huilian',
        subtitle: 'Best value in-ear for Mac users with iCloud Connect',
        priceKey: 'pro3-v6-huilian',
        reasons: [
          'Newest Pro form factor with Huilian chip for Mac compatibility',
          'iCloud Connect & Live Translation at just $' + prices['pro3-v6-huilian'],
          'Good ANC, spatial audio, iOS 26 support',
          'Also consider: AirPods 2 V3E ($' + prices['gen2-v3e'] + ') for ultra-budget',
        ],
        links: [
          { text: 'AirPods Pro 3 Version Info', url: '/version-info/airpods-pro-3' },
          { text: 'AirPods Pro 2 Version Info', url: '/version-info/airpods-pro-2' },
          { text: 'Build Quality', url: '/introduction/build-quality' },
          { text: 'Battery Life', url: '/introduction/battery-life' },
        ],
      };
    }
    // Mac ANC/stable
    return {
      title: 'AirPods Pro 2 V5.3 Huilian',
      subtitle: 'Huilian 277 — Best in-ear for Mac users',
      priceKey: 'pro2-v5.3-huilian',
      reasons: [
        'Flawless macOS support — iCloud switching, proper volume control',
        '1:1 hinge quality, solid build',
        'ANC at 30-32 dB — good (TB has stronger ANC but lacks Mac support)',
        '6h battery without ANC, 4.5h with ANC',
      ],
      links: [
        { text: 'AirPods Pro 2 Version Info', url: '/version-info/airpods-pro-2' },
        { text: 'macOS Volume Fix (for non-Huilian)', url: '/troubleshooting/macOS-volume-slider-fixup' },
        { text: 'ANC Explained', url: '/introduction/anc-explained' },
        { text: 'Battery Life', url: '/introduction/battery-life' },
      ],
    };
  }

  // Non-Mac in-ear
  if (priority === 'anc' || priority === 'stable') {
    // Sound-based or use-case-based branching
    if (sound === 'balanced' || useCase === 'commute') {
      return {
        title: 'AirPods Pro 2 V5.3 HR',
        subtitle: 'Balanced sound, best transparency mode — ideal for commuters',
        priceKey: 'pro2-v5.3-hr',
        reasons: [
          'Balanced, even sound signature — great for all genres',
          'Best transparency mode of any rep — hear your surroundings clearly',
          '34.4 dB ANC — excellent noise cancelling',
          '7.5h battery without ANC, 5.5h with ANC',
        ],
        links: [
          { text: 'AirPods Pro 2 Version Info', url: '/version-info/airpods-pro-2' },
          { text: 'ANC Explained', url: '/introduction/anc-explained' },
          { text: 'Battery Life', url: '/introduction/battery-life' },
          { text: 'Sound Quality', url: '/introduction/sound-quality' },
        ],
      };
    }
    // bass, gym, or default (no sound question shown)
    return {
      title: 'AirPods Pro 2 V5.3 TB',
      subtitle: 'Airoha 1571AM — Community favorite, best ANC',
      priceKey: 'pro2-v5.3-tb',
      reasons: [
        'Highest ANC: 34.5 dB average, 41 dB peak — best on any rep',
        '8h battery without ANC, 6h with ANC — longest in the Pro 2 lineup',
        'Sweatproof white case, excellent spatial audio with ST gyroscope',
        'The most tried-and-tested version — proven stability',
        ...(useCase === 'gym' ? ['Sweatproof design, durable build — great for workouts'] : []),
      ],
      links: [
        { text: 'AirPods Pro 2 Version Info', url: '/version-info/airpods-pro-2' },
        { text: 'ANC Explained', url: '/introduction/anc-explained' },
        { text: 'Battery Life', url: '/introduction/battery-life' },
      ],
    };
  }

  if (priority === 'features') {
    return {
      title: 'AirPods Pro 2 V5.4 Huilian',
      subtitle: 'Huilian 377 — Maximum features',
      priceKey: 'pro2-v5.4-huilian',
      reasons: [
        'iCloud Connect, adaptive audio, conversation awareness, OTA updates',
        'Almost 1:1 hinge, improved ANC over older Huilian',
        'The newest Pro 2 variant with the most features',
        'Closest-to-retail experience available',
      ],
      links: [
        { text: 'AirPods Pro 2 Version Info', url: '/version-info/airpods-pro-2' },
        { text: 'Features Overview', url: '/introduction/features' },
        { text: 'Connectivity Details', url: '/introduction/connectivity' },
        { text: 'Battery Life', url: '/introduction/battery-life' },
      ],
    };
  }

  // Budget non-Mac in-ear
  return {
    title: 'AirPods Pro 3 V6 TB',
    subtitle: 'Best value in-ear pick',
    priceKey: 'pro3-v6-tb',
    reasons: [
      'Newest Pro form factor at just $' + prices['pro3-v6-tb'],
      'Good ANC, spatial audio, iOS 26 support',
      'Also consider: AirPods 2 V3E ($' + prices['gen2-v3e'] + ') for ultra-budget',
    ],
    links: [
      { text: 'AirPods Pro 3 Version Info', url: '/version-info/airpods-pro-3' },
      { text: 'AirPods Pro 2 Version Info', url: '/version-info/airpods-pro-2' },
      { text: 'Sound Quality', url: '/introduction/sound-quality' },
      { text: 'Build Quality', url: '/introduction/build-quality' },
      { text: 'Battery Life', url: '/introduction/battery-life' },
    ],
  };
});

// Get direct product link for the recommended seller
const directProductLink = computed(() => {
  if (!product.value || !recommendedSeller.value) return null;
  const sellerKey = Object.keys(sellers).find(k => sellers[k as keyof typeof sellers] === recommendedSeller.value) as keyof typeof sellers | undefined;
  if (!sellerKey) return null;
  const links = productLinks[product.value.priceKey];
  if (!links) return null;
  return links[sellerKey] || null;
});

function productToLinksPage(): string {
  const ff = answers.value.formFactor;
  if (ff === 'over-ear') return 'airpods-max';
  if (ff === 'open-fit') return 'airpods-4';
  // in-ear: check which product was recommended
  if (product.value?.title.includes('Pro 3')) return 'airpods-pro-3';
  return 'airpods-pro-2';
}

function selectOption(questionId: string, value: string) {
  answers.value[questionId] = value;
  currentStep.value++;
}

function goBack() {
  if (currentStep.value > 0) {
    currentStep.value--;
    // Remove this answer and any answers from questions that may no longer exist
    const removedId = activeQuestions.value[currentStep.value]?.id;
    if (removedId) delete answers.value[removedId];
    // Also clean up any orphaned answers from dynamic questions
    const validIds = new Set(activeQuestions.value.map(q => q.id));
    for (const key of Object.keys(answers.value)) {
      if (!validIds.has(key)) delete answers.value[key];
    }
  }
}

function restart() {
  currentStep.value = 0;
  answers.value = {};
}
</script>

<template>
  <div class="quiz-container">
    <!-- Progress bar -->
    <div class="quiz-progress">
      <div
        class="quiz-progress-bar"
        :style="{ width: isDone ? '100%' : `${(currentStep / activeQuestions.length) * 100}%` }"
      />
    </div>
    <div v-if="!isDone" class="quiz-step-count">
      {{ t('step') }} {{ currentStep + 1 }}
    </div>

    <!-- Question -->
    <div v-if="!isDone" class="quiz-question">
      <h3>{{ activeQuestions[currentStep].question }}</h3>
      <p v-if="activeQuestions[currentStep].hint" class="quiz-hint">
        {{ activeQuestions[currentStep].hint }}
        <a href="/ordering/how-to-buy">{{ t('orderLink') }}</a>
      </p>
      <div class="quiz-options">
        <button
          v-for="option in activeQuestions[currentStep].options"
          :key="option.value"
          class="quiz-option"
          @click="selectOption(activeQuestions[currentStep].id, option.value)"
        >
          <span class="quiz-option-label">{{ option.label }}</span>
          <span class="quiz-option-desc">{{ option.desc }}</span>
        </button>
      </div>
      <button v-if="currentStep > 0" class="quiz-back" @click="goBack">&larr; {{ t('back') }}</button>
    </div>

    <!-- Result -->
    <div v-else-if="product" class="quiz-result">
      <div class="quiz-result-header">
        <span class="quiz-result-badge">{{ t('ourPick') }}</span>
        <h3>{{ product.title }}</h3>
        <p class="quiz-result-subtitle">{{ product.subtitle }}</p>
        <div v-if="prices[product.priceKey]" class="quiz-result-price">
          ~${{ prices[product.priceKey] }}
        </div>
      </div>

      <ul class="quiz-reasons">
        <li v-for="(reason, i) in product.reasons" :key="i">{{ reason }}</li>
      </ul>

      <div class="quiz-result-links">
        <h4>{{ t('learnMore') }}</h4>
        <div class="quiz-link-list">
          <a v-for="link in product.links" :key="link.url" :href="link.url" class="quiz-link">
            {{ link.text }} &rarr;
          </a>
        </div>
      </div>

      <div class="quiz-result-buy">
        <h4>{{ t('readyToBuy') }}</h4>

        <!-- Agent ordering with recommended seller -->
        <div v-if="answers.ordering === 'agent' && recommendedSeller" class="quiz-buy-list">
          <a :href="recommendedSeller.weidian" target="_blank" rel="noopener noreferrer" class="quiz-buy-link primary">
            {{ recommendedSeller.name }} {{ t('weidianStore') }}
          </a>
          <p class="quiz-seller-note">{{ recommendedSeller.strength }}</p>
          <a href="https://airreps.link/kakobuy" target="_blank" rel="noopener noreferrer" class="quiz-buy-link kakobuy">
            {{ t('kakobuySignup') }}
          </a>
          <a :href="`/links/${productToLinksPage()}`" class="quiz-buy-link secondary">
            {{ t('allSellerLinks') }} &rarr;
          </a>
        </div>

        <!-- Alibaba -->

        <!-- Alibaba -->
        <div v-else-if="answers.ordering === 'alibaba'" class="quiz-buy-list">
          <a href="https://earhive.com" target="_blank" rel="noopener noreferrer" class="quiz-buy-link primary">
            {{ t('orderFromAlibaba') }}
          </a>
          <a href="/ordering/how-to-buy" class="quiz-buy-link secondary">
            {{ t('howToBuyGuide') }} &rarr;
          </a>
        </div>

        <!-- Direct seller recommended -->
        <div v-else-if="recommendedSeller" class="quiz-buy-list">
          <a :href="directProductLink || recommendedSeller.url" target="_blank" rel="noopener noreferrer" class="quiz-buy-link primary">
            {{ t('orderFrom') }} {{ recommendedSeller.name }}
          </a>
          <p class="quiz-seller-note">{{ recommendedSeller.strength }}</p>
          <a :href="`/links/${productToLinksPage()}`" class="quiz-buy-link secondary">
            {{ t('allSellerLinks') }} &rarr;
          </a>
          <a href="/links/info" class="quiz-buy-link secondary">
            {{ t('comparePayments') }} &rarr;
          </a>
        </div>

        <!-- Unsure / fallback — seller order rotates daily for fairness -->
        <div v-else class="quiz-buy-list">
          <a
            v-for="s in rotatedSellers"
            :key="s.key"
            :href="s.seller.url"
            target="_blank"
            rel="noopener noreferrer"
            class="quiz-buy-link primary"
          >
            {{ s.seller.name }} — {{ t(s.labelKey) }}
          </a>
          <a href="https://airreps.link/kakobuy" target="_blank" rel="noopener noreferrer" class="quiz-buy-link kakobuy">
            {{ t('kakobuySignup') }}
          </a>
          <a :href="`/links/${productToLinksPage()}`" class="quiz-buy-link secondary">
            {{ t('allLinksWeidian') }} &rarr;
          </a>
        </div>
      </div>

      <div class="quiz-actions">
        <button class="quiz-back" @click="goBack">&larr; {{ t('changeLastAnswer') }}</button>
        <button class="quiz-restart" @click="restart">{{ t('startOver') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quiz-container {
  max-width: 640px;
  margin: 1.5rem 0;
}

.quiz-progress {
  height: 4px;
  background: var(--vp-c-divider);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.quiz-progress-bar {
  height: 100%;
  background: var(--vp-c-brand-1);
  transition: width 0.3s ease;
}

.quiz-step-count {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-bottom: 1.5rem;
}

.quiz-question h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.quiz-hint {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.quiz-hint a {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}

.quiz-option {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
  text-align: left;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  -webkit-tap-highlight-color: transparent;
}

@media (hover: hover) {
  .quiz-option:hover {
    border-color: var(--vp-c-brand-1);
    background: var(--vp-c-bg-mute);
  }
}

.quiz-option-label {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}

.quiz-option-desc {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-top: 0.2rem;
}

.quiz-back,
.quiz-restart {
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-family: inherit;
  transition: border-color 0.2s, color 0.2s;
}

.quiz-back:hover,
.quiz-restart:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
}

.quiz-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.quiz-result-header {
  margin-bottom: 1.25rem;
}

.quiz-result-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-brand-1);
  background: rgba(236, 100, 93, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.quiz-result-header h3 {
  font-size: 1.5rem;
  margin: 0.4rem 0 0.25rem;
}

.quiz-result-subtitle {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.quiz-result-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-top: 0.4rem;
}

.quiz-price-note {
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--vp-c-text-3);
  margin-left: 0.25rem;
}

.quiz-reasons {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
}

.quiz-reasons li {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.quiz-reasons li::before {
  content: '\2713';
  position: absolute;
  left: 0;
  color: var(--vp-c-brand-1);
  font-weight: 700;
}

.quiz-result-links,
.quiz-result-buy {
  margin-bottom: 1.25rem;
}

.quiz-result-links h4,
.quiz-result-buy h4 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-3);
  margin-bottom: 0.5rem;
}

.quiz-link-list,
.quiz-buy-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.quiz-link {
  font-size: 0.9rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: opacity 0.2s;
}

.quiz-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.quiz-buy-link {
  display: inline-block;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: opacity 0.2s;
}

.quiz-buy-link.primary {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.quiz-buy-link.kakobuy {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.quiz-buy-link.secondary {
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

.quiz-buy-link:hover {
  opacity: 0.85;
}

.quiz-seller-note {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin: -0.15rem 0 0.25rem;
  padding: 0;
}
</style>
