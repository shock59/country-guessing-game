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

function createFlag(iso) {
  const img = document.createElement("img");
  img.src = `https://flagcdn.com/${iso.toLowerCase()}.svg`;
  return img;
}

const country = randomFromArray(anthems);

const audioTag = document.querySelector("audio");
audioTag.src = country.src;

const answerDiv = document.querySelector("#answer");
const flag = createFlag(country.iso);
const boldText = document.createElement("b");
boldText.innerText = ` ${country.countryName} - ${country.anthemName}`;
answerDiv.innerHTML = "The correct answer was ";
answerDiv.appendChild(flag);
answerDiv.appendChild(boldText);
answerDiv.innerHTML += `${
  country.translatedName ? ` ("${country.translatedName}")` : ""
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
  const img = createFlag(guessableCountry.iso);
  const span = document.createElement("span");
  span.innerText = guessableCountry.countryName;
  const button = document.createElement("button");
  button.appendChild(img);
  button.appendChild(span);
  buttonRow.appendChild(button);
}
