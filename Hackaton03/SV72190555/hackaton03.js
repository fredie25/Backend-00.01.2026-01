// ===============================
// Hackatón 03 - SV72190555 - Javier Gonzales
// ===============================

// Función para repetir un ejercicio
function repetir(ejercicio) {

    Swal.fire({
        title: "¿Desea repetir el ejercicio?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No"
    }).then((respuesta) => {
        if (respuesta.isConfirmed) {
            ejercicio();
        }
    });

}

//1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
function ejercicio01() {

    Swal.fire({
        title: "Ejercicio 01",
        text: "Escribe un número y validaremos si tiene 3 dígitos",
        icon: "info",
        input: "text",
        inputPlaceholder: "Escribe tu número",
        showCancelButton: true,
        confirmButtonText: "Validar"
    }).then((result) => {

        if (!result.isConfirmed) {
            return;
        }

        let numeroUsuario = Number.parseInt(result.value);

        if (Number.isNaN(numeroUsuario)) {
            Swal.fire({
                title: "Error",
                text: "Debes ingresar un número válido",
                icon: "error"
            }).then(() => {
                repetir(ejercicio01);
            });
            return;
        }

        numeroUsuario = Math.abs(numeroUsuario);

        if (numeroUsuario > 99 && numeroUsuario < 1000) {
            Swal.fire({
                title: "Resultado",
                text: "Sí tiene 3 dígitos",
                icon: "success"
            }).then(() => {
                repetir(ejercicio01);
            });
        } else {
            Swal.fire({
                title: "Resultado",
                text: "No tiene 3 dígitos",
                icon: "error"
            }).then(() => {
                repetir(ejercicio01);
            });
        }

    });

}

//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejercicio02() {

    Swal.fire({
        title: "Ejercicio 02",
        text: "Escribe un número y validaremos si su numero es negativo",
        icon: "info",
        input: "text",
        inputPlaceholder: "Escribe tu número",
        showCancelButton: true,
        confirmButtonText: "Validar"
    }).then((result) => {

        // Si el usuario canceló
        if (!result.isConfirmed) {
            return;
        }

        // Leer <- Swal.fire(input)
        let numeroUsuario = Number.parseInt(result.value);

        // Validación
        if (Number.isNaN(numeroUsuario)) {
            Swal.fire({
                title: "Error",
                text: "Debes ingresar un número válido",
                icon: "error"
            });
            return;
        }

        // aplicamos la logica para determinar si el número es negativo
        
        if (numeroUsuario < 0) {
            Swal.fire({
                title: "Resultado",
                text: "el número es negativo",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Resultado",
                text: "el número  no es negativo",
                icon: "error"
            }).then(() => {
                repetir(ejercicio02);
            });
        }
    });
}

//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function ejercicio03() {

    // Escribir <- Swal.fire()
    Swal.fire({
        title: "Ejercicio 03",
        text: "Escribe un número y validaremos si acaba en 4",
        icon: "info",
        input: "text",                    // Leer <- input
        inputPlaceholder: "Escribe tu número",
        showCancelButton: true,
        confirmButtonText: "Validar"
    }).then((result) => {

        // Si el usuario canceló (extra de JS)
        if (!result.isConfirmed) {return;}

        // Leer <- Swal.fire(input)
        let numeroUsuario = Number.parseInt(result.value);

        // Validación (no existe en PSeInt, pero es necesaria en JS)
        if (Number.isNaN(numeroUsuario)) {
            Swal.fire({
                title: "Error",
                text: "Debes ingresar un número válido",
                icon: "error"
            });
            return;}

            // mod <- %
        let ultimoDigito = Math.abs(numeroUsuario) % 10;

        // En PSeInt:
        // Si UltimoDigito = 4 Entonces
        if (ultimoDigito === 4) {

            // En PSeInt:
            // Escribir "el numero acaba en 4"
            Swal.fire({
                title: "Resultado",
                text: "El número acaba en 4",
                icon: "success"
            });

        } else {

            // En PSeInt:
            // Escribir "El numero no acaba en 4"
            Swal.fire({
                title: "Resultado",
                text: "El número no acaba en 4",
                icon: "error"
            }).then(() => {
                repetir(ejercicio03);
            });
        }
    });
}

