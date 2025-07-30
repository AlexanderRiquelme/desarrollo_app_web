function contarPares(a){ // Crear función contarPares 
  let lista = [] // Crear lista vacia
  for (let i = 2; i <= a; i++){ // Iniciar ciclo for que corra hasta que el contador sea mayor que el argumento "a"
    if (i % 2 == 0) { // Dividir residualmente el contador, si el resultado es igual a cero
      lista.push(i) // añadir el valor de "i" a la lista creada anteriormente
    }
  }
  return lista // Devolver la lista
}

function llamarFuncion(){ // Crear metodo para llamar a la función contarPares
  
  let a = document.getElementById("input1") // Declarar variable "a" obteniendo el dato ingresado en el "input"
  let resultado = contarPares(parseInt(a.value)) // Declarar variable como el resultado de la función contarPares mandando a la variable "a" como argumento convertido a entero
  document.getElementById("resultado1").textContent = `El conteo a terminado siendo: ${resultado}` // Escribir el resultado en el HTML 
  alert(`El conteo a terminado siendo: ${resultado}`) // Escribir el resultado en el alert
  console.log(`El conteo a terminado siendo: ${resultado}`) // Escribir el resultado en la consola
}

