// Crea un archivo JS que contenga las siguientes líneas

// - Una cadena de texto con tu Nombre

let nombre = "David";

// - Otra cadena de texto con tu Apellido

let apellido = "Seoane"

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let estudiante = (`${nombre}""${apellido}`)

console.log(estudiante);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudiante_mayus = (estudiante.toUpperCase());

console.log(estudiante_mayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudiante_minus = (estudiante.toLowerCase());

console.log(estudiante_minus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let letras = estudiante.length;
console.log(letras);

// - Una variable que contenga la primera letra del Nombre

let letra_pri = estudiante.charAt(0);
console.log(letra_pri);

// - Otra variable que contenga la última letra del Apellido

let letra_fin = estudiante.charAt(11);
console.log(letra_fin);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"

let sin_espacio = estudiante.trim().length
console.log(sin_espacio)

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let bool = estudiante.includes(nombre);
console.log(bool);