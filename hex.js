console.log("hex");
const colorChars = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const btn = document.querySelector("#btn");
console.log(btn);
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomColor = generateColor();
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});

function generateColor() {
  let code = "#";
  for (let i = 0; i < 6; i++) {
    code += colorChars[generateRandomNumber()];
  }
  return code;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * colorChars.length);
}
