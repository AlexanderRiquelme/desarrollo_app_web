



function verificarEdad(){
    let edad = parseInt(prompt("Ingreses su edad"))
    if (edad >= 18) {
        document.getElementById("resultado-edad").innerHTML = `<p>Es mayor de Edad: ${edad}</p>`;
        alert("Acceso permitido")
    } else if (edad <= 17) {
        document.getElementById("resultado-edad").innerHTML = `<p>Es menor de Edad: ${edad}</p>`;
        alert("Accesp denegado")
    }
}

function producto() {
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("ingrese un producto para su lista de compras")
    if (productos.includes(nuevoProducto)){
        
        alert("el producto nuevo ya esta ingresado")
    } else {
        productos.push(nuevoProducto)
    }

}

function controlTareas() {
    let tareas = ["barrer","lavar los platos","bañar al perro","cocinar","lavar la ropa","secar la ropa"]

    if (tareas.length > 5) {
        a = tareas.pop()
        alert(`la lista de tareas era demasiado grande y se a eliminado el elemento: ${a}`)
    } else if (tareas.length <= 5) {
        alert("Lista aceptable")
    }
    
}

function validarElemento() {
    let cola = ["sinNombre", "Pedro", "Lucía"];
    if (cola[0] == "sinNombre") {
        a = cola.shift()
        alert(`La cola tenia un nombre invalido y se a eliminado: ${a}`)
    } else {
        alert("Cola correcta")
    }
}

function saludo(){
    let nombre = prompt("ingrese su nombre")

    if (nombre != "") {
        let saludos = []
        saludos.push(`Hola, ${nombre}`)
        alert(saludos)
    } else {
        alert("Nombre no valido")
    }

}

function calificarNota(){
    let nota = parseFloat(prompt("ingrese su nota"))

    if (nota >= 6){
        document.getElementById("resultado-nota").innerHTML = `<p><strong>¡EXELENTE!</strong> Has obtenido un puntaje de: <strong>${nota}</strong></p>`;
    } else if (nota >= 4) {
        document.getElementById("resultado-nota").innerHTML = `<p>¡Bien! has aprobado con un: <strong>${nota}</strong></p>`;
    } else if (nota < 4) {
        document.getElementById("resultado-nota").innerHTML = `<p>¡QUE MAL! Has reprobado con un: <strong>${nota}</strong></p>`
    } else if (nota > 7 || nota < 0) {
        document.getElementById("resultado-nota").innerHTML = `<p>La nota ingresada es invalida</p>`
    }

}

function registroVisitas() {
    let visitas = []
    let persona = prompt("ingrese su nombre")

    if (persona != "") {
        visitas.unshift()
        document.getElementById("resultado-visita").innerHTML = `<p>Se a añadido el nombre: ${persona} a la lista de visitantes, la lista completa es: ${visitas}</p>`    
    } else {
        document.getElementById("resultado-visita").innerHTML = `<p>El nombre ingresado no es valido</p>`
    }
}

function controlStock() {
    let stock = ["arroz", "fideos"];
    let productoSolicitado = prompt("Solicite un producto")

    if (stock.includes(productoSolicitado)){
        document.getElementById("resultado-solicitud").innerHTML = `<p>Producto: ${productoSolicitado} esta disponible</p>`
    } else {
        stock.push(productoSolicitado)
        document.getElementById("resultado-solicitud").innerHTML = `<p>Producto agregado al stock</p>`
    }
}
