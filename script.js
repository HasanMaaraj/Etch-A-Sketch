const container = document.querySelector('.container');

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
        container.appendChild(div);
    }

    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => block.addEventListener('mouseenter', ()=>{
        block.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    },
    {
        once:true
    }));
}

createGrid(16);

