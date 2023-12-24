const time = document.querySelector("#timeToDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let intervalId;
let paused = true; // Initialize paused state

startBtn.addEventListener("click", () => {
  if (paused) { // Check for paused state and existing interval
    paused = false;
    startTime = Date.now()-elapsedTime;
    intervalId = setInterval(displayTime, 1000);
  }
})

pauseBtn.addEventListener("click", () => {
  if (!paused) { 
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
})

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId); // Stop the interval before resetting
  startTime = 0; // Reset startTime as well
  elapsedTime = 0;
  paused = true; // Reset paused state
  time.textContent = "00:00:00";
})

function displayTime() {
  if (!paused) { // Only update time if not paused
    elapsedTime = Date.now() - startTime;
    const hrs = Math.floor(elapsedTime / (60 * 60 * 1000) % 60);
    const min = Math.floor(elapsedTime / (60 * 1000) % 60);
    const sec = Math.floor(elapsedTime % 60000 / 1000); // More efficient modulo calculation

    const formattedTime = `${head(hrs)}:${head(min)}:${head(sec)}`;
    time.textContent = formattedTime;
    }
    function head(unit) {
        return unit.toString().padStart(2, '0');
      }
}