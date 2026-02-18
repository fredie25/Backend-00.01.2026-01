//Crea una función que retorne la suma de dos números.
const suma = (num1, num2) => {
    let resultado = num1 + num2;


    return resultado;


}
console.log(suma(200, 10));

//Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
const potencia = (base, exponente) => {
    let resultado = base ** exponente;
    return resultado;
}
console.log(`Resultado: ${potencia(2, 3)}`);


/// Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

const ejercicioCubos = () => {


    const sumOfCubes = (...numeros) => {
        //reduce acumula el cálculo de cada número al cubo
        return numeros.reduce((acumulador, n) => acumulador + (n ** 3), 0);
    };


    console.log("Resultado Suma de Cubos:", sumOfCubes(1, 5, 9));

};
ejercicioCubos();


//Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
//(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

const calculator = (num1, operacion, num2) => {
    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                console.log("Error: División por cero no permitida");
                return "Error: División por cero no permitida";
            }
            return num1 / num2;
        case "%":
            return num1 % num2;
        default:
            console.log("Error: Operación no reconocida");
            return "Error: Operación no reconocida";
    }
};


///Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
const ejercicioAreaTriangulo = () => {

    const triArea = (base, altura) => (base * altura) / 2;


    console.log(`El área del triángulo es: ${triArea(3, 2)}`);
    
};

// Ejecución del bloque
ejercicioAreaTriangulo();

//// Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
const nombreCompleto = (n, a, e) => {

    const nombreCompleto = `Hola mi nombre es ${n} ${a} y mi edad es ${e}`;
    return nombreCompleto;
}
console.log(nombreCompleto("Sebastián", "Yabiku", 33));


//Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
const ejercicioTiposDeDatos = () => {

    const obtenerTipo = (valor) => typeof valor; //type of siempre va a devolver el tipo de dato 


    const texto = "Hola";
    const numero = 33;
    const esReal = true;
    const objeto = { nombre: "Sebas" };
    const lista = [1, 2, 3];
    const nulo = null;
    const indefinido = undefined;
    const funcion = () => { };


    console.log("--- Tipos de Datos ---");
    console.log(`El valor '${texto}' es:`, obtenerTipo(texto));
    console.log(`El valor '${numero}' es:`, obtenerTipo(numero));
    console.log(`El valor '${esReal}' es:`, obtenerTipo(esReal));
    console.log(`El objeto es:`, obtenerTipo(objeto));
    console.log(`La lista es:`, obtenerTipo(lista));
    console.log(`El valor null es:`, obtenerTipo(nulo));
    console.log(`La variable sin definir es:`, obtenerTipo(indefinido));
    console.log(`La función es:`, obtenerTipo(funcion));
};

///Crear una función que reciba un array de valores y filtre los valores que no son string
const filtrarStrings = (arr) => {
    return arr.filter(elemento => typeof elemento === 'string');
};

const mezcla = [1, "hola", true, "mundo", 42, null, "adiós"];
const soloStrings = filtrarStrings(mezcla);
console.log(soloStrings); 



///Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.

const minMax = (arr) => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
};

console.log(minMax([1, 2, 3, 4, 5]));



//  Formato de número de teléfono
const formatearNumeroTelefono = (numeros) => {
    const cadena = numeros.join('');
    return `(${cadena.slice(0, 3)}) ${cadena.slice(3, 6)}-${cadena.slice(6)}`;
};
console.log("2. Teléfono:", formatearNumeroTelefono([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//  Mayor número de cada sub-matriz
const encontrarNumerosMayores = (matrices) => matrices.map(subMatriz => Math.max(...subMatriz));
console.log("3. Mayores:", encontrarNumerosMayores([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));

//  Primer y último índice de un carácter
const indiceCaracter = (palabra, caracter) => [palabra.indexOf(caracter), palabra.lastIndexOf(caracter)];
console.log("4. Índices 'c' en circumlocution:", indiceCaracter("circumlocution", "c"));

//  Convertir objeto en matriz
const objetoAMatriz = (objeto) => Object.entries(objeto);
console.log("5. Objeto a Matriz:", objetoAMatriz({ a: 1, b: 2 }));

//  Suma de presupuestos
const obtenerPresupuestos = (personas) => personas.reduce((acumulado, actual) => acumulado + actual.budget, 0);
console.log("6. Presupuestos:", obtenerPresupuestos([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]));

//  Obtener nombres de estudiantes
const obtenerNombresEstudiantes = (estudiantes) => estudiantes.map(estudiante => estudiante.name);
console.log("7. Estudiantes:", obtenerNombresEstudiantes([{ name: "Steve" }, { name: "Mike" }, { name: "John" }]));

//  Convertir objeto en matriz de claves y valores
const objetoALista = (objeto) => Object.entries(objeto);
console.log("8. Objeto a Lista:", objetoALista({ likes: 2, dislikes: 3, followers: 10 }));

//  Suma de cuadrados hasta n
const sumaCuadrados = (n) => {
    let suma = 0;
    for (let i = 1; i <= n; i++) suma += i ** 2;
    return suma;
};
console.log("9. Suma Cuadrados (3):", sumaCuadrados(3));

//  Multiplicar por la longitud de la matriz
const multiplicarPorLongitud = (arreglo) => arreglo.map(numero => numero * arreglo.length);
console.log("10. Multiplicar por longitud:", multiplicarPorLongitud([2, 3, 1, 0]));

//  Cuenta regresiva hasta cero
const cuentaRegresiva = (numero) => Array.from({ length: numero + 1 }, (_, indice) => numero - indice);
console.log("11. Cuenta regresiva (5):", cuentaRegresiva(5));

//  Diferencia entre el max y el min
const diferenciaMaxMin = (arreglo) => Math.max(...arreglo) - Math.min(...arreglo);
console.log("12. Diferencia Max-Min:", diferenciaMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

//  Filtrar cadenas (solo dejar enteros)
const filtrarLista = (arreglo) => arreglo.filter(elemento => Number.isInteger(elemento));
console.log("13. Filtrar lista:", filtrarLista([1, 2, 3, "x", "y", 10]));

//  Repetir elemento n veces
const repetir = (elemento, veces) => Array(veces).fill(elemento);
console.log("14. Repetir:", repetir(13, 5));

//  Reemplazar vocales (Extensión de prototipo)
String.prototype.reemplazarVocales = function(vocal) {
    return this.replace(/[aeiou]/gi, vocal);
};
console.log("15. vreplace:", "apples and bananas".reemplazarVocales("u"));

//  Encontrar a Nemo
const encontrarNemo = (frase) => {
    const palabras = frase.split(" ");
    const indice = palabras.indexOf("Nemo");
    return indice !== -1 ? `¡Encontré a Nemo en ${indice + 1}!` : "No encontré a Nemo";
};
console.log("16. Nemo:", encontrarNemo("I am finding Nemo !"));

//  Capitalizar la última letra de cada palabra
const capitalizarUltimaLetra = (texto) => {
    return texto.split(" ").map(palabra => 
        palabra.slice(0, -1) + palabra.slice(-1).toUpperCase()
    ).join(" ");
};
console.log("17. Última letra Mayúscula:", capitalizarUltimaLetra("hello"));

 