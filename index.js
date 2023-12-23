const time = document.querySelector("#timeToDisplay");
const startBtn = document.querySelector("startBtn");
const pauseBtn = document.querySelector("pauseBtn");
const resetBtn = document.querySelector("resetBtn");

resetBtn.addEventListener("click", () => {
    time.innerHTML = "00.00.00";
})