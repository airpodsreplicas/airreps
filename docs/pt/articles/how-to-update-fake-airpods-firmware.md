---
title: 'Como atualizar o firmware de AirPods falsos: guia passo a passo'
description: 'Como atualizar o firmware de réplicas de AirPods com segurança usando FlyCC, CloudCC e Starfun — regras para um carregamento seguro, como evitar inutilizações e quando deixar o firmware como está.'
category: Solução de problemas
order: 16
---
# Como atualizar o firmware de AirPods falsificados: guia passo a passo

Ao contrário dos AirPods genuínos da Apple, que são atualizados silenciosamente em segundo plano pelo iOS, as réplicas de AirPods são atualizadas por meio de aplicativos complementares da comunidade executados no Android ou macOS. A atualização do firmware pode resolver bugs de comunicação com o iOS, melhorar a estabilidade do cancelamento ativo de ruído (ANC) ou corrigir quedas de conexão.

No entanto, a gravação do firmware escreve diretamente no armazenamento flash interno do fone. Uma atualização interrompida pode inutilizar permanentemente um controlador. Este guia aborda os procedimentos seguros de gravação, testados pela comunidade, para todos os principais chipsets de réplicas.

> **Resposta rápida:** para atualizar o firmware de réplicas de AirPods, primeiro identifique seu chipset para escolher o utilitário correto: **FlyCC** (Airoha), **CloudCC** (TigerBuilder) ou **Starfun** (Huilian). Certifique-se de que ambos os fones e o estojo de carregamento estejam carregados acima de 80%. Mantenha a tampa do estojo aberta, deixe ambos os fones encaixados dentro dele, inicie a atualização OTA no aplicativo e não feche a tampa, desative o Bluetooth nem saia do aplicativo até que o progresso chegue a 100%.

::: warning A regra de ouro: se funciona, não mexa
As atualizações de firmware em réplicas não funcionam como patches de videogame. Elas são lançadas principalmente para corrigir mudanças incompatíveis causadas por grandes atualizações do iOS ou para resolver bugs graves de hardware. Se seus fones atualmente se conectam sem problemas, têm um ótimo som e o ANC funciona perfeitamente, **não atualize o firmware**. A gravação desnecessária apenas introduz o risco de inutilização.
:::

## Lista de verificação de segurança antes da atualização

Antes de tocar no botão de atualização, verifique estas quatro condições sem exceção:

1. **Nível da bateria acima de 80%**: certifique-se de que ambos os fones e o estojo de carregamento tenham pelo menos 80% de carga. Se um fone ficar sem energia no meio da gravação, o bootloader será corrompido.
2. **Mantenha o estojo conectado à energia**: conecte o estojo de carregamento a um adaptador de parede de 5V/1A ou a um power bank durante a atualização.
3. **Deixe a tampa aberta**: os fones devem permanecer encaixados nos pinos de carregamento, com a tampa do estojo aberta, durante toda a transferência.
4. **Desative o bloqueio automático / suspensão da tela**: mantenha a tela do telefone ativa. Se o telefone entrar em suspensão profunda ou fechar processos em segundo plano, a transferência Bluetooth poderá travar.

## Etapa 1: identifique seu chipset e aplicativo

Gravar um binário de firmware destinado a um chip Airoha em uma placa Huilian inutilizará imediatamente a unidade. Associe seu utilitário ao chip usando nosso [catálogo de aplicativos úteis](/pt/useful-apps):

- **Chipsets Airoha (1562AE, 1562E, 1571AM)** $\to$ use o **FlyCC** (leia nosso [guia do aplicativo FlyCC](/pt/articles/flycc-app-guide)).
- **Chipsets TigerBuilder (1562AE/TB, 1571AM/TB)** $\to$ use o **CloudCC**.
- **Chipsets Huilian (247, 277, 377, 377H3)** $\to$ use o **Starfun**.
- **Chipsets Jieli (Jerry)** $\to$ clones Jieli de categoria básica não são compatíveis com atualizações de firmware OTA.

## Etapa 2: procedimentos de atualização passo a passo

### Método A: atualizando com o FlyCC (Airoha)

