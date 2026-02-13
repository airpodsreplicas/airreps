---
description: "Guia de contribuição: Fork, alterações e Pull Request."
---

# Diretrizes de Contribuição

Estamos encantados com seu interesse em contribuir para o nosso projeto. Para agilizar seu processo de contribuição, fornecemos um guia detalhado, passo a passo, abaixo.

::: tip
Para facilitar o gerenciamento de suas contribuições, recomendamos o uso do [GitHub Desktop](https://desktop.github.com/), um cliente GitHub baseado em interface gráfica.
:::

## Forkando e Clonando o Repositório

Siga estas etapas para forkar o repositório, cloná-lo, criar um novo branch e configurar seu ambiente de desenvolvimento local:

1. Vá para a página do GitHub do projeto [clicando aqui](https://github.com/AirPodsReplicas/AirReps)
2. Clique em `Fork` no canto superior direito. Isso criará uma cópia do repositório em sua conta do GitHub
3. Abra o [GitHub Desktop](https://desktop.github.com/).
4. No menu superior do GitHub Desktop, navegue até `File` > `Clone Repository...`.
5. Na categoria GitHub.com, você deve ver o repositório que você forkou.
6. Para clonar o repositório, clique em `Clone`.
7. Após a conclusão do processo de clonagem, navegue até `Current Branch` e selecione `New Branch`. Aqui, insira um nome descritivo para seu novo branch.

::: warning
O branch principal (main) é protegido. Como tal, a edição direta não é permitida. Sempre crie um novo branch para suas alterações.
:::

8. Navegue até o diretório `airreps` em seu ambiente local.
9. Abra o projeto em um Ambiente de Desenvolvimento Integrado (IDE) de sua preferência. Recomendamos o [Visual Studio Code](https://code.visualstudio.com/), um IDE gratuito e rico em recursos. Você também pode usar IDEs alimentados por IA como o [Cursor](https://cursor.com/) ou o [Antigravity do Google](https://antigravity.google), que podem facilitar muito a contribuição ajudando com sugestões de código e documentação.

## Configurando o Ambiente de Desenvolvimento

Escolha entre as duas opções abaixo para configurar seu ambiente de desenvolvimento:

### Opção 1 (Recomendada)

Para configurar um ambiente de desenvolvimento ideal:

1. [Instale o Bun](https://bun.sh/). Este projeto usa o Bun como gerenciador de pacotes e runtime.
2. [Instale o Node.js](https://nodejs.org/). Recomendamos a versão Long-Term Support (LTS).
3. Após a instalação, abra o terminal dentro do seu IDE e execute o seguinte comando:

```shell
bun install
```

4. Inicie o servidor de desenvolvimento da documentação:

```shell
bun run docs:dev
```

5. O terminal exibirá uma URL local, como `http://localhost:5173`. Visite esta URL em seu navegador da web para ver a documentação. A página será atualizada automaticamente conforme você modifica os arquivos fonte.

### Opção 2

Este método permite que você trabalhe diretamente com arquivos markdown, embora possa não renderizar recursos específicos do VitePress com precisão.

1. Abra o [Visual Studio Code](https://code.visualstudio.com/) ou seu IDE preferido.
2. Instale a extensão [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) para o Visual Studio Code. Ela pode ser encontrada na aba `Extensions` na barra lateral.
3. Abra qualquer arquivo markdown do diretório `docs`.
4. Para habilitar o Markdown Preview, abra a paleta de comandos com `Ctrl + Shift + P` (Windows) ou `Cmd + Shift + P` (Mac).
5. Procure por `Markdown Preview` e selecione `Markdown: Open Preview`.

::: warning
Tenha em mente que o VitePress oferece recursos adicionais não disponíveis no markdown padrão. Portanto, este método pode não refletir precisamente a formatação final quando visualizado no site de documentação real.
:::

## Enviando Alterações

Depois de fazer as alterações, siga as etapas abaixo para enviá-las para revisão:

1. Se você escolheu a Opção 1 em [Configurando o Ambiente de Desenvolvimento](#opção-1-recomendada), certifique-se de que as páginas serão construídas corretamente executando o seguinte comando:

```shell
bun run docs:build
```

::: danger
Se a saída exibir `Command failed` ou qualquer outra mensagem de erro, há um problema. A mensagem de erro deve fornecer informações sobre o problema. Se você não tiver certeza sobre o problema, pode entrar em contato com nossos membros da equipe em nosso [Servidor do Discord](https://airreps.link/discord).
:::

2. Abra o GitHub Desktop. O painel esquerdo mostrará o número de arquivos alterados.
3. Você pode visualizar as alterações feitas em cada arquivo. Selecione um arquivo de cada vez e preencha o campo `Summary (required)`. Se necessário, forneça detalhes adicionais no campo `Description`. Clique em `Commit to the branch you created` para confirmar suas alterações.
4. Agora, clique em `Push changes to x` *(sendo x o nome do branch que você criou)* para enviar suas alterações para o GitHub.

::: tip
Se você confirmou todos os arquivos, muito bem! Sua próxima etapa será enviar suas alterações para o GitHub e criar um Pull Request.
:::

## Criando um Pull Request

Siga estas etapas para criar um pull request para propor a fusão de suas alterações no branch principal:

1. Com todas as suas alterações confirmadas e enviadas para o seu branch remoto, é hora de criar um pull request.
2. Vá para o seu repositório forkado no site do GitHub.
3. Clique em `New pull request`. Você será redirecionado para a página do repositório original.
4. Certifique-se de que o repositório base seja `base: main` e o repositório principal (head) seja `<seu_nome_de_usuario>/<nome_do_seu_branch>`.
5. Revise suas alterações e preencha o formulário com uma descrição clara do que você alterou e por quê. *para referência; você pode conferir este [exemplo de pull request](https://github.com/AirPodsReplicas/AirReps/pull/20).*
6. Clique em `Create pull request`.
7. Depois de enviar seu pull request, o GitHub Actions tentará construir suas alterações para detectar quaisquer problemas. Se não houver problemas, um contribuidor do repositório revisará suas alterações e as fundirá ou solicitará mais alterações.

## O Que Você Pode Contribuir?

Após uma fusão bem-sucedida, seu perfil do GitHub será incluído automaticamente na seção `Contributors` localizada na parte inferior da nossa página inicial. Caso prefira que seu perfil seja omitido desta seção por qualquer motivo, entre em contato com um membro de nossa equipe para assistência na remoção do perfil.

- **Corrigir erros de digitação ou erros** - Viu um erro? Envie uma correção rápida!
- **Atualizar informações desatualizadas** - Ajude a manter o guia atualizado
- **Adicionar novo conteúdo** - Documente novos complementos, recursos ou configurações
- **Melhorar a clareza** - Torne as explicações mais fáceis de entender
- **Adicionar capturas de tela** - Guias visuais são sempre úteis
- **Sugerir melhorias** - Tem ideias? Abra uma issue para discutir

Obrigado por seu compromisso em melhorar nosso projeto!
