const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const finish = document.querySelector(".finish");

function toggleStartStop() {
  if (start.classList.contains("active")) {
    start.classList.remove("active");
    stop.classList.add("active");
  } else {
    stop.classList.remove("active");
    start.classList.add("active");
  }
}

class Timer {
  constructor(countFrom, element) {
    this.countFrom = countFrom;
    this.element = element;
  }

  setTimer() {
    start.addEventListener("click", () => {
      toggleStartStop();

      countDown.startTimer();
    });
    return (this.element.textContent = `${this.countFrom} : 00`);
  }

  startTimer() {
    let minutes = this.countFrom;
    let seconds = 0;

    timer.textContent = "25 : 00";

    finish.addEventListener("click", () => {
      clearInterval(countdown);

      toggleStartStop();

      this.setTimer();
    });

    stop.addEventListener("click", () => {
      var currentTime = timer.textContent;
      clearInterval(countdown);
      toggleStartStop();
    });

    const countdown = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          alert("Koniec");
          clearInterval(countdown);
          timer.textContent = "5 : 00";
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }

      timer.textContent = `${minutes >= 10 ? minutes : `0${minutes}`} : ${
        seconds >= 10 ? seconds : `0${seconds}`
      }`;
      document.title = `${minutes >= 10 ? minutes : `0${minutes}`}:${
        seconds >= 10 ? seconds : `0${seconds}`
      } Pomodoro Timer`;

      currentTime = `${minutes >= 10 ? minutes : `0${minutes}`} : ${
        seconds >= 10 ? seconds : `0${seconds}`
      }`;
    }, 1000);
  }
}

const countDown = new Timer(25, timer);

countDown.setTimer();
