let compras = [];
let colores = ["rojo", "azul"];
let numeros = [10, 20, 30]
let orden = []

function llenarLista() {
    compras.push("pan","leche","huevos")

}

function imprimirLista() {
    alert(`lista de compras: ${compras.join(" - ")}`)
}

function quitarUltimo() {
    
    if (compras.length > 0) {
        let ultimo = compras.pop();
        alert("el elemento eliminado fue: "+ultimo)
    } else {
        alert("La lista de compras esta vacia")
    }

}   
function mostrarColores() {
    alert(colores)
}

function colorAgregar() {
    colores.unshift("Amarillo")
    alert(`El color Amarillo fue agregado a la lista de colores\n la lista completa es: ${colores}`)
}

function quitarColor() {
    let ultimo = colores.shift()
    alert(`El primer elemento de la lista "colores" a sido eliminado\nEl elemento eliminado: ${ultimo}\nLista Completa: ${colores}`)
}

function combinacionMetodos() {
    numeros.push(40)
    alert("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n"+numeros+"\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
    var a = numeros.shift()
    alert("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n"+numeros+" Y el elemento elminado es "+a+"\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
    numeros.unshift(5)
    alert("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n"+numeros+"\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
    var a = numeros.pop()
    alert("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n"+numeros+" Y el elemento elminado es "+a+"\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

}
function hacerOrden(){
    var a = 1
    while (a <= 3){
        orden.unshift(a)
        a++
    }
    alert(orden)
    orden = []
}
// // Creación de Arreglo
// let array = ["Xbox","Nintendo"];
// //Creación de funciones
// function usarPush(){
// // Agregar al final
//     let entrada = prompt("Agregar una consola de juego: ");
//     array.push(entrada);
//     alert("El nuevo arreglo es: " + array.join(" - "));
// }
// function usarPop(){
//     //Elimina el último elemento
//     let basurero = array.pop();
//     alert(`Elemento eliminado: ${basurero}`);
// }
// function usarUnshift(){
//     // Agregar al inicio
//     let entrada = prompt("Agregar una consola de juego: ");
//     array.unshift(entrada);
//     alert("El nuevo arreglo es: " + array.join(" "));
// }
// function usarShift(){
//         //Elimina el primer elemento
//         let basurero = array.shift();
//         alert(`Elemento eliminado: ${basurero}`);
// }