const h1 = document.querySelector(`h1`);
const form = document.querySelector(`#form`)
const input1 = document.querySelector(`#calculo1`)
const input2 = document.querySelector(`#calculo2`)
const btn = document.querySelector(`#btnCalcular`)
const pResult = document.querySelector(`#result`)
const pPrint = document.querySelector(`#print`)
const bloque = document.querySelector(`.bloque`)

bloque.addEventListener(`mouseenter`, () => {
    bloque.style.backgroundColor = "blue";
})

bloque.addEventListener(`mouseleave`, () =>{
    bloque.style.backgroundColor = "red";
})

btn.addEventListener(`click`, sumarInputValues)

input1.addEventListener(`change`, (p) => {
    pPrint.textContent = p.target.value;
})

function sumarInputValues(event) {
   /*  console.log({event}); */
   /*  event.preventDefault(); */
 const sumaInput = input1.value  + input2.value;
 pResult.innerText = "Resultado: " + sumaInput;
}
