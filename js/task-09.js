const body = document.querySelector("body");
const colorBtn = document.querySelector(".change-color");

colorBtn.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = `${color}`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
