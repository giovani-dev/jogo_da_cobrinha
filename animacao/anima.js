import { teste } from "./modulo/jogador.js";

var eixo_x = 0;
var eixo_y = 0;
var velocidade = 5;

window.onload=function(){
    var caixa = document.getElementById("caixa");
    var comida = document.getElementById("comida");
    var tela = document.getElementById("tela");
    imprime_comida();   
}

function movimenta_eixo_x(valor){
    eixo_x += valor;
    // console.log(eixo_y+'px')
    caixa.style.marginLeft = eixo_x+"px";
}

function movimenta_eixo_y(valor){
    eixo_y += valor;
    // console.log(eixo_y+'px')
    caixa.style.marginTop = eixo_y+"px";
}

function gera_posicao_comida(){
    return Math.floor(Math.random()* (500 - tela.getBoundingClientRect().left)) + tela.getBoundingClientRect().left;
}

function imprime_comida(){
    comida.style.marginLeft = gera_posicao_comida()+'px';
    comida.style.marginTop = gera_posicao_comida()+'px';
}

function colide_esquerda(){
    return caixa.getBoundingClientRect().left <= tela.getBoundingClientRect().left;
}

function colide_topo(){
    return caixa.getBoundingClientRect().top <= tela.getBoundingClientRect().top;
}

function colide_jogador(){
    if(colide_topo()){
        movimenta_eixo_x(velocidade);
    }
    if(caixa.getBoundingClientRect().left >= (tela.getBoundingClientRect().right - caixa.getBoundingClientRect().width)){
        movimenta_eixo_x(-velocidade);
    }
    // if(){
    //     console.log('passou o topo');
    //     movimenta_eixo_y(velocidade);
    // }
    console.log('caixa top -> ', caixa.getBoundingClientRect().top);
    console.log('tela top -> ', tela.getBoundingClientRect().top);
}


let intervalo = setInterval(document.addEventListener("keypress", function(event){
    // Para cima (w)
    if(event.keyCode == 119){
        movimenta_eixo_y(-velocidade);
        clearInterval(intervalo);
    }
    // Para baixo (s)a
    if(event.keyCode == 115){
        movimenta_eixo_y(velocidade);
        clearInterval(intervalo);
    }
    // Direita (d)
    if(event.keyCode == 100){
        movimenta_eixo_x(velocidade);
        clearInterval(intervalo);
    }
    // Esquerda (a)
    if(event.keyCode == 97){
        movimenta_eixo_x(-velocidade);
        clearInterval(intervalo);
    }
    if((intervalo % 4) == 0 ){
        clearInterval(intervalo);
    }
    console.log(event.keyCode)
    colide_jogador();
}), 400);