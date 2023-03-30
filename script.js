"use strict";

window.addEventListener("load", start);

async function start() {
   const characters = await getData("https://cederdorff.github.io/dat-js/05-data/southpark.json");

   showAllCharacters(characters);
}

async function getData(url) {
   const response = await fetch(url);
   const data = await response.json();
   return data;
}

function showCharacter(character) {
   const myHTML = /*html*/ `
        <article>
            <h2><span>${character.name}</span></h2>
            <p>Nickname: <span>${character.nickname}</span></p>
            <img src= ${character.image}/>
            <p>Occupation: <span>${character.occupation}</span></p>
        </article>
        `;
   document.querySelector("#character").insertAdjacentHTML("beforeend", myHTML);
   document.querySelector("#character article:last-child").addEventListener("click", characterClicked);

   function characterClicked() {
      document.querySelector("#dialog-name").textContent = character.name;
      document.querySelector("#dialog-nickname").textContent = character.nickname;
      document.querySelector("#dialog-image").innerHTML = `<p><img src= ${character.image}/></p>`;
      document.querySelector("#dialog-occupation").textContent = character.occupation;
      document.querySelector("#dialog-age").textContent = character.age;
      document.querySelector("#dialog-voicedBy").textContent = character.voicedBy;
      document.querySelector("#dialog-gender").textContent = character.gender;
      document.querySelector("#dialog-religion").textContent = character.religion;
      document.querySelector("#dialog-catchPhrase").textContent = character.catchPhrase;
      document.querySelector("#dialog-hairColor").textContent = character.hairColor;
      document.querySelector("#dialog-schoolGrade").textContent = character.schoolGrade;
      document.querySelector("#dialog-episodes").textContent = character.episodes;
      document.querySelector("#dialog-appearances").textContent = character.appearances;
      document.querySelector("#dialog-firstAppearance").textContent = character.firstAppearance;

      document.querySelector("dialog").showModal();
   }
}

function showAllCharacters(characters) {
   characters.forEach(showCharacter);
}
