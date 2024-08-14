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

// Main functions

function startWork() {
  let minutes = 25;
  let seconds = 0; // test

  timer.textContent = "25 : 00";
  timerContainer.style.backgroundColor = "lightsalmon";

  const countWork = setInterval(function () {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(countWork);
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

  const countRest = setInterval(function () {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(countRest);
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

start.addEventListener("click", function () {
  toggleButton();
  startWork();
});

finish.addEventListener("click", function () {
  toggleButton();
  clearInterval(countWork);
});
