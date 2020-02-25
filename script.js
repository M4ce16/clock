let mijnButton = document.getElementById('tijd');
console.log(mijnButton);
let uur = document.getElementById('uur');
let minuten = document.getElementById('minuten');
let seconden = document.getElementById('seconden');
let datum = new Date();

mijnButton.addEventListener('click', () => {
mijnButton.style.backgroundColor = "red";
mijnButton.innerHTML = "Stop";
uur.innerHTML = datum.getHours();
minuten.innerHTML = datum.getMinutes();
seconden.innerHTML = datum.getSeconds();
})

mijnButton.addEventListener('click', () => {
mijnButton.style.backgroundColor = "green";
mijnButton.innerHTML = "Start";
uur.innerHTML = datum.getHours();
minuten.innerHTML = datum.getMinutes();
seconden.innerHTML = datum.getSeconds();
})
