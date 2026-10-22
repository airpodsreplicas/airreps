---
title: 'Como atualizar o firmware de AirPods falsos: guia passo a passo'
description: 'Como atualizar o firmware de réplicas de AirPods com segurança usando FlyCC, CloudCC e Starfun — regras para um carregamento seguro, como evitar inutilizações e quando deixar o firmware como está.'
category: Solução de problemas
order: 16
---
# Como atualizar o firmware de AirPods falsificados: guia passo a passo

Os AirPods originais da Apple são atualizados automaticamente pelos seus dispositivos Apple. As réplicas não. O firmware delas vem da fabricante e é instalado por um aplicativo complementar, apenas para os modelos que a fabricante suporta. Uma atualização pode corrigir problemas de compatibilidade com o iOS ou quedas de conexão e, às vezes, adiciona recursos.

A atualização grava um novo firmware nos fones, então uma atualização interrompida ou incorreta pode deixá-los inutilizáveis. O processo exato depende do modelo e do aplicativo, por isso este guia explica o que verificar e como atualizar com segurança, em vez de passar uma única sequência para todos os pares.

> **Resposta rápida:** primeiro identifique o seu modelo exato e o vendedor e depois use o aplicativo indicado para essa fabricante em [Aplicativos úteis](/pt/useful-apps): **FlyCC** para modelos da TigerBuilder (Airoha) ou **StarFun** para Huilian, ambos disponíveis para Android e iPhone. Se o aplicativo oferecer uma atualização para o seu modelo, siga as instruções na tela, mantenha os fones carregados e perto do celular e não interrompa a atualização. Se o seu par funciona bem e a atualização não corrige nenhum problema que você tenha, pule-a.

::: warning A regra de ouro: se funciona, não mexa
As atualizações de firmware das réplicas geralmente corrigem problemas causados por grandes atualizações do iOS ou bugs conhecidos. Se os seus fones se conectam sem problemas, têm um som ótimo, o ANC funciona e a atualização não corrige um problema que você realmente tenha, **não atualize o firmware**. Uma atualização desnecessária só acrescenta risco.
:::

## Antes de atualizar

