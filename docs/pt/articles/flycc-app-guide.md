---
title: 'Guia do APK FlyCC: como configurar e ajustar réplicas de AirPods com Airoha'
description: 'Como baixar, instalar e usar o FlyCC com segurança — ajuste personalizado do EQ, mapeamento dos controles por toque, atualizações de firmware e solução de problemas de falhas de conexão.'
category: Usando suas réplicas
order: 13
---
# Guia do FlyCC APK: como configurar e ajustar réplicas de AirPods com Airoha

O FlyCC é o aplicativo complementar essencial para réplicas de AirPods com **chipsets Airoha** (incluindo Airoha 1562AE, 1562E, 1562F e 1571AM). Como os ajustes nativos do iOS da Apple oferecem apenas controles superficiais, o FlyCC dá acesso de baixo nível ao chip: ajustes personalizados de equalização paramétrica, calibração dos sensores de toque, equilíbrio do Cancelamento Ativo de Ruído (ANC) e instalação de firmware OTA.

> **Resposta rápida:** o FlyCC é um utilitário gratuito de terceiros para Android, iOS e macOS, desenvolvido especificamente para réplicas de AirPods com Airoha. Ele permite personalizar perfis de som com um equalizador integrado, ajustar a sensibilidade a apertos e toques e instalar atualizações de firmware via OTA. O aplicativo não detecta réplicas com chips Huilian, BES ou Jieli de baixo custo.

