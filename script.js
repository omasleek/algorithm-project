function analyzeSentence() {
  let length = 0;
  let wordCount = 0;
  let vowelCount = 0;
  const vowels = "aeiouAEIOU";
  let inWord = false;

  let sentence = prompt("Enter a sentence ending with a period:");

  if (!sentence || sentence[sentence.length - 1] !== ".") {
    alert("The sentence must end with a period.");
    return;
  }

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    length++;

    if (vowels.includes(char)) {
      vowelCount++;
    }

    if (char === " ") {
      inWord = false;
    } else if (!inWord && char !== ".") {
      wordCount++;
      inWord = true;
    }
  }

  let result = `Length of sentence: ${length}<br>
                  Number of words: ${wordCount}<br>
                  Number of vowels: ${vowelCount}`;

  document.getElementById("output").innerHTML = result;
}
