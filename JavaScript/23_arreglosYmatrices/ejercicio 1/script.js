/*
Enunciado:
Crea un arreglo con los días de
la semana. Luego, al hacer clic en
el botón, muestra con alert() el
día martes
usando su posición en el arreglo.
*/

function promedioTresPrimeros() {
  let valores = [1, 2, 3, 4, 5, 6]; // solo se va a dividir los primeros 3 valores
  let suma = 0;
  
  for (let i = 0 ;i < 3; i++) {
    suma = suma + valores[i];
  }
  let promedio = suma / 3;
  alert(promedio);
}
