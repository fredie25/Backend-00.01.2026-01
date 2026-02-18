



function Ejercicio1() {


    console.log("Calculadora iniciada");

    let numero = (prompt("Ingrese un numero :"));

    if (isNaN(numero)) {
        console.log("El valor ingresado no es un numero");

        Swal.fire({
            title: "Error",
            text: "El valor ingresado en numeros, no letras",
            icon: "error",
            draggable: true
        });
        return;
    }
    if (numero >= 80 && numero < 1000) {
        console.log("El numero tiene tres digitos");

        Swal.fire({
            title: "Respuesta",
            text: `El numero ingresado tiene tres digitos: ${numero}`,
            icon: "success",
            draggable: true
        });
    } else {
        console.log("El numero no tiene tres digitos");

        Swal.fire({
            title: "Respuesta",
            text: `El numero ingresado no tiene tres digitos: ${numero}`,
            icon: "error",
            draggable: true




        });
    }

}

function Ejercicio2() {

    console.log("Calculadora iniciada");

    let numero = parseFloat(prompt("Ingrese un numero:"));

    if (isNaN(numero)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número, no letras",
            icon: "error",
            draggable: true
        });
        return;
    }

    if (numero < 0) {
        console.log("El numero es negativo");
        Swal.fire({
            title: "Respuesta",
            text: `El numero ingresado es negativo: ${numero}`,
            icon: "success",
            draggable: true
        });
    } else if (numero > 0) {
        console.log("El numero es positivo");
        Swal.fire({
            title: "Respuesta",
            text: `El numero ingresado es positivo: ${numero}`,
            icon: "success",
            draggable: true
        });
    } else {
        console.log("El numero es cero");
        Swal.fire({
            title: "Respuesta",
            text: `El numero ingresado es cero: ${numero}`,
            icon: "info",
            draggable: true
        });
    }
}

function Ejercicio3() {
    console.log("Calculadora iniciada");

    let numero = parseFloat(prompt("Ingrese un numero:"));


    if (isNaN(numero)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número, no letras",
            icon: "error",
            draggable: true
        });
        return;
    }


    let ultimoDigito = Math.abs(numero) % 10; /// utilice Math.abs para considerar numeros negativos y %10 porque quiero obtener el ultimo digito.

    if (ultimoDigito === 4) {
        console.log(`El número ${numero} termina en 4`);
        Swal.fire({
            title: " Resultado",
            text: `El número ${numero} TERMINA en 4`,
            icon: "success",
            draggable: true
        });
    } else {
        console.log(`El número ${numero} NO termina en 4`);
        Swal.fire({
            title: "Resultado",
            text: `El número ${numero} NO termina en 4 (termina en ${ultimoDigito})`,
            icon: "info",
            draggable: true
        });
    }



}

function Ejercicio4() {
    console.log("Calculadora iniciada");


    console.log("=== Ordenador de 3 números ===");


    let num1 = parseInt(prompt("Ingrese el primer número entero:"));
    let num2 = parseInt(prompt("Ingrese el segundo número entero:"));
    let num3 = parseInt(prompt("Ingrese el tercer número entero:"));


    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        Swal.fire({
            title: "Error",
            text: "Debe ingresar tres números enteros válidos",
            icon: "error",
            draggable: true
        });
        return;
    }

    console.log(`Números ingresados: ${num1}, ${num2}, ${num3}`);

    if (num1 === null || num2 === null || num3 === null) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número entero",
            icon: "error",
            draggable: true
        });


    }
    let menor, medio, mayor;


    if (num1 <= num2 && num1 <= num3) {
        menor = num1;
        if (num2 <= num3) {
            medio = num2;
            mayor = num3;
        } else {
            medio = num3;
            mayor = num2;
        }
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2;
        if (num1 <= num3) {
            medio = num1;
            mayor = num3;
        } else {
            medio = num3;
            mayor = num1;
        }
    } else {
        menor = num3;
        if (num1 <= num2) {
            medio = num1;
            mayor = num2;
        } else {
            medio = num2;
            mayor = num1;
        }
    }


    console.log(`Ordenados: ${menor}, ${medio}, ${mayor}`);
    Swal.fire({
        title: "Resultado",
        text: `Los números ordenados de menor a mayor son: ${menor}, ${medio}, ${mayor}`,
        icon: "success",
        draggable: true
    });



}


