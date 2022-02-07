const PIEDRA = "rock";
const PAPEL = "paper";
const TIJERA = "scissors";

const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;

let isPlaying = false;

const piedraBtn = document.getElementById("rock");
const papelBtn = document.getElementById("paper");
const tijeraBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

piedraBtn.addEventListener("click", () => {
    play(PIEDRA);
});

papelBtn.addEventListener("click", () => {
    play(PAPEL);
});

tijeraBtn.addEventListener("click", () => {
    play(TIJERA);
});

function play(userOption) {
    if(isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" + userOption + ".svg";

    resultText.innerHTML = "Eligiendo!";

    const interval = setInterval(function() {
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".svg";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);
    
        machineImg.src = "img/" + machineOption + ".svg";

        switch (result) {
            case EMPATE:
                resultText.innerHTML = "Empataste!";
                break;
            case GANASTE:
                resultText.innerHTML = "Ganaste!";
                break;
            case PERDISTE:
                resultText.innerHTML = "Perdiste!";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }
}

function calcResult(userOption, machineOption) {   
    if(userOption === machineOption) {
        return EMPATE;

    } else if(userOption === PIEDRA) {

        if(machineOption === PAPEL) return PERDISTE;
        if(machineOption === TIJERA) return GANASTE;

    } else if(userOption === PAPEL) {

        if(machineOption === TIJERA) return PERDISTE;
        if(machineOption === PIEDRA) return GANASTE;
        
    } else if(userOption === TIJERA) {

        if(machineOption === PIEDRA) return PERDISTE;
        if(machineOption === PAPEL) return GANASTE;
        
    }
}