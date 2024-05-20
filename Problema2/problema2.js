/* Para resolver este problema deberás utilizar if-else para crear un
código que obtenga a través de un prompt un número y muestre un
alert:
● 0, si el número ingresado es igual a cero.
● 1, si el número ingresado es mayor que cero.
● -1, si el valor es menor a cero.
Asumimos que siempre el usuario introduce un número.  */


// Iniciaremos creando la solicitud de ingresar un numero//
let respuesta = prompt("Ingrese un numero y mostrare '1' si el numero es positivo, '-1' si es negativo, o '0' si es igual a 0");

/* creamos el codigo que compare el numero ingresado para indicarnos lo siguiente:
● 0, si el número ingresado es igual a cero.
● 1, si el número ingresado es mayor que cero.
● -1, si el valor es menor a cero.
*/

if (respuesta == 0) {
    console.log("El numero es igual a cero");
} else if (respuesta > 0 ) {
    console.log("El numero ingresado es positivo, por lo tanto mostrare '1' ");
} else {
    console.log("el numero ingresado es negativo, por lo tanto mostrare '-1' ");
}