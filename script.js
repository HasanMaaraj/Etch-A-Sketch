const container = document.querySelector('.container');
for (let i=0; i<16; i++) {
    const div = document.createElement('div');
    div.className = 'row';
    for (let j=0; j<16; j++) {
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
console.log(blocks)