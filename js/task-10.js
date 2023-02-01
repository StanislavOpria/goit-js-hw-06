const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("#controls > input");
const boxesField = document.querySelector("#boxes");
let amount = 0;
let elementsArray = [];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(counter) {
  for (let i = 0; i < counter; i += 1) {
    const widthAndHeigh = 30 + i * 10;
    const element = document.createElement("div");
    element.style.width = `${widthAndHeigh}px`;
    element.style.height = `${widthAndHeigh}px`;
    element.style.backgroundColor = getRandomHexColor();
    elementsArray.push(element);
  }
}

function destroyBoxes(teg) {
  teg.innerHTML = " ";
  elementsArray = [];
}

input.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});

createBtn.addEventListener("click", () => {
  createBoxes(amount);
  boxesField.append(...elementsArray);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes(boxesField);
});
