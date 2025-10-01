function createFlag(iso, countryName = undefined) {
  const img = new Image();
  img.src = `https://flagcdn.com/${iso.toLowerCase()}.svg`;
  img.alt = `Flag${countryName ? ` of ${countryName}` : ""}`;
  return img;
}

const container = document.querySelector(".all-anthems-container");

for (let anthem of anthems) {
  const flag = createFlag(anthem.iso, anthem.countryName);
  const boldText = document.createElement("b");
  boldText.innerText = ` ${anthem.countryName} - ${anthem.anthemName}`;
  const span = document.createElement("span");
  span.appendChild(boldText);
  span.innerHTML += `${
    anthem.translatedName ? ` ("${anthem.translatedName}")` : ""
  }`;
  const nameP = document.createElement("p");
  nameP.appendChild(flag);
  nameP.appendChild(span);

  const audio = document.createElement("audio");
  audio.src = anthem.src;
  audio.controls = "true";
  const attributionText = document.createElement("span");
  const link = document.createElement("a");
  link.href = anthem.attribution.href;
  link.innerText = anthem.attribution.text;
  attributionText.className = "small";
  attributionText.innerHTML = "Attribution: ";
  attributionText.appendChild(link);
  const audioDiv = document.createElement("div");
  audioDiv.className = "audio-div";
  audioDiv.appendChild(audio);
  audioDiv.appendChild(attributionText);

  container.appendChild(nameP);
  container.appendChild(audioDiv);
}
