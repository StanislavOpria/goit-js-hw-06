function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("[type="number"]");
const boxesField = document.querySelector("#boxes");
let amount = 0;

input.addEventListener("input", (event) => {
  consol.log(event.currentTarget.value);
});

//   createBtn.addEventListener("click", (event) => {});
// });

// console.log(input.value);

// function createBoxes(amount)
