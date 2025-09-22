const scoreTag = document.querySelector("#score");
const audioTag = document.querySelector("audio");
const answerDiv = document.querySelector("#answer");
const buttonRow = document.querySelector("#button-row");

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

function guessedCountry(
  guessedCountry,
  correctCountry,
  score,
  completedRounds,
  previousCountries
) {
  score += guessedCountry == correctCountry ? 1 : 0;
  completedRounds++;

  const mainAnswerText = document.createElement("p");
  const flag = createFlag(correctCountry.iso);
  const boldText = document.createElement("b");
  boldText.innerText = ` ${correctCountry.countryName} - ${correctCountry.anthemName}`;
  mainAnswerText.innerHTML = "The correct answer was ";
  mainAnswerText.appendChild(flag);
  mainAnswerText.appendChild(boldText);
  mainAnswerText.innerHTML += `${
    correctCountry.translatedName ? ` ("${correctCountry.translatedName}")` : ""
  }`;
  const link = document.createElement("a");
  link.href = correctCountry.attribution.href;
  link.innerText = correctCountry.attribution.text;

  const attributionText = document.createElement("p");
  attributionText.className = "small";
  attributionText.innerHTML = "Attribution: ";
  attributionText.appendChild(link);

  const nextButton = document.createElement("button");
  nextButton.className = "next-button";
  nextButton.addEventListener("click", () => {
    newCountry(score, completedRounds, previousCountries);
  });
  nextButton.innerText = "Next Anthem";

  answerDiv.appendChild(mainAnswerText);
  answerDiv.appendChild(attributionText);
  answerDiv.appendChild(nextButton);

  answerDiv.className = "";

  scoreTag.innerText = `Score: ${score}/${completedRounds}`;
}

function newCountry(score, completedRounds, previousCountries) {
  const country = randomFromArray(anthems);
  if (previousCountries.includes(country))
    return newCountry(score, completedRounds, previousCountries);
  previousCountries.push(country);

  audioTag.src = country.src;

  let guessableCountries = [country];
  while (guessableCountries.length < 4) {
    const newCountry = randomFromArray(anthems);
    if (!guessableCountries.includes(newCountry)) {
      guessableCountries.push(newCountry);
    }
  }
  guessableCountries = shuffleArray(guessableCountries);

  buttonRow.innerHTML = "";
  for (let guessableCountry of guessableCountries) {
    const img = createFlag(guessableCountry.iso);
    const span = document.createElement("span");
    span.innerText = guessableCountry.countryName;
    const button = document.createElement("button");
    button.appendChild(img);
    button.appendChild(span);
    button.addEventListener("click", () => {
      guessedCountry(
        guessableCountry,
        country,
        score,
        completedRounds,
        previousCountries
      );
    });
    buttonRow.appendChild(button);
  }

  answerDiv.className = "hidden";
  answerDiv.innerHTML = "";
}

newCountry(0, 0, []);
