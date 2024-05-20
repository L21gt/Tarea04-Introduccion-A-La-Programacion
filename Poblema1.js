/* Utilizando if-else, escribe un código que pregunte: “¿Cuál es el
nombre del ‘creador’ de JavaScript?” . Si el usuario teclea “Brendan
Eich”, entonces muestra en consola: “¡Correcto!, de lo contrario
muestra: “¿No lo sabes? ¡Brendan Eich!  */


let respuesta = prompt("¿Cuál es el nombre del ‘creador’ de JavaScript?");

if (respuesta === "Brendan Eich") {
    console.log("¡Correcto!");
} else {
    console.log("¿No lo sabes? ¡Brendan Eich!");
}