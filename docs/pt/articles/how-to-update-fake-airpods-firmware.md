---
title: 'Como atualizar o firmware de AirPods falsos: guia passo a passo'
description: 'Como atualizar o firmware de réplicas de AirPods com segurança usando FlyCC, CloudCC e Starfun — regras de carregamento seguro, como evitar inutilizar os fones e quando não mexer no firmware.'
category: Solução de problemas
order: 16
---
# Como atualizar o firmware de AirPods falsos: guia passo a passo

Ao contrário dos AirPods genuínos da Apple, que são atualizados silenciosamente em segundo plano pelo iOS, as réplicas de AirPods são atualizadas por meio de aplicativos complementares da comunidade, executados no Android, iOS ou macOS. Atualizar o firmware pode resolver problemas de comunicação com o iOS, melhorar a estabilidade do cancelamento ativo de ruído (ANC) ou corrigir quedas de conexão.

No entanto, a gravação do firmware escreve diretamente na memória flash interna dos fones. Uma atualização interrompida pode inutilizar permanentemente o controlador. Este guia apresenta os procedimentos seguros de gravação, testados pela comunidade, para cada um dos principais chipsets de réplicas.

> **Resposta rápida:** para atualizar o firmware de réplicas de AirPods, primeiro identifique o chipset para escolher o utilitário correto: **FlyCC** (Airoha, incluindo TigerBuilder) ou **Starfun** (Huilian). Certifique-se de que ambos os fones e o estojo de carregamento estejam com mais de 80% de carga. Mantenha a tampa do estojo aberta, deixe os dois fones encaixados, inicie a atualização OTA no aplicativo e não feche a tampa, alterne o Bluetooth nem saia do aplicativo até o progresso chegar a 100%.

::: warning Regra de ouro: se está funcionando, não mexa
As atualizações de firmware em réplicas não funcionam como atualizações de videogames. Elas são lançadas principalmente para corrigir mudanças incompatíveis provocadas por grandes atualizações do iOS ou resolver problemas graves de hardware. Se seus fones se conectam sem problemas, têm um ótimo som e o ANC funciona perfeitamente, **não atualize o firmware**. Gravar o firmware sem necessidade só traz o risco de inutilizar os fones.
:::

## Lista de verificação de segurança antes da atualização

Antes de tocar no botão de atualização, confirme estas quatro condições, sem exceção:

1. **Nível da bateria acima de 80%**: certifique-se de que ambos os fones e o estojo de carregamento tenham pelo menos 80% de carga. Se um fone ficar sem bateria durante a gravação, o bootloader será corrompido.
2. **Mantenha o estojo conectado à alimentação**: conecte o estojo de carregamento a um adaptador de parede de 5V/1A ou a uma bateria externa durante a atualização.
3. **Deixe a tampa aberta**: os fones devem permanecer encaixados nos contatos de carregamento, com a tampa do estojo aberta durante toda a transferência.
4. **Desative o bloqueio automático / suspensão da tela**: mantenha a tela do telefone ativa. Se o telefone entrar em suspensão profunda ou encerrar processos em segundo plano, a transferência Bluetooth poderá parar.

## Etapa 1: Identifique seu chipset e aplicativo

Gravar um arquivo de firmware destinado a um chip Airoha em uma placa Huilian inutilizará o dispositivo imediatamente. Escolha o utilitário correspondente ao seu chip no nosso [catálogo de aplicativos úteis](/pt/useful-apps):

- **Chipsets Airoha (1562AE, 1562E, 1571AM)** → Use o **FlyCC** (leia nosso [guia do aplicativo FlyCC](/pt/articles/flycc-app-guide)).
- **Chipsets TigerBuilder (1562AE/TB, 1571AM/TB)** → Use o **FlyCC**. O CloudCC foi descontinuado desde que a TigerBuilder integrou a funcionalidade OTA ao FlyCC; use-o apenas como alternativa caso encontre o problema de permissão de armazenamento.
- **Chipsets Huilian (247, 277, 377, 377H3)** → Use o **Starfun**.
- **Chipsets Jieli (Jerry)** → Clones Jieli de categoria inferior não são compatíveis com atualizações OTA de firmware.

## Etapa 2: Procedimentos de atualização passo a passo

### Método A: Atualização com FlyCC (Airoha)

