const btn = document.getElementById('btn'); // <- Pego o elemento do botao pelo seu ID
const div_01 = document.getElementById('div_01'); // <- Pego o elemento da div 01 pelo seu ID
const div_02 = document.getElementById('div_02'); // <- Pego o elemento da div 02 pelo seu ID

var _status = true; // <- Crio uma variavel de controle para saber se o botao foi clicado ou nao

btn.addEventListener('click', () => { // <- Adiciono um evento ao botao, que quando clicado chama a funcao  
    console.log('Btao clicado')

    if (_status) { // <- Se o status for verdadeiro(true), adiciono as classes para mover as divs
        div_01.classList.add('abrir-direita'); 
        div_02.classList.add('abrir-esquerda');
        _status = false; 
    } else { // <- Se o status for falso(false), removo as classes para voltar as divs para o lugar
        div_01.classList.remove('abrir-direita');
        div_02.classList.remove('abrir-esquerda');
        _status = true; 
    }

}); 

/**
 * Links uteis:
 * 
 *  Sobre o addEventListener: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
 *  Controle de classes com js: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 */