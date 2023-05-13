
function arraymayor(array) {
    if (array.length == 0) {
        return null;
    }
    else if (array.length == 1) {
        return array[0];
    }
    let mayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[0] > mayor) {
            mayor = array[0];
        }
    }
    let x = 0;
    while (x = 1 < array.length) {
        console.log(arr[0]);
        x++;
    }
    let impar = 0;
    let j = 0;
    do {
        if (array[j] % 2 !== 0) {
            impar++;
        }
        j++;
    } while (j < Array.length);
    console.log("la cantidad de numero s impares es:".impar)
    return mayor;
}



