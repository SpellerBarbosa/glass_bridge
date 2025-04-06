import  Piso  from './piso.js';

function jogar(){
    const game = document.querySelector(".game");
    game.innerHTML = ""
    game.style.pointerEvents = "auto"


    const totalLinhas = 5;
    let passosCertos = 0;

    const verificarVitoria = () =>{
        passosCertos++
        if(passosCertos === totalLinhas){
            alert("Parabens, voce sobrevieu ao desafio!")
        }
    }


    for(let i = 1; i <= totalLinhas; i++){

        const ladoFraco =  Math.random() < 0.5 ? "esquerdo":"direito";

        const pisoEsquerdoFragil = ladoFraco === 'esquerdo';
        const pisoDireitoFragil =  ladoFraco === 'direito';

        new Piso(`Piso ${i}-E`, pisoEsquerdoFragil, game, verificarVitoria);
        new Piso(`Piso ${i}-D`, pisoDireitoFragil, game, verificarVitoria);
    }
    
}

function reset(){
    const game = document.querySelector(".game");
    game.innerHTML ="";
    game.style.pointerEvents = "auto"
    jogar();
}

window.jogar = jogar;
window.reset = reset