//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
function ejercicio04() {

    // En PSeInt:
    // Escribir "Escribe tres números"
    // En JavaScript:
    // Escribir <- Swal.fire()
    Swal.fire({
        title: "Ejercicio 04",
        // <input id= "variable" class="tipo de bolsa" placeholder="texto mostrado">
        html:`
            <p>Escribe tres números y los ordenaremos de menor a mayor</p>
            <input id="num1" class="swal2-input" placeholder="Número 1">
            <input id="num2" class="swal2-input" placeholder="Número 2">
            <input id="num3" class="swal2-input" placeholder="Número 3">`,
        icon: "info",
        confirmButtonText: "Ordenar",
        showCancelButton: true,
        preConfirm: () => {

            // En PSeInt:
            // Leer numeroUsuario1, numeroUsuario2, numeroUsuario3
            // En JavaScript:
            // Leer <- document.getElementById()
            // Convertimos a número con Number.parseInt()

            const n1 = Number.parseInt(document.getElementById("num1").value);
            const n2 = Number.parseInt(document.getElementById("num2").value);
            const n3 = Number.parseInt(document.getElementById("num3").value);

            // Validación (extra de JS)
            if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {
                Swal.showValidationMessage(
                    "Todos los valores deben ser números válidos"
                );
                return false;
            }

            // Retornamos los valores válidos
            return [n1, n2, n3];
        }
    }).then((result) => {

        // Si el usuario canceló
        if (!result.isConfirmed) return;

        // En PSeInt:
        // a <- numeroUsuario1, b <- numeroUsuario2, c <- numeroUsuario3
        // En JavaScript:
        // Usamos un arreglo
        let numeros = result.value;

        // ---------------------
        // MÉTODO BURBUJA
        // ---------------------

        for (let i = 0; i < numeros.length - 1; i++) {
            for (let j = 0; j < numeros.length - 1 - i; j++) {

                // En PSeInt:
                // Si numeros[j] > numeros[j+1] Entonces
                if (numeros[j] > numeros[j + 1]) {

                    // Intercambio
                    let aux = numeros[j];
                    numeros[j] = numeros[j + 1];
                    numeros[j + 1] = aux;
                }
            }
        }

        // En PSeInt:
        // Escribir "Los numeros son ..."
        Swal.fire({
            title: "Resultado",
            text: `Los números ordenados son: ${numeros.join(", ")}`,
            icon: "success"
        }).then(() => {
            repetir(ejercicio04);
        });
    });
}
// 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
function ejercicio05() {

    // En PSeInt:
    // Escribir "Escribe numero de pares"
    // En JavaScript:
    // Escribir <- Swal.fire()

    Swal.fire({
        title: "Ejercicio 05",
        html: `
            <p>Escribe el número de pares a comprar</p>
            <input id="pares" class="swal2-input" placeholder="Número de pares">
        `,
        icon: "info",
        confirmButtonText: "Calcular",
        showCancelButton: true,

        preConfirm: () => {

            // En PSeInt:
            // Leer numeroUsuario
            // En JavaScript:
            // Leer <- document.getElementById()

            let numeroUsuario = Number.parseInt(
                document.getElementById("pares").value
            );

            // Validación extra de JavaScript
            if (Number.isNaN(numeroUsuario) || numeroUsuario <= 0) {
                Swal.showValidationMessage(
                    "Ingresa un número válido mayor a 0"
                );
                return false;
            }

            return numeroUsuario;
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        // n <- numeroUsuario
         let n = result.value;

        // Definir precio, pago, f Como Real
        let precio = 80;
        let pago;
        let f = 1;  // factor de pago
        // ESTRUCTURA CONDICIONAL
   
        if (n > 30) {
            f = 0.6;

        } else if (n > 20) {  // Sino Si
            f = 0.8;

        } else if (n > 10) {  // Sino Si
            f = 0.9;

        } else {
            f = 1;
        }

        // En PSeInt:
        // pago <- precio * n * f
        pago = precio * n * f;


        Swal.fire({
            title: "Resultado",
            text: `El pago es de $ ${pago.toFixed(2)}`,
            icon: "success"
        }).then(() => {
            repetir(ejercicio05);
        });

    });
}

//6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
function ejercicio06() {

    //lanzamos un Swal para pedir el número de horas trabajadas
    Swal.fire({
        title: "Ejercicio 06",
        html: `
            <p>Escribe número de horas trabajadas</p>
            <input id="horas" class="swal2-input" placeholder="Horas trabajadas">
        `,
        icon: "info",
        confirmButtonText: "Calcular",
        showCancelButton: true,
        
        // La función preConfirm se ejecuta antes de cerrar el Swal, es ideal para validar los datos ingresados por el usuario
        preConfirm: () => {

            let numeroUsuario = Number.parseInt(
                document.getElementById("horas").value
            );

            if (Number.isNaN(numeroUsuario) || numeroUsuario < 0) {
                Swal.showValidationMessage("Ingresa un número válido");
                return false;
            }

            return numeroUsuario;
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        // En PSeInt:
        // H <- numeroUsuario
        let H = result.value;

        // Definir precio1, precio2, pago Como Real
        let precio1 = 20;
        let precio2 = 25;
        let pago;

        // n <- 40
        let n = 40;

        // Si H > n Entonces
        if (H > n) {

            // pago <- n * precio1 + (H - n) * precio2
            pago = n * precio1 + (H - n) * precio2;

        } else {

            // pago <- H * precio1
            pago = H * precio1;
        }

        // Escribir "El pago es de $", pago
        Swal.fire({
            title: "Resultado",
            text: `El pago es de $ ${pago.toFixed(2)}`,
            icon: "success"
        }).then(() => {
            repetir(ejercicio06);
        });

    });
}

//7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
// Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

function ejercicio07() {


    // Escribir <- Swal.fire()
    Swal.fire({
        title: "Ejercicio 07",
        html: `
                <p>Ingrese la letra de su membresía (A, B o C):</p>
                <input id="membresia" class="swal2-input" maxlength="1">
            `,
        confirmButtonText: "Validar",
        showCancelButton: true,

        preConfirm: () => {

            // Leer <- document.getElementById()
            let membresia = document
                .getElementById("membresia")
                .value;

            // membresia <- Minusculas(membresia)
            membresia = membresia.toLowerCase();

            // Si Longitud(membresia) <> 1 Entonces
            if (membresia.length !== 1) {
                Swal.showValidationMessage(
                    "Debe ingresar SOLO UNA letra."
                );
                return false;
            }

            return membresia;
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let membresia = result.value;
        let descuento;

        // Segun membresia Hacer
        // En JavaScript → switch
        switch (membresia) {

            case "a":
                descuento = 10;
                break;

            case "b":
                descuento = 15;
                break;

            case "c":
                descuento = 20;
                break;

            default:
                // De Otro Modo:
                // Escribir mensaje y repetir
                Swal.fire({
                    icon: "error",
                    text: "Opción inválida. Intente nuevamente."
                }).then(() => {
                    pedirMembresia(); // Repetir
                });
                return;
        }

        // Escribir resultado
        Swal.fire({
            icon: "success",
            text: `El descuento es de ${descuento}%.`
        }).then(() => {
            repetir(ejercicio07);
        });

    });
}


//8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
function ejercicio08() {

    // Escribir <- Swal.fire()
    Swal.fire({
        title: "Ejercicio 08",
        html: `
            <p>Ingrese la primera nota:</p>
            <input id="nota1" class="swal2-input" placeholder="Nota 1">

            <p>Ingrese la segunda nota:</p>
            <input id="nota2" class="swal2-input" placeholder="Nota 2">

            <p>Ingrese la tercera nota:</p>
            <input id="nota3" class="swal2-input" placeholder="Nota 3">
        `,
        confirmButtonText: "Calcular",
        showCancelButton: true,

        preConfirm: () => {

            // Leer <- document.getElementById()
            let nota1 = Number.parseFloat(
                document.getElementById("nota1").value
            );

            let nota2 = Number.parseFloat(
                document.getElementById("nota2").value
            );

            let nota3 = Number.parseFloat(
                document.getElementById("nota3").value
            );

            if (
                Number.isNaN(nota1) ||
                Number.isNaN(nota2) ||
                Number.isNaN(nota3)
            ) {
                Swal.showValidationMessage("Ingrese notas válidas");
                return false;
            }

            return { nota1, nota2, nota3 };
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let nota1 = result.value.nota1;
        let nota2 = result.value.nota2;
        let nota3 = result.value.nota3;

        // promedio <- (nota1 + nota2 + nota3) / 3
        let promedio = (nota1 + nota2 + nota3) / 3;

        // promedio <- trunc (promedio*10)/10
        // En JavaScript usamos Math.trunc()

        promedio = Math.trunc(promedio * 10) / 10;

        // Si promedio >= 10.5 Entonces
        if (promedio >= 10.5) {

            Swal.fire({
                icon: "success",
                html: `
                    <p>El promedio es ${promedio}</p>
                    <p>El estudiante APROBÓ</p>
                `
            });

        } else {

            Swal.fire({
                icon: "error",
                html: `
                    <p>El promedio es ${promedio}</p>
                    <p>El estudiante DESAPROBÓ</p>
                `
            }).then(() => {
                repetir(ejercicio08);
            });
        }

    });
}

//9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
function ejercicio09() {

    // Mostramos una ventana para que el usuario ingrese su sueldo actual
    Swal.fire({
        title: "Ejercicio 09",
        html: `
            <p>Ingrese el sueldo actual:</p>
            <input id="sueldo" class="swal2-input" placeholder="Sueldo">
        `,
        confirmButtonText: "Calcular",
        showCancelButton: true,

        // preConfirm se ejecuta antes de cerrar la ventana
        // Aquí validamos y obtenemos el dato ingresado
        preConfirm: () => {

            // Convertimos el valor ingresado a número decimal
            let sueldo = Number.parseFloat(
                document.getElementById("sueldo").value
            );

            // Validamos que sea un número válido y mayor que 0
            if (Number.isNaN(sueldo) || sueldo <= 0) {
                Swal.showValidationMessage(
                    "Ingrese un sueldo válido mayor que 0"
                );
                return false;
            }

            return sueldo;
        }

    }).then((result) => {

        // Si el usuario cancela, no hacemos nada
        if (!result.isConfirmed) return;

        // Guardamos el sueldo ingresado
        let sueldo = result.value;

        // Declaramos variables para el aumento y el sueldo final
        let aumento;
        let sueldo_final;

        /*
         Regla del ejercicio:
         - Si el sueldo es mayor a 2000 → aumento del 5%
         - Si es 2000 o menor → aumento del 10%
        */

        if (sueldo > 2000) {
            aumento = sueldo * 0.05; // 5% de aumento
        } else {
            aumento = sueldo * 0.10; // 10% de aumento
        }

        // Calculamos el sueldo final sumando el aumento
        sueldo_final = sueldo + aumento;

        // Mostramos los resultados formateados con 2 decimales
        Swal.fire({
            icon: "success",
            html: `
                <p><strong>Aumento:</strong> $ ${aumento.toFixed(2)}</p>
                <p><strong>Sueldo final:</strong> $ ${sueldo_final.toFixed(2)}</p>
            `
        }).then(() => {
                repetir(ejercicio09);
            });

    });
}

//10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
function ejercicio10() {

    // Mostramos una ventana para ingresar el número
    Swal.fire({
        title: "Ejercicio 10",
        html: `
            <p>Ingrese un número:</p>
            <input id="numero" class="swal2-input" placeholder="Número">
        `,
        confirmButtonText: "Verificar",
        showCancelButton: true,

        // Se ejecuta antes de cerrar la ventana
        preConfirm: () => {

            // Convertimos el valor ingresado a número entero
            let numero = Number.parseInt(
                document.getElementById("numero").value
            );

            // Validamos que sea un número válido
            if (Number.isNaN(numero)) {
                Swal.showValidationMessage("Ingrese un número válido");
                return false;
            }

            return numero;
        }

    }).then((result) => {

        // Si el usuario cancela, salimos
        if (!result.isConfirmed) return;

        let numero = result.value;

        /*
         Si el número es negativo, lo convertimos a positivo.
         Esto se llama obtener el valor absoluto.
         Ejemplo: -5 → 5
        */
        if (numero < 0) {
            numero = -numero;
        }

        /*
         El operador % devuelve el residuo de una división.
         Si un número dividido entre 2 tiene residuo 0,
         significa que es PAR.
        */
        if (numero % 2 === 0) {

            Swal.fire({
                icon: "success",
                text: "El número es PAR"
            });

        } else {

            Swal.fire({
                icon: "info",
                text: "El número es IMPAR"
            });
        }

    });
}

//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio11() {

    Swal.fire({
        title: "Ordenar 4 números",
        html: `
            <p>Ingrese 4 números:</p>
            <input id="n1" class="swal2-input" placeholder="Número 1">
            <input id="n2" class="swal2-input" placeholder="Número 2">
            <input id="n3" class="swal2-input" placeholder="Número 3">
            <input id="n4" class="swal2-input" placeholder="Número 4">
        `,
        confirmButtonText: "Ordenar",
        showCancelButton: true,

        preConfirm: () => {
            // Creamos un arreglo con los valores convertidos a número
            let v = [
                Number.parseInt(document.getElementById("n1").value),
                Number.parseInt(document.getElementById("n2").value),
                Number.parseInt(document.getElementById("n3").value),
                Number.parseInt(document.getElementById("n4").value)
            ];

            // Validamos que todos sean números
            if (v.some(n => Number.isNaN(n))) {
                Swal.showValidationMessage("Ingrese solo números válidos");
                return false;
            }
            return v;
        }

    }).then((result) => {

        if (!result.isConfirmed) return;
        let v = result.value;
        
        //MÉTODO BURBUJA
        let aux; // variable temporal para intercambio
        for (let i = 0; i < v.length - 1; i++) {
            for (let j = 0; j < v.length - 1 - i; j++) {
                if (v[j] > v[j + 1]) {

                    // Intercambio de posiciones
                    aux = v[j];
                    v[j] = v[j + 1];
                    v[j + 1] = aux;
                }
            }
        }

        // Mostramos el arreglo ordenado
        Swal.fire({
            icon: "success",
            html: `
                <p>Números ordenados:</p>
                <p>${v.join(" - ")}</p>
           `
        }).then(() => {
                repetir(ejercicio11);
            });
    });
}

//12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function ejercicio12() {

    Swal.fire({
        title: "Ejercicio 12",
        html: `
            <p> Escribe los números a comparar </p>
            <input id="num1" class="swal2-input" placeholder="Número 1">
            <input id="num2" class="swal2-input" placeholder="Número 2">
        `,
        confirmButtonText: "Calcular",
        showCancelButton: true,

        preConfirm: () => {

            // Convertimos los valores ingresados a número
            let a = Number(document.getElementById("num1").value);
            let b = Number(document.getElementById("num2").value);

            // Validamos que sean números
            if (Number.isNaN(a) || Number.isNaN(b)) {
                Swal.showValidationMessage("Ingrese números válidos");
                return false;
            }

            return { a, b };
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let a = result.value.a;
        let b = result.value.b;

        let mayor;

        /*
         Si "a" es mayor o igual que "b",
         entonces "a" es el mayor.
         De lo contrario, "b" es el mayor.
        */

        if (a >= b) {
            mayor = a;
        } else {
            mayor = b;
        }

        Swal.fire({
            icon: "success",
            text: `El número mayor es ${mayor}`
        });

    });
}

//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function ejercicio13() {

    Swal.fire({
        title: "Ejercicio 13",
        html: `
            <p>Ingresa una letra</p>
            <input id="letra" class="swal2-input" placeholder="Letra">
        `,
        confirmButtonText: "Verificar",
        showCancelButton: true,
        preConfirm: () => {

            let letra = document.getElementById("letra").value.trim();

            // Validar que se ingrese solo una letra
            if (letra.length !== 1 || !isNaN(letra)) {
                Swal.showValidationMessage("Ingrese solo una letra válida");
                return false;
            }

            return letra.toUpperCase();
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let letra = result.value;

        if ("AEIOU".includes(letra)) {
            Swal.fire({
                icon: "success",
                text: "La letra es una vocal"
            });
        } else {
            Swal.fire({
                icon: "info",
                text: "La letra NO es una vocal"
            });
        }

    });

}

//14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
function ejercicio14() {

    Swal.fire({
        title: "Ejercicio 14",
        html: `
            <p>Ingrese un número del 1 al 10</p>
            <input id="numero" type="number" class="swal2-input" placeholder="Número">
        `,
        confirmButtonText: "Verificar",
        showCancelButton: true,
        preConfirm: () => {

            let numero = Number(document.getElementById("numero").value);

            if (isNaN(numero) || numero < 1 || numero > 10) {
                Swal.showValidationMessage("Ingrese un número válido del 1 al 10");
                return false;
            }

            return numero;
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let numero = result.value;

        if (numero === 2 || numero === 3 || numero === 5 || numero === 7) {
            Swal.fire({
                icon: "success",
                text: "El número es PRIMO"
            });
        } else {
            Swal.fire({
                icon: "info",
                text: "El número NO es primo"
            });
        }

    });

}

//15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
function ejercicio15() {

    const Lb = 0.453592; // 1 lb = 0.453592 kg

    Swal.fire({
        title: "MENÚ DE CONVERSIONES",
        html: `
            <p>[1] Centímetros a Pulgadas</p>
            <p>[2] Pulgadas a Centímetros</p>
            <p>[3] Kilogramos a Libras</p>
            <p>[4] Libras a Kilogramos</p>
            <p>[5] Salir</p>
            <input id="opcion" type="number" class="swal2-input" placeholder="Seleccione opción">
        `,
        confirmButtonText: "Aceptar",
        showCancelButton: true,
        preConfirm: () => {

            let opcion = Number(document.getElementById("opcion").value);

            if (isNaN(opcion) || opcion < 1 || opcion > 5) {
                Swal.showValidationMessage("Seleccione una opción válida (1-5)");
                return false;
            }

            return opcion;
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let opcion = result.value;

        switch (opcion) {

            case 1:
                pedirValor("Ingrese los centímetros:", valor => {
                    let pulg = valor / 2.54;
                    Swal.fire("Resultado", `Equivale a ${pulg} pulgadas.`, "success")
                        .then(() => ejercicio15());
                });
                break;

            case 2:
                pedirValor("Ingrese las pulgadas:", valor => {
                    let cm = valor * 2.54;
                    Swal.fire("Resultado", `Equivale a ${cm} centímetros.`, "success")
                        .then(() => ejercicio15());
                });
                break;

            case 3:
                pedirValor("Ingrese los kilogramos:", valor => {
                    let lb = valor / Lb;
                    Swal.fire("Resultado", `Equivale a ${lb} libras.`, "success")
                        .then(() => ejercicio15());
                });
                break;

            case 4:
                pedirValor("Ingrese las libras:", valor => {
                    let kg = valor * Lb;
                    Swal.fire("Resultado", `Equivale a ${kg} kilogramos.`, "success")
                        .then(() => ejercicio15());
                });
                break;

            case 5:
                Swal.fire("Gracias por usar el programa 😊");
                break;
        }

    });
}

// Función auxiliar para pedir valores numéricos
function pedirValor(mensaje, callback) {

    Swal.fire({
        title: mensaje,
        input: "number",
        inputPlaceholder: "Ingrese valor",
        showCancelButton: true,
        confirmButtonText: "Convertir",
        preConfirm: (valor) => {

            if (valor === "" || isNaN(valor)) {
                Swal.showValidationMessage("Ingrese un número válido");
                return false;
            }

            return Number(valor);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            callback(result.value);
        }
    });

}

//16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
function ejercicio16() {

    Swal.fire({
        title: "Ejercicio 16",
        html: `
            <p>Ingrese un número del 1 al 7:</p>
            <input id="numero" type="number" class="swal2-input" placeholder="Número">
        `,
        confirmButtonText: "Aceptar",
        showCancelButton: true,
        preConfirm: () => {

            let numero = Number(document.getElementById("numero").value);

            if (isNaN(numero) || numero < 1 || numero > 7) {
                Swal.showValidationMessage("Ingrese un número válido del 1 al 7");
                return false;
            }

            return numero;
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let numero = result.value;
        let dia = "";

        switch (numero) {
            case 1: dia = "Lunes"; break;
            case 2: dia = "Martes"; break;
            case 3: dia = "Miércoles"; break;
            case 4: dia = "Jueves"; break;
            case 5: dia = "Viernes"; break;
            case 6: dia = "Sábado"; break;
            case 7: dia = "Domingo"; break;
        }
        // 🔁 Preguntar si desea repetir
        Swal.fire({
            icon: "success",
            text: dia
        }).then(() => {
         repetir(ejercicio16);
        });
    });
};

//17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
function ejercicio17() {

    Swal.fire({
        title: "Ejercicio 17",
        html: `
            <p>Ingrese la hora en formato HH:MM:SS</p>
            <input id="horaTexto" class="swal2-input" placeholder="Ej: 14:35:59">
        `,
        confirmButtonText: "Aceptar",
        showCancelButton: true,
        preConfirm: () => {

            let horaTexto = document.getElementById("horaTexto").value.trim();

            // Validar formato con expresión regular
            let formatoValido = /^(\d{2}):(\d{2}):(\d{2})$/.test(horaTexto);

            if (!formatoValido) {
                Swal.showValidationMessage("Formato incorrecto. Use HH:MM:SS");
                return false;
            }

            let partes = horaTexto.split(":");
            let horas = Number(partes[0]);
            let minutos = Number(partes[1]);
            let segundos = Number(partes[2]);

            if (horas > 23 || minutos > 59 || segundos > 59) {
                Swal.showValidationMessage("Hora no válida.");
                return false;
            }

            return { horas, minutos, segundos };
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let { horas, minutos, segundos } = result.value;

        // 🔹 Sumar un segundo
        segundos++;

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

        // Formatear con 2 dígitos
        let nuevaHora =
            String(horas).padStart(2, "0") + ":" +
            String(minutos).padStart(2, "0") + ":" +
            String(segundos).padStart(2, "0");

        Swal.fire({
            icon: "success",
            text: "La hora dentro de un segundo es: " + nuevaHora
        }).then(() => {
            repetir(ejercicio17);
        });

    });

}

/*18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
$10. Si se compran unidades separadas hasta 9.
$8. Si se compran entre 10 unidades hasta 99.
$7. Entre 100 y 499 unidades.
$6. Para mas de 500 unidades.
La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.*/
function ejercicio18() {

    const utilidad = 0.0825;

    Swal.fire({
        title: "Ejercicio 18",
        text: "Ingrese la cantidad de CDs a comprar:",
        icon: "info",
        input: "number",
        inputPlaceholder: "Cantidad",
        showCancelButton: true,
        confirmButtonText: "Calcular",
        preConfirm: (valor) => {

            let cantidad = Number(valor);

            if (isNaN(cantidad) || cantidad <= 0) {
                Swal.showValidationMessage("Cantidad inválida, ingrese un número mayor a 0");
                return false;
            }

            return cantidad;
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let cantidad = result.value;
        let precio;

        if (cantidad >= 500) {precio = 6;} 
        else if (cantidad >= 100) {precio = 7;}
        else if (cantidad >= 10) {precio = 8;} 
        else {precio = 10;
        }

        let total = cantidad * precio;
        let ganancia = total * utilidad;

        Swal.fire({
            icon: "success",
            html: `
                <p><b>Precio unitario:</b> $${precio}</p>
                <p><b>Total a pagar:</b> $${total.toFixed(2)}</p>
                <p><b>Ganancia del vendedor:</b> $${ganancia.toFixed(2)}</p>
            `
        }).then(() => {
            repetir(ejercicio18);
        });

    });

}

/*19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
Cajero (56$/día).
Servidor (64$/día).
Preparador de mezclas (80$/día).
Mantenimiento (48$/día).
El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó*/
function ejercicio19() {

    Swal.fire({
        title: "EMPLEADOS",
        html: `
            <p><b>[01]</b> Cajero ($56 por día)</p>
            <p><b>[02]</b> Servidor ($64 por día)</p>
            <p><b>[03]</b> Preparador de mezclas ($80 por día)</p>
            <p><b>[04]</b> Mantenimiento ($48 por día)</p>
            <hr>
            <input id="id" class="swal2-input" placeholder="Ingrese ID (01-04)">
            <input id="dias" type="number" class="swal2-input" placeholder="Días trabajados (0-6)">
        `,
        confirmButtonText: "Calcular",
        showCancelButton: true,
        preConfirm: () => {

            let id = document.getElementById("id").value.trim();
            let dias = Number(document.getElementById("dias").value);

            if (!["01","02","03","04"].includes(id)) {
                Swal.showValidationMessage("ID incorrecto (01-04)");
                return false;
            }

            if (isNaN(dias) || dias < 0 || dias > 6) {
                Swal.showValidationMessage("Días inválidos (0-6)");
                return false;
            }

            return { id, dias };
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let { id, dias } = result.value;
        let pagoDia, cargo;

        switch (id) {
            case "01":
                pagoDia = 56;
                cargo = "Cajero";
                break;
            case "02":
                pagoDia = 64;
                cargo = "Servidor";
                break;
            case "03":
                pagoDia = 80;
                cargo = "Preparador de mezclas";
                break;
            case "04":
                pagoDia = 48;
                cargo = "Mantenimiento";
                break;
        }

        let pago = dias * pagoDia;

        Swal.fire({
            icon: "success",
            html: `
                <p><b>Empleado:</b> ${cargo} (ID ${id})</p>
                <p><b>Días trabajados:</b> ${dias}</p>
                <p><b>Monto a pagar:</b> $${pago.toFixed(2)}</p>
            `
        }).then(() => {
            repetir(ejercicio19);
        });

    });

}

/*20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
¿Cuántos números son Pares?
¿Cuál es el mayor de todos?
Si el tercero es par, calcular el cuadrado del segundo.
Si el primero es menor que el cuarto, calcular la media de los 4 números.
Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.*/
function ejercicio20() {

    // Mostrar ventana para ingresar los 4 números
    Swal.fire({
        title: "Ejercicio 20",
        html: `
            <p>Ingrese 4 números:</p>
            <input id="n1" type="number" class="swal2-input" placeholder="Número 1">
            <input id="n2" type="number" class="swal2-input" placeholder="Número 2">
            <input id="n3" type="number" class="swal2-input" placeholder="Número 3">
            <input id="n4" type="number" class="swal2-input" placeholder="Número 4">
        `,
        confirmButtonText: "Procesar",
        showCancelButton: true,

        // Se ejecuta antes de cerrar el Swal
        preConfirm: () => {

            // Guardamos los valores ingresados en un arreglo
            let valores = [
                Number(document.getElementById("n1").value),
                Number(document.getElementById("n2").value),
                Number(document.getElementById("n3").value),
                Number(document.getElementById("n4").value)
            ];

            // Validamos que todos sean números
            if (valores.some(n => isNaN(n))) {
                Swal.showValidationMessage("Todos los valores deben ser números");
                return false;
            }

            // Retornamos el arreglo si todo es correcto
            return valores;
        }

    }).then((result) => {

        // Si el usuario cancela, se termina la función
        if (!result.isConfirmed) return;

        // Copiamos el arreglo original
        // Spread (...) crea una copia independiente
        let original = [...result.value];

        // Creamos otra copia para ordenarla
        let v = [...result.value];

        // Inicializamos variables
        let pares = 0;
        let suma = 0;

        // ==============================
        // 1) Contar números pares y sumar
        // ==============================
        for (let i = 0; i < 4; i++) {

            // Verificamos si el número es par
            if (original[i] % 2 === 0) {
                pares++;
            }

            // Sumamos todos los números
            suma += original[i];
        }

        // ==============================
        // 2) Ordenamiento Burbuja
        // ==============================
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3 - i; j++) {

                // Si el actual es mayor que el siguiente, intercambiamos
                if (v[j] > v[j + 1]) {

                    let aux = v[j];      // Guardamos temporal
                    v[j] = v[j + 1];     // Intercambio
                    v[j + 1] = aux;
                }
            }
        }

        // El mayor será el último del arreglo ordenado
        let mayor = v[3];

        // Variable para acumular los mensajes
        let mensajes = "";

        // ==============================
        // I) Si el tercero es par
        // ==============================
        if (original[2] % 2 === 0) {

            let cuadrado = original[1] * original[1];

            mensajes += `I) El tercero es par.<br>
                         Cuadrado del segundo: ${cuadrado}<br><hr>`;
        }

        // ==============================
        // II) Si el primero es menor que el cuarto
        // ==============================
        if (original[0] < original[3]) {

            let media = suma / 4;

            mensajes += `II) El primero es menor que el cuarto.<br>
                         Media: ${media}<br><hr>`;
        }

        // ==============================
        // III) Condición especial
        // ==============================
        if (original[1] > original[2] &&
            original[2] >= 50 &&
            original[2] <= 700) {

            mensajes += `III) Se cumple la condición.<br>
                         Suma: ${suma}<br><hr>`;
        }

        // ==============================
        // IV y V Resultados finales
        // ==============================
        mensajes += `IV) Cantidad de números pares: ${pares}<br><hr>`;
        mensajes += `V) El número mayor es: ${mayor}`;

        // Mostrar resultados
        Swal.fire({
            icon: "success",
            html: mensajes
        }).then(() => {

            // Llamamos función global para repetir
            repetir(ejercicio20);

        });

    });

}

//21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
function ejercicio21() {

    // Pedimos un número al usuario
    Swal.fire({
        title: "Ejercicio 21",
        text: "Escriba un número para calcular el factorial:",
        input: "number",
        inputAttributes: {
            min: 0
        },
        showCancelButton: true,
        confirmButtonText: "Calcular",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {

        // Si el usuario cancela, no hacemos nada
        if (!resultado.isConfirmed) return;

        // Convertimos el valor ingresado a número entero
        let n = parseInt(resultado.value);

        // Variable donde guardaremos el factorial
        let factorial = 1;

        // Validamos si es negativo
        if (n < 0) {

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Los números negativos no tienen factorial."
            }).then(() => repetirEjercicio(ejercicio21));

        } else {

            // 🔄 Si el número es mayor que 0
            // Usamos un ciclo para calcular el factorial
            for (let i = 1; i <= n; i++) {

                // Multiplicamos acumulativamente
                factorial = factorial * i;
            }

            // Mostramos el resultado
            Swal.fire({
                icon: "success",
                title: "Resultado",
                text: "El factorial de " + n + " es " + factorial
            }).then(() => repetirEjercicio(ejercicio21));
        }

    });
}

//22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
function ejercicio22() {

    // Solicita al usuario el número
    Swal.fire({
        title: "Ejercicio 22",
        text: "Escriba un número para calcular la suma de los primeros n números:",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Calcular",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {

        // Si el usuario cancela, se detiene la ejecución
        if (!resultado.isConfirmed) return;

        // Convierte el valor ingresado a entero
        let n = parseInt(resultado.value);

        // Declaración de variables
        let i;
        let suma;

        // Validación para números negativos
        if (n < 0) {

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Los números negativos no son válidos."
            }).then(() => repetirEjercicio(ejercicio22));

        } else {

            // Inicializa la variable acumuladora
            suma = 0;

            // Ciclo desde 0 hasta n
            for (i = 0; i <= n; i++) {

                // Acumula la suma
                suma = suma + i;
            }

            // Muestra el resultado
            Swal.fire({
                icon: "success",
                title: "Resultado",
                text: "La suma de los primeros " + n + " números es " + suma
            }).then(() => repetirEjercicio(ejercicio22));
        }

    });
}

//23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
function ejercicio23() {

    // Solicita al usuario un número
    Swal.fire({
        title: "Ejercicio 23",
        text: "Ingrese un número:",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Calcular",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {

        // Si el usuario cancela, se detiene la ejecución
        if (!resultado.isConfirmed) return;

        // Convierte el valor ingresado a entero
        let numero = parseInt(resultado.value);

        // Declaración de variables
        let k;
        let suma;

        // Validación para números menores o iguales a cero
        if (numero <= 0) {

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Los números negativos o cero no son válidos."
            }).then(() => repetirEjercicio(ejercicio23));

        } else {

            // Calcula cuántos números impares hay menores o iguales a numero
            // Fórmula: Trunc((numero + 1) / 2)
            k = Math.trunc((numero + 1) / 2);

            // Calcula la suma usando la fórmula matemática
            // La suma de los primeros k impares es k^2
            suma = k * k;

            // Muestra el resultado
            Swal.fire({
                icon: "success",
                title: "Resultado",
                html: "Se hará la suma de los primeros " + k + " números impares.<br><br>" +
                      "La suma de los números impares menores o iguales a " + numero + " es " + suma
            }).then(() => repetirEjercicio(ejercicio23));
        }

    });
}

//24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
function ejercicio24() {

    // Solicita al usuario un número
    Swal.fire({
        title: "Ejercicio 24",
        text: "Ingrese un número:",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Calcular",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {

        // Si el usuario cancela, se detiene la ejecución
        if (!resultado.isConfirmed) return;

        // Convierte el valor ingresado a entero
        let numero = parseInt(resultado.value);

        // Declaración de variables
        let k;
        let suma;

        // Validación para números menores o iguales a cero
        if (numero <= 0) {

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Los números negativos o cero no son válidos."
            }).then(() => repetirEjercicio(ejercicio24));

        } else {

            // Calcula cuántos números pares hay menores o iguales a numero
            // Fórmula: Trunc(numero / 2)
            k = Math.trunc(numero / 2);

            // Calcula la suma usando la fórmula matemática
            // La suma de los primeros k números pares es k * (k + 1)
            suma = k * (k + 1);

            // Muestra el resultado
            Swal.fire({
                icon: "success",
                title: "Resultado",
                html: "Se hará la suma de los primeros " + k + " números pares.<br><br>" +
                      "La suma de los números pares menores o iguales a " + numero + " es " + suma
            }).then(() => repetirEjercicio(ejercicio24));
        }

    });
}

