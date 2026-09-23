---
title: AirPods falsos não conectam? Siga isto na ordem
description: 'AirPods falsos não estão emparelhando ou não aparecem? Carregue, esqueça e emparelhe novamente, verifique o pop-up do iOS, identifique o chip e saiba quando o problema é na unidade e você deve entrar em contato com o vendedor.'
category: Solução de problemas
order: 8
---
# AirPods falsos não conectam? Siga estas etapas na ordem

Uma réplica que não emparelha é irritante, mas geralmente o problema é uma destas poucas causas conhecidas — e a maioria tem solução. Siga as etapas de cima para baixo; elas estão ordenadas pela frequência com que são a causa do problema. Se chegar ao fim e ainda não conectar, isso aponta para a unidade, não para você.

> **Resposta rápida:** se seus AirPods falsos não conectam, 80% das falhas de emparelhamento são resolvidas com uma reinicialização simples: esqueça os AirPods nas configurações de Bluetooth do seu telefone, desative o Bluetooth, coloque os dois fones no estojo com a tampa aberta, segure o botão traseiro por 10–15 segundos até o LED piscar em âmbar/branco, feche a tampa por 60 segundos, ative o Bluetooth novamente e abra a tampa ao lado do telefone.

::: tip Primeira vez configurando estes fones?
As réplicas geralmente precisam de uma ou duas reinicializações assim que saem da caixa. Não presuma que você recebeu um par sem funcionamento antes de seguir as etapas abaixo.
:::

## 1. Carregue primeiro o estojo

Parece óbvio, mas esta é a causa mais comum de “não conecta de jeito nenhum”. Coloque os fones no estojo, conecte-o à tomada e carregue-o — um estojo sem carga não ficará visível para emparelhamento. Depois, abra a tampa e tente novamente.

## 2. Esqueça o dispositivo e emparelhe novamente

Dados antigos de emparelhamento são a próxima causa. O procedimento de reinicialização da comunidade, descrito em [Problemas comuns](/pt/troubleshooting/other-common-bugs):

1. Esqueça o dispositivo nas configurações de Bluetooth do telefone e, em seguida, desative o Bluetooth.
2. Abra a tampa e segure o botão traseiro por alguns segundos, até a luz piscar; depois, feche a tampa. Não se preocupe se a luz não piscar exatamente como nas imagens — os lotes variam.
3. Aguarde um minuto inteiro, ative o Bluetooth novamente, abra a tampa e reconecte.
4. Se não funcionar, retire os fones e coloque-os de volta. Feche a tampa e aguarde a luz apagar; depois, abra-a e tente novamente.

Pode levar **3–4 reinicializações simples** até funcionar, então repita algumas vezes. Se ainda não conectar, faça uma **reinicialização completa**: esqueça o dispositivo novamente e deixe os fones fora do estojo, com ele aberto, por pelo menos um dia inteiro (mais tempo, se necessário), para que fiquem sem carga residual. Depois que descarregarem, coloque-os de volta, carregue o estojo e faça a reinicialização simples novamente.

Se apenas um fone apresentar problemas — por exemplo, o direito piscar lentamente sempre que você abre o estojo — [reinicie o emparelhamento](/pt/troubleshooting/other-common-bugs) segurando o botão traseiro por 2–3 segundos com os fones dentro do estojo.

## 3. Verifique o comportamento da janela de emparelhamento

Em um iPhone, a janela deve aparecer quase instantaneamente, embora a velocidade varie de acordo com o [vendedor](/pt/links/info) e o lote — às vezes é mais rápida do que com AirPods genuínos. Observe duas coisas:

- **A janela aparece, mas a conexão cai.** Os fones estão sendo detectados, então geralmente o problema está no estado do emparelhamento — repita a etapa 2.
- **Nenhuma janela aparece.** Ou você não está usando iOS (não há janela no Android — isso é normal), ou os fones não estão sendo anunciados. O [guia de conectividade](/pt/introduction/connectivity) observa que às vezes as réplicas não se conectam ao iOS na primeira tentativa, e geralmente existe uma solução.

## 4. Confirme se sua plataforma está se comportando como esperado

Alguns relatos de “não conecta” são apenas diferenças entre plataformas. No **Android**, as réplicas são emparelhadas pelo menu Bluetooth, como qualquer fone de ouvido — não há janela, e isso não é uma falha. A alteração do nome e os controles por toque funcionam apenas no iOS — pegue um iPhone emprestado uma vez, e as alterações geralmente serão transferidas para os fones. Nosso [artigo sobre Android](/pt/articles/airpods-replicas-on-android) aborda a solução alternativa e os aplicativos de chipset disponíveis. No **iOS**, se as configurações não forem mantidas ou os fones continuarem sendo emparelhados novamente, execute a etapa 2 outra vez em vez de presumir uma falha de hardware.

## 5. Identifique o chip com os aplicativos da comunidade

Se o emparelhamento for inconsistente, é útil saber o que você tem em mãos. A comunidade mantém [aplicativos de firmware](/pt/useful-apps) gratuitos para cada chipset — FlyCC, CloudCC, StarFun, BullSuper, KKX e outros — e instalá-los é a maneira padrão de identificar seu chip. Tente-os um de cada vez e veja qual deles se conecta.

