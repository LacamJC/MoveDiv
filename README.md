# Demonstração de Animação com JavaScript e CSS

## Estrutura do Projeto

O projeto consiste nos seguintes arquivos:

- `index.html`: A estrutura HTML da página web, contendo as duas divs, o botão e a ligação para os arquivos CSS e JavaScript.
- `style.css`: A folha de estilos CSS que define a aparência das divs, do container e do botão, além de conter as classes responsáveis pela animação.
- `js/script.js`: O arquivo JavaScript que manipula os elementos HTML e adiciona/remove as classes de animação ao clicar no botão.

## Funcionamento

1.  **Estrutura HTML (`index.html`)**:
    -   Cria um `container` para centralizar e organizar as duas divs (`div-01` e `div-02`).
    -   Define duas divs com as classes iniciais `div-01` e `div-02` e IDs `div_01` e `div_02`, respectivamente.
    -   Adiciona um botão com o ID `btn` e a classe `btn` com o texto "Mover".
    -   Inclui o arquivo `style.css` para aplicar os estilos visuais.
    -   Inclui o arquivo `js/script.js` para adicionar a interatividade.

2.  **Estilos CSS (`style.css`)**:
    -   Define estilos básicos para o `container` (largura, margem, altura, borda, e utiliza Flexbox para centralizar as divs).
    -   Aplica estilos iniciais para as divs (`div-01` e `div-02`) como largura, altura e cor de fundo.
    -   A propriedade `transition: .5s ease all;` é crucial para criar a animação suave quando as propriedades CSS das divs são alteradas. Ela define que qualquer mudança de propriedade ocorrerá em 0.5 segundos com uma curva de aceleração "ease".
    -   Define estilos para o botão (`btn`) como largura, altura, cor de fundo, borda, raio da borda e margens.
    -   Cria duas classes CSS (`.abrir-direita` e `.abrir-esquerda`) que utilizam a propriedade `transform: translateX()` para deslocar as divs horizontalmente em 100 pixels para a direita e para a esquerda, respectivamente.

3.  **Interatividade JavaScript (`js/script.js`)**:
    -   Utiliza `document.getElementById()` para selecionar os elementos do botão (`btn`), da primeira div (`div_01`) e da segunda div (`div_02`) com base em seus IDs.
    -   Declara uma variável de controle chamada `_status` inicializada como `true`. Essa variável é usada para rastrear se a animação está ativa ou não.
    -   Adiciona um `EventListener` ao botão que escuta o evento de clique (`'click'`). Quando o botão é clicado, a função de callback é executada.
    -   Dentro da função de callback:
        -   Um `console.log('Botao clicado')` é usado para depuração, indicando que o botão foi clicado.
        -   Uma estrutura condicional `if (_status)` verifica o valor da variável `_status`.
            -   Se `_status` for `true` (o estado inicial ou quando as divs estão na posição original):
                -   `div_01.classList.add('abrir-direita')` adiciona a classe `abrir-direita` à primeira div, deslocando-a para a direita.
                -   `div_02.classList.add('abrir-esquerda')` adiciona a classe `abrir-esquerda` à segunda div, deslocando-a para a esquerda.
                -   `_status` é alterado para `false`, indicando que a animação está ativa.
            -   Se `_status` for `false` (quando as divs estão deslocadas):
                -   `div_01.classList.remove('abrir-direita')` remove a classe `abrir-direita` da primeira div, fazendo-a retornar à sua posição original.
                -   `div_02.classList.remove('abrir-esquerda')` remove a classe `abrir-esquerda` da segunda div, fazendo-a retornar à sua posição original.
                -   `_status` é alterado para `true`, indicando que as divs voltaram à posição inicial.

## Links Úteis

-   Sobre o `addEventListener`: [https://www.w3schools.com/jsref/met\_element\_addeventlistener.asp](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
-   Controle de classes com js (`classList`): [https://developer.mozilla.org/en-US/docs/Web/API/Element/classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
