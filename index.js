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

function guessedCountry(country) {
  const answerDiv = document.querySelector("#answer");
  answerDiv.className = "";
}

const country = randomFromArray(anthems);

const audioTag = document.querySelector("audio");
audioTag.src = country.src;

const answerDiv = document.querySelector("#answer");
const p = document.createElement("p");
const flag = createFlag(country.iso);
const boldText = document.createElement("b");
boldText.innerText = ` ${country.countryName} - ${country.anthemName}`;
p.innerHTML = "The correct answer was ";
p.appendChild(flag);
p.appendChild(boldText);
p.innerHTML += `${
  country.translatedName ? ` ("${country.translatedName}")` : ""
}`;
const link = document.createElement("a");
link.href = country.attribution.href;
link.innerText = country.attribution.text;
const attributionText = document.createElement("small");
attributionText.innerHTML = "Attribution: ";
attributionText.appendChild(link);
answerDiv.appendChild(p);
answerDiv.appendChild(attributionText);

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
  button.addEventListener("click", () => {
    guessedCountry(guessableCountry);
  });
  buttonRow.appendChild(button);
}
