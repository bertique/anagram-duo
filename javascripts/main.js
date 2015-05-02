function checkAnagram() {
  var wordOne = document.getElementById("wordOne").value;
  var wordTwo = document.getElementById("wordTwo").value;
  var status = document.getElementById("status");
  if (areAnagrams(wordOne, wordTwo))
    status.textContent = "Yes, these two strings are anagrams of each other.";
  else
    status.textContent = "Sorry, these two strings are not anagrams of each other.";
}

function clearInputs() {
    document.getElementById("wordOne").value = '';
    document.getElementById("wordTwo").value = '';
    document.getElementById("status").textContent= '';
}

function areAnagrams(wordOne, wordTwo) {
  // The regex removes all special characters and whitespaces
  sortedWordOne = wordOne.replace(/[^\w]/gi, '').toLowerCase().split("").sort().join("");
  sortedWordTwo = wordTwo.replace(/[^\w]/gi, '').toLowerCase().split("").sort().join("");
  return sortedWordOne === sortedWordTwo;
}