//25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
function ejercicio25() {

    // Solicita al usuario el número
    Swal.fire({
        title: "Ejercicio 25",
        text: "Escriba un número para calcular el factorial:",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Calcular",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {

        // Si el usuario cancela, se detiene la ejecución
        if (!resultado.isConfirmed) return;

        // Convierte el valor ingresado a entero
        let n = parseInt(resultado.value);

        // Declaración de variables
        let i, j;
        let factorial;
        let acumulador;

        // Validación para números negativos
        if (n < 0) {

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Los números negativos no tienen factorial."
            }).then(() => repetirEjercicio(ejercicio25));

        } else {

            factorial = 1;

            // Se usará para mostrar el proceso paso a paso
            let proceso = "";

            // Ciclo externo desde 1 hasta n
            for (i = 1; i <= n; i++) {

                acumulador = 0;

                // Multiplicación por suma repetida
                for (j = 1; j <= i; j++) {

                    acumulador = acumulador + factorial;

                    // Guarda cada suma parcial
                    proceso += "Suma parcial: " + acumulador + "<br>";
                }

                factorial = acumulador;

                // Guarda el resultado después de cada iteración
                proceso += "Factorial después de multiplicar por " + i + ": " + factorial + "<br><br>";
            }

            // Muestra el resultado final junto con el proceso
            Swal.fire({
                icon: "success",
                title: "Resultado",
                html: proceso + "<strong>El factorial de " + n + " es " + factorial + "</strong>"
            }).then(() => repetirEjercicio(ejercicio25));
        }

    });
}

