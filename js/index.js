const textToChange = document.querySelector(".text-change");
const words = ['Designer', 'Creator', 'Developer'];

let count = 0;
let index = 0;
let text = "";
let remainTime = 2000;
let remain = false;

function type() {

    if (index == words[count].length - 1) {
        remain = true;
    }

    if (index == words[count].length) {
        count++;
        index = 0;
        text = "";
    }

    if (count == words.length) {
        count = 0;
        index = 0;
        text = "";
    }

    text = words[count].slice(0, ++index);
    textToChange.innerHTML = text;


    if (remain) {
        remain = false;
        setTimeout(type, remainTime);

    } else {
        setTimeout(type, Math.floor(Math.random() * (500 - 200) + 150));
    }
}

type();