/*
Realiza un algoritmo en el que se crea un array, se le pregunta al
usuario cuántos números quiere ingresar al array. El código debe
mostrar con alert() el número más pequeño y el más grande. No debes
ordenar ni iterar el array más de una vez.
*/


// Solicitar al usuario cuántos números quiere ingresar al array
const cantidad = parseInt(prompt("¿Cuántos números desea ingresar?"));

// Inicializar el array y las variables para el número más pequeño y el más grande
let numeros = [];
let numeroMin = Infinity;
let numeroMax = -Infinity;

// Solicitar al usuario que ingrese los números y encontrar el mínimo y el máximo en una sola iteración

/* esta operacion nos indica que el bucle se siga ejecutando hasta que
se cumpla la condicion de la cantidad de numeros que el usuario 
desea ingresar*/
for (let i = 0; i < cantidad; i++) {
    /* codigo para personalizar el mensaje del input pidiendo el numero correspondiente
    segun la cantidad de numeros que el usuario pidio */
  let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
  //este comando ingresa el valor dentro del array
  numeros.push(numero);
  //imprime el numero ingresado
  console.log(numero);
  

  //indicacion para guardar el numero minimo temporalmente
  if (numero < numeroMin) {
    numeroMin = numero;
    // imprimir estado actual del numero menor y mayor
    console.log("por ahora el numero menor es: "+numeroMin);
    console.log("por ahora el numero mayor es: "+numeroMax);
  }
  
  //indicacion para guardar el numero maximo temporalmente
  if (numero > numeroMax) {
    numeroMax = numero;
    // imprimir estado actual del numero menor y mayor
    console.log("por ahora el numero menor es: "+numeroMin);
    console.log("por ahora el numero mayor es: "+numeroMax);
  }
}

// Mostrar el número más pequeño y el más grande utilizando alert()
alert(`El número más pequeño es: ${numeroMin}`);
alert(`El número más grande es: ${numeroMax}`);