1. **Saiba o seu modelo exato e o vendedor**: confira o pedido e o nome do produto no anúncio do vendedor e depois encontre essa versão nas [páginas de versões](/pt/version-info/general). Os números de chip nos anúncios dos vendedores não são confiáveis por si só.
2. **Tenha um motivo**: procure um aviso do vendedor, uma observação na página da sua versão ou uma solução confirmada no [Discord do AirReps](https://airreps.link/discord) para um problema que você tenha.
3. **Use a versão atual do aplicativo certo** em [Aplicativos úteis](/pt/useful-apps) e conceda as permissões de Bluetooth que ele pedir.
4. **Carregue antes**: carregue os fones e o estojo antes de começar, para que nada fique sem bateria durante a atualização.
5. **Mantenha a conexão estável**: deixe o celular por perto, com a tela ligada e o aplicativo aberto até a atualização terminar.

## Etapa 1: escolha o aplicativo de acordo com a fabricante

Nosso [catálogo de aplicativos úteis](/pt/useful-apps) é organizado por fabricante. Use o aplicativo indicado para o seu modelo:

- **TigerBuilder** (chips Airoha como o 1562AE, o 1563E e o 1571AM) → **FlyCC**, no Android e no iPhone. Leia nosso [guia do aplicativo FlyCC](/pt/articles/flycc-app-guide). O **CloudCC** foi descontinuado desde que a TigerBuilder integrou a função OTA ao FlyCC; use-o apenas como alternativa para o problema de permissão de armazenamento.
- **Huilian** → **StarFun**, no Android e no iPhone.
- Modelos **HR**, **BES** e **V2.5/KKX** → os aplicativos listados nessas seções de Aplicativos úteis.
- **Clones Jieli (Jerry) de baixo custo** → nenhum aplicativo do catálogo é compatível com eles.

Nem todo aplicativo oferece atualizações de firmware para todos os modelos aos quais se conecta. Instale apenas as atualizações que o aplicativo certo oferecer para o modelo detectado e nunca carregue um firmware feito para outro produto.

## Etapa 2: faça a atualização no aplicativo

As telas de atualização variam conforme o aplicativo e o modelo, então siga o que o seu aplicativo mostrar em vez de uma sequência genérica:

1. Conecte os fones nas configurações de Bluetooth do celular, depois abra o aplicativo e espere até ele detectar o seu modelo.
2. Abra a opção de firmware ou de atualização, se houver, e compare a versão instalada com a oferecida. Se o aplicativo disser que você já tem o firmware mais recente, pronto.
3. Leia as instruções que o aplicativo dá para o seu modelo, inclusive sobre onde os fones devem ficar durante a atualização, e siga-as à risca.
4. Inicie a atualização e não mexa em nada até o aplicativo confirmar que ela foi concluída. Não feche o aplicativo, não desative o Bluetooth e não se afaste com o celular.
5. Depois, confira a versão no aplicativo e teste os fones. Se o emparelhamento der problema, esqueça os fones e emparelhe-os de novo (veja [Como redefinir AirPods falsificados](/pt/articles/how-to-reset-fake-airpods)).

No **iPhone**, tanto o FlyCC quanto o StarFun oferecem atualizações de firmware para produtos selecionados. As notas do FlyCC na App Store mencionam suporte OTA à plataforma AB157x da Airoha desde a versão 1.1.1, e o StarFun lista o OTA entre as suas funções (páginas do [FlyCC](https://apps.apple.com/us/app/flycc/id1661245709) e do [StarFun](https://apps.apple.com/us/app/starfun/id1633624617) na App Store, verificadas em 22 de outubro de 2026). No **Android**, use os APKs de Aplicativos úteis. O Android 12 e versões mais recentes pedem a permissão Dispositivos próximos, enquanto versões mais antigas do Android ou apps mais antigos podem precisar da permissão de Localização para buscar dispositivos Bluetooth ([documentação do Android para desenvolvedores](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions)).

## O que fazer se uma atualização travar ou falhar

- **Dê tempo e mantenha a conexão**: deixe os fones onde o aplicativo indicou e mantenha o celular por perto. Se o aplicativo tiver a própria opção de tentar novamente, use-a.
- **Não troque para outro aplicativo ou outro arquivo de firmware** para consertar uma atualização que falhou.
- **Fale com o vendedor** se a atualização falhar ou os fones pararem de responder. Informe o número do pedido, o modelo, o nome e a versão do aplicativo, além do seu celular e da versão do sistema, e envie capturas de tela de qualquer erro. Você também pode perguntar no [Discord do AirReps](https://airreps.link/discord).

A recuperação depende do modelo, então não existe uma redefinição universal que desfaça uma atualização que falhou. O [guia de redefinição](/pt/articles/how-to-reset-fake-airpods) serve para problemas de emparelhamento, não para recuperar o firmware.

## Guias relacionados de solução de problemas

- Os fones não aparecem no aplicativo de firmware? Consulte [AirPods falsificados não se conectam](/pt/articles/fake-airpods-wont-connect).
- Está enfrentando falhas após uma atualização? Siga [Como redefinir AirPods falsificados](/pt/articles/how-to-reset-fake-airpods).
- Está usando uma configuração com o ecossistema Apple? Leia [AirPods falsificados funcionam com iPhones novos?](/pt/articles/do-fake-airpods-work-with-new-iphone).
- Precisa de links para baixar aplicativos? Visite [Aplicativos úteis](/pt/useful-apps).

## Perguntas frequentes

::: details Posso atualizar o firmware de réplicas de AirPods em um iPhone?
Sim, em modelos selecionados. O FlyCC e o StarFun têm versões para iPhone na App Store, e os dois oferecem atualizações de firmware para alguns produtos. Nem todo par recebe atualização no iPhone: isso depende do modelo, do firmware dele e da versão do aplicativo. Por exemplo, nossa [página dos AirPods Pro 2](/pt/version-info/pro#airpods-pro-2) recomenda verificar o firmware dos V5.3 TB no FlyCC para iOS. O Android também é uma opção com os APKs de Aplicativos úteis, desde que você use o aplicativo indicado para o seu modelo.
:::

::: details Uma atualização dará aos meus AirPods réplica a rede Buscar da Apple?
Não. A rede Buscar depende de certificados criptográficos proprietários da Apple que não podem ser adicionados por meio de atualizações de firmware.
:::

::: details Uma atualização de firmware pode inutilizar meus AirPods falsificados?
Pode. Uma atualização interrompida por bateria descarregada ou queda de conexão, ou um firmware feito para outro produto, pode deixar um par inutilizável. Instale apenas as atualizações que o aplicativo certo oferecer para o seu modelo, siga as instruções dele e pule as atualizações de que você não precisa.
:::
