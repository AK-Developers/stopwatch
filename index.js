const time = document.querySelector("#timeToDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn"); // Assuming this button exists
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let intervalId;

startBtn.addEventListener("click", () => {
  if (intervalId === undefined) { // Check if timer is already running
    startTime = Date.now();
    intervalId = setInterval(displayTime, 1000); // Start the interval
  }
})

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId); // Stop the interval before resetting
  intervalId = undefined;
  elapsedTime = 0;
  time.textContent = "00:00:00"; 
})

function displayTime() {
  elapsedTime = Date.now() - startTime;
  const hrs = Math.floor(elapsedTime / (60 * 60 * 1000) % 60);
  const min = Math.floor(elapsedTime / (60 * 1000) % 60);
  const sec = Math.floor(elapsedTime / 1000 % 60);

  const formattedTime = `${head(hrs)}:${head(min)}:${head(sec)}`;
  time.textContent = formattedTime;
}

function head(unit) {
  return unit.toString().padStart(2, '0'); // More concise way to add leading zeros
}
