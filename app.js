const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userpoints_span = document.getElementById("userpoints");
const cpupoints_span = document.getElementById("cpupoints");
const winner_p = document.getElementById("winner");
const creator_p = document.getElementById("creator");
const won_span = document.getElementById("won");
const userchoice_span = document.getElementById("userchoice");
const cpuchoice_span = document.getElementById("cpuchoice");
let userpoints = 0;
let cpupoints = 0;

const updatedata = (userelection, cpuelection, finalwinner) => {
  userchoice_span.textContent = userelection;
  cpuchoice_span.textContent = cpuelection;
  won_span.textContent = finalwinner;
};

const winnershow = () => {
  creator_p.style.display = "none";
  winner_p.style.display = "block";
};

const getcpuchoice = () => {
  const choices = ["r", "p", "s"];
  let randomnumber = Math.floor(Math.random() * 3);
  let cpuchoice = choices[randomnumber];
  return cpuchoice;
};

const won = () => {
  userpoints++;
  userpoints_span.textContent = userpoints;
};
const lost = () => {
  cpupoints++;
  cpupoints_span.textContent = cpupoints;
};

const checkwinner = (userchoice, cpuchoice) => {
  switch (userchoice + cpuchoice) {
    case "rr":
      console.log(
        `userchoise is ${userchoice} cpuchoise is ${cpuchoice} , TIE`
      );
      updatedata("Rock", "Rock", "Nobody");
      break;
    case "rp":
      console.log(
        `userchoise is ${userchoice} cpuchoise is ${cpuchoice} , YOU LOST`
      );
      updatedata("Rock", "Papel", "CPU");
      lost();
      break;
    case "rs":
      console.log(
        `userchoise is ${userchoice} cpuchoise is ${cpuchoice} , YOU WON`
      );
      updatedata("Rock", "Scissors", "USER");
      won();
      break;
    case "pr":
      console.log(
        `userchoise is ${userchoice} cpuchoise is ${cpuchoice} , YOU WON`
      );
      updatedata("Paper", "Rock", "USER");
      won();
      break;
    case "pp":
      console.log(
        `userchoise is ${userchoice} cpuchoise is ${cpuchoice} , TIE`
      );
      updatedata("Paper", "Paper", "Nobody");

      break;
    case "ps":
      console.log(
        `userchoise is ${userchoice} cpuchoise is ${cpuchoice} , YOU LOST `
      );
      updatedata("Paper", "Scissors", "CPU");
      lost();
      break;
    case "sr":
      console.log(
        `userchoise is ${userchoice} cpuchoise is ${cpuchoice} , YOU LOST`
      );
      updatedata("Scissors", "Rock", "CPU");
      lost();
      break;
    case "sp":
      console.log(
        `userchoise is ${userchoice} cpuchoise is ${cpuchoice} , YOU WON`
      );
      updatedata("Scissors", "Paper", "USER");
      won();
      break;
    case "ss":
      console.log(
        `userchoise is ${userchoice} cpuchoise is ${cpuchoice} , TIE`
      );
      updatedata("Scissors", "Scissors", "Nobody");
    default:
      break;
  }
};

let userchoice;

rock.addEventListener("click", () => {
  userchoice = "r";
  let cpuchoice = getcpuchoice();
  checkwinner(userchoice, cpuchoice);
  winnershow();
});

paper.addEventListener("click", () => {
  userchoice = "p";
  let cpuchoice = getcpuchoice();
  checkwinner(userchoice, cpuchoice);
  winnershow();
});

scissors.addEventListener("click", () => {
  userchoice = "s";
  let cpuchoice = getcpuchoice();
  checkwinner(userchoice, cpuchoice);
  winnershow();
});
