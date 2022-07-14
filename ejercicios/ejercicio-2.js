// Crea los siguientes archivos JS:

// - factorial-for.js -> Este archivo debe calcular el factorial de 13 utilizando un solo bucle for

// - factorial-while.js -> Este archivo debe calcular el factorial de 7 utilizando un bucle while

// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break


//1

for (let i = 0; i < 13; i++)  
{ 
    console.log(i);
    
}


//2

i = 0;
o = 7;

do {
  console.log(i);
} while (i< o);


let saldo = 50;
let efectivo = 20;

if (efectivo < saldo) {
    console.log("saca dinero bro")
} else {
    console.log("mejor no")
}


//3

let unidades = 0
let decenas = 0

bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log(`El número actual es: ${decenas}${unidades}`)
        unidades++
        if (unidades === 10) {
            unidades = 0
            break bucleUnidades
        }
        if (decenas === 1) {
            break bucleDecenas
        }
    }
    decenas++
}
console.log("Ya hemos terminado")