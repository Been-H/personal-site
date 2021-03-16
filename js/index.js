const textToChange = document.querySelector(".text-change");
const words = ['Designer', 'Creator', 'Developer'];

let count = 0;
let index = 0;
let text = ""

function type() {

    if (index == words[count].length) {
        count++;
        index = 0;
        text = "";
    }

    if (count == 3) {
        count = 0;
        index = 0;
        text = "";
    }

    text = words[count].slice(0, ++index);
    textToChange.innerHTML = text;
    setTimeout(type, Math.floor(Math.random() * (500 - 200) + 200));
}

type();