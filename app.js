const colors = ["red", "blue", "rgba(133, 122, 200)", "f15025", "purple"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = generateRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function generateRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
