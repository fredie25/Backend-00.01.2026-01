function ejercicio01() {
    let primerNumero = Number.parseInt(prompt("Dame el primer numero"));
    let segundoNumero = Number.parseInt(prompt("Dame el segundo numero"));

    let resultado = primerNumero + segundoNumero;
    if (
        isNaN(primerNumero) ||
        isNaN(segundoNumero) ||
        primerNumero < 0 ||
        segundoNumero < 0
    ) {
        Swal.fire({
            title: "Error",
            text: "Por favor, introduce solo números válidos.",
            icon: "error",
        });
        return;
    } else {
        Swal.fire({
            title: "Resultado",
            text: `La suma de ${primerNumero} + ${segundoNumero} = ${resultado}`,
            icon: "success",
        });
        return resultado;
    }
}

function ejercicio02() {
    let primerDigito = Number.parseInt(prompt("Ingresa el primer valor"));
    let valorPotencia = Number.parseInt(
        prompt("Ingresa el valor de la potencia"),
    );
    let valor = primerDigito ** valorPotencia;
    if (
        isNaN(primerDigito) ||
        isNaN(valorPotencia) ||
        primerDigito < 0 ||
        valorPotencia <= 0
    ) {
        Swal.fire({
            title: "Error",
            text: "Por favor, introduce solo números válidos.",
            icon: "error",
        });
        return;
    } else {
        Swal.fire({
            title: "Resultado",
            text: `El numero ingresado es ${primerDigito} y su potencia es ${valor}`,
            icon: "success",
        });
        return valor;
    }
}

function ejercicio03() {
    let suma = 0;
    let continuar = true;

    while (continuar) {
        let entrada = prompt(
            "Introduce una valor numerico para elevar al cubo y fin para parar",
        );

        if (entrada === null || entrada.toLowerCase() === "fin") {
            continuar = false;
        } else {
            let numero = Number.parseFloat(entrada);

            if (!isNaN(numero)) {
                suma += numero ** 3;
            } else {
                alert("Eso no es un número válido, intenta de nuevo.");
            }
        }
    }
    Swal.fire({
        title: "Respuesta",
        text: `El resultado total es: ${suma}`,
        icon: "success",
    });

    return suma;
}

function ejercicio04() {
    let baseNumero = Number.parseInt(prompt("Ingresa la base del triangulo"));
    let alturaNumero = Number.parseInt(prompt("Ingresa la altura del triangulo"));

    let area = (baseNumero + alturaNumero) / 2;
    if (
        isNaN(baseNumero) ||
        isNaN(alturaNumero) ||
        baseNumero <= 0 ||
        alturaNumero <= 0
    ) {
        Swal.fire({
            title: "Error",
            text: "Por favor, introduce solo números válidos.",
            icon: "error",
        });
        return;
    } else {
        Swal.fire({
            title: "Resultado",
            text: `El area del triangulo es : ${area}`,
            icon: "success",
        });
        return area;
    }
}

function ejercicio05() {
    let primerDigito = parseInt(prompt("Ingresa un valor numerico:"));
    let segundoDigito = parseInt(prompt("Ingresa el segundo numero"));
    let operacion = prompt("Ingresa una operacion matematica ( +,-,/,*,%)");
    const simbolos = ["+", "-", "/", "%", "*"];

    if (
        isNaN(primerDigito) ||
        primerDigito < 0 ||
        isNaN(segundoDigito) ||
        segundoDigito < 0 ||
        !simbolos.includes(operacion)
    ) {
        Swal.fire({
            title: "ERROR",
            text: `ingrese un valor correcto`,
            icon: "error",
        });
    } else {
        let resultado;

        switch (operacion) {
            case "+":
                resultado = primerDigito + segundoDigito;
                break;
            case "-":
                resultado = primerDigito - segundoDigito;
                break;
            case "/":
                resultado = primerDigito / segundoDigito;
                break;
            case "*":
                resultado = primerDigito * segundoDigito;
                break;
            case "%":
                resultado = primerDigito % segundoDigito;
                break;
        }
        Swal.fire({
            title: "Respuesta",
            text: `${primerDigito} ${operacion} ${segundoDigito} =  ${resultado}`,
            icon: "success",
        });

        return resultado;
    }
}

// ejercicios extra

