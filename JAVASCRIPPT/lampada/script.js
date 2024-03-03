const TurnOn = document.getElementById( 'TurnOn' );
const TurnOff = document.getElementById( 'TurnOff' );
const lamp = document.getElementById( 'lamp' );

function verificationLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1 //VERIFICAÇÃO PARA VER SE A LAMPADA ESTA QUEBRADA OU NÃO ESSE PARAMETRO "INDEXOF" VERIFICA DENTRO DO SORCE "CAMINHO" SE TEM A PALAVRA QUEBRADO COMO O "IN" NO PYTHON SE TIVER ELE VAI ME RETORNA EU NUMERO MAIOR QUE -1 
}

function lampOn () {
    if ( !verificationLampBroken ()) { //VERIFICAÇÃO DA FUNÇÃO ACIMA "VERICATIONLAMPBROKEN"
        lamp.src = './img/ligada.jpg'; // AÇÃO PARA MUDAR IMG
    }
}

function lampOff (){
    if (!verificationLampBroken()) { //VERIFICAÇÃO DA FUNÇÃO ACIMA "VERICATIONLAMPBROKEN"
        lamp.src = './img/desligada.jpg'; // AÇÃO PARA MUDAR IMG
    }
}
function LampBroken () {
    lamp.src = './img/quebrada.jpg'; // AÇÃO PARA MUDAR IMG
}

TurnOn.addEventListener ('click', lampOn); // CLIKAR NO BOTAO DE LIGAR MUDA IMG PARA LIGADA
TurnOff.addEventListener ('click', lampOff); // CLIKAR NO BOTAO DE DESLIGAR MUDA IMG PARA DESLIGADA
lamp.addEventListener ('mouseover', lampOn); // PASSA O MOUSE EM CIMA DA IMG MUDA IMG
lamp.addEventListener ('mouseleave', lampOff); // PASSAR MOUSE FORA DA IMG MUDA A IMG
lamp.addEventListener ('dblclick', LampBroken); // DBLCLICK "DOBLECLICK"