::: tip Android, iPhone ou Mac
O FlyCC está disponível como APK para Android e na App Store do iOS; os dois estão vinculados em [Aplicativos úteis](/pt/useful-apps#tigerbuilder). Você também pode usar a versão comunitária para macOS. Os ajustes salvos nos fones permanecem mesmo quando você troca de celular.
:::

## Chipsets compatíveis

O FlyCC funciona exclusivamente com **hardware Airoha**. Se os fones se conectarem, isso confirma que eles têm um chip Airoha:

- **Airoha 1562AE / 1571AM** — Suporte completo a recursos: calibração de ANC com dois microfones, equalização personalizada, controles de áudio espacial com rastreamento da cabeça e atualizações OTA.
- **Airoha 1562E / 1563E** — Equalização padrão, controles de toque e ferramentas de firmware.
- **Airoha 1562F** — Controles de ANC e equalização de modelos antigos.

Se o FlyCC fizer a busca indefinidamente sem detectar os fones, seu par usa um chip de outro fabricante (como Huilian, que utiliza [Starfun](/pt/useful-apps)) ou um chip Jieli de entrada.

## Como baixar e instalar o FlyCC com segurança

Como o FlyCC se comunica com hardware Bluetooth que não tem certificação MFi, ele é distribuído diretamente como APK, e não pela Google Play.

1. Baixe o APK verificado mais recente diretamente do [diretório de aplicativos úteis](/pt/useful-apps).
2. No dispositivo Android, acesse **Configurações → Segurança** e ative **"Instalar apps desconhecidos"** para o navegador ou gerenciador de arquivos.
3. Abra o arquivo `.apk` baixado e toque em **Instalar**.
4. Conceda as permissões solicitadas de **Bluetooth / Dispositivos por perto** e **Localização**. (O Android exige permissões de localização para buscar dispositivos Bluetooth Low Energy; o FlyCC não rastreia dados de GPS.)

## Principais recursos e como usá-los

### 1. Equalização personalizada e ajustes de áudio

Alguns lotes de réplicas apresentam graves exagerados de fábrica. O FlyCC inclui um equalizador de 10 bandas para ajustar a saída de áudio:

- **Redução de graves**: baixe os controles de 31Hz, 62Hz e 125Hz em 2–3dB para obter um som mais limpo e neutro, semelhante ao dos AirPods Pro originais.
- **Clareza vocal**: aumente as bandas de 1kHz e 2kHz em 1,5dB para destacar podcasts e vocais.
- **Salvar nos fones**: depois de ajustar, toque em **Salvar nos fones**. Os ajustes acústicos são gravados diretamente no DSP Airoha, mantendo a equalização personalizada ativa quando você se reconectar ao iPhone, iPad ou PC.

### 2. Calibração de toques e gestos

Se os fones pausarem a reprodução acidentalmente quando você os ajusta na orelha, o FlyCC permite regular a sensibilidade do sensor de pressão de 1 (toque mais leve) a 5 (aperto firme). Você também pode atribuir funções específicas a um, dois ou três toques.

### 3. Ajustes do cancelamento de ruído

No menu ANC, o FlyCC permite calibrar separadamente os microfones de captação externa esquerdo e direito. Se um dos fones parecer ter mais pressão no ouvido ou um cancelamento mais fraco, o controle deslizante de calibração reequilibra a inversão de fase.

## Atualização segura de firmware (OTA)

O FlyCC pode instalar binários de firmware atualizados para corrigir problemas de comunicação com o iOS ou melhorar a conectividade. No entanto, a instalação apresenta risco de inutilizar o dispositivo se for interrompida:

1. **Carregue os dois fones e o estojo acima de 80%** antes de começar.
2. Mantenha o estojo de carregamento aberto, com os dois fones dentro, a até 30 centímetros do celular.
3. Toque em **Verificar atualizações** no FlyCC. Se houver uma atualização disponível, baixe o pacote.
4. Toque em **Iniciar atualização**. **Não feche a tampa do estojo, desligue o Bluetooth nem troque de aplicativo** até a barra de progresso chegar a 100% e exibir "Atualização concluída".
5. Quando terminar, deixe os fones dentro do estojo fechado por 60 segundos antes de emparelhá-los novamente.

Para ver um guia completo sobre como atualizar com segurança o firmware de réplicas com todos os tipos de chipset, leia [Como atualizar o firmware de AirPods falsos](/pt/articles/how-to-update-fake-airpods-firmware).

## Solução de problemas de conexão com o FlyCC

Se o FlyCC não detectar os fones:

- **Verifique a conexão de áudio ativa do celular**: confirme que os fones já estão emparelhados nas configurações nativas de Bluetooth do Android antes de abrir o FlyCC.
- **Conceda a permissão para dispositivos por perto**: no Android 12 e versões posteriores, o FlyCC não consegue detectar dispositivos Bluetooth LE sem a permissão "Dispositivos por perto".
- **Identifique o chip**: se os fones não se conectarem ao FlyCC, tente buscá-los com o **CloudCC** ou o **Starfun**. Se nenhum aplicativo conseguir se conectar, consulte [Como identificar AirPods falsos](/pt/articles/how-to-spot-fake-airpods) para verificar se eles têm um chip Jieli de baixo custo.
- **Limpe o cache de emparelhamento**: se as conexões caírem, redefina o controlador seguindo nosso [Guia de redefinição](/pt/articles/how-to-reset-fake-airpods).

## Guias relacionados

- Usa réplicas no Android todos os dias? Veja [Réplicas de AirPods no Android](/pt/articles/airpods-replicas-on-android).
- Precisa de utilitários para outros chips? Consulte o [catálogo completo de aplicativos úteis](/pt/useful-apps).
- Os fones não conectam? Siga as etapas de [AirPods falsos não conectam](/pt/articles/fake-airpods-wont-connect).
- Procurando modelos Airoha verificados? Consulte o [diretório de vendedores confiáveis](/pt/links/info).

## Perguntas frequentes

::: details O FlyCC é seguro para instalar no meu celular?
Sim. Os APKs hospedados no diretório comunitário de aplicativos úteis são extraídos das cadeias oficiais de fornecimento dos fabricantes e verificados para garantir que não contenham malware. O aplicativo exige apenas acesso ao Bluetooth para se comunicar com o processador de áudio Airoha.
:::

::: details Posso usar o FlyCC em um iPhone?
Sim. O FlyCC está disponível na App Store do iOS e como APK para Android; os dois estão vinculados em [Aplicativos úteis](/pt/useful-apps#tigerbuilder). Todas as alterações de equalização e controles são gravadas permanentemente na memória interna dos fones, então permanecem mesmo quando você troca de dispositivo.
:::

::: details Por que o FlyCC exibe "Dispositivo não encontrado"?
O motivo mais comum é a incompatibilidade do chip: o FlyCC só funciona com chips Airoha. Se você tem um modelo Huilian, use o Starfun. Os modelos TigerBuilder usam o FlyCC; o CloudCC é apenas uma alternativa caso o FlyCC apresente problemas com a permissão de armazenamento. Se nenhum dos aplicativos conseguir se conectar, provavelmente você tem um modelo Jieli de baixo custo.
:::
