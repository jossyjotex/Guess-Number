"use strict";

let number = document.querySelector(".number");
const inpOfGuess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");

// console.log(typeof Number(inpOfGuess.value));

function randomNumber() {
  return Math.ceil(Math.random() * 6);
}

let randomNumberGenerator = randomNumber();

console.log(randomNumberGenerator);

checkBtn.addEventListener("click", () => {
  let body = document.body.style;

  if (!inpOfGuess.value) {
    message.textContent = "input field must not be empty";
  } else if (Number(inpOfGuess.value) > randomNumberGenerator) {
    // alert('u guessed higher');
    message.textContent = "you guessed higher";
    number.textContent = randomNumberGenerator;
    score.textContent--;
    body.backgroundColor = "blue";
  } else if (Number(inpOfGuess.value) < randomNumberGenerator) {
    // alert('u guessed lower');
    message.textContent = "you guessed lower";
    number.textContent = randomNumberGenerator;
    score.textContent--;
    body.backgroundColor = "yellow";
  } else if (Number(inpOfGuess.value) === randomNumberGenerator) {
    message.textContent = "you guessed correct";
    number.textContent = randomNumberGenerator;
    // score.textContent --
    body.backgroundColor = "Green";
  }
  if (score.textContent < 1) {
    checkBtn.setAttribute("disabled", "disabled");
  }
});


let refreshBtn = document.querySelector('.again')

refreshBtn.addEventListener('click', function(){
  document.location.reload()
 });
