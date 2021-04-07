const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const ref = {
  body: document.querySelector("body"),
  buttonStart: document.querySelector('[data-action="start"]'),
  buttonStop: document.querySelector('[data-action="stop"]'),
};

let timerId;

const startColorsChange = () => {
  timerId = setInterval(() => {
    ref.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  ref.buttonStart.removeEventListener("click", startColorsChange);
};

ref.buttonStart.addEventListener("click", startColorsChange);

ref.buttonStop.addEventListener("click", () => {
  clearInterval(timerId);
  ref.buttonStart.addEventListener("click", startColorsChange);
});
