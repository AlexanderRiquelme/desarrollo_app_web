function contarVocales(texto) {
  let acumulador = 0;
  for (let i = 0; i < texto.length; i++) {
      if (
          texto[i] === "a" ||
          texto[i] === "e" ||
          texto[i] === "i" ||
          texto[i] === "o" ||
          texto[i] === "u"
      ) {
          acumulador++;
      }
  }
  return acumulador;
}

function resultadoVocales() {
  let a = document.getElementById("input1")
  let resultado = contarVocales(a.value)
  
  document.getElementById("resultado1").textContent = `La cantidad de vocales que hay en la palabra ingresada es: ${resultado}`
}

function filtrarMultiples(a,b) {
  let i = 0;
  let cont = a;
  let list = [a];
  console.log(`${i},${cont},${list}`)
  while (i != 1){
    if (cont + a <= b){
        cont += a
        list.push(cont);
    } else {
        i = 1
    }
  }
  return list 
}

function resultadoMultiples(){
  let a = document.getElementById("input2")
  let b = document.getElementById("input3")
  let resultado = filtrarMultiples(parseInt(a.value),parseInt(b.value))

  document.getElementById("resultado2").textContent = `Numeros encontrados: ${resultado}`
}