var eixo_x = 0;
var eixo_y = 0;
var velocidade = 5;


window.onload=function(){
    var caixa = document.getElementById("caixa");
    var comida = document.getElementById("comida");
    var tela = document.getElementById("tela");
    caixa.style.marginLeft = eixo_x+"px";
    caixa.style.marginTop = eixo_y+"px";
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
    return Math.floor(Math.random()* (720 - tela.getBoundingClientRect().left)) + tela.getBoundingClientRect().left;
}

function imprime_comida(){
    comida.style.marginLeft = gera_posicao_comida()+'px';
    comida.style.marginTop = gera_posicao_comida()+'px';
}

function gera_jogador_invertido(){
    
}

function colide_jogador_com_laterais_da_tela(){
    console.log("jogador -> margem esquerda: "+caixa.style.marginLeft);
    console.log("jogador ->  margem do topo: "+caixa.style.marginTop);
    if(eixo_x <= 0){
        console.log("menor que zero");
    }
}

// var intervalo = setInterval(function deslocamento(){
var intervalo = setInterval(document.addEventListener("keypress", function(event){
    colide_jogador_com_laterais_da_tela();
    // Para cima (w)
    if(event.keyCode == 119){
        movimenta_eixo_y(-velocidade);
        clearInterval(intervalo);
    }
    // Para baixo (s)
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
}), 400);
// }, 400);