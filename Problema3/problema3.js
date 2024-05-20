/*  
A continuación se presenta un código de JavaScript, reescribelo
utilizando operadores ternarios múltiples ‘?’.

let message;

if (login == 'Trabajador') {
    message = 'Hola';
} else if (login == 'Dueño') {
    message = 'Felicidades';
}    else if (login == '') {
    message = 'Sin sesion';
} else {
    message ='';
}
*/


// crear el input de texto inicial para poder efectuar la comparacion
let login = prompt("Ingrese cual es su puesto");

/* usando operadores ternarios multiples se da la instruccion a mostrar
un mensaje de acuerdo al input que se reciba */
let message = login == 'Trabajador' ? 'Hola'
            : login == 'Dueño' ? 'Felicidades'
            : login == '' ? 'Sin sesion'
            : '';

// imprimir en consola el resultado de la operacion de acuerdo al input
console.log(message);

