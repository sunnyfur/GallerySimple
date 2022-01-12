let colors = ['rgb(47, 68, 84)', 'rgb(28, 51, 52)', 'rgb(218, 123, 147)', 'rgb(55, 110, 111)', 'rgb(46, 21, 27)'];
let divs = document.getElementsByClassName('div_color');

let getNewColor = (prevColor) => {
    let newColor = colors[getRandomInt(0, colors.length)];
    console.log("Previos color is: " + prevColor + " New color is: " + newColor);
    return (prevColor == newColor) ? getNewColor(newColor) : newColor;
}

for (let i = 0; i < divs.length; i++) {
    if (divs.length <= colors.length) {
        divs[i].style.background = colors[i];
    } else {
        divs[i].style.background = getNewColor(divs[i].style.background);
    }


}

const divClick = (num) => {
    console.log("click " + num);

    let elem = divs[num];
    let prevColor = elem.style.background;

    elem.style.background = getNewColor(prevColor);


}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}