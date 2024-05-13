var timerElement = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var seconds = 30;
var timerInterval;

function updateTimer() {
  seconds--;
  timerElement.textContent = seconds;

  if (seconds === 0) {
    clearInterval(timerInterval);
    timerElement.classList.add("animated");
    startButton.disabled = false;
  }

  if (seconds === Math.ceil(seconds / 2)) {
    timerElement.classList.add("animated");
  }
}

startButton.addEventListener("click", function () {
  clearInterval(timerInterval); 
  seconds = 30; 
  timerElement.textContent = seconds; 
  timerElement.classList.remove("animated"); 
  startButton.disabled = true; 
  timerInterval = setInterval(updateTimer, 1000); 
});
