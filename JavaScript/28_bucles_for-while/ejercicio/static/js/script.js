function contar() {
    let n = parseInt(prompt("ingrese hasta que número desea contar")), l = [];
    for (let i = 1; i <= n; i++) {
        l.push(i)
    }
    document.getElementById("contadorN").innerHTML = `<p>El conteo a terminado y fue:<br>${l}</p>`
}

function suma() {
    let n = [], i = 1, resultado = 0;
    while (i <= 5) {
        n.push(parseInt(prompt("ingrese un numero para despues sumar")))
        i++
    }
    i = 0
    while (i < 5) {
        resultado = resultado + n[i]
        i++
    }
    document.getElementById("resultadoSuma").innerHTML = `<p>El resultado final de la suma de ${n.join(" + ")} es:<br>${resultado}</p>`
}

// ✅ Ejercicio 3: Mostrar solo los pares entre 1 y 20
// Usa un for para mostrar en pantalla solo los números pares del 1 al 20.



function pares() {
    numerosPares = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i)
        }
    }
    document.getElementById("resultadoPares").innerHTML =
        `<div class="resultado"><p>Número pares del 1 al 20: <strong>{${numerosPares.join(", ")}}</strong></p></div>`;
}

// Ejercicio 4: Contador regresivo con condición
// Pide un número al usuario y, usando un while, cuenta
// regresivamente hasta 0. Si el número es menor que 0, muestra "Número no válido".

function contadorRegresivo() {
    let lista = []
    let numero = parseInt(prompt("Ingrese un numero para la cuenta regresiva: "));
    if (numero === 0) {
        alert("Numero no valido");
    }
    while (numero >= 0) {
        // alert(numero);
        lista.push(numero);
        numero--;
    };
    document.getElementById("resultadoContador").innerHTML = `<p>${lista.join(" - ")}</p>`;

};

function multiplicarTabla() {
    let numero = parseInt(prompt("Ingrese un valor"))
    let resultado = []
    for (let i = 1; i <= 10; i++) {
        resultado.push(numero * i)
    }
    document.getElementById("resultadoMultiplicar").innerHTML = `<p>El resultado es ${resultado.join(", ")}</p>`
}

function sumaHastaCero() {
    let i = 1
    let n = 0
    while (i != 0) {
        i = parseInt(prompt("ingrese un valor para sumar o ingrese 0 para terminar"))
        n += i
    }
    document.getElementById("resultadoCero").innerHTML = `<p>el resultado final es: ${n}</p>`

}

function mostrarLetras() {
    let resultado = [] 
    let dato = prompt("ingrese una palabra")
    for (let i = 0,n = dato.length;i <= n; i++){
        resultado.push(dato[i])
    }
    document.getElementById("resultadoLetras").innerHTML = `<p>cada letra de la <br>palabra ingresada es <br>${resultado.join(", ")}</p>`
}

function validarPassword() {
    // let passwords = ["admin123", "hola321", "adios246"]
    let i = 0
    let password = "admin123"

    let dato = prompt("ingrese su contraseña")
    if (dato == password) {
        document.getElementById("password").innerHTML = `<p>Acceso permitido</p>`
    } else {
        document.getElementById("password").innerHTML = `<p>Acceso denegado</p>`
    }

    // for (let i = 0; i <= passwords.length; i++) {
    //     if (dato == passwords[i]) {
    //         document.getElementById("password").innerHTML = `<p>Acceso permitido</p>`
    //     } else {
    //         document.getElementById("password").innerHTML = `<p>Acceso denegado</p>`
    //     }
    // }
}

function calcularPromedio() {
    let promedio = 0
    let notas = [];
    let cantNotas = parseInt(prompt("Ingrese la cantidad de notas que va a ingresar"))
    for (let i = 0; i <= cantNotas-1; i++){
        notas.push(parseInt(prompt("Ingrese una nota")))
        if (i >= 10) {
            break
        }
    }
    for (let i = 0; i <= notas.length-1; i++) {
        promedio += notas[i]
    }
    console.log(promedio)
    promedio = promedio / notas.length
    console.log(promedio)
    document.getElementById("promedio").innerHTML = `<p>Su promedio de notas es: ${promedio}</p>`
}

function mayorEdad() {
    let a = 0
    let mayores = 0
    let cant = parseInt(prompt("Ingrese la cantidad de personas a ingresar"))
    for (let i = 0; i <= cant; i++){
        a = parseInt(prompt("Ingrese la edad"))
        if (a >= 18){
            mayores++
        }
    }
    document.getElementById("mayores").innerHTML = `<p>La cantidad de personas mayores de edad ingresadas es:<br>${mayores}</p>`
}
