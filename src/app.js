const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const finish = document.querySelector(".finish");

//  Toggle Functions

function toggleToFinish() {
  start.classList.remove("active");
  finish.classList.add("active");
}

function toggleToStart() {
  finish.classList.remove("active");
  start.classList.add("active");
}

// Event Listeners

start.addEventListener("click", toggleToFinish);

finish.addEventListener("click", toggleToStart);

window.addEventListener("load", () => setTimer(25, 0));

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

function countDown(setMinute, isComplete) {
  let minutes = setMinute;
  let seconds = 0;

  const countdown = setInterval(() => {
    console.log(minutes, seconds);
    setTimer(minutes, seconds);

    if (seconds === 0) {
      if (minutes === 0) {
        toggleToStart();
        clearInterval(countdown);
        isComplete();
      } else {
        seconds = 59;
        minutes--;
      }
    } else seconds--;
  }, 1000);
}

function startSession(focusTime, restTime) {
  console.log("start focus");
  setTimer(25, 0);
  start.addEventListener(
    "click",
    () => {
      countDown(focusTime, () => {
        console.log("Koniec focus");
        console.log("start rest");
        setTimer(5, 0);
        start.addEventListener(
          "click",
          () => {
            countDown(restTime, () => {
              console.log("Ukończono rest");
              setTimer(25, 0);
              startSession(focusTime, restTime);
            });
          },
          { once: true }
        );
      });
    },
    { once: true }
  );
}

startSession(25, 5);
