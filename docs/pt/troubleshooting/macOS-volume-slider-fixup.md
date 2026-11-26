---
title: Controle Deslizante é Ineficaz no macOS
description: Corrija o problema do controle deslizante de volume do macOS em Macs com Intel. Uma solução alternativa simples para recuperar o controle da sua saída de áudio.
---

# O Problema: A barra deslizante de volume não funciona

Este é um dos problemas mais conhecidos na versão **Intel** do macOS, em que a barra deslizante de volume não controla o volume de forma gradual, funcionando apenas como um botão de ligar/desligar (isso afeta a maioria das réplicas, embora algumas não sejam afetadas). Como a Apple não vai corrigir isso, podemos contornar o problema usando uma [ferramenta de código aberto](https://github.com/briankendall/proxy-audio-device).

::: warning
Este guia é destinado a quem usa Macs com processador Intel (i3, i5, i7; não chips da série M). Se o seu Mac Apple Silicon (série M) não reproduz áudio com seus AirReps atuais, confira a seção [Outros Bugs Comuns](/pt/troubleshooting/other-common-bugs).
:::

## **Pré-requisitos**

Antes de começar o tutorial, verifique se você:
- Tem acesso `sudo` (sua conta do macOS precisa ter permissões de administrador)
- Tem o gerenciador de pacotes `brew` instalado (caso contrário, siga esta [seção](#brew-installation))

::: tip brew ou instalação manual
PS: usar o `brew` é muito mais fácil do que a instalação manual, mas se quiser pular o `brew`, siga as instruções [aqui](https://github.com/briankendall/proxy-audio-device#manual-installation).
:::

## **Instalação do `brew`** {#brew-installation}

Se você ainda não tem o `brew` instalado no seu sistema, comece por aqui. Acesse [esta página](https://brew.sh/), copie o comando e execute-o no Terminal.

<video src="/volume_fix/brew-installation.webm" poster="/volume_fix/brew-installation-poster.webp" width="500" height="443" autoplay loop muted playsinline aria-label="Instalação usando o Terminal"></video>

::: warning
Pode ser solicitado que você digite sua senha — digite-a normalmente (ela não aparece na tela enquanto você digita, mas está sendo registrada).
:::

## **Instalação**

### **Download**
Com tudo pronto, abra o Terminal e execute o seguinte comando:
`brew install --cask proxy-audio-device`

<video src="/volume_fix/app-installation.webm" poster="/volume_fix/app-installation-poster.webp" width="500" height="346" autoplay loop muted playsinline aria-label="instalar proxy-audio-device"></video>

::: tip Pause o áudio durante a instalação
Durante a instalação, é normal que o áudio do sistema dê pequenas falhas. Faça isso enquanto nenhum áudio estiver tocando ou sendo editado.
:::

### **Configuração**
1. Abra o Launchpad e execute o aplicativo recém-instalado `Proxy Audio Device Settings` para iniciar a configuração. Ele terá esta aparência:

![ícone do aplicativo](/volume_fix/app_icon.png)

2. Ao abrir, uma janela como esta aparecerá:

![interface do aplicativo](/volume_fix/app_window.png)

Não feche o tutorial ainda — a maioria das pessoas pode configurá-lo assim:

- `Proxy device name`: Nome da saída; você pode deixar como padrão.
- `Proxied device`: Fonte de áudio (selecione o nome do seu AirRep)
- `Buffer size`: Tempo permitido para o macOS processar o áudio (de forma simplificada) (**deixe como está**, pois 512 é suficiente para a maioria dos usuários)
- `Proxy device is active`: Como o programa funciona em segundo plano. Escolha entre estas opções:
    + Se não se importar com pequenos cortes em sons curtos, escolha `When proxied device is active`
    + Para a maioria das pessoas, escolha `When user is not idle`
    + Para áudio constante ou jogos, escolha `Always`.

3. Por fim, vá em Central de Controle > Som > ícone `>` e escolha o novo dispositivo de áudio (`Proxy Audio Device` por padrão).

<video src="/volume_fix/change-audio-device.webm" poster="/volume_fix/change-audio-device-poster.webp" width="500" height="558" autoplay loop muted playsinline aria-label="selecionar dispositivo de áudio"></video>

## **Efeitos colaterais**

Embora funcione bem na maior parte do tempo, alguns usuários podem notar estes detalhes:

::: details Sem ícone de "Som" na barra superior
Infelizmente, você precisará usar a Central de Controle para ajustar o áudio (ou usar um atalho de teclado).
:::

::: details Sem áudio ao desconectar
O aplicativo foi projetado para ficar sempre vinculado ao dispositivo escolhido. Você precisará selecionar novamente "Alto-falantes Internos" manualmente ao desconectar.
:::

::: details Estalos/chiados ou áudio em apenas um lado
Você pode resolver isso aumentando o tamanho do buffer ou escolhendo `Always` na opção `Proxy device is active` do aplicativo.
:::

<CommunityCta variant="stuck" />

## **Desinstalação**

Se quiser remover o aplicativo, execute este comando no Terminal:

`brew remove --cask proxy-audio-device`

...e reinicie o sistema.

## **Opcional: Enquete**

Criei uma enquete [aqui](https://poll-maker.com/poll5643879x05fb4568-166) para saber se essa solução está funcionando bem. É bem rápido de responder e ajuda muito a avaliar o método. Agradecemos se puder compartilhar sua experiência!

[![enquete](/volume_fix/poll.png)](https://poll-maker.com/poll5643879x05fb4568-166)
