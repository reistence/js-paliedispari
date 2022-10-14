/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let userGuess;

do {
  userGuess = prompt(
    "Guess if the sum of the two numbers will be even or odd: "
  );
} while (userGuess !== "even" || userGuess !== "odd");
console.log(userGuess);

let userNr;

do {
  userNr = parseInt(prompt("Choose a number in range 1 to 5:"));
} while (userNr > 5 || userNr < 1 || userNr === NaN);
console.log(userNr);

const cpuRndNr = getRndNr(1, 5);
console.log(cpuRndNr);

const sum = userNr + cpuRndNr;
console.log(sum);

console.log(isEven(sum));

if (isEven(sum) === true && userGuess === "even") {
  console.log("user won");
} else {
  console.log("cpu won");
}

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
