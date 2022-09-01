const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D',
'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomNumbers(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", function hexClick(){
    let hexColor = '#'
    for(let i = 0;i<6;i++){
        hexColor += colors[getRandomNumbers()]
    };
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor; 
})