//26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
function ejercicio26() {

    // Solicita el dividendo
    Swal.fire({
        title: "Ejercicio 26",
        text: "Ingrese el dividendo:",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Siguiente",
        cancelButtonText: "Cancelar"
    }).then((resDividendo) => {

        if (!resDividendo.isConfirmed) return;

        let dividendo = parseInt(resDividendo.value);

        // Solicita el divisor
        Swal.fire({
            title: "Ejercicio 26",
            text: "Ingrese el divisor:",
            input: "number",
            showCancelButton: true,
            confirmButtonText: "Calcular",
            cancelButtonText: "Cancelar"
        }).then((resDivisor) => {

            if (!resDivisor.isConfirmed) return;

            let divisor = parseInt(resDivisor.value);

            // Declaración de variables
            let cociente;
            let resto;

            // Validación de división entre cero
            if (divisor === 0) {

                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No se puede dividir entre cero."
                }).then(() => repetirEjercicio(ejercicio26));

            } else {

                cociente = 0;
                resto = dividendo;

                // División usando restas sucesivas
                while (resto >= divisor) {

                    resto = resto - divisor;
                    cociente = cociente + 1;
                }

                // Muestra los resultados
                Swal.fire({
                    icon: "success",
                    title: "Resultado",
                    html: "Cociente: " + cociente + "<br>" +
                          "Resto: " + resto
                }).then(() => repetirEjercicio(ejercicio26));
            }

        });

    });
}

