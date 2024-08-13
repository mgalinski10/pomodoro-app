const timer = document.querySelector(".timer");

class Timer {
  constructor(countFrom) {
    this.countFrom = countFrom;
  }

  setTimer() {
    return `${this.countFrom} : 00`;
  }

  startTimer() {
    var minutes = this.countFrom;
    var seconds = 0;

    countdown = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          alert("Koniec");
          clearInterval(countDown);
          timer.textContent = "5 : 00";
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }

      console.log(minutes, seconds);
      timer.textContent = `${minutes} : ${seconds}`;
      document.title = `${minutes}:${seconds} - Pomodoro Timer`;
    }, 1000);
  }
}

const countDown = new Timer(25);

console.log(countDown.startTimer());
timer.textContent = countDown.setTimer();
