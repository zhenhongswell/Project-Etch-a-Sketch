// Create a webpage with a 16x16 grid of square divs
const container = document.querySelector('.container');
const classDefaultBackgroundColor = 'default-bg-color';
const classMouseoverBackgroundColor = 'mouseover-bg-color';
const classMouseoverBackgroundColor_1 = 'mouseover-bg-color-1';
const classMouseoverBackgroundColor_2 = 'mouseover-bg-color-2';
const classMouseoverBackgroundColor_3 = 'mouseover-bg-color-3';

const backgroundColorList = [
    classMouseoverBackgroundColor_1,
    classMouseoverBackgroundColor_2,
    classMouseoverBackgroundColor_3
]


let all_div;
function createRowDivInContainer(number){
    // create divs for each column
    for (let index = 0; index < number; index++) {
        const divElement = document.createElement('div');
        divElement.classList.add('row');
        // divElement.classList.add('background-color-div');
        container.appendChild(divElement);
    }
}

function createDivsInRow(number){
    // create divs for each rows
    const rowNodeList = document.querySelectorAll('.row');
    rowNodeList.forEach(element => {
        for (let index = 0; index < number; index++) {
            const divElement = document.createElement('div');
            divElement.classList.add('grid-square');
            divElement.classList.add(classDefaultBackgroundColor);
            element.appendChild(divElement);
            gridSquareAddlistener(divElement);
        }
    });
}

function gridSquareAddlistener(element){
    // Set up a “hover” effect so that the grid divs change color when your mouse passes over them,
    // leaving a (pixelated) trail through your grid like a pen would.
    element.addEventListener("mouseenter",()=>{
        element.classList.remove(classDefaultBackgroundColor);
        
        // element.classList.add(classMouseoverBackgroundColor);
        element.classList.add(backgroundColorList[Math.floor(Math.random() * 3)]);
    })
}

function CreatePad(size){
    // create size x size Pad
    createRowDivInContainer(size);
    createDivsInRow(size);
}

const createPadButton = document.querySelector('.reset-button');
createPadButton.addEventListener("click",()=>{
    const aNumber = Number(window.prompt("please enter a number", ""));
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    CreatePad(aNumber);
})


// 