function Ejercicio5() {
    let cantidadDeZapatos;
    const precioUnidad = 80;
    let descuento, subtotal, total;

    console.log("Zapateria");
    console.log("Tenemos 20%, 30%, 40% de descuento");

    cantidadDeZapatos = parseInt(prompt("Ingrese cantidadDeZapatos")) || 0;

    total = cantidadDeZapatos * precioUnidad;

    console.log("El valor de la compra es: " + total + "$");

    if (cantidadDeZapatos >= 10 && cantidadDeZapatos < 20) {
        console.log("Se ha ganado un descuento de 10%");
        descuento = total * 0.10;
        subtotal = total - descuento;
        console.log("Subtotal a pagar: " + subtotal + "$");
    } else if (cantidadDeZapatos >= 20 && cantidadDeZapatos < 30) {
        console.log("Se ha ganado un descuento de 20%");
        descuento = total * 0.20;
        subtotal = total - descuento;
        console.log("Subtotal a pagar: " + subtotal + "$");
    } else if (cantidadDeZapatos >= 30) {
        console.log("Se ha ganado un descuento de 40%");
        descuento = total * 0.40;
        subtotal = total - descuento;
        console.log("Subtotal a pagar: " + subtotal + "$");
    } else if (cantidadDeZapatos <= 0) {
        console.log("Número ingresado no es válido");
    }
}

function Ejercicio6() {
    console.log("Tabulador iniciado");
    let horasTrabajadas, PagoTotal, cantidadHorasExtras, PagoHorasExtra, PagoHoraNormal;
    const horaNormal = 20;
    const horaExtra = 25;

    let input = prompt("Ingrese la cantidad de horas trabajadas:") || "0";
    horasTrabajadas = parseFloat(input);

    if (isNaN(horasTrabajadas)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número, no letras",
            icon: "error",
            draggable: true
        });
        return;
    } if (horasTrabajadas < 40) {
        PagoTotal = horasTrabajadas * horaNormal;
        console.log("El pago total es: " + PagoTotal + "$");
        Swal.fire({
            title: "Resultado",
            text: `El pago total es: ${PagoTotal}$`,
            icon: "success",
            draggable: true
        });
    } else {
        cantidadHorasExtras = horasTrabajadas - 40;
        PagoHorasExtra = cantidadHorasExtras * horaExtra;
        PagoHoraNormal = 40 * horaNormal;
        PagoTotal = PagoHorasExtra + PagoHoraNormal;
        console.log("El pago total es: " + PagoTotal + "$");
        Swal.fire({
            title: "Resultado",
            text: `El pago total es: ${PagoTotal}$`,
            icon: "success",
            draggable: true
        });
    }
}

function Ejercicio7() {
    console.log("Calculadora de descuento iniciada");


    let compra


    compra = prompt("Ingrese el tipo de compra (A, B, C)")
    console.log("Tipo de compra ingresada: " + compra);
    let compraUpper = compra.toUpperCase(); /// en caso el usuario ingrese una letra minuscula, la convierto a mayuscula para que el programa funcione correctamente.

    if (compraUpper === "") { /// "" y NUL ambos son validos
        console.log("El valor ingresado no es válido");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado no es un tipo de compra válido",
            icon: "error",
            draggable: true

        });
        return; /// detener la ejecución de la función si el valor ingresado no es válido.
    }

    if (compraUpper === "A") {
        console.log("Se ha ganado un descuento de 10%");
        Swal.fire({
            title: "Resultado",
            text: "Se ha ganado un descuento de 10%",
            icon: "success",
            draggable: true
        });
    } else if (compraUpper === "B") {
        console.log("Se ha ganado un descuento de 20%");
        Swal.fire({
            title: "Resultado",
            text: "Se ha ganado un descuento de 20%",
            icon: "success",
            draggable: true
        });
    } else if (compraUpper === "C") {
        console.log("Se ha ganado un descuento de 40%");
        Swal.fire({
            title: "Resultado",
            text: "Se ha ganado un descuento de 40%",
            icon: "success",
            draggable: true
        });
    } else {
        console.log("Tipo de compra no válido");
        Swal.fire({
            title: "Error",
            text: "Tipo de cliente",
            icon: "error",
            draggable: true
        });


    }
}



