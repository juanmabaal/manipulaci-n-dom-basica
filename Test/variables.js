let Apellido = "Balaguera";
let Nombre = "Juan Manuel"
let NombreDeUsuarioEnPlatzi = "juanmabaal";
let Edad = 28;
let CorreoElectrónico = "juanma.baal@gmail.com";
let adulto = true;
let DineroAhorrado = 2000;
let Deudas = 500;
let DineroReal = DineroAhorrado - Deudas

//Nombre completo (nombre y apellido)
console.log (`Mi nombre es ${Nombre} ${Apellido}`)

//Dinero real (dinero ahorrado menos deudas)
console.log(`El dinero real que tengo es ${DineroReal}`)

//constname = "Juan David";constlastname = "Castro Gallego";constcompleteName = name + lastname;constnickname = "juandc";console.log("Mi nombre es "+ completeName + ", pero prefiero que me digas "+ nickname + ".")

function Name(name, lastname, nickname) {
    let completename = name + " " + lastname;
    console.log("Mi nombre es "+ completename + ", pero prefiero que me digas "+ nickname + ".")
}

Name("Juan", "Balaguera", "juanmabaal")

const tipoDeSuscripcion = "Expert Plus"

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis")
}else if ((tipoDeSuscripcion === "Basic") || (tipoDeSuscripcion === "Expert")) {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
}else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
}

function Suscription(Name, Message){
    this.Name = Name;
    this.Message = Message;
}

const suscriptionType = ["Free", "Basic", "Expert", "ExpertPlus"];
const suscriptionMessage =["Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes", "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]

let suscription = "ExpertPlus"

for (let i = 0; i < suscriptionType.length; i++) {
    if(suscription === suscriptionType[i]) {
        console.log (`En tu suscripción ${suscriptionType[i]} ${suscriptionMessage[i].toLocaleLowerCase()}.`)
    }
    
}

let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++
}

let n = 10;
while (n >= 2) {
    console.log("El valor de i es: " + n);
    n--
}


 function validacionSuma(num1, num2){
    let sumar = num1 + num2
    var inputUser = prompt(`¿Cuánto es ${num1} + ${num2}?`)

    if (sumar == inputUser){
        console.log("Muy bien, felicitaciones :)");
    } else {
        do {
    var inputUser2 = prompt(`Se ha equivocado. vuelva a intentarlo. ¿Cuánto es ${num1} + ${num2}?`)
    
    } while (inputUser2 != sumar);
    console.log("Muy bien, felicitaciones :)")
    }
 }
 
 validacionSuma(2,2)

 let paises = ["Colombia", "Chile", "Uruguay", "Paraguay", "Brasil", "Argentina"]

 function readArray(array) {
    console.log(array[0])
 }

 readArray(paises)

function arrayElemnts(object) {
 for (let i in object) {
    console.log(object[i])
 }
}

arrayElemnts(paises)

let adaptogen = {
    name: "Ashwaganda",
    function: "Stress Reduction",
    time: "3 weeks",
}

const suscriptionTypes = {
    Free:"Solo puedes tomar los cursos gratis", Basic:"Puedes tomar casi todos los cursos de Platzi durante un mes" ,
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
        }

let suscripcion = "Free"

function imprimirMensaje(obj) {
    
        if (obj[suscripcion]) {
             console.log (`En tu suscripción ${obj[suscripcion]}`)
        }
}