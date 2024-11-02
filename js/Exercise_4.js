/*1.- Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más,
muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro
mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
Ingrese su edad: 30
Tiene la edad suficiente para conducir.
Ingrese su edad:15
Te faltan 3 años para conducir.*/

let age = prompt("Ingrese su edad:");

if (age >= 18) {
    console.log("Tiene la edad suficiente para conducir.");
} else {
    let yearsLeft = 18 - age;
    console.log(`Te faltan ${yearsLeft} años para conducir.`);
}

/*2.- Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el
resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para
obtener la edad como entrada.
Ingrese su edad: 30
Eres 5 años mayor que yo.*/

let myAge = 20; 
let yourAge = prompt("Ingrese su edad:");

if (yourAge > myAge) {
    console.log(`Eres ${yourAge - myAge} años mayor que yo.`);
} else if (yourAge < myAge) {
    console.log(`Soy ${myAge - yourAge} años mayor que tú.`);
} else {
    console.log("Tenemos la misma edad.");
}

/*3.- Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de
implementarlo de maneras diferentes*/

//-Usando if else
let a = 4;
let b = 3;

if (a > b) {
    console.log("a es mayor que b");
} else {
    console.log("a es menor que b");
}

//-operador ternario.
console.log(a > b ? "a es mayor que b" : "a es menor que b");


/*4.- Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :
● Septiembre, Octubre o Noviembre, la temporada es Otoño.
● Diciembre, Enero o Febrero, la temporada es Invierno.
● Marzo, Abril o Mayo, la temporada es Primavera
● Junio, Julio o Agosto, la temporada es Verano*/


let month = prompt("Ingrese el mes:").toLowerCase();

if (month === "septiembre" || month === "octubre" || month === "noviembre") {
    console.log("La temporada es Otoño.");
} else if (month === "diciembre" || month === "enero" || month === "febrero") {
    console.log("La temporada es Invierno.");
} else if (month === "marzo" || month === "abril" || month === "mayo") {
    console.log("La temporada es Primavera.");
} else if (month === "junio" || month === "julio" || month === "agosto") {
    console.log("La temporada es Verano.");
} else {
    console.log("El mes ingresado no es valido. Coloque un mes valido");
}

/*5.- Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
● 80-100, A
● 70-89, B
● 60-69, C
● 50-59, D
● 0-49, F*/

let score = prompt("Ingrese el puntaje del estudiante:");

if (score >= 80 && score <= 100) {
    console.log("Calificación: A");
} else if (score >= 70 && score <= 79) {
    console.log("Calificación: B");
} else if (score >= 60 && score <= 69) {
    console.log("Calificación: C");
} else if (score >= 50 && score <= 59) {
    console.log("Calificación: D");
} else if (score >= 0 && score < 50) {
    console.log("Calificación: F");
} else {
    console.log("Putaje invalido. Coloque una calificacion del 1 al 100");
}

