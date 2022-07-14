//Estructuras de control: 

//bifurcaciones (if, else)

let saldo = 50;
let efectivo = 20;

if (efectivo < saldo) {
    console.log("saca dinero bro")
} else {
    console.log("mejor no")
}


// if else + else if

let nota = 3;

if (nota=== 5) {
    console.log("¡HAS APROBADO!")
} else if (nota===4) {
    console.log("has sacado un 4")
}
else if (nota===3) {
    console.log("al limite")
}
else if (nota===2) {
    console.log("FLOJO")
}
else if (nota===1) {
    console.log("DEBACLE")
}


//sentencias/secuencias Switch

let salario = 750;

switch (salario) {
    case 1000: console.log("Salario minimo");
    break; //el operador break se utiliza para que no te lea todos los case seguidos, sino uno por uno
    case 750: console.log("tres cuartas partes");
    break;
    case 500: console.log("medio salario");
    break;
    default: console.log("Error"); //buenas practicas poner uno dentro de un switch
    break;

}

//Comparaciones

//igualdad -> === (igualdad fuerte, compara el valor y el tipo(number, string...)), == (igualdad debil, solo compara el valor)

if (5 === 5) {
    console.log("5 es igual a 5")
}


//desigualda,es diferente

let c= 4;
let d = "4";

if (c != d) {
    console.log("son debilmente distintos")
}

if (c !== d) {
    console.log("son fuertemente distintos")
}

//mayores y menores

let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que")
}
if (max >= min) {
    console.log("max es mayor o igual que")
}
if (min <= max) {
    console.log("min es menor o igual que")
}

//Bucles -> se va repitiendo un codigo en funcion de una condicion

//bucles For

// for (inicializacion; condicion; actualizacion) {
//     //esto es el bucle
    
// }

for (let i = 0; i < 10; i++)  //i inicia en 0 siempre que sea menor que 10 y al final de cada bucle i suma 1 
//apunte-> i = i + 1 es lo mismo que poner i++ o i +=1 
{ 
    console.log(i);
    
}

let lista = [1,6,5,54,12,6,200,9,77,2];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]); //cada elemento de la lista
    
}

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 5); //cada elemento de la lista mutiplicado por 5
    
}

//bucles Forof

for (let valor of lista) {
    console.log(valor);
}

//bucles/estructura ForEach

lista.forEach(valor =>{
    console.log(valor);
})



//Estructura For...in

const movil = { 
    altura: 10,
    marca: "iphone",
    isWhite: false,
    contactos: ["david", "martin", "raul"],
    tarjeta: {
        marca: "sandisk",
        almacenamiento: "32gb"
    }
}

for (const propiedad in movil) {
    console.log(propiedad);
    console.log(movil[propiedad]);
}


//bucles While


// while (condition) se ejecutan siempre que la condition se cumpla
    
// }

let i= 0;
let o = 10;
while (i<o) {
    console.log(i);
    i++;
}

//bucles Do...while

do {
    
} while (condition);


i = 15;

do {
  console.log("HOLA ANGELA QUE TAL?");
} while (i< o);

//aunque no se cumple la condicion de i<o, con Do...while la primera vez siempe va a correr el bucle, y es luego cuando llega la condicion para ver si sigue o no