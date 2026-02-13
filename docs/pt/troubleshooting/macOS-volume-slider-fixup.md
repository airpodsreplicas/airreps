---
description: "Correção do volume dos AirPods no macOS (Intel)."
---

# O Problema: A Barra Deslizante de Volume não funciona.

Este é um dos problemas mais conhecidos na versão **Intel** do macOS, onde a barra deslizante que controla o volume do áudio simplesmente não funciona, agindo apenas como um interruptor (acontece com a maioria das réplicas existentes, embora algumas não sejam afetadas). Embora a própria Apple nunca vá investigar esse problema, podemos contorná-lo com uma [ferramenta de código aberto](https://github.com/briankendall/proxy-audio-device).

:::warning
Este guia é destinado a quem possui Macs com processadores Intel (i3, i5, i7; não chips da série M). Se o seu Mac com Apple Silicon (chips da série M) não reproduzir áudio com seus AirReps atuais, consulte a seção [Bugs Comuns](/troubleshooting/other-common-bugs.md).
:::

## **Pré-requisito**

Antes do tutorial, certifique-se de que você:
- Tenha acesso `sudo` (ou que sua conta no macOS tenha acesso administrativo)
- Tenha o instalador de pacotes `brew` (se não, siga esta [seção](#instalação-do-brew))

:::tip
OBS: usar o `brew` é muito mais fácil do que a instalação manual, mas se você quiser pular o uso do `brew`, pode ler e seguir os passos [aqui](https://github.com/briankendall/proxy-audio-device#manual-installation).
:::

## **Instalação do `brew`**

Se você ainda não tem o `brew` instalado no seu sistema, podemos começar por aqui. Acesse [esta página](https://brew.sh/), copie o comando e execute-o no Terminal.

![Instalação usando Terminal](/volume_fix/brew-installation.gif)

:::warning
Você pode ser solicitado a inserir sua senha; vá em frente e digite-a como de costume (sua senha pode parecer oculta, mas ela está sendo processada).
:::

## **Instalação**

### **Download**
Com tudo pronto, abra o Terminal e execute o seguinte comando:
`brew install --cask proxy-audio-device`

![instalar proxy-audio-device](/volume_fix/app-installation.gif)

:::tip
Durante a instalação, é normal que o áudio do sistema falhe um pouco. Certifique-se de fazer isso em um ambiente sem programas de manipulação de áudio em execução.
:::

### **Configuração**
1. Vá ao Launchpad e execute o recém-instalado `Proxy Audio Device Settings` para iniciar o processo de configuração. O ícone se parece com isto:

![ícone do app](/volume_fix/app_icon.png)

2. Ao abrir, uma janela aparecerá assim:

![ui do app](/volume_fix/app_window.png)

Não se sinta tentado a fechar este tutorial; você pode configurar tudo assim:

- `Proxy device name`: Nome da saída, você pode deixar como está.
- `Proxied device`: Fonte de áudio (selecione o nome do seu AirRep)
- `Buffer size`: Tempo permitido para o macOS processar o áudio (simplificado) (por favor, **deixe como está**, pois 512 é suficiente para a maioria)
- `Proxy device is active`: Como o software funciona em segundo plano. Aqui as coisas ficam interessantes, mas resume-se a estas opções:
    + Se você não se importa com pequenos cortes no áudio (sons de curta duração), escolha `When proxied device is active`
    + Para a maioria das pessoas, escolha `When user is not idle`
    + Para quem quer áudio consistente ou para jogos, escolha `Always`.

3. Por fim, navegue até a Central de Controle > Som > ícone ">" e escolha o novo dispositivo de áudio criado (`Proxy Audio Device` por padrão).

![escolher dispositivo de áudio](/volume_fix/change-audio-device.gif)

## **Efeitos Colaterais**

Embora funcione bem na maioria das vezes, alguns usuários podem enfrentar estes problemas:
::: details Sem ícone de "Sons" na barra superior
Infelizmente, você terá que navegar pela "Central de Controle" para controlar o áudio (ou usar atalhos).
:::

:::details Sem áudio ao desconectar
O app foi projetado para estar sempre vinculado ao dispositivo escolhido. Você terá que selecionar manualmente os "Auto-falantes Internos" por conta própria.
:::

:::details Estalos, ruídos ou áudio de um lado só
Você pode contornar isso aumentando o tamanho do buffer ou escolhendo a opção `Always` em `Proxy Device in Active` no aplicativo.
:::

## **Desinstalação**

Se desejar remover o app, basta executar este comando no Terminal:

`brew remove --cask proxy-audio-device`

...e depois reinicie o seu sistema.

## **Opcional: Pesquisa**

Criei uma enquete [aqui](http://poll-maker.com/poll5643879x05fb4568-166) para descobrir se esta solução alternativa está realmente funcionando. É muito simples de participar e ajuda muito a ter uma visão geral desta solução. Agradeceria muito se você compartilhasse sua opinião!

[![enquete](/volume_fix/poll.png)](http://poll-maker.com/poll5643879x05fb4568-166)