function calcularPromedio() { //aqui quise crear una funcion aparte para practicar pero no me deja tener dos funciones dentro de otra funcion asi que : ejercicio8

    console.log("Calculadora de promedio iniciada");
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

    let promedio = (nota1 + nota2 + nota3) / 3;


    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número, no letras",
            icon: "error",
            draggable: true
        });


        if (promedio >= 0 && promedio < 4) {
            console.log("El alumdno fallo la materia");
            Swal.fire({
                title: "Resultado",
                text: "El alumno fallo la materia",
                icon: "error",
                draggable: true
            });
        } else if (promedio >= 4 && promedio < 7) {
            console.log("El alumno esta en el nivel regular");
            Swal.fire({
                title: "Resultado",
                text: "El alumno esta en el nivel regular",
                icon: "info",
                draggable: true
            });
        } else if (promedio >= 7 && promedio <= 10) {
            console.log("El alumno esta en el nivel excelente");
            Swal.fire({
                title: "Resultado",
                text: "El alumno esta en el nivel excelente",
                icon: "success",
                draggable: true
            });
        }

        Swal.fire({
            title: "Resultado",
            text: `El promedio es: ${promedio}`,
            icon: "success",
            draggable: true
        });
    }
    calcularPromedio
}

function Ejercicio9() {
    console.log("Calculadora de salario iniciada");
    let horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en el mes:"));
    const tarifaHora = 15;
    let salarioMensual;
    salarioMensual = horasTrabajadas * tarifaHora;

    if (isNaN(horasTrabajadas)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número, no letras",
            icon: "error",
            draggable: true
        });


    }
    if (salarioMensual > 2000) {
        console.log("el empleado es elegible para amento 5%")
        Swal.fire({
            title: "Resultado",
            text: "el empleado es elegible para aumento de 5%",
            icon: "success",
            draggable: true
        });
    }

    else if (salarioMensual <= 2000) {
        console.log("el empleado es elegible para aumento de 10%")
        Swal.fire({
            title: "Resultado",
            text: "el empleado es elegible para aumento de 10%",
            icon: "success",
            draggable: true
        });
    }
}

function Ejercicio10() {
    let n = parseInt(prompt("Ingrese un número entero:"));

    if (isNaN(n)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número entero, no letras",
            icon: "error",
            draggable: true
        });
        return;
    }

    if (n % 2 === 0) {
        console.log(`El número ${n} es par`);
        Swal.fire({
            title: "Resultado",
            text: `El número ${n} es par`,
            icon: "success",
            draggable: true
        });
    } else {
        console.log(`El número ${n} es impar`);
        Swal.fire({
            title: "Resultado",
            text: `El número ${n} es impar`,
            icon: "info",
            draggable: true
        });
    }
}


function encontrarMayor() {  /// aqui quise crear una funcion aparte para practicar pero no me deja tener dos funciones dentro de otra funcion asi que : ejercicio11

    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let num3 = parseFloat(prompt("Ingresa el tercer número:"));


    let mayor;

    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }

    console.log(`El número mayor es: ${mayor}`);
    alert(`El número mayor es: ${mayor}`);

    return mayor;
}

function Ejercicio12() {

    let n1 = parseInt(prompt("Ingrese un número entero:"));
    let n2 = parseInt(prompt("Ingrese otro número entero:"));

    if (isNaN(n1) || isNaN(n2)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número entero, no letras",
            icon: "error",
            draggable: true
        });

    } else if (n1 > n2) {
        console.log(`El número mayor es: ${n1}`);
        Swal.fire({
            title: "Resultado",
            text: `El número mayor es: ${n1}`,
            icon: "success",
            draggable: true
        });
    } else if (n2 > n1) {
        console.log(`El número mayor es: ${n2}`);
        Swal.fire({
            title: "Resultado",
            text: `El número mayor es: ${n2}`,
            icon: "success",
            draggable: true
        });

        {
            if (n1 === n2) {
                console.log("Ambos números son iguales"); /// agregue una validacion si los numeros son iguales 
                Swal.fire({
                    title: "Resultado",
                    text: "Ambos números son iguales",
                    icon: "info",
                    draggable: true
                });
            }
        }
    }
}

function Ejercicio13() {

    let letra = prompt("Ingrese una letra:").toLowerCase();
    let vocales = ["a", "e", "i", "o", "u"];
    if (vocales.includes(letra)) {
        console.log(`La letra ${letra} es una vocal`);
        Swal.fire({
            title: "Resultado",
            text: `La letra ${letra} es una vocal`,
            icon: "success",
            draggable: true
        });
    } else {
        console.log(`La letra ${letra} no es una vocal`);
        Swal.fire({
            title: "Resultado",
            text: `La letra ${letra} no es una vocal`,
            icon: "info",
            draggable: true
        });
    }
}

