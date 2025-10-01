const scoreTag = document.querySelector("#score");
const mottoContainer = document.querySelector("#motto");
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

function randomCountry(previousCountries = []) {
  const country = randomFromArray(mottos);
  if (previousCountries.includes(country))
    return randomCountry(previousCountries);
  return country;
}

function createFlag(iso, countryName = undefined) {
  const img = new Image();
  img.src = `https://flagcdn.com/${iso.toLowerCase()}.svg`;
  img.alt = `Flag${countryName ? ` of ${countryName}` : ""}`;
  return img;
}

function guessedCountry(
  guessedCountry,
  correctCountry,
  score,
  completedRounds,
  previousCountries
) {
  if (answerDiv.className == "") return;

  score += guessedCountry == correctCountry ? 1 : 0;
  completedRounds++;

  const mainAnswerText = document.createElement("p");
  const flag = createFlag(correctCountry.iso, correctCountry.countryName);
  const boldText = document.createElement("b");
  boldText.innerText = ` ${correctCountry.countryName}`;
  mainAnswerText.innerHTML = "The correct answer was ";
  mainAnswerText.appendChild(flag);
  mainAnswerText.appendChild(boldText);

  const nextButton = document.createElement("button");
  nextButton.className = "next-button";
  nextButton.addEventListener("click", () => {
    newCountry(score, completedRounds, previousCountries);
  });
  nextButton.innerText = "Next Motto";

  answerDiv.appendChild(mainAnswerText);
  answerDiv.appendChild(nextButton);

  answerDiv.className = "";

  scoreTag.innerText = `Score: ${score}/${completedRounds}`;

  mottoContainer.innerText = correctCountry.motto;
}

function newCountry(score, completedRounds, previousCountries) {
  if (previousCountries.length > 24) previousCountries.shift();
  const country = randomCountry(previousCountries);
  previousCountries.push(country);

  mottoContainer.innerText = country.censoredMotto
    ? country.censoredMotto
    : country.motto;

  let guessableCountries = [country];
  while (guessableCountries.length < 4) {
    guessableCountries.push(
      randomCountry([...previousCountries, ...guessableCountries])
    );
  }
  guessableCountries = shuffleArray(guessableCountries);

  buttonRow.innerHTML = "";
  for (let guessableCountry of guessableCountries) {
    const img = createFlag(guessableCountry.iso, guessableCountry.countryName);
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

let flags = [];
for (let country of mottos) {
  flags.push(createFlag(country.iso));
}
newCountry(0, 0, []);
