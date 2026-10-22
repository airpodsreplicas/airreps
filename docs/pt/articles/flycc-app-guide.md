---
title: 'Guia do APK FlyCC: Como configurar e ajustar réplicas de AirPods Airoha'
description: 'Como baixar, instalar e usar o FlyCC com segurança — ajuste de EQ personalizado, mapeamento dos controles de toque, atualizações de firmware e solução de problemas de falhas de conexão.'
category: Usando suas réplicas
order: 13
---
# Guia do APK FlyCC: como configurar e ajustar réplicas de AirPods Airoha

FlyCC é o aplicativo complementar essencial para réplicas de AirPods que usam **chipsets Airoha** (incluindo Airoha 1562AE, 1562E, 1562F e 1571AM). Como os ajustes nativos do iOS da Apple oferecem apenas controles básicos, o FlyCC fornece acesso de baixo nível ao chip: ajuste de EQ paramétrico personalizado, calibração do sensor de toque, equilíbrio do Cancelamento Ativo de Ruído (ANC) e instalação de firmware via OTA.

> **Resposta rápida:** o FlyCC é um utilitário gratuito de terceiros para Android e macOS, desenvolvido especificamente para réplicas de AirPods baseadas em Airoha. Ele permite personalizar perfis de som por meio de um equalizador integrado, modificar a sensibilidade de apertos/toques e instalar atualizações de firmware via OTA. Ele não detectará réplicas equipadas com chips Huilian, BES ou Jieli básicos.

::: tip Android ou Mac necessário
O FlyCC não pode ser instalado pela App Store do Apple iOS devido às restrições da Apple para hardware de terceiros. Para configurar seus fones Airoha, instale o APK do Android em qualquer smartphone Android ou use a versão comunitária para macOS. Os ajustes salvos nos fones continuam ativos mesmo quando eles são reconectados a um iPhone.
:::

## Chipsets compatíveis

O FlyCC funciona exclusivamente com **hardware Airoha**. Se seus fones se conectarem, isso confirma que há um chip Airoha genuíno dentro deles:

- **Airoha 1562AE / 1571AM** — Suporte completo a recursos: calibração de ANC com dois microfones, EQ personalizado, opções de áudio espacial com rastreamento da cabeça e atualizações OTA.
- **Airoha 1562E / 1563E** — EQ padrão, controles de toque e ferramentas de firmware.
- **Airoha 1562F** — Controles legados de ANC e EQ.

Se o FlyCC ficar verificando indefinidamente e nunca detectar seus fones, seu par usa o chip de outro fabricante (como Huilian, que usa o [Starfun](/pt/useful-apps), ou TigerBuilder, que usa o [CloudCC](/pt/useful-apps)) ou um chip Jieli básico.

## Como baixar e instalar o FlyCC com segurança

Como o FlyCC se comunica com hardware Bluetooth não-MFi, ele é distribuído diretamente como APK, em vez de estar disponível no Google Play.

1. Baixe o APK verificado mais recente diretamente do [diretório de aplicativos úteis](/pt/useful-apps).
2. No seu dispositivo Android, acesse **Configurações → Segurança** e ative **"Instalar aplicativos desconhecidos"** para o navegador ou gerenciador de arquivos.
3. Abra o arquivo `.apk` baixado e toque em **Instalar**.
4. Conceda as permissões solicitadas de **Bluetooth / Dispositivos próximos** e **Localização**. (O Android exige permissões de localização para procurar periféricos Bluetooth de baixa energia; o FlyCC não rastreia dados de GPS.)

## Principais recursos e como usá-los

### 1. EQ personalizado e ajuste de áudio

De fábrica, alguns lotes de réplicas apresentam uma resposta de graves exagerada. O FlyCC inclui um equalizador de 10 bandas para ajustar a saída de áudio:

- **Redução de graves**: reduza os controles de 31Hz, 62Hz e 125Hz em 2–3dB para obter um palco sonoro mais limpo e neutro, semelhante ao dos AirPods Pro originais.
- **Clareza vocal**: aumente as bandas de 1kHz e 2kHz em 1,5dB para destacar podcasts e vocais.
- **Salvar no hardware**: depois de ajustar, toque em **Salvar nos fones**. O ajuste acústico é gravado diretamente no DSP Airoha, o que significa que o EQ personalizado continuará ativo quando você se reconectar ao iPhone, iPad ou PC.

### 2. Calibração de toque e gestos

