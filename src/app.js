const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const finish = document.querySelector(".finish");
const timerContainer = document.querySelector(".timer-container");

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

function countDown(countFrom, callback) {
  let minutes = countFrom;
  let seconds = 0;

  setTimer(countFrom, seconds);

  start.addEventListener(
    "click",
    function () {
      const countdown = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            toggleToStart();
            clearInterval(countdown);
            if (callback) callback();
          } else {
            seconds = 59;
            minutes--;
          }
        } else seconds--;

        setTimer(minutes, seconds);
      }, 1000);
    },
    { once: true }
  );

  finish.addEventListener(
    "click",
    function () {
      clearInterval(countdown);
      if (callback) callback();
    },
    { once: true }
  );
}

function startSession(focusTime, restTime) {
  countDown(focusTime);
}

startSession(25, 5);
