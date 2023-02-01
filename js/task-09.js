const body = document.querySelector("body");
const colorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

colorBtn.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = `${color}`;
  colorName.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
