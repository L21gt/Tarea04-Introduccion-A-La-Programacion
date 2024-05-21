/* 
Crea un algoritmo que solicite el precio de tres platos del menú de
un restaurante y el impuesto que debe ser cobrado. Despliega con
alert() el monto total de la factura. Debes realizar una llamada a una
función.
*/

function calcularTotal(precio1, precio2, precio3, impuesto) {
    // Sumar los precios de los tres platos
    const subtotal = precio1 + precio2 + precio3;
    
    // Calcular el monto del impuesto
    const montoImpuesto = subtotal * (impuesto / 100);
    
    // Calcular el total de la factura
    const total = subtotal + montoImpuesto;
    
    return total;

  }
  
  // Solicitar el precio de los tres platos y el impuesto al usuario
  const precio1 = parseFloat(prompt("Ingrese el precio del primer plato:"));
  console.log('Precio plato 1: '+precio1);
  const precio2 = parseFloat(prompt("Ingrese el precio del segundo plato:"));
  console.log('Precio plato 2: '+precio2);
  const precio3 = parseFloat(prompt("Ingrese el precio del tercer plato:"));
  console.log('Precio plato 3: '+precio3);
  const impuesto = parseFloat(prompt("Ingrese el porcentaje de impuesto:"));
  console.log('Impuesto aplicable: '+impuesto+'%');
  
  // Calcular el total de la factura llamando a la función
  const totalFactura = calcularTotal(precio1, precio2, precio3, impuesto);
  
  // Mostrar el total de la factura utilizando alert()
  //alert(`El monto total de la factura es: $${totalFactura.toFixed(2)}`);
  alert(`El monto total de la factura es: `+totalFactura);