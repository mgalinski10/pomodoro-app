const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const finish = document.querySelector(".finish");
const timerContainer = document.querySelector(".timer-container");

function setTimer(minutes) {
  timer.textContent = `${minutes >= 10 ? minutes : `0${minutes}`} : 00`;
}

// Toggle functions

function toggleButton() {
  if (start.classList.contains("active")) {
    start.classList.remove("active");
    finish.classList.add("active");
  } else {
    finish.classList.remove("active");
    start.classList.add("active");
  }
}

function toggleBackground() {
  if (timerContainer.style.backgroundColor === "lightsalmon")
    timerContainer.style.backgroundColor = "lightblue";
  else if ((timerContainer.style.backgroundColor = "lighblue"))
    timerContainer.style.backgroundColor = "lightsalmon";
}

// Main functions

function startWork() {
  let minutes = 0;
  let seconds = 2; // test

  timer.textContent = "25 : 00";

  countDown = setInterval(function () {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(countDown);
      } else {
        seconds = 59;
        minutes--;
      }
    } else {
      seconds--;
    }

    timer.textContent = `${minutes >= 10 ? minutes : `0${minutes}`} : ${
      seconds >= 10 ? seconds : `0${seconds}`
    }`;
  }, 1000);
}

function startRest() {
  let minutes = 5;
  let seconds = 0;

  timer.textContent = "05 : 00";

  countDown = setInterval(function () {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval();
      } else {
        seconds = 59;
        minutes--;
      }
    } else {
      seconds--;
    }

    timer.textContent = `${minutes >= 10 ? minutes : `0${minutes}`} : ${
      seconds >= 10 ? seconds : `0${seconds}`
    }`;
  }, 1000);
}