1. Conecte seus AirPods ao dispositivo Android pelas configurações padrão de Bluetooth.
2. Abra o **FlyCC** e confirme que seu modelo aparece na tela inicial.
3. Toque em **Firmware Update** (ou **OTA Update**).
4. Toque em **Check for Updates**. Se for detectada uma nova versão, o aplicativo exibirá o número da versão e o registro de alterações.
5. Toque em **Start Update**. Você verá duas etapas: transferência do arquivo binário para o fone esquerdo e, em seguida, para o direito.
6. Quando o progresso chegar a 100%, aguarde a mensagem: *"Update Successful"*.
7. Feche a tampa do estojo de carregamento e deixe-o sem mexer por 60 segundos para permitir que os microcontroladores reiniciem.

### Método B: Solução alternativa com CloudCC (TigerBuilder)

As unidades TigerBuilder são atualizadas pelo FlyCC (Método A). Use o CloudCC apenas se o FlyCC apresentar o problema de permissão de armazenamento:

1. Coloque os dois fones no estojo com a tampa aberta.
2. Abra o **CloudCC** e toque em **Search Device**.
3. Selecione seu dispositivo TigerBuilder quando ele for detectado.
4. Acesse a aba **Firmware** e toque em **Query Latest Version**.
5. Selecione o pacote na nuvem e toque em **Download and Update**.
6. Mantenha o telefone apoiado bem ao lado do estojo de carregamento até que a mensagem confirme a conclusão.

### Método C: Atualização com Starfun (Huilian)

1. Certifique-se de que os fones estejam conectados ao telefone e que a tampa esteja aberta.
2. Abra o **Starfun** e toque no ícone **Settings / Firmware**.
3. Compare a versão atual do firmware com a versão mais recente disponível na nuvem.
4. Toque em **Upgrade**. O aplicativo gravará os blocos de configuração em sequência.
5. Após a reinicialização, remova o dispositivo da lista Bluetooth do telefone e faça uma reinicialização suave.

## O que fazer se uma atualização travar ou falhar

Se uma atualização parar em uma porcentagem específica (por exemplo, ficar travada em 45% por mais de 5 minutos):

1. **Não feche a tampa nem retire os fones.**
2. Verifique se o Bluetooth foi desconectado. Se o aplicativo permitir, toque em **Retry** ou reinicie o aplicativo sem mover os fones.
3. Se os fones deixarem de responder completamente, siga nosso [guia para redefinir AirPods falsos](/pt/articles/how-to-reset-fake-airpods) para executar uma reinicialização forçada do controlador por 15 segundos.
4. Abra novamente o aplicativo de atualização — na maioria dos casos, o bootloader de recuperação permitirá gravar o pacote novamente desde 0%.

## Guias de solução de problemas relacionados

- Os fones não aparecem no aplicativo de firmware? Consulte [AirPods falsos não se conectam](/pt/articles/fake-airpods-wont-connect).
- Está enfrentando falhas depois de uma atualização? Siga [Como redefinir AirPods falsos](/pt/articles/how-to-reset-fake-airpods).
- Está usando uma configuração do ecossistema Apple? Leia [AirPods falsos funcionam com iPhones novos?](/pt/articles/do-fake-airpods-work-with-new-iphone).
- Precisa de links para baixar aplicativos? Acesse [Aplicativos úteis](/pt/useful-apps).

## Perguntas frequentes

::: details Posso atualizar o firmware de réplicas de AirPods em um iPhone?
Não. O iOS não permite que aplicativos complementares gravem firmware via Bluetooth em acessórios que não sejam MFi. Você precisa usar um telefone Android emprestado (ou um Mac compatível) para gravar atualizações de firmware. Depois de atualizado, o firmware permanece permanentemente nos fones.
:::

::: details Uma atualização fará com que minha réplica de AirPods acesse a rede Buscar da Apple?
Não. A rede Buscar depende de certificados criptográficos proprietários da Apple que não podem ser adicionados por meio de atualizações de firmware.
:::

::: details Uma atualização de firmware pode inutilizar meus AirPods falsos?
Sim, se a atualização for interrompida por uma bateria descarregada, pelo fechamento prematuro da tampa ou pela gravação de um arquivo de firmware destinado a outro chipset. Siga sempre a lista de verificação de segurança antes da atualização apresentada acima.
:::
