---
title: 'Guia do app FlyCC: ajuste réplicas de AirPods com Airoha'
description: 'Como baixar, instalar e usar o FlyCC com segurança — ajuste de EQ personalizado, mapeamento dos controles táteis, atualizações de firmware e solução de problemas de falhas de conexão.'
category: Usando suas réplicas
order: 13
---
# Guia do FlyCC APK: como configurar e ajustar réplicas de AirPods com Airoha

O FlyCC é o aplicativo complementar essencial para réplicas de AirPods com **chipsets Airoha** (incluindo Airoha 1562AE, 1562E, 1562F e 1571AM). Como os ajustes nativos do iOS da Apple oferecem apenas controles superficiais, o FlyCC dá acesso de baixo nível ao chip: ajustes personalizados de equalização paramétrica, calibração do sensor de toque, equilíbrio do cancelamento ativo de ruído (ANC) e instalação de firmware via OTA.

> **Resposta rápida:** o FlyCC é um utilitário gratuito de terceiros para Android, iOS e macOS, desenvolvido especificamente para réplicas de AirPods com Airoha. Ele permite personalizar perfis de som usando um equalizador integrado, ajustar a sensibilidade a apertos/toques e instalar atualizações de firmware via OTA. O aplicativo não detecta réplicas com chips Huilian, BES ou Jieli de baixo custo.

