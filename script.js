let miniSeconds = 0;
let seconds = 0;
let minutes = 0;
let hour = 0;
let timer = null;
let lapCount = 1;
const lapList = document.getElementById("lap-list");

const display = document.getElementById("display");

let updateDisplay = () => {
  let hourCount = hour < 10 ? "0" + hour : hour;
  let minutesCount = minutes < 10 ? "0" + minutes : minutes;
  let secondsCount = seconds < 10 ? "0" + seconds : seconds;
  let msCount = miniSeconds < 10 ? "0" + miniSeconds : miniSeconds;

  display.textContent = `${hourCount}:${minutesCount}:${secondsCount}:${msCount}`;
};

let startTime = () => {
  if (timer !== null) return;
  timer = setInterval(() => {
    miniSeconds++;

    if (miniSeconds === 100) {
      miniSeconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hour++;
    }

    updateDisplay();
  }, 10);
};

let stopTimer = () => {
  clearInterval(timer);
  timer = null;
};

let resetTimer = () => {
  stopTimer();
  miniSeconds = 0;
  seconds = 0;
  minutes = 0;
  hour = 0;
  updateDisplay();
  lapList.textContent = "";
  lapCount = 1;
};

let lapSave = () => {
  let list = document.createElement("li");
  list.textContent = `lap ${lapCount}: ${display.textContent}`;
  lapCount++;
  lapList.appendChild(list);
};
document.getElementById("save").addEventListener("click", lapSave);

document.getElementById("start").addEventListener("click", startTime);

document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
