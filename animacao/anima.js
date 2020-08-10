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
    return Math.floor(Math.random()* (720 - tela.getBoundingClientRect().left)) + tela.getBoundingClientRect().left;
}

function imprime_comida(){
    comida.style.marginLeft = gera_posicao_comida()+'px';
    comida.style.marginTop = gera_posicao_comida()+'px';
}

function altera_tamanho_jogador(eixo, obj, valor){
    var pos_att = obj.getBoundingClientRect().width+valor;
    switch(eixo){
        case 'x':
            obj.style.width = pos_att+'px';
            break;
        case 'y':
            obj.style.heigth = pos_att+'px';
            break;
    }
}

function colide_jogador(){
    if(caixa.getBoundingClientRect().left <= tela.getBoundingClientRect().left){
        movimenta_eixo_x(velocidade)
        altera_tamanho_jogador('x', caixa, -velocidade);
        console.log('E maior que a tela');
    }
    else if(caixa.getBoundingClientRect().rigth >= tela.getBoundingClientRect().rigth){
        movimenta_eixo_x(-velocidade)
        altera_tamanho_jogador('x', caixa, -velocidade);
        console.log('é maior que a tela');
    }
    else if(caixa.getBoundingClientRect().width < 15){
        movimenta_eixo_x(-velocidade)
        altera_tamanho_jogador('x', caixa, velocidade);
    }
    console.log("jogador -> margem esquerda: "+caixa.style.marginLeft);
    console.log("jogador ->  margem do topo: "+caixa.style.marginTop);
    // if(eixo_x)
}

// var intervalo = setInterval(function deslocamento(){
var intervalo = setInterval(document.addEventListener("keypress", function(event){
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
    console.log('tela direita -> '+tela.getBoundingClientRect().right);
    console.log('caixa direita -> '+caixa.getBoundingClientRect().right);
    colide_jogador();
}), 400);
// }, 400);