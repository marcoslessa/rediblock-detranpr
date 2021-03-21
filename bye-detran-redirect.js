// debug
console.log('ByeBye Detran Redirect is online');

// override da função do detran
const oldAtualizarTempo = atualizarTempo;
function atualizarTempo() {
    return true;
};

// altera a msg final
document.querySelector('.entrada div strong').innerHTML = '<s>A tela de resultado encerrará automaticamente em <blink><span id="tempoRestante" style="color: blue">5</span></blink> minutos caso não seja pressionado o botão <img src="images/back_finalizar.jpg" width="52" height="23" align="middle"> do teclado.</s><div style="color: green">Não se preocupe, alterei o código para que a página não mude sozinha 😉 <br>Quando quiser finalizar clique normalmente no botão <img src="images/back_finalizar.jpg" width="52" height="23" align="middle"> do teclado <a href="javascript:executarFinalizar()">ou clique aqui</a>.</div>';