// ask user to guess if the sum will be even or odd
let userGuess;
// keep doing until their answer is either even or odd
do {
  userGuess = prompt(
    "Guess if the sum of the two numbers will be even or odd: "
  ); // f                                f
} while (userGuess !== "even" && userGuess !== "odd");
console.log(userGuess);

// ask user to choose a nr in range 1 to 5
let userNr;
// keep doing until their answer is a nr in that range
do {
  userNr = parseInt(prompt("Choose a number in range 1 to 5:"));
} while (userNr > 5 || userNr < 1 || isNaN(userNr) === true);
console.log(userNr);

// display userNr into the dom
const userNumber = document.getElementById("user-number");
userNumber.innerHTML = userNr;

// generate rnd for the cpu
const cpuRndNr = getRndNr(1, 5);
console.log(cpuRndNr);

// display cpuNr into the dom
const cpuNumber = document.getElementById("cpu-number");
cpuNumber.innerHTML = cpuRndNr;

// sum user nr and the one rnd nr generate for the cpu
const sum = userNr + cpuRndNr;
console.log(sum);

//check if the sum is even
console.log(isEven(sum));

// display the result
let message = "";
if (isEven(sum) === true && userGuess === "even") {
  message = "you won";
} else if (isEven(sum) === false && userGuess === "odd") {
  message = "you won";
} else {
  message = "cpu won";
}

// display result into the dom
const result = document.getElementById("result");
result.innerHTML = `The sum of the two numbers is ${sum} and you said ${userGuess} so ${message}`;

/**
 * Description generate rnd number in range min max
 * @param {number} min
 * @param {number} max
 * @returns {number} generated rnd nr
 */
function getRndNr(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Description check whether or not the given nr is even
 * @param {number} number to verify
 * @returns {boolean} y/n is even
 */
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