function Ejercicio14() {
    console.log("Calculadora de un número primo iniciada");
    let numero = parseInt(prompt("Ingrese un número entero mayor que 1:"));
    let n = (2, 3, 4, 5, 6, 7, 8, 9, 10);
    if (isNaN(numero)) {
        console.log("El valor ingresado no es un numero valido");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número entero mayor que 1",
            icon: "error",
            draggable: true
        });



        if (numero === 2 || numero === 3 || numero === 5 || numero === 7) {
            console.log(`El número ${numero} es primo`);
            Swal.fire({
                title: "Resultado",
                text: `El número ${numero} es primo`,
                icon: "success",
                draggable: true
            });
        }
        else {
            console.log(`El número ${numero} no es primo`);
            Swal.fire({
                title: "Resultado",
                text: `El número ${numero} no es primo`,
                icon: "info",
                draggable: true
            });
        }
    }
}



function Ejercicio15() {

    let centimetros = parseFloat(prompt("Ingresa la cantidad en centímetros:"));
    let libras = parseFloat(prompt("Ingresa la cantidad en libras:"));


    let pulgadas = centimetros / 2.54;
    let kilogramos = libras * 0.453592;


    console.log("Centímetros: " + centimetros + " cm");
    console.log("Pulgadas: " + pulgadas + " in");

    console.log("Libras: " + libras + " lb");
    console.log("Kilogramos: " + kilogramos + " kg");
}




function Ejercicio16() {
    console.log("Asignacion numero a dia de semana iniciada");
    let diasSemana = [1, 2, 3, 4, 5, 6, 7];
    let numero = parseInt(prompt("Ingrese un número del 1 al 7:"));

    if (isNaN(numero)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({
            title: "Error",
            text: "El valor ingresado debe ser un número entero del 1 al 7",
            icon: "error",
            draggable: true
        });
        return;
    }
    let dia;
    switch (numero) {
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
        default:
            console.log("Número fuera de rango");
            Swal.fire({
                title: "Error",
                text: "Número fuera de rango",
                icon: "error",
                draggable: true
            });
    }
    console.log(`El día correspondiente al número ${numero} es: ${dia}`);
    Swal.fire({
        title: "Resultado",
        text: `El día correspondiente al número ${numero} es: ${dia}`,
        icon: "success",
        draggable: true
    });
}


function Ejercicio17() {
    let horaInput = prompt("Ingrese la hora (HH:MM:SS):");
    let [horas, minutos, segundos] = horaInput.split(":").map(Number); // use split aqui para separar las horas, minutos y segundos


    if (isNaN(horas) || isNaN(minutos) || isNaN(segundos)) {
        Swal.fire("Error", "Formato de hora inválido", "error");
        return;
    }


    segundos++;
    /// la validacion en este ejercicio es como las agujas del reloj, cuando los segundos llegan a 60, se reinician a 0 y se incrementa en 1 el minuto, lo mismo con los minutos y horas.

    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }

    if (minutos === 60) {
        minutos = 0;
        horas++;
    }

    if (horas === 24) {
        horas = 0;
    }


    Swal.fire({
        title: "Resultado",
        text: `La hora un segundo después es: ${horas}:${minutos}:${segundos}`,
        icon: "success"
    });
}

