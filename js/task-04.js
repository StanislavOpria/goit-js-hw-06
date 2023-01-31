let counterValue = 0;

let counter = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", () => {
  counter.textContent = counterValue - 1;
  counterValue -= 1;
});

incrementBtn.addEventListener("click", () => {
  counter.textContent = counterValue + 1;
  counterValue += 1;
});
