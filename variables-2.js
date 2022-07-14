//listas o arays-> conjunto de variables puestas en orden

const lista = [1, "hola", true, null ];

const lista2 = new Array(2, "hola", true, null )

const lista3 = new Array(3); //-> esto deja tres huecos y a continuacion definimos el valor de cada uno
lista3[1] = "segundo elemento del array"
lista3[0] = "primer elemento del array"

const lista4 = [lista, lista2, lista3] //->lista de listas


console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);



//objetos

const movil = { //->se pueden cambiar los valores de sus atributos pero no el valor de la constante "movil"
    altura: 10,
    marca: "iphone",
    isWhite: false,
    contactos: ["david", "martin", "raul"],
    tarjeta: {
        marca: "sandisk",
        almacenamiento: "32gb"
    }
}

/*para cambiar valor de algun atributo->*/ movil.marca= "xiaomi" 

console.log (movil.marca)
console.log (movil.tarjeta)
console.log (movil.tarjeta.marca)

//fechas

//libreria-> Moment.js

const ahora = new Date(); //->te da la fecha actual
console.log (ahora)

const dia = ahora.getDate() //dia
const mes = ahora.getMonth() +  1 //-> para que enero no sea el mes 0 de la lista
const año = ahora.getFullYear() //año

console.log(dia, mes, año)


