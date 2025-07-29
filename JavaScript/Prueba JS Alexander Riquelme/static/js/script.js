function contarPares(a){
  let lista = []
  for (let i = 2;i <= a;i++){
    if (i % 2 == 0) {
      lista.push(i)
    }
  }
  return lista
}

function llamarFuncion(){
  let a = document.getElementById("input1")

  let resultado = contarPares(parseInt(a.value))
  document.getElementById("resultado1").textContent = `El conteo a terminado siendo: ${resultado}`
  alert(`El conteo a terminado siendo: ${resultado}`)
  console.log(`El conteo a terminado siendo: ${resultado}`)
}