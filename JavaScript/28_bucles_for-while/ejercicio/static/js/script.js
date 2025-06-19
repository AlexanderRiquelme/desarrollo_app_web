function contar() {
    let n = parseInt(prompt("ingrese hasta que número desea contar")), l = [];
    for (let i = 1; i <= n; i++) {
        l.push(i)
    }
    document.getElementById("contadorN").innerHTML = `<p>El conteo a terminado y fue:<br>${l}</p>`
}

function suma(){
    let n = [], i = 1, resultado = 0;
    while (i <= 5) {
        n.push(parseInt(prompt("ingrese un numero para despues sumar")))
        i++
    }
    i = 0
    while (i < 5){
        resultado = resultado + n[i]
        i++
    }
    document.getElementById("resultadoSuma").innerHTML = `<p>El resultado final de la suma de ${n.join(" + ")}es:<br>${resultado}</p>`
}








