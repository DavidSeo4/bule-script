// break y continue
// labels

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
        if (decenas === 2) {
            break bucleDecenas
        }
    }
    decenas++
}
console.log("Ya hemos terminado")


//todo este proceso es poco recomendable, son malas practicas, pero te pueden sacar de un apuro con javascript