function Ejercicio18() {

    const iniciarVenta = () => {

        let entrada = parseFloat(prompt("Ingrese la cantidad de CDs a comprar:"));
        let cantidad = parseInt(entrada);

        // 2. Validación: Verificamos que sea un número válido y mayor a cero
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Error: Por favor, ingrese un número entero positivo.");
            return; // salir si hay error
        }

        let precioUnitario = 0;


        if (cantidad < 10) {
            precioUnitario = 10;
        } else if (cantidad < 100) {
            precioUnitario = 8;
        } else if (cantidad < 500) {
            precioUnitario = 7;
        } else {
            precioUnitario = 6;
        }


        const precioTotal = cantidad * precioUnitario;
        const porcentajeGanancia = 0.0825; // 8.25%
        const gananciaVendedor = precioTotal * porcentajeGanancia;


        let mensaje = `--- Factura de Venta ---\n`;
        mensaje += `Cantidad: ${cantidad} CDs\n`;
        mensaje += `Precio por unidad: $${precioUnitario}\n`;
        mensaje += `--------------------------\n`;
        mensaje += `Total a pagar: $${precioTotal}\n`;
        mensaje += `Ganancia del vendedor: $${gananciaVendedor.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        alert(mensaje);
    }


    iniciarVenta();
}
function Ejercicio19() {
    const calcularSalario = () => {
        let idEmpleado = parseInt(prompt("Identificador del empleado:\n1: Cajero\n2: Servidor\n3: Preparador\n4: Mantenimiento"));//agregue esto para darle una vision mas de modelo de negocio
        let diasTrabajados = parseInt(prompt("Ingrese los días trabajados (máximo 6):"));

        if (isNaN(idEmpleado) || isNaN(diasTrabajados) || diasTrabajados > 6 || diasTrabajados < 0) {
            Swal.fire({ icon: 'error', title: 'Error', text: 'Datos no válidos o días fuera de rango (0-6).' });
            return;
        }

        let salarioDiario, tipoEmpleado;

        switch (idEmpleado) {
            case 1: tipoEmpleado = "Cajero"; salarioDiario = 56; break;
            case 2: tipoEmpleado = "Servidor"; salarioDiario = 64; break;
            case 3: tipoEmpleado = "Preparador de mezclas"; salarioDiario = 80; break;
            case 4: tipoEmpleado = "Mantenimiento"; salarioDiario = 48; break;
            default:
                Swal.fire({ icon: 'error', title: 'ID no válido', text: 'Debe ser un número entre 1 y 4.' });
                return;
        }

        let salarioTotal = salarioDiario * diasTrabajados;

        Swal.fire({
            title: 'Resumen de Nómina',
            html: `<b>Empleado:</b> ${tipoEmpleado}<br><b>Días:</b> ${diasTrabajados}<br><b>Total a pagar:</b> $${salarioTotal}`,
            icon: 'success'
        });
    };

    calcularSalario();
}

function Ejercicio20() {
    function procesar() {
        let n1 = parseInt(prompt("Número 1:"));
        let n2 = parseInt(prompt("Número 2:"));
        let n3 = parseInt(prompt("Número 3:"));
        let n4 = parseInt(prompt("Número 4:"));

        if ([n1, n2, n3, n4].some(n => isNaN(n) || n <= 0)) {
            Swal.fire({ icon: 'error', title: 'Error', text: 'Todos deben ser números positivos.' });
            return;
        }


        let pares = [n1, n2, n3, n4].filter(n => n % 2 === 0).length;
        let mayor = Math.max(n1, n2, n3, n4);
        let mensajeExtra = "";

        if (n3 % 2 === 0) mensajeExtra += `<li>El cuadrado del 2do (${n2}) es: ${n2 * n2}</li>`;
        if (n1 < n4) mensajeExtra += `<li>La media es: ${(n1 + n2 + n3 + n4) / 4}</li>`;
        if (n2 > n3 && n3 >= 50 && n3 <= 700) mensajeExtra += `<li>Suma total: ${n1 + n2 + n3 + n4}</li>`;

        Swal.fire({
            title: 'Resultados del Proceso',
            html: `
                <ul style="text-align: left;">
                    <li><b>Números pares:</b> ${pares}</li>
                    <li><b>Número mayor:</b> ${mayor}</li>
                    ${mensajeExtra}
                </ul>`,
            icon: 'info'
        });
    }

    procesar();
}



function Ejercicio21() {
    console.log("Ejercicio 21: Calcular factorial de un número");
    let n = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    if (n < 0) {
        console.log("Error: El número debe ser positivo.");
        return;
    }
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);

    }
    console.log("El factorial de " + n + " es: " + factorial(n));
}

function ejercicio21() {
    let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    if (isNaN(numero)) {
        Swal.fire({ title: "Error", text: "Ingrese un número válido", icon: "error" });
        return;
    }
    let res = 1;
    for (let i = 1; i <= numero; i++) res *= i;
    console.log(`Factorial: ${res}`);
    Swal.fire({ title: "Resultado", text: `El factorial de ${numero} es ${res}`, icon: "success" });
}


function Ejercicio22() {
    let n = parseInt(prompt("Sumar los primeros 'n' números. Ingrese n:"));
    if (isNaN(n)) return Swal.fire({ title: "Error", text: "Dato inválido", icon: "error" });
    let suma = (n * (n + 1)) / 2;
    console.log(`Suma total: ${suma}`);
    Swal.fire({ title: "Respuesta", text: `La suma de los primeros ${n} números es: ${suma}`, icon: "success" });
}

function Ejercicio23() {
    let n = parseInt(prompt("Sumar impares hasta n. Ingrese n:"));
    let suma = 0;
    if (isNaN(n)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({ title: "Error", text: "El valor ingresado debe ser un número, no letras", icon: "error", draggable: true });
        return;
    }
    for (let i = 1; i <= n; i++) { if (i % 2 !== 0) suma += i; }
    Swal.fire({ title: "Resultado", text: `La suma de impares hasta ${n} es ${suma}`, icon: "success" });
}

function Ejercicio24() {
    let suma = 0;
    if (isNaN(suma)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({ title: "Error", text: "El valor ingresado debe ser un número, no letras", icon: "error", draggable: true });
        return;
    }
    for (let i = 2; i <= 1000; i += 2) suma += i;
    console.log("Suma pares hasta 1000: " + suma);
    Swal.fire({ title: "Finalizado", text: `La suma de pares hasta 1000 es ${suma}`, icon: "success" });
}

function Ejercicio25() {
    if (isNaN(suma)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({ title: "Error", text: "El valor ingresado debe ser un número, no letras", icon: "error", draggable: true });
        return;
    }
    let n = parseInt(prompt("Factorial (método 1). Ingrese número:"));
    let m = parseInt(prompt("Factorial (método 2). Ingrese número:"));
    let res = 1, i = n;
    while (i > 1) { res *= i; i--; }
    Swal.fire({ title: "Factorial", text: `Resultado: ${res}`, icon: "success" });
}

function Ejercicio26() {
    if (isNaN(suma)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({ title: "Error", text: "El valor ingresado debe ser un número, no letras", icon: "error", draggable: true });
        return;
    }
    let a = parseInt(prompt("Dividendo:"));
    let b = parseInt(prompt("Divisor:"));
    let cociente = 0, resto = a;
    while (resto >= b) { resto -= b; cociente++; }
    Swal.fire({ title: "Resultado", text: `Cociente: ${cociente}, Resto: ${resto}`, icon: "info" });
}

function Ejercicio27() {
    if (isNaN(suma)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({ title: "Error", text: "El valor ingresado debe ser un número, no letras", icon: "error", draggable: true });
        return;
    }
    let suma = 0, cont = 0, num;
    do {
        num = parseInt(prompt("Ingrese número positivo (negativo para terminar):"));
        if (num >= 0) { suma += num; cont++; }
    } while (num >= 0);
    let media = cont > 0 ? suma / cont : 0;
    Swal.fire({ title: "Media", text: `La media es: ${media}`, icon: "success" });
}

function Ejercicio28() {
    if (isNaN(suma)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({ title: "Error", text: "El valor ingresado debe ser un número, no letras", icon: "error", draggable: true });
        return;
    }
    let suma = 0, i = 1;
    do { suma += i; i++; } while (i <= 100);
    Swal.fire({ title: "Ciclo Repetir", text: `Suma de los 100 primeros: ${suma}`, icon: "success" });
}

function Ejercicio29() {
    if (isNaN(suma)) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({ title: "Error", text: "El valor ingresado debe ser un número, no letras", icon: "error", draggable: true });
        return;
    }
    let suma = 0, i = 1;
    while (i <= 100) { suma += i; i++; }
    Swal.fire({ title: "Ciclo Mientras", text: `Suma de los 100 primeros: ${suma}`, icon: "success" });
}

function Ejercicio30() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) suma += i;
    Swal.fire({ title: "Ciclo Para", text: `Suma de los 100 primeros: ${suma}`, icon: "success" });
}

function Ejercicio31() {
    let sP = 0, cP = 0, sI = 0, cI = 0;
    for (let i = 1; i <= 10; i++) {
        let n = parseInt(prompt(`Número ${i} de 10:`));
        if (n % 2 === 0) { sP += n; cP++; } else { sI += n; cI++; }
    }
    Swal.fire({ title: "Medias", text: `Media Pares: ${sP / cP || 0}, Media Impares: ${sI / cI || 0}`, icon: "info" });
}

function Ejercicio32() {

    let ciudadMayor = "", maxPob = 0;
    for (let i = 1; i <= 3; i++) {
        let nombre = prompt(`Nombre ciudad ${i}:`);
        let pob = parseInt(prompt(`Población de ${nombre}:`));
        if (pob > maxPob) { maxPob = pob; ciudadMayor = nombre; }
    }
    Swal.fire({ title: "Ciudad más poblada", text: `${ciudadMayor} con ${maxPob} personas`, icon: "success" });
}

function Ejercicio33() {
    let r = prompt("¿Desea continuar con el programa? (si/no)");
    if (r.toLowerCase() === "si") {
        Swal.fire({ title: "Continuar", text: "Has decidido continuar", icon: "success" });
    } else {
        Swal.fire({ title: "Fin", text: "Programa finalizado", icon: "warning" });
    }
}

function Ejercicio34() {
    let n = parseInt(prompt("¿Tabla de qué número (1-9)?"));
    let tabla = "";
    for (let i = 1; i <= 10; i++) tabla += `${n} x ${i} = ${n * i}\n`;
    alert(tabla);
    Swal.fire({ title: `Tabla del ${n}`, text: "Generada con éxito", icon: "success" });
}

function Ejercicio35() {
    const cantidadNumeros = 20;
    let mayor = -Infinity;
    let menor = Infinity;


    for (let i = 1; i <= 20; i++) {


        let entrada = prompt(`Ingrese número ${i} de 20:`);

        // 2. Si el usuario presiona escape o cancela se rompe
        if (entrada === null) return;


        let n = parseInt(entrada);

        // 4.  
        if (isNaN(n)) {
            Swal.fire({
                title: "Error de entrada",
                text: "Has ingresado un valor no numérico. El proceso se detendrá.",
                icon: "error"
            });
            return;
        }


        if (n > mayor) mayor = n;
        if (n < menor) menor = n;
    }


    Swal.fire({
        title: "¡Completado!",
        html: `De los 20 números ingresados:<br><b>El mayor es:</b> ${mayor}<br><b>El menor es:</b> ${menor}`,
        icon: "success"
    });
}



function Ejercicio36() {
    if (isNaN(parseInt(prompt("¿Cuántos números de Fibonacci?")))) {
        console.log("El valor ingresado no es un numero");
        Swal.fire({ title: "Error", text: "El valor ingresado debe ser un número entero, no letras", icon: "error", draggable: true });
        return;
    }
    let n = parseInt(prompt("¿Cuántos números de Fibonacci?"));
    let a = 0, b = 1, temp;
    for (let i = 0; i < n; i++) {
        console.log(a);
        temp = a + b; a = b; b = temp;
    }
    Swal.fire({ title: "Fibonacci", text: "Serie generada en consola", icon: "success" });
}

function Ejercicio37() {
    if (isNaN(parseInt(prompt("Número A:"))) || isNaN(parseInt(prompt("Número B:")))) {
        Swal.fire({ title: "Error", text: "Ambos valores deben ser números enteros", icon: "error" });
        return;
    }
    let a = parseInt(prompt("Número A:"));
    let b = parseInt(prompt("Número B:"));
    while (b !== 0) { let t = b; b = a % b; a = t; }
    Swal.fire({ title: "M.C.D", text: `El M.C.D es: ${a}`, icon: "success" });
}

function Ejercicio38() {
    let n = parseInt(prompt("Verificar si es número perfecto:"));
    let suma = 0;
    for (let i = 1; i < n; i++) { if (n % i === 0) suma += i; }
    let esP = (suma === n);
    Swal.fire({ title: "Resultado", text: esP ? "Es perfecto" : "No es perfecto", icon: esP ? "success" : "error" });
}

function Ejercicio39() {
    let it = parseInt(prompt("Iteraciones para Pi (Gregory-Leibniz):"));
    let pi = 0, div = 1;
    for (let i = 0; i < it; i++) {
        if (i % 2 === 0) pi += 4 / div; else pi -= 4 / div;
        div += 2;
    }
    Swal.fire({ title: "Aproximación Pi", text: `Resultado: ${pi}`, icon: "info" });
}

function Ejercicio40() {
    let it = parseInt(prompt("Iteraciones para Pi:"));
    let pi = 3, s = 1;
    for (let i = 2; i <= it * 2; i += 2) {
        pi += s * (4 / (i * (i + 1) * (i + 2)));
        s *= -1;
    }
    Swal.fire({ title: "Aproximación Pi", text: `Resultado: ${pi}`, icon: "info" });
} { }