::: tip Android, iPhone ou Mac
O FlyCC está disponível como APK para Android e na App Store do iOS; ambos estão vinculados em [Aplicativos úteis](/pt/useful-apps#tigerbuilder). Você também pode usar a versão comunitária para macOS. Os ajustes salvos nos fones persistem mesmo quando você troca de celular.
:::

<CommunityCta variant="apps" />

## Chipsets compatíveis

O FlyCC funciona exclusivamente com **hardware Airoha / TigerBuilder**. Se os fones se conectarem, isso confirma que eles têm um chip Airoha genuíno:

| Chipset Airoha | Exemplos de modelos de réplicas | Compatibilidade com o FlyCC |
| :--- | :--- | :--- |
| **Airoha 1571AM** | Pro 3 V7 TB, Pro 2 V5.3 TB, AirPods 4 V3 TB | EQ completo, ANC, controles de toque, rastreamento da cabeça, OTA |
| **Airoha 1562AE** | Pro 2 V5.2 TB, AirPods Max V3 TB, Pro 1 V4.9 | EQ completo, ANC, controles de toque, rastreamento da cabeça, OTA |
| **Airoha 1563E / 1562E** | Pro 3 V6 TB, AirPods 4 V2 TB, AirPods 2 V3E | EQ padrão, controles de toque, ferramentas de firmware |
| **Airoha 1561M / 1562F** | AirPods Max V3P / V2 Metal, modelos antigos | EQ e ferramentas básicas de firmware |

Se o FlyCC ficar procurando indefinidamente sem detectar os fones, seu par usa o chip de outro fabricante (como Huilian, que usa o [StarFun](/pt/articles/starfun-app-guide)) ou um chip Jieli de entrada.

## Como baixar e instalar o FlyCC com segurança

Como o FlyCC se comunica com dispositivos Bluetooth que não são MFi, ele é distribuído diretamente como APK, em vez de pela Google Play.

1. Baixe o APK verificado mais recente diretamente do [diretório de Aplicativos úteis](/pt/useful-apps).
2. No dispositivo Android, acesse **Configurações → Segurança** e ative **"Instalar apps desconhecidos"** para o navegador ou gerenciador de arquivos.
3. Abra o arquivo `.apk` baixado e toque em **Instalar**.
4. Conceda as permissões solicitadas de **Bluetooth / Dispositivos próximos** e **Localização**. (O Android exige permissões de localização para buscar periféricos Bluetooth de baixo consumo; o FlyCC não rastreia dados de GPS).

## Principais recursos e como usá-los

### 1. EQ personalizado e ajuste de áudio

Alguns lotes de réplicas vêm, de fábrica, com graves exagerados. O FlyCC inclui um equalizador de 10 bandas para refinar o áudio:

- **Redução dos graves**: baixe os controles deslizantes de 31Hz, 62Hz e 125Hz em 2–3dB para obter um palco sonoro mais limpo e neutro, semelhante ao dos AirPods Pro originais.
- **Clareza vocal**: aumente as bandas de 1kHz e 2kHz em 1.5dB para destacar podcasts e vocais.
- **Salvar nos fones**: depois de ajustar, toque em **Salvar nos fones**. O ajuste acústico é gravado diretamente no DSP Airoha, mantendo o EQ personalizado ativo quando você se reconectar ao iPhone, iPad ou PC.

### 2. Calibração de toque e gestos

Se os fones pausarem a reprodução por acidente quando você os ajeitar no ouvido, o FlyCC permite ajustar a sensibilidade do sensor de pressão de 1 (toque mais leve) a 5 (aperto firme). Você também pode reconfigurar os comandos de toque único, duplo e triplo para funções específicas.

### 3. Ajuste do cancelamento de ruído

No menu ANC, o FlyCC permite calibrar separadamente os microfones de realimentação dos lados esquerdo e direito. Se um dos fones parecer ter mais pressão no ouvido ou um cancelamento mais fraco, o controle deslizante de calibração reequilibra a inversão de fase.

## Atualização segura de firmware (OTA)

O FlyCC pode instalar binários de firmware atualizados para corrigir erros de comunicação com o iOS ou melhorar a conectividade. No entanto, uma interrupção durante a instalação pode inutilizar os fones:

1. **Carregue os dois fones e o estojo acima de 80%** antes de começar.
2. Mantenha o estojo aberto, com os dois fones encaixados, a no máximo 30 centímetros do celular.
3. Toque em **Verificar atualizações** no FlyCC. Se houver uma atualização disponível, baixe o pacote.
4. Toque em **Iniciar atualização**. **Não feche a tampa do estojo, desligue o Bluetooth nem troque de aplicativo** até a barra de progresso chegar a 100% e exibir "Atualização concluída".
5. Quando terminar, deixe os fones no estojo fechado por 60 segundos antes de emparelhá-los novamente.

::: warning Observação sobre o Pro 3 V7 TB
No **AirPods Pro 3 V7 TB**, após uma atualização de firmware no FlyCC, a janela pop-up do iOS e o número de série desaparecem e precisam ser adicionados novamente no aplicativo FlyCC. O V7 Huilian (StarFun) não é afetado.
:::

Para ver um guia completo sobre como atualizar com segurança os chipsets de todas as réplicas, leia [Como atualizar o firmware de AirPods falsos](/pt/articles/how-to-update-fake-airpods-firmware).

## Solução de problemas de conexão do FlyCC

Se o FlyCC não detectar os fones:

- **Verifique a conexão de áudio ativa do celular**: confirme que os fones já estão emparelhados nas configurações de Bluetooth nativas do Android antes de abrir o FlyCC.
- **Conceda a permissão para Dispositivos próximos**: no Android 12 e versões mais recentes, o FlyCC não consegue detectar dispositivos Bluetooth LE sem a permissão "Dispositivos próximos".
- **Identifique o chip**: se os fones não se conectarem ao FlyCC, tente buscá-los com o **[StarFun](/pt/articles/starfun-app-guide)** (para chips Huilian) ou o **CloudCC** (apenas como alternativa para problemas antigos de permissão de armazenamento em modelos TB). Se nenhum aplicativo conseguir se conectar, consulte [Como identificar AirPods falsos](/pt/articles/how-to-spot-fake-airpods) para verificar se são uma cópia com chip Jieli de baixo custo.
- **Limpe o cache de emparelhamento**: se as conexões caírem, redefina o controlador usando nosso [Guia de redefinição](/pt/articles/how-to-reset-fake-airpods).

<CommunityCta variant="stuck" />

## Guias relacionados

- Tem uma réplica Huilian? Leia nosso [Guia do aplicativo StarFun](/pt/articles/starfun-app-guide).
- Usa réplicas no Android diariamente? Consulte [Réplicas de AirPods no Android](/pt/articles/airpods-replicas-on-android).
- Precisa de outros utilitários para chips? Confira o [catálogo completo de Aplicativos úteis](/pt/useful-apps).
- Procurando um modelo Airoha verificado? Faça o [questionário de 1 minuto](/pt/quiz) ou consulte o [Diretório de vendedores confiáveis](/pt/links/info).

## Perguntas frequentes

::: details É seguro instalar o FlyCC no meu celular?
Sim. Os APKs hospedados no diretório comunitário de Aplicativos úteis são obtidos de canais oficiais de fornecimento dos fabricantes e verificados quanto à presença de malware. O aplicativo exige apenas acesso ao Bluetooth para se comunicar com o processador de áudio Airoha.
:::

::: details Posso usar o FlyCC em um iPhone?
Sim. O FlyCC está disponível na App Store do iOS e como APK para Android; ambos estão vinculados em [Aplicativos úteis](/pt/useful-apps#tigerbuilder). Todas as alterações de EQ e controles são gravadas permanentemente na memória interna dos fones, então permanecem mesmo quando você troca de dispositivo.
:::

::: details Por que o FlyCC exibe "Dispositivo não encontrado"?
O motivo mais comum é a incompatibilidade do chip: o FlyCC funciona apenas com chips Airoha. Se você tem um modelo Huilian, use o StarFun. Os modelos TigerBuilder usam o FlyCC; o CloudCC é apenas uma alternativa caso o FlyCC encontre problemas de permissão de armazenamento. Se nenhum deles se conectar, provavelmente você tem um modelo Jieli de baixo custo.
:::
