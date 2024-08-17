const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const finish = document.querySelector(".finish");

// Main CountDown declaration

let countdown;

//  Toggle Functions

function toggleToFinish() {
  start.classList.remove("active");
  finish.classList.add("active");
}

function toggleToStart() {
  finish.classList.remove("active");
  start.classList.add("active");
}

// Set timer

function displayTime(minutes, seconds) {
  if (seconds < 60) {
    return `${minutes >= 10 ? minutes : `0${minutes}`} : ${
      seconds >= 10 ? seconds : `0${seconds}`
    }`;
  } else {
    console.error("seconds have to be lower than 60");
  }
}

function setTimer(minutes, seconds) {
  timer.textContent = displayTime(minutes, seconds);
}

// Start Session -> Start new focus session which is 25min focus, 5min rest

function countDown(setMinute, callback) {
  let minutes = setMinute;
  let seconds = 0;

  countdown = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        toggleToStart();
        clearInterval(countdown);
        return callback();
      } else {
        seconds = 59;
        minutes--;
      }
    } else seconds--;

    setTimer(minutes, seconds);
  }, 1000);
}

function startSession(focus, rest) {
  finish.addEventListener("click", finishInterval, { once: true });
  setTimer(25, 0);
  console.log("Oczekiwanie na start");
  start.addEventListener(
    "click",
    () => {
      toggleToFinish();
      console.log("Rozpoczęto focus");
      countDown(focus, () => {
        console.log("Zakończono focus");
        setTimer(5, 0);
        console.log("Oczekiwanie na rest");
        start.addEventListener(
          "click",
          () => {
            toggleToFinish();
            console.log("Rozpoczęto rest");
            countDown(rest, () => {
              console.log("Ukończono rest");
              setTimer(25, 0);
              startSession(25, 5);
            });
          },
          { once: true }
        );
      });
    },
    { once: true }
  );
}

function finishInterval() {
  toggleToStart();
  clearInterval(countdown);
  console.log("Zatrzymano Timer..");
  startSession(25, 5);
}

// Run App

startSession(25, 5);