//27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
function ejercicio27() {

    // Vector para guardar hasta 100 números
    let v = [];

    // Declaración de variables
    let n = 0;
    let suma;
    let media;

    // Función que simula "Repetir Hasta Que"
    function pedirNumero() {

        Swal.fire({
            title: "Ejercicio 27",
            text: "Ingrese números positivos (un número negativo para terminar):",
            input: "number",
            showCancelButton: true,
            confirmButtonText: "Ingresar",
            cancelButtonText: "Cancelar"
        }).then((resultado) => {

            if (!resultado.isConfirmed) return;

            let numero = parseFloat(resultado.value);

            // n <- n + 1
            n++;

            // Guardamos el número en el vector
            v[n - 1] = numero;

            // Hasta Que v[n] < 0
            if (numero < 0) {

                // Ajustamos n porque el último valor es negativo
                n = n - 1;

                // Calculamos la suma de los números positivos
                suma = 0;

                for (let i = 0; i < n; i++) {
                    suma = suma + v[i];
                }

                if (n > 0) {

                    media = suma / n;

                    Swal.fire({
                        icon: "success",
                        title: "Resultado",
                        text: "La media de los " + n +
                              " números positivos ingresados es: " + media
                    }).then(() => repetirEjercicio(ejercicio27));

                } else {

                    Swal.fire({
                        icon: "info",
                        title: "Resultado",
                        text: "No se ingresaron números positivos."
                    }).then(() => repetirEjercicio(ejercicio27));
                }

            } else {

                // Sigue pidiendo números (Repetir)
                pedirNumero();
            }

        });
    }

    // Inicia el proceso
    pedirNumero();
}

