/*
"Desarrolla un código que solicite al usuario su nombre de usuario
utilizando la función prompt.
Si el usuario ingresa 'Admin', se le pedirá que ingrese una contraseña.
Si el usuario deja el campo vacío o presiona 'Esc', se mostrará
'Cancelado'. Si ingresa cualquier otra cadena, se mostrará 'No te
conozco'.
La contraseña se verificará de la siguiente manera:
● Si es 'Jedi', se mostrará '¡Que la fuerza te acompañe!'.
● Para cualquier otra contraseña, se mostrará 'Contraseña
incorrecta'.
● Para una cadena vacía o una entrada cancelada, se mostrará
'Cancelado'."
*/


// declaracion de variables message y password
let message;
let password;

// comando inicial para solicitar el usuario
let user = prompt("Ingrese su usuario");

// Codigo que determina que accion tomar dependiendo de que se ingrese
switch (user) {
    // si ingresa una cadena vacia mostrara cancelado
    case '':
        message = 'Cancelado';
        console.log(message);
        break;
    // si presiona la tecla Esc mostrara cancelado
    case 'Esc':
        message = 'Cancelado';
        console.log(message);
        break;
    // si ingresa el user Admin procedera a pedir la contaseña
    case 'Admin':
        password = prompt("Ingrese su contraseña");
        // creo otro switch dentro de admin para dar resultado acorde al input
        switch (password) {
            // si ingresa Jedi mostrara que la fuerza te acompañe
            case 'Jedi':
                message = '¡Que la fuerza te acompañe!';
                console.log(message);
                break;
            // si ingresa una cadena vacia mostrara Cancelado
            case '':
                message = 'Cancelado';
                console.log(message);
                break;
            // si el usuario decide cancelar mostrara Cancelado
            case 'Cancelar':
                message = 'Cancelado';
                console.log(message);
                break;
            // Si el usuario ingresa cualquier otra contraseña mostrara que es incorrecta
            default:
                message = 'Contraseña incorrecta';
                console.log(message);
        }
        break;
    // si el usuario no ingresa ninguna de las opciones determinadas para el user mostrara no te conozco
    default:
        message = 'No te conozco'
        console.log(message);
}

// fin de la aplicacion