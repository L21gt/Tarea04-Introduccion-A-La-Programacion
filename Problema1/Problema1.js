/* Utilizando if-else, escribe un código que pregunte: “¿Cuál es el
nombre del ‘creador’ de JavaScript?” . Si el usuario teclea “Brendan
Eich”, entonces muestra en consola: “¡Correcto!, de lo contrario
muestra: “¿No lo sabes? ¡Brendan Eich!  */




/* Creando la pregunta inicial a traves de una ventana de introduccion de texto donde el usuario ingresara su respuesta */
let respuesta = prompt("¿Cuál es el nombre del ‘creador’ de JavaScript?");

/* la funcion if donde acorde a la respuesta del usuario pueda mostrar la respuesta correcta si coincide, o si ingresa una respuesta diferente
poder mostrar el mensaje de correccion */
if (respuesta === "Brendan Eich") {
    console.log("¡Correcto!");
} else {
    console.log("¿No lo sabes? ¡Brendan Eich!");
}

