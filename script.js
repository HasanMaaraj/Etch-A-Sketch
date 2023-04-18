const grid = document.querySelector('.grid');
const button = document.querySelector('#new-grid');

function createGrid(size){
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

    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => block.addEventListener('mouseenter', ()=>{
        block.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    },
    {
        once:true
    }));
}

button.addEventListener('click', () => {
    let newSize = prompt('Enter new grid size.');
    if (newSize <= 64){
        createGrid(newSize);
    }
    else {
        alert('the size should be a number not higher than 64')
    }
});

createGrid(16);