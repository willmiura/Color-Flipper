const colors = ["red", "rgb(255,127,0)", "yellow", "green", 
    "blue", "rgb(75,0,130)", "rgb(143,0,255)"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function simpleClick(){
    const randomNumberSimple = 1;
    document.body.style.backgroundColor = colors[randomNumberSimple];
    color.textContent = colors[randomNumberSimple];
})