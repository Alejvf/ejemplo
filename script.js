const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('parrafito');
const pid = document.querySelector('#ppp');
const input = document.querySelector('input');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const resultado = document.querySelector('#resultado');
const form = document.querySelector('#form');

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    //event.preventDefault();
    const r = input1.value + input2.value;
    resultado.innerText = "Resultado: " + r;
}






console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Ppppppp'; //Cambiar el HTML

console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'hhh');
console.log(h1.getAttribute('class'));

h1.classList.add('rojo'); //Agregar una clase
h1.classList.remove('rojo'); //Eliminar clase

input.value = "456";

//const img = document.createElement('img'); //Crear algo en el HTML
//img.setAttribute('src', 'https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg')
//console.log(img);

//ppp.innerHTML = "";
//ppp.appendChild(img);