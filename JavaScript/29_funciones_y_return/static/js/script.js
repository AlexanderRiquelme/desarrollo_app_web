/*🟦 Ejercicio 1: Repetir una palabra N veces
📌 Solicita al usuario una palabra y un
número usando prompt. Luego, crea una función
que reciba ambos valores como parámetros,
repita la palabra N veces utilizando un bucle,
y retorne el resultado completo como una
cadena de texto. Muestra el resultado con
  alert. */

  function repetirPalabra(palabra, veces){
    let resultado = "";
    for(let i = 0; i < veces; i++){
        resultado += `${palabra} `//  'hola hola hola hola '
    }
    return resultado.trim(); // trim elimina espacios 'hola hola hola hola'
    // en los extremos
}

function mostrarPalabras(){
let input1 = document.getElementById("input1");
let palabra = input1.value;
let numero = parseInt(prompt("Ingrese cantidad a repetir"));

let resultadoFinal = repetirPalabra(palabra, numero);

document.getElementById("resultado1").textContent = resultadoFinal;
}

function calcular(a,b){
  let textoFinal = ""

  if (a == b){
    textoFinal = `<p>El primer y segundo valor ingresado son iguales</p>`
  } else if (a < b) {
    textoFinal = `<p>El primer valor ingresado es menor que el segundo</p>`
  } else if (a > b) {
    textoFinal = `<p>El primer valor ingresado es mayor que el segundo</p>`
  }
  return textoFinal
}

function compararNumeros(){
  let a = document.getElementById("input2");
  let b = document.getElementById("input3");

  let resultado = calcular(a.value,b.value)


  document.getElementById("resultado2").innerHTML = resultado
}

function verificar(a) {
  if (a % 2 != 0){
    return "inpar"
  } else {
    return "par"
  }
}

function verificarNumero (){
  let a = document.getElementById("input4");

  let resultado = verificar(a.value)

  document.getElementById("resultado3").textContent = resultado;
}

function numPrimo(a){
  if (a <= 1){
    return `El numero ${a} no es primo`
}
for (let i = 2; i < a; i++){
    if (a % i === 0)
        return `El numero ${a} no es primo`
}
return `El número ${a} es primo`;
}


function validarP(){
  let a = document.getElementById("input5");

  let resultado = numPrimo(a.value)

  document.getElementById("resultado4").textContent = resultado;
}

function exponer(a,b){
  let resultado = a
  
  for (let i=1; i < b; i++){
    resultado =+ resultado * a
  }
  return resultado
}

function potencia(){
  let a = document.getElementById("input6")
  let b = document.getElementById("input7")
  let resultado = exponer(a.value,b.value)
  document.getElementById("resultado5").textContent = resultado
}