//28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
function ejercicio28() {

    // Solicita el número límite
    Swal.fire({
        title: "Ejercicio 28",
        text: "Ingrese hasta qué número desea sumar los primeros números positivos:",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Calcular",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {

        if (!resultado.isConfirmed) return;

        let limite = parseInt(resultado.value);

        // Validación
        if (limite <= 0) {

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Número inválido. Debe ser mayor que 0."
            }).then(() => repetirEjercicio(ejercicio28));

        } else {

            // Inicialización de variables
            let n = 0;
            let suma = 0;

            // Variable para mostrar el proceso
            let proceso = "";

            // Repetir Hasta Que n = limite
            do {

                n = n + 1;
                suma = suma + n;

                // Mostrar suma acumulada en cada paso
                proceso += "Suma parcial: " + suma + "<br>";

            } while (n !== limite);

            // Mostrar resultado final
            Swal.fire({
                icon: "success",
                title: "Resultado",
                html: proceso +
                      "<br><strong>La suma de los primeros " +
                      limite + " números es: " + suma + "</strong>"
            }).then(() => repetirEjercicio(ejercicio28));
        }

    });
}

//29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
function ejercicio29() {

    // Solicita el número límite
    Swal.fire({
        title: "Ejercicio 29",
        text: "Ingrese hasta qué número desea sumar los primeros números positivos:",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Calcular",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {

        if (!resultado.isConfirmed) return;

        let limite = parseInt(resultado.value);

        // Validación
        if (limite <= 0) {

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Número inválido. Debe ser mayor que 0."
            }).then(() => repetirEjercicio(ejercicio29));

        } else {

            // Inicialización de variables
            let n = 1;
            let suma = 0;

            // Estructura Mientras n <= limite
            while (n <= limite) {

                suma = suma + n;
                n = n + 1;
            }

            // Mostrar resultado final
            Swal.fire({
                icon: "success",
                title: "Resultado",
                text: "La suma de los primeros " +
                      limite + " números es: " + suma
            }).then(() => repetirEjercicio(ejercicio29));
        }
    });
}

//30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
function ejercicio30() {

    // Solicita el número límite
    Swal.fire({
        title: "Ejercicio 30",
        text: "Ingrese hasta qué número desea sumar los primeros números positivos:",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Calcular",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {

        if (!resultado.isConfirmed) return;

        let limite = parseInt(resultado.value);

        // Validación
        if (limite <= 0) {

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Número inválido. Debe ser mayor que 0."
            }).then(() => repetirEjercicio(ejercicio30));

        } else {

            // Inicialización
            let suma = 0;

            // Ciclo Para n <- 1 Hasta limite
            for (let n = 1; n <= limite; n++) {

                suma = suma + n;
            }

            // Mostrar resultado
            Swal.fire({
                icon: "success",
                title: "Resultado",
                text: "La suma de los primeros " +
                      limite + " números es: " + suma
            }).then(() => repetirEjercicio(ejercicio30));
        }

    });
}

