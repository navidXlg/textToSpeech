"use strict";

const textArea = document.querySelector(".form__text--input");
const selectionPart = document.querySelector(".form__voice--heading");
const submitBtn = document.querySelector(".submitBtn");
const select = document.querySelector(".optionCase");
const system = speechSynthesis;

voice();
function voice(){

    for ( let item of system.getVoices()){

        let mord = `<option value = ${item.name}>${item.name} - ${item.lang}</option>`;
        select.insertAdjacentElement("beforeend", mord)

    };
    
};
system.addEventListener("voiceschanged", voice);
