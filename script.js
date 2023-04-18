const grid = document.querySelector('.grid'); // Obtsin the grid div button from the document
const button = document.querySelector('#new-grid'); // Obtain the button from the document

function createGrid(size){
    // Create a grid of size x size withtin the grid div
    let teDelete = document.querySelectorAll('.row');
    teDelete.forEach(row => row.remove());
    for (let i=0; i<size; i++) {
        const div = document.createElement('div');
        div.className = 'row';
        for (let j=0; j<size; j++) {
            const childDiv = document.createElement('div');
            childDiv.className='block';
            div.appendChild(childDiv);
        }
        grid.appendChild(div);
    }

    // Add event listener to each block div so when the mous is hovering over it the background-color will change
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => block.addEventListener('mouseenter', ()=>{
        block.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})` // Create random rgb values for the background-color
    },
    {
        once:true // the event listener triggers only once so the color will not change after it changes the first time
    }));
}

// Add event listener to the button that will create a new grid when clicked
button.addEventListener('click', () => {
    let newSize = prompt('Enter new grid size.');
    if (newSize <= 64){
        createGrid(newSize);
    }
    else {
        alert('the size should be a number not higher than 64')
    }
});

// Create the 16x16 grid when the website first loads
createGrid(16);