//31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
function ejercicio31() {

    // Inicialización de variables
    let SumaPar = 0;
    let SumaImpar = 0;
    let ContPar = 0;
    let ContImpar = 0;

    let i = 1;

    // Función para pedir los 10 números
    function pedirNumero() {

        if (i <= 10) {

            Swal.fire({
                title: "Ejercicio 31",
                text: "Ingrese el número " + i + ":",
                input: "number",
                showCancelButton: true,
                confirmButtonText: "Ingresar",
                cancelButtonText: "Cancelar"
            }).then((resultado) => {

                if (!resultado.isConfirmed) return;

                let numero = parseInt(resultado.value);

                // Si el número es par
                if (numero % 2 === 0) {

                    SumaPar = SumaPar + numero;
                    ContPar = ContPar + 1;

                } else {

                    SumaImpar = SumaImpar + numero;
                    ContImpar = ContImpar + 1;
                }

                i++;
                pedirNumero();
            });

        } else {

            let mensaje = "";

            // Cálculo de media de pares
            if (ContPar > 0) {

                let MediaPar = SumaPar / ContPar;
                mensaje += "La media de los números pares es: " + MediaPar + "<br>";

            } else {

                mensaje += "No se ingresaron números pares.<br>";
            }

            // Cálculo de media de impares
            if (ContImpar > 0) {

                let MediaImpar = SumaImpar / ContImpar;
                mensaje += "La media de los números impares es: " + MediaImpar;

            } else {

                mensaje += "No se ingresaron números impares.";
            }

            // Mostrar resultados
            Swal.fire({
                icon: "success",
                title: "Resultado",
                html: mensaje
            }).then(() => repetirEjercicio(ejercicio31));
        }
    }

    pedirNumero();
}

//32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. 
function ejercicio32() {

    // Declaración de vectores
    let Ciudad = [];
    let Provincia = [];
    let Poblacion = [];

    let i = 0;

    // Función para ingresar los datos de las 11 ciudades
    function pedirDatos() {

        if (i < 11) {

            Swal.fire({
                title: "Ejercicio 32",
                text: "Ingrese el nombre de la ciudad " + (i + 1) + ":",
                input: "text",
                showCancelButton: true,
                confirmButtonText: "Siguiente",
                cancelButtonText: "Cancelar"
            }).then((resCiudad) => {

                if (!resCiudad.isConfirmed) return;

                Ciudad[i] = resCiudad.value;

                Swal.fire({
                    title: "Ejercicio 32",
                    text: "Ingrese la provincia de la ciudad " + (i + 1) + ":",
                    input: "text",
                    showCancelButton: true,
                    confirmButtonText: "Siguiente",
                    cancelButtonText: "Cancelar"
                }).then((resProvincia) => {

                    if (!resProvincia.isConfirmed) return;

                    Provincia[i] = resProvincia.value;

                    Swal.fire({
                        title: "Ejercicio 32",
                        text: "Ingrese la población de la ciudad " + (i + 1) + ":",
                        input: "number",
                        showCancelButton: true,
                        confirmButtonText: "Guardar",
                        cancelButtonText: "Cancelar"
                    }).then((resPoblacion) => {

                        if (!resPoblacion.isConfirmed) return;

                        Poblacion[i] = parseInt(resPoblacion.value);

                        i++;
                        pedirDatos();
                    });

                });

            });

        } else {

            // Inicialización del máximo
            let poblacionMax = Poblacion[0];
            let posMax = 0;

            // Búsqueda de la mayor población
            for (let j = 1; j < 11; j++) {

                if (Poblacion[j] > poblacionMax) {
                    poblacionMax = Poblacion[j];
                    posMax = j;
                }
            }

            // Mostrar resultado
            Swal.fire({
                icon: "success",
                title: "Resultado",
                html: "La ciudad con mayor población es: " + Ciudad[posMax] + "<br>" +
                      "Provincia: " + Provincia[posMax] + "<br>" +
                      "Población: " + poblacionMax
            }).then(() => repetirEjercicio(ejercicio32));
        }
    }

    pedirDatos();
}

//33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
function ejercicio33() {

    Swal.fire({
        title: "Ejercicio 33",
        html:
            '<input id="num1" class="swal2-input" placeholder="Número 1" type="number">' +
            '<input id="num2" class="swal2-input" placeholder="Número 2" type="number">' +
            '<input id="num3" class="swal2-input" placeholder="Número 3" type="number">' +
            '<input id="num4" class="swal2-input" placeholder="Número 4" type="number">' +
            '<input id="num5" class="swal2-input" placeholder="Número 5" type="number">',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Calcular",
        cancelButtonText: "Cancelar",
        preConfirm: () => {

            let n1 = parseFloat(document.getElementById('num1').value);
            let n2 = parseFloat(document.getElementById('num2').value);
            let n3 = parseFloat(document.getElementById('num3').value);
            let n4 = parseFloat(document.getElementById('num4').value);
            let n5 = parseFloat(document.getElementById('num5').value);

            if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5)) {
                Swal.showValidationMessage("Debe ingresar los 5 números.");
                return false;
            }

            return { n1, n2, n3, n4, n5 };
        }

    }).then((resultado) => {

        if (!resultado.isConfirmed) return;

        let datos = resultado.value;
        let suma = datos.n1 + datos.n2 + datos.n3 + datos.n4 + datos.n5;

        Swal.fire({
            icon: "success",
            title: "Resultado",
            text: "La suma de los 5 números es: " + suma
        }).then(() => {
            repetir(ejercicio33); 
        });

    });

}


//34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.
function ejercicio34() {

    Swal.fire({
        title: "Ejercicio 34",
        text: "Ingrese un número para sacar sus tablas de multiplicar:",
        input: "number",
        showCancelButton: true,
        confirmButtonText: "Generar",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {

        if (!resultado.isConfirmed) return;

        let n = parseInt(resultado.value);

        if (isNaN(n) || n <= 0) {

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Debe ingresar un número mayor que 0."
            }).then(() => {
                repetir(ejercicio34);
            });

        } else {

            let salida = "";

            for (let i = 1; i <= n; i++) {

                salida += "========================<br>";
                salida += "Tabla del " + i + "<br>";
                salida += "========================<br>";

                for (let j = 1; j <= 10; j++) {

                    let resultadoMultiplicacion = i * j;
                    salida += i + " x " + j + " = " + resultadoMultiplicacion + "<br>";
                }

                salida += "<br>";
            }

            Swal.fire({
                icon: "success",
                title: "Resultado",
                html: salida
            }).then(() => {
                repetir(ejercicio34); 
            });
        }

    });

}

//35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
function ejercicio35() {

    let inputs = "";

    // Generar los 20 inputs
    for (let i = 1; i <= 20; i++) {
        inputs += `<input id="num${i}" class="swal2-input" placeholder="Número ${i}" type="number">`;
    }

    Swal.fire({
        title: "Ejercicio 35",
        html: inputs,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Calcular",
        cancelButtonText: "Cancelar",
        preConfirm: () => {

            let numeros = [];

            for (let i = 1; i <= 20; i++) {
                let valor = parseInt(document.getElementById(`num${i}`).value);

                if (isNaN(valor)) {
                    Swal.showValidationMessage("Debe ingresar los 20 números.");
                    return false;
                }

                numeros.push(valor);
            }

            return numeros;
        }

    }).then((resultado) => {

        if (!resultado.isConfirmed) return;

        let numeros = resultado.value;

        let mayor = numeros[0];
        let menor = numeros[0];

        for (let i = 1; i < numeros.length; i++) {

            if (numeros[i] > mayor) {
                mayor = numeros[i];
            }

            if (numeros[i] < menor) {
                menor = numeros[i];
            }
        }

        Swal.fire({
            icon: "success",
            title: "Resultado",
            html: `
                ========================<br>
                El número mayor es: ${mayor} <br>
                El número menor es: ${menor} <br>
                ========================
            `
        }).then(() => {
            repetir(ejercicio35);
        });

    });

}

