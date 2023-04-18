const container = document.querySelector('.container');
for (let i=0; i<16; i++) {
    const div = document.createElement('div');
    div.className = 'row';
    for (let j=0; j<16; j++) {
        const childDiv = document.createElement('div');
        div.appendChild(childDiv);
    }
    container.appendChild(div);
}