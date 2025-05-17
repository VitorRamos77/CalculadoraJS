// seleção de elementos
const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector('.igual');
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelectorAll(".num");
const botoesOperadores = document.querySelectorAll(".operador");

// variaveis globais
let operacaoAtual = ''
let operador = null
let valorAnterior = ''
let calculando = false

//funções
function atualizaDisplay(){
    display.value = operacaoAtual;
}

function insereNumero(evento){
    if(calculando){
        operacaoAtual = evento.target.textContent;
        calculando = false;
    }else{
        operacaoAtual += evento.target.textContent;
    }
    atualizaDisplay();
}

function inserePonto(){
    if(operacaoAtual.indexOf(".") === -1){
        operacaoAtual += '.';
        atualizaDisplay();
    }
}

function insereOperador(evento){
    if(calculando){

    }
    else{
        operador = evento.target.textContent;
        calculando = true;
        valorAnterior = operacaoAtual;
        operacaoAtual = String(operador)
        atualizaDisplay();
        operacaoAtual = ''
    }
}

function calcula(){
    let n1 = parseFloat(valorAnterior);
    let n2 = parseFloat(operacaoAtual);
    let resultado = 0;
    if(operador !== null){
        switch(operador){
        case "+":
            resultado = n1 + n2
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            if(n2 !== 0){
                resultado = n1 / n2;
            } else{
                alert("Erro: Divisão por 0 não é permitida!")
                return
            }
            break;
        }
        operador = null;
        operacaoAtual = String(resultado);
        valorAnterior = operacaoAtual;
        atualizaDisplay();
        calculando = true;

    }
    
}

//eventos
botaoIgual.addEventListener("click", calcula);
botoesOperadores.forEach((botao) => botao.addEventListener("click", insereOperador))
botaoPonto.addEventListener("click", inserePonto)
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero))
