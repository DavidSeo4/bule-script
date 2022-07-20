//strings (cadenas de caracteres) -> se pueden hacer con comillas simples y/o con comillas dobles

let str = "esto es un string";

console.log(str);


//string con comillas invertidas (backticks) que nos permiten introducir variables en nuestro texto (y ademas permite el salto de linea en los textos que escribamos//

let nombre = "Pepe";
let saludo = `Hola ${nombre}, bienvenid@`

console.log(saludo);


//Plantillas html

let plantilla = `
<html>
<h1>Pagina web de ${nombre}</h1>
<p>Este es un parrafo</p>
</html>
`

console.log(plantilla);


//Introduccion de variables en html

let libros = ["Pinochio", "Los cromos de La Liga", " y Harry Potter"]

let plantilla_2 = `
<html>
<h1>Pagina web de ${libros}</h1>
<p>Este es un parrafo</p>
</html>
`
console.log(plantilla_2);


//Metodos mas utilizados con strings (cadenas de caracteres)

//como obtener la longitud de un string

let longitud = "Hola soy Gelatina";
console.log(longitud.length);

//obtener partes de cadenas de caracteres -> slice() substring() substr() (este ultimo esta obsoleto)


let longitud_str =longitud.slice(0, 10) // metodo .slice es para determinar donde quiero que empiece el string y donde acaba 

console.log(longitud_str);



let longitud_sub =longitud.substring(5, 10) //metodo .substring 

console.log(longitud_sub);



//Reemplazar parte del contenido de un string

let cadena = "Hola mi nombre es Gorka"
console.log(cadena)

cadena.replace("Gorka", "Miguel") //el metodo .replace al utilizar strings solo actua sobre la primera palabra que deba cambiar que encuentre
console.log(cadena.replace("Gorka", "Miguel"));


let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

console.log(texto_largo.replace('los', 'cinco'))
//para reemplazar todas las instancias de la palabra que queremos, debemos añadir //g a la palabra como vemos a continuacion
console.log(texto_largo.replace(/los/g, 'cinco'))


// toLowerCase() - toUpperCase() //Convertir a mayus y minus//
let input = "ESCORpio"
let db = "escorpio"

console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toUpperCase() === db.toUpperCase())


// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2) //poco recomendable porque si coincide que las variables son dos numeros pueden llegar a sumarse
console.log(`${str_1} ${str_2}`)

// Eliminar espacios al inicio y al final
let str_3 = " Hola soy un string con espacios al final.   "
console.log(str_3.length)
// trim()
console.log(str_3.trim().length) //trim elimina los carateres vacios y cuenta solo la escritura
console.log(str_3.trimStart(7).length) //elimina los carateres vacios al inicio
console.log(str_3.trimEnd().length) //elimina los carateres vacios al final


// Obtener el caracter que hay en cierta posición (dos metodos, charAt y [])
let str_4 = "Hola soy el string número 4" // ["H", "o", "l", "a", " ", "s"........]

console.log(str_4.charAt(5))
console.log(str_4[9])


// Obtener la posición de una palabra dentro de una cadena de caracteres (metodos indexOf)
let str_5 = "Hola soy Gorka y me gusta el surf. Mi nombre es Gorka y mi apellido es Villar"
console.log(str_5.indexOf("Gorka")) //te da la posicion de la primera letra de la palabra, aqui la G. Si no la encuentra te devuelve un -1
console.log(str_5.lastIndexOf("Gorka")) //lastIndexOf devuelve la posicion de la ultima palabra que encuentre, en este caso la primera letra de el Gorka de la segunda frase



// Métodos de cadenas de texto (parte 3)
// https://regexr.com -> pagina para aprender como funcionan las expresiones regulares
let texto_corto = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

console.log(texto_corto.match(/no/g)) //devuelve todas las veces que aparece la palabra que buscas. Tambien las que estan dentro de otra palabra como el "no" de "mono"


// ¿Existe la palabra dentro del texto?
console.log(texto_corto.includes("terremoto"))
console.log(texto_corto.includes("mono"))

// Saber si un texto empieza con una palabra (string)
console.log(texto_corto.startsWith("Tito no es un mono"))

// Saber si un texto termina con otra palabra (string)
console.log(texto_corto.endsWith("árboles."))