//Casos muy muy muy especiales/especificos - break, continue.
//No es recomendable usarlos o se usan muy poco ya que se pueden considerar malas practicas y no suelen ser necesarios si el codigo esta bien hecho

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue; //llega al 3, se lo salta y continua
    }

    console.log(lista[i]);

    if (lista[i] > 5) {
        break; //en cuanto se llega al 5 vuelve a reiniciar el bucle
    }
}



//Ambito de un bucle

//let y const si son declaradas dentro del bucle se pueden consolelog dentro del bucle, pero fuera no estaran definidas. 
//Sin embago Var queda definida para todo el documento en el que se encuentre