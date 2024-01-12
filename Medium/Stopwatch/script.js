(function () {
  let hour = document.querySelector(".input-hour");
  let min = document.querySelector(".input-min");
  let sec = document.querySelector(".input-sec");

  let startBtn = document.querySelector(".start-btn");
  let stateBtn = document.querySelector(".state-btn");
  let resetBtn = document.querySelector(".reset-btn");

  let intervalId = null;

  const stopInterval = () => {
    hour.value = "";
    min.value = "";
    sec.value = "";
    clearInterval(intervalId);
  };

  const timer = () => {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      stopInterval();
      return;
    }

    if (sec.value > 0) {
      if (sec.value > 60) {
        min.value = min.value + 1;
        sec.value = sec.value - 60;
      }
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    } else if (min.value > 0) {
      if (min.value > 60) {
        hour.value = "0" + hour.value + 1;
        min.value = min.value - 60;
      }
      min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
      sec.value = 59;
    } else if (hour.value > 0) {
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
      min.value = 60;
    }
  };

  const startInterval = () => {
    console.log(sec.value);
    if (hour.value > 0 || min.value > 0 || sec.value > 0) {
      resetBtn.removeAttribute("disabled");
      startBtn.style.display = "none";
      stateBtn.style.display = "initial";
      stateBtn.textContent = "Pause";
      intervalId = setInterval(() => {
        timer();
      }, 1000);
      console.log("interval id :", intervalId);
    } else {
      alert("You won before you start!");
    }
  };

  const resetInterval = () => {
    stopInterval();
    stateBtn.style.display = "none";
    startBtn.style.display = "initial";
    startBtn.textContent = "Start";
    resetBtn.setAttribute("disabled", "true");
    return;
  };

  const stateInterval = () => {
    if (stateBtn.textContent.toLocaleLowerCase().includes("pause")) {
      startBtn.textContent = "Resume";
    } else {
      startBtn.textContent = "Pause";
    }
    startBtn.style.display = "initial";
    stateBtn.style.display = "none";
    clearInterval(intervalId);
  };

  startBtn.addEventListener("click", startInterval);
  resetBtn.addEventListener("click", resetInterval);
  stateBtn.addEventListener("click", (e) => stateInterval());
})();
