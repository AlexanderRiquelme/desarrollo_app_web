/*
Enunciado:
Crea un arreglo con los días de
la semana. Luego, al hacer clic en
el botón, muestra con alert() el
día martes
usando su posición en el arreglo.
*/

function mostrarDia() {
  let dias = ["lunes", "martes", "miércoles",
    "jueves", "viernes", "sábado", "domingo"];
  alert("El último día de la semana es: "
    + dias[dias.length - 1]);
}

function promedioTresPrimeros() {
  let valores = [1, 2, 3, 4, 5, 6]; // solo se va a dividir los primeros 3 valores
  let suma = 0;
  
  for (let i = 0 ;i < 3; i++) {
    suma = suma + valores[i];
  }
  let promedio = suma / 3;
  alert(promedio);
}

function sumaExtremos() {
  let valores = [1, 2, 3]
  suma = valores[0] + valores[valores.length-1]
  alert(suma)
}

function diferenciaCentroExtremos() {
  let valores = [100, 0, 10]
  residuos = valores[0] - valores[valores.length-1]
  alert(residuos)
}