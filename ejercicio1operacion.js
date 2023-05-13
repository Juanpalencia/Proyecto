
function Calcularprecio(precio_base,descuento) {

    if (precio_base <= 0 || descuento < 0 || descuento > 100) {
        console.log("los valores ingresados son invalidos")
    }
    else if (descuento == 0) {
        console.log("el precio final del descuento es: $",precio_base)
        }

    else {
        let precio_final = precio_base - (precio_base * (descuento / 100))
        console.log("el precio final de descuento es:  $",precio_final)
       }
}