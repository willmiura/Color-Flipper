const colors = ["Red", "Orange", "Yellow", "Green", 
    "Blue", "RGB(75,0,130)", "RGB(143,0,255)"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomNumbers(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", function simpleClick(){
    const randomNumberSimple = getRandomNumbers(3);
    console.log(randomNumberSimple)
    document.body.style.backgroundColor = colors[randomNumberSimple];
    color.textContent = colors[randomNumberSimple];
})