Se seus fones acionarem pausas acidentais quando você os ajustar no ouvido, o FlyCC permite modificar a sensibilidade do sensor de pressão de 1 (toque mais leve) a 5 (aperto firme). Você também pode remapear toques simples, duplos e triplos para funções específicas.

### 3. Ajuste do cancelamento de ruído

No menu de ANC, o FlyCC permite calibrar independentemente os microfones de alimentação direta esquerdo e direito. Se um dos fones parecer ter uma pressão interna maior ou um cancelamento mais fraco, o controle deslizante de calibração reequilibra a inversão de fase.

## Atualização segura do firmware (OTA)

O FlyCC pode instalar binários de firmware atualizados para corrigir problemas de comunicação com o iOS ou melhorar a conectividade. No entanto, a instalação apresenta um risco inerente de inutilização do dispositivo se for interrompida:

1. **Carregue os dois fones e o estojo acima de 80%** antes de começar.
2. Mantenha o estojo de carregamento aberto, com os dois fones encaixados e a até 30 centímetros do celular.
3. Toque em **Verificar atualizações** no FlyCC. Se houver uma atualização disponível, baixe o pacote.
4. Toque em **Iniciar atualização**. **Não feche a tampa do estojo, desative o Bluetooth nem troque de aplicativo** até que a barra de progresso chegue a 100% e exiba "Atualização concluída com sucesso."
5. Quando terminar, deixe os fones no estojo fechado por 60 segundos antes de emparelhá-los novamente.

Para um guia completo sobre como instalar com segurança o firmware de todos os chipsets de réplicas, leia [Como atualizar o firmware de AirPods falsos](/pt/articles/how-to-update-fake-airpods-firmware).

## Solução de problemas de conexão do FlyCC

Se o FlyCC se recusar a localizar seus fones:

- **Verifique a conexão de áudio ativa do celular**: certifique-se de que os fones já estejam emparelhados nas configurações nativas de Bluetooth do Android antes de abrir o FlyCC.
- **Conceda permissões para Dispositivos próximos**: no Android 12 e em versões mais recentes, o FlyCC não consegue detectar dispositivos Bluetooth LE sem que a permissão **"Dispositivos próximos"** esteja ativada.
- **Identifique seu chip**: se seus fones se recusarem a conectar ao FlyCC, tente fazer uma busca com o **CloudCC** ou o **Starfun**. Se nenhum aplicativo conseguir se conectar, consulte [Como identificar AirPods falsos](/pt/articles/how-to-spot-fake-airpods) para verificar se há um clone Jieli básico.
- **Limpe o cache de emparelhamento**: se as conexões caírem, redefina o controlador usando nosso [guia de redefinição](/pt/articles/how-to-reset-fake-airpods).

## Guias relacionados

- Usa réplicas com Android diariamente? Consulte [Réplicas de AirPods no Android](/pt/articles/airpods-replicas-on-android).
- Precisa de utilitários para outros chips? Confira o [catálogo completo de aplicativos úteis](/pt/useful-apps).
- Os fones se recusam a conectar? Siga o passo a passo em [AirPods falsos não conectam](/pt/articles/fake-airpods-wont-connect).
- Procurando modelos Airoha verificados? Consulte o [diretório de vendedores confiáveis](/pt/links/info).

## Perguntas frequentes

::: details O FlyCC é seguro para instalar no meu celular?
Sim. Os APKs hospedados no diretório comunitário de aplicativos úteis são extraídos de cadeias oficiais de fornecimento dos fabricantes e verificados para garantir que não contenham malware. O aplicativo exige apenas acesso ao Bluetooth para se comunicar com o processador de áudio Airoha.
:::

::: details Posso usar o FlyCC em um iPhone?
Não. A Apple não permite que aplicativos de terceiros acessem perfis seriais Bluetooth brutos para hardware não-MFi. Você precisa usar um celular Android ou um Mac para alterar os ajustes do FlyCC. No entanto, todas as alterações de EQ e controles são gravadas permanentemente na memória interna dos fones, portanto são transferidas automaticamente para o iPhone.
:::

::: details Por que o FlyCC informa "Dispositivo não encontrado"?
O motivo mais comum é uma incompatibilidade de chip: o FlyCC funciona apenas com chips Airoha. Se você possui um modelo Huilian, use o Starfun; se possui um modelo TigerBuilder, use o CloudCC. Se nenhum deles se conectar, provavelmente você tem um dispositivo Jieli básico.
:::