Observação importante: **clones muito básicos usam um chipset Jieli e não se conectam a nenhum desses aplicativos.** AirPods genuínos também não se conectam, então “nenhum aplicativo conecta” significa que é um clone barato ou um par genuíno — isso nunca confirma, por si só, que o par é genuíno. Se nenhum dos aplicativos detectar os fones, provavelmente você tem um clone básico.

## 6. Verifique peculiaridades conhecidas específicas de cada versão

Alguns comportamentos são específicos do chipset e da versão, e não falhas gerais:

- **Falhas na verificação do iCloud.** Algumas réplicas não oferecem suporte completo ao iCloud, o que pode impedir o emparelhamento com o macOS. A solução é esquecer os fones em todos os dispositivos do iCloud, esquecê-los no macOS, segurar o botão traseiro por 15 segundos até a luz piscar em âmbar e depois em branco, e emparelhar novamente. Esse problema não existe no chipset Huilian — consulte a [solução de compatibilidade com o iCloud](/pt/troubleshooting/AirReps-Incompatibility-with-iCloud).
- **Troca automática de dispositivos.** A troca pelo iCloud Connect da Apple só funciona nos modelos Huilian 5.3 e 5.4. Todos os outros se conectam a vários dispositivos, mas a troca é manual. Esperar uma troca automática de uma unidade que não seja Huilian não é uma falha — é um recurso ausente.

## 7. Problemas específicos do macOS

Se os fones se conectam ao telefone, mas apresentam problemas em um Mac:

- **O controle deslizante de volume funciona como um interruptor** (em Macs Intel). Isso afeta a maioria das réplicas e é corrigido com uma ferramenta de código aberto — siga a [solução para o controle deslizante de volume do macOS](/pt/troubleshooting/macOS-volume-slider-fixup). Observe que, nos modelos TigerBuilder, os gestos de volume nos fones não funcionarão com este método.
- **Não conecta ao Mac de jeito nenhum.** Primeiro, esqueça os AirPods no iPhone e depois tente conectá-los ao Mac. Se eles conectarem, mas você não ouvir nenhum som, reinicie-os.
- **Comprando para usar com um Mac?** O [guia de conectividade](/pt/introduction/connectivity) recomenda o modelo Huilian sempre que houver um MacBook ou iMac envolvido, pois outros chipsets podem não ter troca pelo iCloud ou ficar presos em 100% do volume.

## Quando o problema é da unidade, entre em contato com o vendedor

Se o carregamento, a reinicialização simples, a reinicialização completa e a solução para o iCloud falharem, você provavelmente recebeu uma unidade com defeito. Um clone básico que nenhum aplicativo da comunidade consegue detectar tem uma limitação do chip — nenhuma configuração transforma um par Jieli em um Huilian.

Vendedores confiáveis substituem unidades com defeito, por isso a comunidade recomenda comprar deles. Entre em contato com seu vendedor para solicitar reembolso ou substituição. Se ainda estiver escolhendo, compre de um [vendedor verificado](/pt/links/info) e siga o [guia de pedidos](/pt/ordering/how-to-buy) para facilitar as devoluções.

Guias e soluções relacionados:
- Precisa fazer a descarga completa ou reiniciar pelo botão do estojo? Consulte [Como reiniciar AirPods falsos](/pt/articles/how-to-reset-fake-airpods).
- Está usando um dispositivo iOS mais recente? Leia [AirPods falsos funcionam com iPhones novos?](/pt/articles/do-fake-airpods-work-with-new-iphone).
- Conectando no Android? Confira [Réplicas de AirPods no Android](/pt/articles/airpods-replicas-on-android).
- Suspeita que a unidade seja fraudulenta? Siga nosso [Guia para identificar AirPods falsos](/pt/articles/how-to-spot-fake-airpods).

## Perguntas frequentes

::: details Por que meus AirPods falsos não aparecem de jeito nenhum?
As causas mais comuns são um estojo descarregado, dados antigos de emparelhamento ou uma limitação do chipset. Carregue o estojo e faça a reinicialização para esquecer e emparelhar novamente algumas vezes. Se nenhum aplicativo de chipset da comunidade detectar os fones, considere que se trata de um clone básico ou de uma unidade com defeito.
:::

::: details Quantas vezes devo reiniciar minhas réplicas antes de desistir?
Pode levar de 3 a 4 reinicializações simples para funcionar, então não pare depois de uma tentativa. Se isso não ajudar, faça uma reinicialização completa — deixe os fones fora do estojo, com ele aberto, por pelo menos um dia inteiro para descarregá-los; depois, carregue e reinicie novamente.
:::

::: details AirPods falsos precisam de um aplicativo especial para emparelhar?
Não. As réplicas são emparelhadas pelo menu normal de Bluetooth do telefone — no Android não há nenhuma janela, e isso é esperado. Os aplicativos da comunidade servem para firmware, equalização e identificação do chipset, não para o emparelhamento básico. Consulte [aplicativos úteis](/pt/useful-apps) para ver a lista.
:::

::: details É possível consertar um par com defeito?
Às vezes. Os procedimentos de reinicialização e do iCloud acima resolvem os casos comuns. Mas, se nenhum deles funcionar, um clone básico que não conecta tem uma limitação do chip, não é um erro do usuário; portanto, entre em contato com o vendedor para solicitar reembolso ou substituição — de preferência uma unidade do [diretório de vendedores confiáveis](/pt/links/info).
:::