//ejercicio1
const saludar = (nombre, apellido, edad) => {
    return `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
};

function problema01() {
    const mensaje = saludar("sebastián", "yabiku", 33);
    Swal.fire({
        title: "Respuesta",
        text: `${mensaje}`,
        icon: "success",
    });
}

//ejercicio2

const numero = (num1, num2, num3) => {
    return `${num1}^3 + ${num2}^3 + ${num3}^3 = ${num1 ** 3 + num2 ** 3 + num3 ** 3}`;
};
function problema02() {
    const valor = numero(1, 5, 9);
    Swal.fire({
        title: "Respuesta",
        text: `${valor}`,
        icon: "success",
    });
}

//ejercicio3

const tipoDato = (valor) => typeof valor;

function problema03() {
    let entrada = prompt("Ingresa un valor:");

    let numero = Number(entrada);
    if (!isNaN(numero) && entrada !== "") {
        Swal.fire({
            title: "Respuesta",
            text: `El tipo es: ${tipoDato(numero)}`,
            icon: "success",
        });
    } else {
        Swal.fire({
            title: "Respuesta",
            text: `El tipo es: ${tipoDato(numero)}`,
            icon: "success",
        });
    }
}

//ejercicio04

const sumarArgumentos = (...numeros) => {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
};

function problema04() {
    let entrada = prompt("Ingresa numeros seguidos separandolos para sumarlos:");

    let arregloNumeros = entrada.split(" ").map((num) => parseInt(num));

    let resultado = sumarArgumentos(...arregloNumeros);

    Swal.fire({
        title: "Respuesta",
        text: `Los numeros ingresados son ${arregloNumeros} y la suma de los numeros es: ${resultado}`,
        icon: "success",
    });
}

//ejercicio05

function problema05() {
    let valorIngresado = prompt("Ingrese valores separandolos con un espacio:");
    let array = valorIngresado.split(" ");
    let transformados = array.map((valor) => {
        if (valor === "true") {
            return true;
        }

        if (valor === "false") {
            return false;
        }

        let numero = Number(valor);

        if (!isNaN(numero)) {
            return numero;
        }

        return valor;
    });
    let valores = transformados.filter((valor) => typeof valor != "string");
    Swal.fire({
        title: "Respuesta",
        text: `${valores}`,
        icon: "success",
    });
}

//ejercicio06

function problema06() {
    let valor = prompt(
        "Ingresa valores numericos de la siguiente manera para hallar el minimo y maximo:(4 6 10)",
    );
    let array = valor.split(" ").map((num) => parseInt(num));
    let minimo = Math.min(...array);
    let maximo = Math.max(...array);
    Swal.fire({
        title: "Respuesta",
        text: `El minimo es ${minimo} , y el maximo nuemero es  ${maximo}`,
        icon: "success",
    });
}
//ejericio07
function problema07() {
    let valor = prompt("Ingresa 10 números separados por espacios (del 0 al 9):");

    let array = valor
        .trim()
        .split(/\s+/)
        .map((num) => parseInt(num));

    if (array.length !== 10 || array.some(isNaN)) {
        Swal.fire({
            title: "Error",
            text: "Por favor, ingresa exactamente 10 números válidos separados por espacios.",
            icon: "error",
        });
    } else {
        let cambio = array.reduce(
            (format, num) => format.replace("x", num),
            "(xxx) xxx-xxxx",
        );

        Swal.fire({
            title: "Número Formateado",
            text: `${cambio}`,
            icon: "success",
        });
    }
}

//ejercicio08
function problema08() {
    let valor = prompt(
        "Ingresa las matrices separadas por coma ( 4 2 7, 10 5 8):",
    );

    if (!valor) return;

    let matrizDeMatrices = valor.split(",").map((grupo) => {
        return grupo
            .trim()
            .split(/\s+/)
            .map((num) => parseInt(num));
    });
    let mayores = matrizDeMatrices.map((subArray) => Math.max(...subArray));

    Swal.fire({
        title: "Respuesta",
        text: `Los numeros mayores son: [${mayores.join(", ")}]`,
        icon: "success",
    });
}
//ejercicio09
function problema09() {
    let palabra = prompt("Ingresa una palabra:");
    let letra = prompt("Ingresa el valor de la letra que buscas");

    const primero = palabra.indexOf(letra);
    const ultimo = palabra.lastIndexOf(letra);

    Swal.fire({
        title: "Respuesta",
        text: `Resultados para "${letra}":, Primero: ${primero}, Último: ${ultimo}`,
        icon: "success",
    });
}
//ejercico10
function problema10() {
    let texto = prompt(
        'Ingresa un objeto de la siguiente manera {"a": 1, "b": 2}:',
    );

    try {
        let objeto = JSON.parse(texto);
        let matriz = Object.entries(objeto);
        Swal.fire({
            title: "Respuesta",
            text: `Resultado: ${JSON.stringify(matriz)}`,
            icon: "success",
        });
    } catch (error) {
        Swal.fire({
            title: "Error",
            text: `ingresa un valor valido`,
            icon: "error",
        });
    }
}

//ejercicio11
function problema11() {
    const valores = [
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
    ];

    const sumaTotal = valores.reduce(
        (total, persona) => total + persona.budget,
        0,
    );


    Swal.fire({
        title: "Repuesta",
        text: `Los valores son ${JSON.stringify(valores)} y la suma total de los presupuestos es: $${sumaTotal}`,
        icon: "success",
    });
}

//ejercicio12

function problema12() {
    const valores = [
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
    ];

    const nombres = valores.map(estudiante => estudiante.name);
    Swal.fire({
        title: "Repuesta",
        text: `Los valores son ${JSON.stringify(valores)} y los nombres de los estudiantes son : ${nombres}`,
        icon: "success",
    });
}

//ejercicio13

function problema13() {

    let valorIngresado = prompt('Ingresa un objeto de la siguiente manera {"likes": 2, "dislikes": 3}:')
    try {
        let objeto = JSON.parse(valorIngresado);
        let matriz = Object.entries(objeto);
        Swal.fire({
            title: "Respuesta",
            text: `El valor ingresado es ${JSON.stringify(objeto)} Resultado: ${JSON.stringify(matriz)}`,
            icon: "success",
        });
    } catch (error) {
        Swal.fire({
            title: "Error",
            text: `ingresa un valor valido`,
            icon: "error",
        });
    }
}

//ejercicio14

function problema14() {
    let n = parseInt(prompt("Ingresa el número n:"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i ** 2;
    }

    Swal.fire({
        title: "Resouesta",
        text: `Suma de cuadrados, El resultado es: ${suma}`,
        icon: "success",
    });
}

//ejercicio15
function problema15() {
    const valoresMatriz = [2, 3, 1, 0]

    const largo = valoresMatriz.length;

    const valores = valoresMatriz.map((num) => num * largo);

    Swal.fire({
        title: "Resouesta",
        text: ` los datos de la matriz son [${valoresMatriz.join(",")}] el largo es ${largo} y el resultado es :[${valores}]`,
        icon: "success",
    });
}

// ejercicio16
function problema16() {

    let n = parseInt(prompt("¿Desde qué número quieres iniciar?"));
    let resultado = [];


    for (let i = n; i >= 0; i--) {
        resultado.push(i);
    }

    Swal.fire({
        title: "Resouesta",
        text: ` Cuenta regresiva, [${resultado.join(", ")}]`,
        icon: "success",
    });
}

//ejercicio17
function problema17() {
    let valor = prompt(
        "Ingresa valores numericos de la siguiente manera para hallar la diferencia entre los numeros:ejemplo(10, 4, 1, 4, -10, -50, 32, 21)",
    );
    let array = valor.split(",").map((num) => parseInt(num));
    let minimo = Math.min(...array);
    let maximo = Math.max(...array);
    let diferencia = maximo - minimo
    Swal.fire({
        title: "Respuesta",
        text: `El valor ingresado es [${array}] y la diferencia es ${diferencia}`,
        icon: "success",
    });
}

//ejercicio18
function problema18() {
    let valorIngresado = prompt("Ingrese números y letras separados por un espacio:");

    let array = valorIngresado.trim().split(/\s+/);
    let valores = array
        .map(valor => {
            let numero = Number(valor);
            return (valor.trim() !== "" && !isNaN(numero)) ? numero : valor;
        }).filter(valor => typeof valor === "number");

    Swal.fire({
        title: "",
        text: `Resultado: [${valores.join(", ")}]`,
        icon: "success",
    });
}

//ejerciocio19

function problema19() {
    let valorIngresado = prompt("Escribe el valor que se va a repetir:")
    let repeticion = parseInt(prompt("Ingresa el numero de veces que se repetira el numero anterior:"))
    const resultado = Array(repeticion).fill(valorIngresado);

    Swal.fire({
        title: "Respuesta",
        text: `Matriz generada: [${resultado.join(", ")}]`,
        icon: "success"
    });


}

//ejercicio20

function problema20() {
  let texto = prompt("Ingresa una frase");
  let vocal = prompt("Elije una vocal en especifico para remplazar todas las vocales");

  let resultado = texto.replace(/[aeiou]/gi, vocal);

  Swal.fire({
    title: "Resultado",
    text: `La frase ingresada es ${texto} y el resultado es ${resultado}`,
    icon: "success"
  });
}

//ejercicio21

function problema21() {
  let frase = prompt("Ingresa la frase:, I am finding Nemo !");
  let palabras = frase.split(" ");
  let indice = palabras.indexOf("Nemo");

  if (indice !== -1) {
    let posicion = indice + 1;
    Swal.fire({
        title:"Respuesta",
        text:`¡Encontrado! ¡Encontré a Nemo en ${posicion}!`,
        icon:"success"});
  } else {
    Swal.fire({
        title:"Respuesta",
        text:`Error, No encontré a Nemo`,
        icon:"success"});
}

}

//ejercicio22

function problema22() {
  let valorIngresado = prompt("Ingresa una palabra ");
  
  let palabras = valorIngresado.split(" ");

  let resultado = palabras.map(palabra => {
    if (palabra.length <= 1) return palabra.toUpperCase();

    let cuerpo = palabra.substring(0, palabra.length - 1); 
    let ultimaLetra = palabra.slice(-1); 

    return cuerpo + ultimaLetra.toUpperCase();
  });
Swal.fire({
    title:"Respuesta",
    text:`La palabra ingresada es :${valorIngresado} y el resultado es ${resultado.join(" ")}` ,
    icon:"success"});

    }
