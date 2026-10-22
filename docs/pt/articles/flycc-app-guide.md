---
title: 'Guia do APK FlyCC: Como configurar e ajustar réplicas de AirPods Airoha'
description: "FlyCC para réplicas TigerBuilder: Android e iPhone, EQ e atualizações por modelo, permissões e solução de problemas de conexão."
category: Usando suas réplicas
order: 13
---
# Guia do APK FlyCC: como configurar e ajustar réplicas de AirPods Airoha

O FlyCC é o aplicativo complementar que nosso [catálogo de aplicativos úteis](/pt/useful-apps#tigerbuilder) indica para réplicas da **TigerBuilder**. A TigerBuilder é uma fabricante de réplicas, não uma marca de chips: seus modelos usam chipsets **Airoha**, como o 1562AE, o 1563E e o 1571AM. Dependendo do modelo e do firmware, o FlyCC pode ajustar o EQ, mostrar configurações específicas daquele modelo e instalar atualizações de firmware lançadas pela fabricante.

> **Resposta rápida:** o FlyCC é um aplicativo gratuito de terceiros para réplicas de AirPods da TigerBuilder (baseadas em Airoha). Ele está disponível como APK para Android e como app para iPhone na App Store, e os dois estão em [Aplicativos úteis](/pt/useful-apps#tigerbuilder). O que ele consegue fazer depende do seu modelo exato, do firmware e da versão do app: normalmente o EQ e, em modelos selecionados, atualizações de firmware. Modelos Huilian, HR, BES e KKX usam os outros aplicativos do catálogo.

::: tip Versões para Android e iPhone
O FlyCC tem um APK para Android e uma versão para iPhone na App Store. Ter o app no celular não significa que ele seja compatível com o seu par: os menus e as atualizações que ele mostra dependem do modelo detectado, do firmware desse modelo e da versão do app. Nosso catálogo não tem uma versão separada para Mac. A App Store permite instalar o app de iPhone em Macs com chip Apple, mas informa que ele não foi verificado para macOS, por isso este guia não cobre o uso no Mac.
:::

## Quais réplicas usam o FlyCC?

Comece pelo vendedor e pela versão que você comprou, não só pelo nome do chip. As [páginas de versões](/pt/version-info/general) indicam o FlyCC para modelos da TigerBuilder, como AirPods Pro 3 V7 TB, AirPods 4 V3 TB, AirPods Pro 2 V5.3 TB e AirPods Max V3. Confira a página da sua versão antes de instalar qualquer coisa.

Um chip Airoha, por si só, não define o aplicativo. Os modelos HR também usam chips Airoha, mas aparecem com o BullSuper e o G&Link; os modelos Huilian usam o StarFun, e algumas versões Airoha mais antigas não têm suporte de nenhum app. Saber qual app se conecta é uma pista útil, mas uma busca sem sucesso no FlyCC não prova que o seu par tem outro chip ou que não é o modelo que você pediu. Permissões, a versão do app e o suporte ao modelo também contam (veja a solução de problemas abaixo).

## Como baixar e instalar o FlyCC com segurança

Use os links de [Aplicativos úteis](/pt/useful-apps#tigerbuilder) em vez de arquivos republicados em outros sites.

**iPhone:** instale o FlyCC pela App Store e permita o acesso ao Bluetooth quando o iOS pedir. O app exige iOS 13 ou posterior (versão 2.0.16, verificado em 22 de outubro de 2026).

**Android:** a versão para Android é um APK para download, não um app do Google Play.

1. Baixe o APK em [Aplicativos úteis](/pt/useful-apps#tigerbuilder).
2. Quando o Android pedir, permita **Instalar aplicativos desconhecidos** para o navegador ou gerenciador de arquivos usado para abrir o arquivo. Depois, você pode desativar essa permissão.
3. Abra o arquivo `.apk` e toque em **Instalar**.
4. Conceda a permissão de Bluetooth que o app solicitar. No Android 12 e em versões mais recentes, ela aparece como **Dispositivos próximos**. Em versões mais antigas do Android, ou com apps mais antigos, a busca por Bluetooth pode exigir a permissão de **Localização** ([documentação do Android para desenvolvedores](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions)).

O FlyCC é um software de terceiros, e o AirReps não fez nenhuma auditoria de segurança nele. Acesso ao Bluetooth ou a dispositivos próximos é esperado em um app para fones; tenha cuidado com pedidos que não tenham relação com os fones. A documentação do Android explica por que o sistema pede essas permissões, não o que um app específico faz com elas. No iPhone, as informações de privacidade da App Store são declaradas pelo próprio desenvolvedor, e a Apple avisa que elas não foram verificadas pela Apple ([página na App Store](https://apps.apple.com/us/app/flycc/id1661245709)).

## O que o FlyCC pode fazer

Os menus que o FlyCC mostra dependem do modelo detectado, então dois pares podem parecer bem diferentes no app. As notas de versão do app para iPhone incluem correções para menus ausentes (versões 2.0.12 e 2.0.14). Por isso, um menu que não aparece pode ser uma questão de versão do app ou de compatibilidade, e não sinal de outro chip.

### EQ e som

O EQ é o principal motivo pelo qual o guia indica o FlyCC para quem tem modelos da TigerBuilder (veja [qualidade de som](/pt/introduction/sound-quality)). Faça pequenas mudanças e ouça o resultado. Por exemplo, reduza um pouco os graves se o seu lote estiver soando embolado. Membros da comunidade compartilham predefinições de EQ no [Discord do AirReps](https://airreps.link/discord). Depois de trocar de celular, confira se o seu EQ continua aplicado, porque isso pode variar conforme o modelo.

### Controles

Os controles de toque e pressão das réplicas normalmente são alterados nos ajustes de Bluetooth do iPhone, como nos AirPods originais (veja o [guia de recursos](/pt/introduction/features)). Se o FlyCC mostrar ajustes de controles para o seu modelo, você pode usá-los por lá, mas nem todo modelo oferece essa opção.

### Atualizações de firmware (OTA)

Segundo a descrição na App Store, o FlyCC oferece atualizações de firmware para produtos selecionados, e as versões 1.1.1 e 1.1.2 (2024) adicionaram suporte OTA à plataforma AB157x da Airoha. Se o FlyCC oferecer uma atualização para o seu modelo:

1. Confira se você precisa dela: se ela corrige um problema que você realmente tem ou se foi indicada pelo vendedor ou na [página da sua versão](/pt/version-info/general). Se o seu par funciona bem, não há problema em deixar o firmware como está.
2. Leia as instruções de atualização que o FlyCC mostra para o seu modelo e siga-as.
3. Mantenha os fones e o estojo carregados, o celular por perto com o app aberto, e não interrompa a atualização até o app confirmar que ela terminou.

Se uma atualização falhar, fale com o vendedor ou pergunte no Discord em vez de tentar o firmware de outro aplicativo. O processo completo está em [Como atualizar o firmware de AirPods falsificados](/pt/articles/how-to-update-fake-airpods-firmware).

## Solução de problemas de conexão do FlyCC

Se o FlyCC não encontrar seus fones:

- **Conecte-os primeiro**: emparelhe os fones nas configurações de Bluetooth do celular e depois abra o FlyCC.
- **Verifique as permissões**: no Android 12 e em versões mais recentes, o FlyCC precisa da permissão **Dispositivos próximos**; em versões mais antigas do Android, pode precisar de **Localização**. No iPhone, confira **Ajustes → Privacidade e Segurança → Bluetooth**.
- **Atualize o app**: o FlyCC 2.0.16 para iPhone traz uma correção para alguns usuários que não conseguiam se conectar.
- **Confirme que o app corresponde ao seu modelo**: veja a página da sua versão. Se o modelo do seu vendedor for de outra fabricante, use o aplicativo indicado para ele em [Aplicativos úteis](/pt/useful-apps). O CloudCC está descontinuado para modelos da TigerBuilder e serve apenas como alternativa para o problema de permissão de armazenamento descrito lá.
- **Não trate uma busca sem sucesso como prova**: se nenhum dos aplicativos indicados se conectar depois dessas verificações, pergunte no [Discord](https://airreps.link/discord) informando o vendedor e o modelo. Clones Jieli muito baratos não funcionam com nenhum desses aplicativos. Se não tiver certeza do que recebeu, veja [Como identificar AirPods falsos](/pt/articles/how-to-spot-fake-airpods).
- **Limpe o cache de emparelhamento**: se a conexão cair, redefina o emparelhamento usando nosso [guia de redefinição](/pt/articles/how-to-reset-fake-airpods).

## Guias relacionados

- Usa réplicas com Android diariamente? Consulte [Réplicas de AirPods no Android](/pt/articles/airpods-replicas-on-android).
- Precisa de utilitários para outros chips? Confira o [catálogo completo de aplicativos úteis](/pt/useful-apps).
- Os fones se recusam a conectar? Siga o passo a passo em [AirPods falsos não conectam](/pt/articles/fake-airpods-wont-connect).
- Procurando modelos Airoha verificados? Consulte o [diretório de vendedores confiáveis](/pt/links/info).

## Perguntas frequentes

::: details O FlyCC é seguro para instalar no meu celular?
O FlyCC é um software de terceiros que o AirReps não auditou, então tome os cuidados de sempre: baixe-o pelo link de Aplicativos úteis ou pela App Store, confira se os pedidos de permissão têm relação com o Bluetooth e recuse o que não tiver. As informações de privacidade da App Store são uma declaração do desenvolvedor, não uma auditoria da Apple.
:::

::: details Posso usar o FlyCC em um iPhone?
Sim. O FlyCC está na App Store para iPhone (iOS 13 ou posterior; versão 2.0.16, verificado em 22 de outubro de 2026), e o framework [Core Bluetooth](https://developer.apple.com/bluetooth/) da Apple permite que apps de iPhone interajam com acessórios Bluetooth de baixa energia. O que o FlyCC consegue fazer no iPhone depende do seu modelo, do firmware dele e da versão do app, e as atualizações de firmware são oferecidas para produtos selecionados, não para todos os pares. O Android continua sendo uma opção com o APK de Aplicativos úteis.
:::

::: details Por que o FlyCC não encontra meus fones?
As causas mais comuns são falta da permissão de Bluetooth ou de dispositivos próximos, uma versão desatualizada do app, fones que ainda não estão conectados ao celular ou um modelo que o FlyCC não suporta. O FlyCC é indicado para modelos da TigerBuilder; modelos Huilian usam o StarFun, e modelos HR usam o BullSuper ou o G&Link. Uma busca sem sucesso não prova qual chip está dentro, então confira o modelo do seu vendedor nas páginas de versões e pergunte no Discord se nenhum dos aplicativos indicados se conectar.
:::
