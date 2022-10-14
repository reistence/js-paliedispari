// ask user for a word
const userWord = prompt(
  "put in the word you want to check whether or not is palindrome:"
);
// check it is actually a palindrome
isPalindrome(userWord);
console.log(userWord, isPalindrome(userWord));

let message = "";
if (isPalindrome(userWord) === true) {
  message = `The word ${userWord} is a palindrome`;
} else {
  message = `The word ${userWord} is not a palindrome`;
}
console.log(message);

const answer = document.getElementById("message");
answer.innerHTML = message;
/**
 * Description
 * @param (string) - the word the user would like to check
 * @returns {boolean} - y/n if it is a palindrome word
 */
function isPalindrome(word) {
  //create empty arrays
  const wordSpelled = [];
  const reverseWordSpelled = [];
  // iterate for each letter in ascending order
  for (i = 0; i < word.length; i++) {
    const currentLetter = word[i];
    // put each letter into wordSpelled
    wordSpelled.push(currentLetter);
  }
  // iterate for each letter in descending order
  for (i = word.length - 1; i >= 0; i--) {
    const currentLetter = word[i];
    // put each letter into reverseWordSpelled
    reverseWordSpelled.push(currentLetter);
  }
  // if the arrays converted into strings match they are palindrome
  let result = false;
  if (String(wordSpelled) == String(reverseWordSpelled)) {
    result = true;
  }
  // return whether or not they are
  return result;
}
