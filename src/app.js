const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const finish = document.querySelector(".finish");

class Timer {
  constructor(countFrom, element) {
    this.countFrom = countFrom;
    this.element = element;
  }

  setTimer() {
    return (this.element.textContent = `${this.countFrom} : 00`);
  }

  startTimer() {
    let minutes = this.countFrom;
    let seconds = 0;

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

      finish.addEventListener("click", () => {
        stop.classList.remove("active");
        start.classList.add("active");
        clearInterval(countdown);
        this.element.textContent = this.setTimer();
      });
    }, 1000);
  }
}

const countDown = new Timer(25, timer);

countDown.setTimer();

start.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    stop.classList.add("active");

    timer.textContent = "25 : 00";
    countDown.startTimer();
  }
});
