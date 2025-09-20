function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffleArray(array) {
  let shuffled = array;
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const country = randomFromArray(anthems);

const audioTag = document.querySelector("audio");
audioTag.src = country.src;

const answerDiv = document.querySelector("#answer");
answerDiv.innerHTML = `
The correct answer was
<img src="https://flagcdn.com/${country.iso.toLowerCase()}.svg" />
<b>${country.countryName} - ${country.anthemName}</b> ${
  country.translatedName ? `(${country.translatedName})` : ""
}`;

let guessableCountries = [country];
while (guessableCountries.length < 4) {
  const newCountry = randomFromArray(anthems);
  if (!guessableCountries.includes(newCountry)) {
    guessableCountries.push(newCountry);
  }
}
guessableCountries = shuffleArray(guessableCountries);

const buttonRow = document.querySelector("#button-row");
for (let guessableCountry of guessableCountries) {
  const img = document.createElement("img");
  img.src = `https://flagcdn.com/${guessableCountry.iso.toLowerCase()}.svg`;
  const span = document.createElement("span");
  span.innerText = guessableCountry.countryName;
  const button = document.createElement("button");
  button.appendChild(img);
  button.appendChild(span);
  buttonRow.appendChild(button);
}
