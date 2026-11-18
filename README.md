# Black Friday — Ateliê Agulha e Pano

Site estático responsivo, pronto para GitHub Pages.

## Nome do repositório

`atelie-agulha-e-pano-black-friday`

## Endereço do site

`https://SEU-USUARIO.github.io/atelie-agulha-e-pano-black-friday/`

Substitua `SEU-USUARIO` pelo nome de usuário real do GitHub.

## Como publicar

1. No GitHub, clique em **New repository**.
2. Nomeie o repositório `atelie-agulha-e-pano-black-friday` e selecione **Public**.
3. Envie **todos os arquivos e a pasta `assets`**, mantendo a estrutura original.
4. Acesse **Settings → Pages**.
5. Em **Build and deployment**, selecione **Deploy from a branch**, branch `main`, pasta `/(root)`; salve.
6. Depois da publicação, acesse a URL acima.

## Arquivos

- `index.html` — página principal.
- `curso.html` — página-base para cada curso; ainda não contém módulos inventados.
- `style.css` — visual desktop e mobile.
- `script.js` e `detalhe.js` — interações e navegação.
- `cursos.js` — lista de cursos, preços, fotos e links de compra.
- `assets/boneca-destaque.png` — foto original fornecida pelo usuário (não foi alterada).

## Como adicionar as fotos e os links de compra

Em `cursos.js`, edite os campos do curso:

```js
foto: 'assets/nome-da-foto.jpg',
checkout: 'https://endereco-do-checkout-confirmado.com/...'
```

Envie a foto com esse nome para a pasta `assets`. Use URLs reais de checkout. Enquanto `checkout` estiver vazio, o botão de compra na página interna permanece desativado. A vitrine já permite abrir a página interna de cada curso.

Os preços foram preenchidos conforme a seleção informada anteriormente. Confira antes de publicar a promoção. Fotos individuais, módulos, aulas, condições comerciais e checkout ainda precisam ser adicionados.

Não hospede dados sensíveis ou segredos de API neste repositório público.