1. Conecte seus AirPods ao dispositivo Android usando as configurações padrão de Bluetooth.
2. Abra o **FlyCC** e verifique se o seu modelo aparece na tela inicial.
3. Toque em **Atualização de firmware** (ou **Atualização OTA**).
4. Toque em **Verificar atualizações**. Se uma nova versão for detectada, o aplicativo exibirá o número da compilação e o registro de alterações.
5. Toque em **Iniciar atualização**. Você verá duas etapas: a transferência do binário para o fone esquerdo e, depois, para o fone direito.
6. Quando o progresso chegar a 100%, aguarde a mensagem: *"Atualização bem-sucedida"*.
7. Feche a tampa do estojo de carregamento e deixe-o imóvel por 60 segundos para permitir que os microcontroladores sejam reiniciados.

### Método B: atualizando com o CloudCC (TigerBuilder)

1. Coloque ambos os fones no estojo com a tampa aberta.
2. Abra o **CloudCC** e toque em **Pesquisar dispositivo**.
3. Selecione seu dispositivo TigerBuilder quando ele for detectado.
4. Acesse a aba **Firmware** e toque em **Consultar versão mais recente**.
5. Selecione o pacote na nuvem e toque em **Baixar e atualizar**.
6. Mantenha o telefone repousado diretamente ao lado do estojo de carregamento até que a mensagem confirme a conclusão.

### Método C: atualizando com o Starfun (Huilian)

1. Certifique-se de que os fones estejam conectados ao telefone e que a tampa esteja aberta.
2. Abra o **Starfun** e toque no ícone **Configurações / Firmware**.
3. Compare a versão atual do firmware com a versão mais recente disponível na nuvem.
4. Toque em **Atualizar**. O aplicativo gravará os blocos de configuração sequencialmente.
5. Após a reinicialização, esqueça o dispositivo no menu Bluetooth do telefone e faça uma reinicialização simples.

## O que fazer se uma atualização travar ou falhar

Se uma atualização ficar presa em uma porcentagem específica (por exemplo, congelada em 45% por mais de 5 minutos):

1. **Não feche a tampa nem remova os fones.**
2. Verifique se o Bluetooth foi desconectado. Se o aplicativo permitir, toque em **Tentar novamente** ou reinicie o aplicativo, mantendo os fones no lugar.
3. Se os fones ficarem completamente sem resposta, siga nosso [guia de como redefinir AirPods falsificados](/pt/articles/how-to-reset-fake-airpods) para executar uma reinicialização forçada de 15 segundos do controlador.
4. Reabra o aplicativo de atualização — na maioria dos casos, o bootloader de recuperação permitirá que você grave novamente o pacote a partir de 0%.

## Guias relacionados de solução de problemas

- Os fones não aparecem no aplicativo de firmware? Consulte [AirPods falsificados não se conectam](/pt/articles/fake-airpods-wont-connect).
- Está enfrentando falhas após uma atualização? Siga [Como redefinir AirPods falsificados](/pt/articles/how-to-reset-fake-airpods).
- Está usando uma configuração com o ecossistema Apple? Leia [AirPods falsificados funcionam com iPhones novos?](/pt/articles/do-fake-airpods-work-with-new-iphone).
- Precisa de links para baixar aplicativos? Visite [Aplicativos úteis](/pt/useful-apps).

## Perguntas frequentes

::: details Posso atualizar o firmware de réplicas de AirPods em um iPhone?
Não. O iOS não permite que aplicativos complementares gravem firmware via Bluetooth em acessórios que não sejam compatíveis com MFi. Você precisará pegar emprestado um telefone Android (ou usar um Mac compatível) para gravar as atualizações de firmware. Depois de atualizado, o firmware permanecerá permanentemente nos fones.
:::

::: details Uma atualização dará aos meus AirPods réplica a rede Buscar da Apple?
Não. A rede Buscar depende de certificados criptográficos proprietários da Apple que não podem ser adicionados por meio de atualizações de firmware.
:::

::: details Uma atualização de firmware pode inutilizar meus AirPods falsificados?
Sim, se a atualização for interrompida por uma bateria descarregada, pelo fechamento prematuro da tampa ou pela gravação de um binário de firmware destinado a um chipset diferente. Siga sempre a lista de verificação de segurança antes da atualização acima.
:::
