// Create a webpage with a 16x16 grid of square divs
const container = document.querySelector('.container');

function createRowDivInContainer(number){
    // create divs for each column
    for (let index = 0; index < number; index++) {
        const divElement = document.createElement('div');
        divElement.classList.add('row');
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
            element.appendChild(divElement);
        }
    });
}

createRowDivInContainer(16);
createDivsInRow(16);