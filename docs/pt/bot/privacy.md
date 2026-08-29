---
title: Política de Privacidade
description: 'Como o bot do Discord AirReps coleta, usa e protege dados.'
ogLabel: JURÍDICO
sidebar: false
---
# Política de privacidade

Esta página explica o que o bot do Discord AirReps coleta, por que mantemos esses dados e como você pode pedir que os removamos.

**Última atualização:** 23 de agosto de 2026

## Introdução

A equipe da AirReps administra o bot do Discord AirReps ("o Bot"), usado na comunidade [AirReps](https://airpodsreplicas.com). Esta Política de privacidade descreve como coletamos, usamos, armazenamos e protegemos informações quando você convida ou usa o Bot. Usar o Bot significa que você concorda com as práticas abaixo.

Estas páginas complementam nossos [Termos de serviço](/pt/bot/terms). O Discord também tem sua própria [Política de privacidade](https://discord.com/privacy).

## Informações que coletamos

O Bot mantém o que é necessário para executar os recursos listados nos Termos. Isso inclui:

- IDs de usuários do Discord, nomes de usuário, nomes de exibição, IDs de servidores (guildas) e IDs de canais
- IDs de cargos quando você escolhe um cargo de idioma ou quando as ferramentas da equipe precisam verificar permissões
- Uso de comandos (qual comando de barra foi executado e quando), incluindo registros opcionais de comandos da equipe
- O texto de feedback que você envia com `/feedback`
- Participações em sorteios: seu ID de usuário do Discord e, se o sorteio exigir, o UID do KakoBuy que você digitar
- Análises de membros: contagens de entradas e saídas, registros de data e hora de entrada, tempo de permanência, hora do dia das entradas/saídas e IDs usados para distinguir uma reentrada de uma primeira entrada
- Conteúdo e anexos de mensagens quando um recurso em tempo real precisa deles: proteção contra golpes (texto, assinaturas de imagens e uma cópia da primeira imagem para o relatório da moderação), o conversor do KakoBuy (URLs do Weidian / Taobao / 1688 / Tmall em uma mensagem) e o espelho do Reddit (texto e imagens do canal de anúncios configurado)

Esses dados são armazenados associados à sua identidade no Discord e aos servidores onde o Bot é usado. Os dados persistentes ficam em um banco de dados SQLite local na máquina que executa o Bot. A correspondência de golpes usa uma janela curta, mantida na memória, de mensagens recentes.

Não pedimos seu e-mail, número de telefone, dados de pagamento ou nome legal. Um UID do KakoBuy só é armazenado se você inserir um em um sorteio. Se você enviar esses dados à equipe por conta própria, isso está fora do Bot.

## Como usamos suas informações

Usamos esses dados para:

- Exibir catálogos de vendedores e auxiliares de pedidos (`/jenny`, `/hicity`, `/earhive`, `/ultimateguide`, `/wise`, `/text`, `/alipay`, `/eartip`, `/resethelp`)
- Converter moedas com `/convert`
- Atribuir os cargos de idioma que você escolher
- Enviar feedback para um canal da equipe
- Realizar sorteios (`/gs`) e validar UIDs do KakoBuy quando um anfitrião ativar essa opção
- Criar relatórios diários / semanais / mensais de membros e publicações de marcos
- Atualizar a contagem de membros do canal de voz
- Enviar uma mensagem direta de boas-vindas quando você entrar na guilda AirReps configurada
- Sinalizar spam de golpes entre canais, colocar a conta em timeout, excluir a sequência de mensagens, enviar uma mensagem direta para você e denunciar no chat da moderação
- Responder a links de marketplaces com uma URL de checkout do KakoBuy (código de afiliado `airreps`)
- Publicar anúncios selecionados do Discord em [r/airreps](https://www.reddit.com/r/airreps)
- Investigar falhas e manter um registro de auditoria da equipe quando o registro estiver ativado

Podemos consultar contagens agregadas de membros para melhorar o servidor. Não vendemos dados pessoais.

## Serviços de terceiros

O Bot se comunica com vários serviços para realizar as funções acima:

- **Discord** — a API que executa cada comando, evento, mensagem direta e timeout. Os termos e a política de privacidade do Discord se aplicam. Não controlamos o Discord.
- **Frankfurter (taxas do BCE)** — `/convert` envia o valor e os códigos de moeda para buscar uma taxa. As taxas ficam armazenadas em cache na memória por algumas horas.
- **Reddit** — quando o espelho está ativado, o texto e as imagens dos anúncios são enviados pela API do Reddit ao subreddit configurado.
- **KakoBuy** — as URLs de produtos convertidas são enviadas ao KakoBuy (incluindo um código de afiliado da AirReps) para que a resposta possa incluir um link de checkout e uma miniatura.

Só compartilhamos dados quando isso é necessário para operar esses recursos, quando exigido por lei ou para evitar danos graves. Não vendemos nem alugamos dados para publicidade.

## Retenção e exclusão de dados

Por quanto tempo algo permanece depende do recurso:

- **Sorteios** permanecem no SQLite até que um anfitrião os encerre ou exclua (participações, UIDs opcionais, vencedores).
- **Análises de membros** (contadores de entradas/saídas, agrupamentos por hora, IDs de membros que saíram, registros de data e hora de entrada) permanecem para que os relatórios diários/semanais/mensais e a detecção de reentradas continuem funcionando. Os registros de data e hora de entrada podem permanecer depois que alguém sai, para que o tempo de permanência seja preciso caso a pessoa volte.
- Os buffers **antigolpes** permanecem por pouco tempo na memória (dezenas de segundos). O relatório no canal da moderação, incluindo uma prévia de imagem salva, permanece no Discord como qualquer outra mensagem da equipe.
- O **feedback** é publicado em um canal da equipe e permanece lá como uma mensagem do Discord.
- Os **registros de comandos**, quando ativados, são mensagens do Discord em um canal de registros.
- As **publicações do Reddit** permanecem no Reddit de acordo com as próprias regras de retenção do Reddit.
- Os objetos do Discord armazenados em cache seguem o cache normal da API.

Se quiser uma cópia ou a exclusão de dados que armazenamos no SQLite (participação em sorteio, registro de data e hora de entrada e dados semelhantes), entre no [Discord da AirReps](https://airreps.link/discord) e envie uma mensagem à equipe. Trataremos as solicitações em um prazo razoável. Não podemos apagar mensagens, timeouts ou publicações do Reddit que agora estejam armazenados apenas no Discord ou no Reddit.

## Segurança

Limitamos quem, na equipe, pode ver os dados armazenados e usamos medidas técnicas de segurança comuns no host que contém o arquivo SQLite. Nenhuma configuração é perfeita. Se você acha que algo vazou ou foi acessado sem permissão, avise a equipe imediatamente.

## Alterações nesta Política de privacidade

Podemos revisar esta política quando o Bot ou a lei mudar. A data de "Última atualização" no início é a versão atual. Continuar usando o Bot após uma alteração significa que você aceita a nova política.

## Contato

Dúvidas sobre esta política ou pedidos de exclusão: entre no [Discord da AirReps](https://airreps.link/discord) e envie uma mensagem à equipe.