//36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
function ejercicio36() {

    Swal.fire({
        title: "Ejercicio 36",
        html: `
            <p>Ingrese cuántos términos de Fibonacci desea mostrar:</p>
            <input id="n" class="swal2-input" placeholder="Cantidad de términos" type="number">
        `,
        confirmButtonText: "Mostrar",
        cancelButtonText: "Cancelar",
        showCancelButton: true,

        preConfirm: () => {

            let n = Number.parseInt(
                document.getElementById("n").value
            );

            if (Number.isNaN(n)) {
                Swal.showValidationMessage("Ingrese un número válido");
                return false;
            }

            return n;
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let n = result.value;

        if (n <= 0) {

            Swal.fire({
                icon: "error",
                text: "Debe ingresar un número mayor que 0."
            }).then(() => {
                repetir(ejercicio36);
            });

        } else {

            let a = 0;
            let b = 1;
            let fib;
            let salida = "Serie de Fibonacci:<br><br>";

            if (n >= 1) {
                salida += a + "<br>";
            }

            if (n >= 2) {

                salida += b + "<br>";

                for (let i = 3; i <= n; i++) {

                    fib = a + b;
                    salida += fib + "<br>";

                    a = b;
                    b = fib;
                }
            }

            Swal.fire({
                icon: "success",
                title: "Resultado",
                html: salida
            }).then(() => {
                repetir(ejercicio36);
            });
        }
    });
}

//37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
function ejercicio37() {

    Swal.fire({
        title: "Ejercicio 37",
        html: `
            <input id="num1" class="swal2-input" placeholder="Primer número" type="number">
            <input id="num2" class="swal2-input" placeholder="Segundo número" type="number">
        `,
        confirmButtonText: "Calcular",
        cancelButtonText: "Cancelar",
        showCancelButton: true,

        preConfirm: () => {

            let a = parseInt(document.getElementById("num1").value);
            let b = parseInt(document.getElementById("num2").value);

            if (isNaN(a) || isNaN(b)) {
                Swal.showValidationMessage("Debe ingresar ambos números.");
                return false;
            }

            return { a, b };
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let a = result.value.a;
        let b = result.value.b;

        if (a <= 0 || b <= 0) {

            Swal.fire({
                icon: "error",
                text: "Ambos números deben ser positivos."
            }).then(() => {
                repetir(ejercicio37);
            });

        } else {

            let resto;

            // Algoritmo de Euclides
            while (b !== 0) {
                resto = a % b;
                a = b;
                b = resto;
            }

            Swal.fire({
                icon: "success",
                title: "Resultado",
                html: `El M.C.D. es: <b>${a}</b>`
            }).then(() => {
                repetir(ejercicio37);
            });
        }

    });

}

//38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
function ejercicio38() {

    Swal.fire({
        title: "Ejercicio 38",
        html: `
            <input id="num1" class="swal2-input" placeholder="Ingrese un número positivo" type="number">
        `,
        confirmButtonText: "Verificar",
        cancelButtonText: "Cancelar",
        showCancelButton: true,

        preConfirm: () => {

            let n = parseInt(document.getElementById("num1").value);

            if (isNaN(n)) {
                Swal.showValidationMessage("Debe ingresar un número válido.");
                return false;
            }

            return n;
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let n = result.value;

        if (n <= 0) {

            Swal.fire({
                icon: "error",
                text: "El número debe ser positivo."
            }).then(() => {
                repetir(ejercicio38);
            });

        } else {

            let suma = 0;
            let detalle = "";

            for (let i = 1; i < n; i++) {

                if (n % i === 0) {
                    suma += i;
                    detalle += `Divisor: ${i} → Suma parcial: ${suma}<br>`;
                }
            }

            let mensaje;

            if (suma === n) {
                mensaje = `<b>${n}</b> es un número perfecto.`;
            } else {
                mensaje = `<b>${n}</b> NO es un número perfecto.`;
            }

            Swal.fire({
                icon: "success",
                title: "Resultado",
                html: `
                    ${detalle}
                    <br>
                    Suma total: ${suma}<br><br>
                    ${mensaje}
                `
            }).then(() => {
                repetir(ejercicio38);
            });
        }

    });

}

//39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
function ejercicio39() {

    Swal.fire({
        title: "Ejercicio 39",
        html: `
            <input id="num1" class="swal2-input" 
                   placeholder="Cantidad de términos para aproximar PI" 
                   type="number">
        `,
        confirmButtonText: "Calcular",
        cancelButtonText: "Cancelar",
        showCancelButton: true,

        preConfirm: () => {

            let n = parseInt(document.getElementById("num1").value);

            if (isNaN(n)) {
                Swal.showValidationMessage("Debe ingresar un número válido.");
                return false;
            }

            return n;
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let n = result.value;

        if (n <= 0) {

            Swal.fire({
                icon: "error",
                text: "La cantidad de términos debe ser mayor que 0."
            }).then(() => {
                repetir(ejercicio39);
            });

        } else {

            let pie = 0;
            let signo = 1;
            let termino;

            for (let i = 1; i <= n; i++) {

                termino = 4 / (2 * i - 1);
                pie = pie + signo * termino;
                signo = -signo; // alterna entre 1 y -1
            }

            Swal.fire({
                icon: "success",
                title: "Resultado",
                html: `
                    La aproximación de PI usando <b>${n}</b> términos es:<br><br>
                    <b>${pie}</b>
                `
            }).then(() => {
                repetir(ejercicio39);
            });
        }

    });

}


//40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
//i = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
function ejercicio40() {

    Swal.fire({
        title: "Ejercicio 40",
        html: `
            <input id="num1" class="swal2-input" 
                   placeholder="Cantidad de términos para aproximar PI" 
                   type="number">
        `,
        confirmButtonText: "Calcular",
        cancelButtonText: "Cancelar",
        showCancelButton: true,

        preConfirm: () => {

            let n = parseInt(document.getElementById("num1").value);

            if (isNaN(n)) {
                Swal.showValidationMessage("Debe ingresar un número válido.");
                return false;
            }

            return n;
        }

    }).then((result) => {

        if (!result.isConfirmed) return;

        let n = result.value;

        if (n <= 0) {

            Swal.fire({
                icon: "error",
                text: "La cantidad de términos debe ser mayor que 0."
            }).then(() => {
                repetir(ejercicio40);
            });

        } else {

            let pie = 3;
            let signo = 1;
            let a = 2;
            let termino;

            for (let i = 1; i <= n; i++) {

                termino = 4 / (a * (a + 1) * (a + 2));
                pie = pie + signo * termino;

                signo = -signo; // alterna signo
                a = a + 2;     // aumenta de 2 en 2
            }

            Swal.fire({
                icon: "success",
                title: "Resultado",
                html: `
                    La aproximación de PI usando <b>${n}</b> términos es:<br><br>
                    <b>${pie}</b>
                `
            }).then(() => {
                repetir(ejercicio40);
            });
        }

    });

}



// ===============================
// Función de limpieza (index.html)
// ===============================
function limpiarTodo() {
    const zona = document.getElementById("zona-ejercicio");
    if (zona) {
        zona.innerHTML = "";
    }
}
