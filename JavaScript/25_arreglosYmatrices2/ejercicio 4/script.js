/*
Enunciado:
Crea un arreglo con los días de
la semana. Luego, al hacer clic en
el botón, muestra con alert() el
día martes
usando su posición en el arreglo.
*/

function resultado() {
  let datos = [
    [1, 2, 3, 4],
    [5, 6, [7, 8, [9, 10]]]
  ];
  suma = datos[1][2][2][0] + datos[0][0] // datos[1][2][2][0] agarra el valor 9 y datos[0][0] agarra el primer valor de la matriz
  alert(suma)
}
