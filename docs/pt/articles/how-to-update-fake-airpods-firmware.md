---
title: Como atualizar o firmware de AirPods falsos com segurança
description: 'Atualize com segurança o firmware de réplicas de AirPods com FlyCC (Airoha/TB) e StarFun (Huilian): regra dos 80% de bateria, prevenção de danos irreversíveis e quando não atualizar.'
category: Solução de problemas
order: 16
---
# Como atualizar o firmware de AirPods falsificados: guia passo a passo

Ao contrário dos AirPods genuínos da Apple, que são atualizados silenciosamente em segundo plano pelo iOS, as réplicas de AirPods são atualizadas por meio de aplicativos complementares da comunidade. Tanto o **FlyCC** quanto o **StarFun** estão disponíveis para Android e na App Store do iOS, embora os APKs para Android continuem sendo a opção mais confiável para realizar a gravação OTA completa em todos os chipsets. Atualizar o firmware pode resolver problemas de comunicação com o iOS, melhorar a estabilidade do cancelamento ativo de ruído (ANC) ou corrigir falhas de conexão.

No entanto, a gravação do firmware grava dados diretamente no armazenamento flash interno dos fones. Uma atualização interrompida pode inutilizar permanentemente um controlador. Este guia apresenta os procedimentos de gravação seguros e testados pela comunidade para os principais chipsets de réplicas.

> **Resposta rápida:** Para atualizar o firmware de AirPods réplicas, primeiro identifique seu chipset e escolha o utilitário correto: **FlyCC** (Airoha, incluindo TigerBuilder) ou **StarFun** (Huilian). Certifique-se de que os dois fones e o estojo estejam carregados acima de 80%. Mantenha a tampa do estojo aberta, deixe os dois fones dentro dele, inicie a atualização OTA no aplicativo e não feche a tampa, desative o Bluetooth nem saia do aplicativo até que o progresso chegue a 100%.

::: warning A regra de ouro: se está funcionando, não mexa
As atualizações de firmware de réplicas não funcionam como patches de videogame. Elas são lançadas principalmente para corrigir problemas causados por grandes atualizações do iOS ou solucionar falhas graves de hardware. Se seus fones estão conectando sem problemas, têm ótimo som e o ANC funciona perfeitamente, **não atualize o firmware**. Fazer uma gravação desnecessária só traz o risco de inutilizar os fones.
:::

<CommunityCta variant="apps" />

## Lista de verificação de segurança antes da atualização

Antes de tocar no botão de atualização, verifique estas quatro condições, sem exceção:

1. **Nível da bateria acima de 80%**: Certifique-se de que os dois fones e o estojo tenham pelo menos 80% de carga. Se um fone ficar sem bateria durante a gravação, o bootloader será corrompido.
2. **Mantenha o estojo conectado à energia**: Conecte o estojo a um adaptador de parede ou bateria externa de 5 V/1 A durante a atualização.
3. **Deixe a tampa aberta**: Os fones devem permanecer encaixados nos pinos de carregamento, com a tampa do estojo aberta, durante toda a transferência.
4. **Desative o bloqueio automático / suspensão da tela**: Mantenha a tela do celular ativa. Se o celular entrar em suspensão profunda ou fechar processos em segundo plano, a transferência Bluetooth poderá travar.

## Etapa 1: identifique seu chipset e o aplicativo

Gravar um arquivo de firmware destinado a um chip Airoha em uma placa Huilian inutilizará a unidade imediatamente. Escolha o utilitário correspondente ao seu chip em nosso [catálogo de aplicativos úteis](/pt/useful-apps):

- **Chipsets Airoha (1562AE, 1562E, 1571AM)** → Use o **FlyCC** (leia nosso [guia do aplicativo FlyCC](/pt/articles/flycc-app-guide)).
- **Chipsets TigerBuilder (1562AE/TB, 1571AM/TB)** → Use o **FlyCC**. O CloudCC foi descontinuado desde que o TigerBuilder integrou a funcionalidade OTA ao FlyCC; use-o apenas como alternativa caso encontre o problema de permissão de armazenamento.
- **Chipsets Huilian (247, 277, 377, 377H3)** → Use o **StarFun** (leia nosso [guia do aplicativo StarFun](/pt/articles/starfun-app-guide)).
- **Chipsets Jieli (Jerry)** → As réplicas Jieli de baixo custo não oferecem suporte a atualizações OTA de firmware.

## Etapa 2: procedimentos de atualização passo a passo

### Método A: atualização com FlyCC (Airoha)

