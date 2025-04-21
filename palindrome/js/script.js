const checkBtn = document.getElementById('check-btn');
const resultOutput = document.getElementById('result');

function checkForPalindrome() {
  const inputElement = document.getElementById('text-input');
  const inputValue = inputElement.value;

  if (inputValue === '') {
    alert("Please input a value");
    return;
  }

  const inputScrubbed = removeNonAlphaNumberic(inputValue).toLowerCase();
  const inputScrubbedAndReversed = reverseString(inputScrubbed);

  console.log("--------------------------");
  console.log("Input is: " + inputValue);
  console.log("Scrubbed input is: " + inputScrubbed);
  console.log("Reversed String is: " + inputScrubbedAndReversed);
  console.log("Result is: " + (inputScrubbed === inputScrubbedAndReversed));

  if (inputScrubbed === inputScrubbedAndReversed) {
    resultOutput.innerText = `${inputValue} is a palindrome`;
  } else {
    resultOutput.innerText = `${inputValue} is not a palindrome`;
  }
}

function removeNonAlphaNumberic(inputStr) {
  const scrubbedString = inputStr.replace(/^a-zA-Z0-9/g, '');
  const scrubbedNoUnderscores = scrubbedString.replace(/_/g, '');
  const scrubbedNoSpaces = scrubbedNoUnderscores.replace(/\s/g, '');
  const scrubbedNoCommasPeriods = scrubbedNoSpaces.replace(/[,.()-]/g, '');

  return scrubbedNoCommasPeriods;
}

function reverseString(str) {
  const splitString = str.split('');
  console.log(splitString);
  const reverseArray = splitString.reverse();
  console.log(reverseArray);
  const reversedStr = reverseArray.join("");
  console.log(reversedStr);

  return reversedStr;
}


checkBtn.addEventListener("click", checkForPalindrome);