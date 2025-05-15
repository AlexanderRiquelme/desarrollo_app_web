let numeroEntero = 2;
function mostrarNumeroEntero() {
    console.log("Número Entero:", numeroEntero);
};

let numeroDecimal = 1.1;
function mostrarNumeroDecimal() {
    console.log("Número Decimal:", numeroDecimal);
}

let cadenaTexto = "Hola mundo";
function mostrarCadenaTexto() {
    console.log("Cadena De Texto:", cadenaTexto);
}

let valorBooleano = false;
function mostrarValorBooleano() {
    console.log("Valor Booleano:", valorBooleano);
}

let arregloNumeros = [1, 2, 3, 4]
function mostrarArregloNumeros() {
    console.log("Arreglo De Numeros:", arregloNumeros);
}

let objetoPersonas = {
    nombre: "Pedro",
    edad: 300
}
function mostrarObjetoPersonas() {
    console.log("Objeto Personas:", objetoPersonas);
}

let valorIndefinido = undefined;
function mostrarValorIndefinido() {
    console.log("Valor Indefinido:", valorIndefinido);
}

let valorNulo = null;
function mostrarValorNulo() {
    console.log('Valor Nulo:', valorNulo);
}

let identificadorUnico = Symbol("Hola mundo");
function mostrarIdentificadorUnico() {
    console.log('Identificador Único:', identificadorUnico);
}

let numeroGrande = BigInt(783489458989889349);
function mostrarNumeroGrande() {
    console.log('Numero Grande:', numeroGrande);
}

const mes = "Mayo";
function mostrarMes() {
    console.log('Mes:', mes);
}

function operacion(a, b) {
    return a + b
}
mostrarNumeroEntero()
mostrarNumeroDecimal()
mostrarCadenaTexto()
mostrarValorBooleano()
mostrarArregloNumeros()
mostrarObjetoPersonas()
mostrarValorIndefinido()
mostrarValorNulo()
mostrarIdentificadorUnico()
mostrarNumeroGrande()
mostrarMes()
console.log("Resultado de la suma:",operacion(1, 2));