1. Conecte seus AirPods ao celular pelas configurações padrão de Bluetooth.
2. Abra o **FlyCC** e confirme que seu modelo aparece na tela inicial.
3. Toque em **Firmware Update** (ou **OTA Update**).
4. Toque em **Check for Updates**. Se uma nova versão for detectada, o aplicativo exibirá o número da versão e o registro de alterações.
5. Toque em **Start Update**. Você verá duas etapas: transferência do arquivo de firmware para o fone esquerdo e, em seguida, para o direito.
6. Quando o progresso chegar a 100%, aguarde a mensagem: *"Update Successful"*.
7. Feche a tampa do estojo e deixe-o sem mexer por 60 segundos para permitir que os microcontroladores reiniciem.

::: warning Observação sobre o firmware Pro 3 V7 TB
Após uma atualização de firmware no FlyCC para os **AirPods Pro 3 V7 TB**, o aviso pop-up do iOS e o número de série desaparecem e precisam ser adicionados novamente no aplicativo FlyCC. O V7 Huilian (StarFun) não é afetado.
:::

### Método B: alternativa com CloudCC (TigerBuilder)

As unidades TigerBuilder são atualizadas pelo FlyCC (Método A). Use o CloudCC somente se o FlyCC apresentar o problema de permissão de armazenamento:

1. Coloque os dois fones no estojo com a tampa aberta.
2. Abra o **CloudCC** e toque em **Search Device**.
3. Selecione o dispositivo TigerBuilder assim que ele for detectado.
4. Acesse a aba **Firmware** e toque em **Query Latest Version**.
5. Selecione o pacote da nuvem e toque em **Download and Update**.
6. Mantenha o celular ao lado do estojo até que a mensagem confirme a conclusão.

### Método C: atualização com StarFun (Huilian)

1. Certifique-se de que os fones estejam conectados ao celular e que a tampa esteja aberta.
2. Abra o **StarFun** e toque no ícone **Settings / Firmware**.
3. Compare a versão atual do firmware com a versão mais recente disponível na nuvem.
4. Toque em **Upgrade**. O aplicativo gravará os blocos de configuração sequencialmente.
5. Após a reinicialização, remova o dispositivo da lista de dispositivos Bluetooth do celular e faça uma reinicialização simples.

## O que fazer se uma atualização travar ou falhar

Se uma atualização ficar parada em uma porcentagem específica (por exemplo, congelada em 45% por mais de 5 minutos):

1. **Não feche a tampa nem retire os fones do estojo.**
2. Verifique se o Bluetooth desconectou. Se o aplicativo permitir, toque em **Retry** ou reinicie o aplicativo, mantendo os fones no estojo.
3. Se os fones deixarem de responder completamente, siga nosso [guia para redefinir AirPods falsificados](/pt/articles/how-to-reset-fake-airpods) para executar uma reinicialização forçada do controlador por 15 segundos.
4. Abra o aplicativo de atualização novamente — na maioria dos casos, o bootloader de recuperação permitirá gravar o pacote de novo, começando em 0%.

<CommunityCta variant="stuck" />

## Guias de solução de problemas relacionados

- Está usando uma réplica Huilian? Siga o [guia do aplicativo StarFun](/pt/articles/starfun-app-guide).
- Os fones não aparecem no aplicativo de firmware? Consulte [AirPods falsificados não conectam](/pt/articles/fake-airpods-wont-connect) ou [como redefinir AirPods falsificados](/pt/articles/how-to-reset-fake-airpods).
- Precisa de links para baixar aplicativos? Acesse [Aplicativos úteis](/pt/useful-apps).
- Vai trocar uma réplica antiga que não pode ser atualizada? Responda ao [questionário de 1 minuto](/pt/quiz) ou consulte [vendedores confiáveis](/pt/links/info).

## Perguntas frequentes

::: details Posso atualizar o firmware de AirPods réplicas em um iPhone?
Tanto o **FlyCC** quanto o **StarFun** estão disponíveis na App Store do iOS para equalização, configurações e consulta do estado do firmware (e o FlyCC no iOS oferece suporte à consulta e à atualização de modelos recentes TigerBuilder, como o V5.3 TB). No entanto, para modelos antigos ou se um aplicativo para iOS não iniciar uma gravação OTA, usar emprestado um celular Android com o APK de [Aplicativos úteis](/pt/useful-apps) é a alternativa mais confiável. Depois de atualizado, o firmware permanece nos fones permanentemente.
:::

::: details Uma atualização dará à minha réplica de AirPods acesso à rede Buscar da Apple?
Não. A rede Buscar depende de certificados criptográficos proprietários da Apple que não podem ser adicionados por meio de atualizações de firmware.
:::

::: details Uma atualização de firmware pode inutilizar meus AirPods falsificados?
Sim, se a atualização for interrompida por uma bateria descarregada, pelo fechamento prematuro da tampa ou pela gravação de um arquivo de firmware destinado a outro chipset. Siga sempre a lista de verificação de segurança acima antes da atualização.
:::
