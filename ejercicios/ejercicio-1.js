// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

// - Tu nombre (string)

// - Tu edad (number)

// - ¿Eres desarrollador? (boolean)

// - Tu fecha de nacimiento (Date)

// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url, capitulos)

const nombre = "David";

let edad = 28;

let desarrollador = true;

const cumple = new Date("february 28 1994");

const libro = {
    titulo: "El formaweb IV",
    autor: "el Bule",
    fecha: "4 de Agosto",
    url: "www.bule.com",
    capitulos: 56,
    divertido: false,
}

console.log(nombre, edad, desarrollador, cumple, libro)