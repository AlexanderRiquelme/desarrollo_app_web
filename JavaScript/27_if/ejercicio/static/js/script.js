








function verificarEdad() {
    let edad = parseInt(prompt("Ingreses su edad"))
    if (edad >= 18) {
        document.getElementById("resultado-edad").innerHTML = `<p>Es mayor de Edad: ${edad}</p>`;
        alert("Acceso permitido")
    } else if (edad <= 17) {
        document.getElementById("resultado-edad").innerHTML = `<p>Es menor de Edad: ${edad}</p>`;
        alert("Acceso denegado")
    }
}

function producto() {
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("ingrese un producto para su lista de compras")
    if (productos.includes(nuevoProducto)) {
        document.getElementById("resultado-productos").innerHTML = `<p>El producto ${nuevoProducto} ya está en la lista</p>`
        alert("el producto nuevo ya esta ingresado")
    } else {
        productos.push(nuevoProducto)
        document.getElementById("resultado-productos").innerHTML = `<p>El producto ${nuevoProducto} a sido añadido a la lista</p>`
    }

}

function controlTareas() {
    let tareas = ["barrer", "lavar los platos", "bañar al perro", "cocinar", "lavar la ropa", "secar la ropa"];

    if (tareas.length > 5) {
        a = tareas.pop()
        document.getElementById("resultado-tareas").innerHTML = `<p>La lista de tareas era demasiado grande y el elemento ${a} a sido eliminado<br>La lista completa es: ${tareas}</p>`

    } else if (tareas.length <= 5) {
        document.getElementById("resultado-tareas").innerHTML = `<p>La lista de tareas esta lista y completa<br>tareas: ${tareas}</p>`
    }

}

function validarElemento() {
    let cola = ["sinNombre", "Pedro", "Lucía"];
    if (cola[0] == "sinNombre") {
        a = cola.shift()
        document.getElementById("resultado-validar").innerHTML = `<p>El primer elemento de la cola era un nombre invalido y fue eliminado.<br>El elemento invalido era: ${a}<br>Y la cola entera es: ${cola}</p>`
    } else {
        document.getElementById("resultado-validar").innerHTML = `<p>La cola esta completa.<br>${cola}</p>`
    }
}

function saludo() {
    let nombre = prompt("ingrese su nombre");
    let saludos = [];
    if (nombre != "") {

        saludos.push(`Hola, ${nombre}`)
        document.getElementById("resultado-saludo").innerHTML = `<p>${saludos}</p>`
    } else {
        document.getElementById("resultado-saludo").innerHTML = `<p>El nombre ${nombre} no es valido</p>`
    }

}

function calificarNota() {
    let nota = parseFloat(prompt("ingrese su nota"));
    if (nota > 7 || nota < 0) {
        document.getElementById("resultado-nota").innerHTML = `<p>La nota ingresada es invalida</p>`
    } else if (nota >= 6) {
        document.getElementById("resultado-nota").innerHTML = `<p><strong>¡EXELENTE!</strong> Has obtenido un puntaje de: <strong>${nota}</strong></p>`;
    } else if (nota >= 4) {
        document.getElementById("resultado-nota").innerHTML = `<p>¡Bien! has aprobado con un: <strong>${nota}</strong></p>`;
    } else if (nota < 4) {
        document.getElementById("resultado-nota").innerHTML = `<p>¡QUE MAL! Has reprobado con un: <strong>${nota}</strong></p>`
    }

}

function registroVisitas() {
    let visitas = [];
    let persona = prompt("ingrese su nombre");

    if (persona != "") {
        visitas.unshift()
        document.getElementById("resultado-visita").innerHTML = `<p>Se a añadido el nombre: ${persona} a la lista de visitantes, la lista completa es: ${visitas}</p>`
    } else {
        document.getElementById("resultado-visita").innerHTML = `<p>El nombre ingresado no es valido</p>`
    }
}

function controlStock() {
    let stock = ["arroz", "fideos"];
    let productoSolicitado = prompt("Solicite un producto");

    if (stock.includes(productoSolicitado)) {
        document.getElementById("resultado-solicitud").innerHTML = `<p>Producto: ${productoSolicitado} esta disponible</p>`
    } else {
        stock.push(productoSolicitado)
        document.getElementById("resultado-solicitud").innerHTML = `<p>Producto ${productoSolicitado} agregado al stock<br><strong>${stock}</strong></p>`
    }
}

function invitados() {
    let invitados = ["Ana", "Luis", "Camila"];

    let persona = prompt("Ingrese su nombre");

    if (persona in invitados) {
        document.getElementById("resultado-invitados").innerHTML = `<p>Bienvenido ${persona}</p>`
    } else {
        document.getElementById("resultado-invitados").innerHTML = `<p>Lo siento el nombre ${persona} <strong>NO</strong> está en la lista</p>`
    }
}

function evaluarRol() {
    let usuarios = ["Admin", "Editor", "Invitado"];
    let rol = prompt("Indique cual es su rol");

    if (rol == "Admin") {
        usuarios.unshift(rol)
        document.getElementById("resultado-rol").innerHTML = `<p>Rol prioritario agregado</p>`
    } else {
        usuarios.push(rol)
        document.getElementById("resultado-rol").innerHTML = `<p>Rol agregado</p>`
    }

}
