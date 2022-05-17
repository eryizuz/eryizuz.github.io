const random = (min, max) => {
  console.log(Math.floor(Math.random() * (max - min + 1) + min));
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const options = ["piedra", "papel", "tijera"];
const piedra = options[0];
const papel = options[1];
const tijera = options[2];

let randomIndex = random(2, 9);
let playerOption;
let cpuOption;
let finalWinner;
const piedraBox = document.getElementById("piedra");
const papelBox = document.getElementById("papel");
const tijeraBox = document.getElementById("tijera");
const start = document.getElementById("start");
const restartBtn = document.getElementById("restart");
const result = document.getElementById("result");
const winner = document.getElementById("winner");
const optionsContainer = document.getElementById("options-container");

const versusBox = document.createElement("div");
const iconVS = document.createElement("img");
iconVS.src = "assets/imagenes/vs.png";
versusBox.appendChild(iconVS);

const playerOptionBox = document.createElement("div");
const cpuBox = document.createElement("div");
const iconPlayer = document.createElement("img");
const iconCpu = document.createElement("img");
playerOptionBox.className = "option";
versusBox.className = "option";
playerOptionBox.innerText = "Player";
iconPlayer.className = "option-img";
iconCpu.className = "option-img";

const insertChilds = () => {
  playerOptionBox.appendChild(iconPlayer);
  cpuBox.appendChild(iconCpu);
  optionsContainer.appendChild(playerOptionBox);
  optionsContainer.appendChild(versusBox);
  optionsContainer.appendChild(cpuBox);
};

const returnPlayersOption = (playerOption, cpuOption) => {
  if (playerOption === piedra) {
    iconPlayer.src = "assets/iconos/piedra.png";
  }
  if (playerOption === papel) {
    iconPlayer.src = "assets/iconos/papel.png";
  }
  if (playerOption === tijera) {
    iconPlayer.src = "assets/iconos/tijeras.png";
  }
  if (cpuOption === piedra) {
    iconCpu.src = "assets/iconos/piedra.png";
  }
  if (cpuOption === papel) {
    iconCpu.src = "assets/iconos/papel.png";
  }
  if (cpuOption === tijera) {
    iconCpu.src = "assets/iconos/tijeras.png";
  }
};

const chooseOption = (option) => {
  cpuOption = options[random(0, 2)];
  if (option === piedra) {
    playerOption = piedra;
  }
  if (option === papel) {
    playerOption = papel;
  }
  if (option === tijera) {
    playerOption = tijera;
  }
  if (playerOption === cpuOption) {
    finalWinner = "Empate";
  }
  if (playerOption === piedra && cpuOption === papel) {
    finalWinner = "cpu";
  }
  if (playerOption === papel && cpuOption === piedra) {
    finalWinner = "player";
  }
  if (playerOption === piedra && cpuOption === tijera) {
    finalWinner = "player";
  }
  if (playerOption === tijera && cpuOption === piedra) {
    finalWinner = "cpu";
  }
  if (playerOption === papel && cpuOption === tijera) {
    finalWinner = "cpu";
  }
  if (playerOption === tijera && cpuOption === papel) {
    finalWinner = "player";
  }
  returnPlayersOption(playerOption, cpuOption);
  insertChilds();
  winner.innerText = finalWinner;

  start.style.display = "none";
  result.style.display = "block";
};

piedraBox.addEventListener("click", (e) => {
  e.preventDefault();
  chooseOption(options[0]);
});
papelBox.addEventListener("click", (e) => {
  e.preventDefault();
  chooseOption(options[1]);
});
tijeraBox.addEventListener("click", (e) => {
  e.preventDefault();
  chooseOption(options[2]);
});
restartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("restar");
  start.style.display = "block";
  result.style.display = "none";
});
