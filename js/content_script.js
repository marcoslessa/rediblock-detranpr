// debug
console.log('%c RediBlock DetranPR está ativo ', 'background: green; color: white; display: block;');

// sobescreve a msg do DetranPR
if (document.querySelector('.entrada div strong').innerText === "A tela de resultado encerrará automaticamente em 5 minutos caso não seja pressionado o botão  do teclado.") {

    document.querySelector('.entrada div strong').innerHTML = '<s>A tela de resultado encerrará automaticamente em <blink><span id="tempoRestante" style="color: blue">5</span></blink> minutos caso não seja pressionado o botão <img src="images/back_finalizar.jpg" width="52" height="23" align="middle"> do teclado.</s><div style="color: green">Não se preocupe, alterei o código para que a página não mude sozinha 😉 <br>Quando quiser finalizar clique normalmente no botão <img src="images/back_finalizar.jpg" width="52" height="23" align="middle"> do teclado <a href="javascript:executarFinalizar()">ou clique aqui</a>.</div>';
}

// carrega o código na página original
var el = document.createElement('script');
el.src = chrome.runtime.getURL('js/rediblock-detranpr.js');

el.onload = function () {
    this.remove();
};

(document.head || document.documentElement).appendChild(el);