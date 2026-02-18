// Variable para almacenar el ejercicio actual
let ejercicioActual = null;

// Definición de ejercicios con su código y descripción
const ejercicios = {
    1: {
        titulo: "1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.",
        codigo: `function ej1() {
    let n;
    n = Number(document.getElementById("e1").value);
    
    if (n >= 100 && n <= 999) {
        document.getElementById("r1").textContent = "Tiene tres dígitos";
    } else if (n <= -100 && n >= -999) {
        document.getElementById("r1").textContent = "Tiene tres dígitos";
    } else {
        document.getElementById("r1").textContent = "No tiene tres dígitos";
    }
}`,
        funcion: function() {
            const n = parseInt(document.getElementById('inputField').value);
            if (isNaN(n)) {
                return "Por favor ingresa un número válido";
            }
            
            if (Math.abs(n) >= 100 && Math.abs(n) <= 999) {
                return `✅ El número ${n} TIENE tres dígitos`;
            } else {
                return `❌ El número ${n} NO tiene tres dígitos`;
            }
        }
    },
    2: {
        titulo: "2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.",
        codigo: `function ej2() {
    let n;
    n = Number(document.getElementById("e2").value);
    
    if (n < 0) {
        document.getElementById("r2").textContent = "Es negativo";
    } else {
        document.getElementById("r2").textContent = "No es negativo";
    }
}`,
        funcion: function() {
            const n = parseInt(document.getElementById('inputField').value);
            if (isNaN(n)) {
                return "Por favor ingresa un número válido";
            }
            
            if (n < 0) {
                return `✅ El número ${n} ES negativo`;
            } else {
                return `❌ El número ${n} NO es negativo`;
            }
        }
    },
    3: {
        titulo: "3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.",
        codigo: `function ej3() {
    let n;
    n = Number(document.getElementById("e3").value);
    
    if (n % 10 === 4 || n % 10 === -4) {
        document.getElementById("r3").textContent = "Termina en 4";
    } else {
        document.getElementById("r3").textContent = "No termina en 4";
    }
}`,
        funcion: function() {
            const n = parseInt(document.getElementById('inputField').value);
            if (isNaN(n)) {
                return "Por favor ingresa un número válido";
            }
            
            if (n % 10 === 4 || n % 10 === -4) {
                return `✅ El número ${n} TERMINA en 4`;
            } else {
                return `❌ El número ${n} NO termina en 4`;
            }
        }
    },
    4: {
        titulo: "4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.",
        codigo: `function ej4() {
    let n1 = Number(document.getElementById("e4a").value);
    let n2 = Number(document.getElementById("e4b").value);
    let n3 = Number(document.getElementById("e4c").value);
    
    let numeros = [n1, n2, n3];
    numeros.sort((a, b) => a - b);
    
    document.getElementById("r4").textContent = 
        "Ordenados: " + numeros.join(", ");
}`,
        funcion: function() {
            const input = document.getElementById('inputField').value;
            const numeros = input.split(',').map(n => parseFloat(n.trim()));
            
            if (numeros.length !== 3 || numeros.some(isNaN)) {
                return "Por favor ingresa 3 números separados por comas (ej: 5, 2, 8)";
            }
            
            const ordenados = [...numeros].sort((a, b) => a - b);
            return `📊 Números originales: ${numeros.join(', ')}\n📈 Ordenados de menor a mayor: ${ordenados.join(', ')}`;
        }
    },
    5: {
        titulo: "5. Tienda de zapatos con promoción de descuento.",
        codigo: `function ej5() {
    let cantidad = Number(document.getElementById("e5").value);
    const precio = 80;
    let total = cantidad * precio;
    let descuento = 0;
    
    if (cantidad > 30) {
        descuento = 0.40;
    } else if (cantidad > 20) {
        descuento = 0.20;
    } else if (cantidad > 10) {
        descuento = 0.10;
    }
    
    const totalFinal = total - (total * descuento);
    document.getElementById("r5").textContent = 
        "Total: $" + totalFinal.toFixed(2);
}`,
        funcion: function() {
            const cantidad = parseInt(document.getElementById('inputField').value);
            if (isNaN(cantidad) || cantidad < 0) {
                return "Por favor ingresa una cantidad válida de zapatos";
            }
            
            const precio = 80;
            let total = cantidad * precio;
            let descuento = 0;
            let porcentaje = "0%";
            
            if (cantidad > 30) {
                descuento = 0.40;
                porcentaje = "40%";
            } else if (cantidad > 20) {
                descuento = 0.20;
                porcentaje = "20%";
            } else if (cantidad > 10) {
                descuento = 0.10;
                porcentaje = "10%";
            }
            
            const totalFinal = total - (total * descuento);
            return `👟 Cantidad: ${cantidad} zapatos\n💵 Precio unitario: $${precio}\n💰 Subtotal: $${total}\n🎁 Descuento: ${porcentaje}\n✅ Total a pagar: $${totalFinal.toFixed(2)}`;
        }
    },
    6: {
        titulo: "6. Calcular sueldo semanal de un trabajador.",
        codigo: `function ej6() {
    let horas = Number(document.getElementById("e6").value);
    let sueldo;
    
    if (horas <= 40) {
        sueldo = horas * 20;
    } else {
        sueldo = (40 * 20) + ((horas - 40) * 25);
    }
    
    document.getElementById("r6").textContent = 
        "Sueldo: $" + sueldo.toFixed(2);
}`,
        funcion: function() {
            const horas = parseFloat(document.getElementById('inputField').value);
            if (isNaN(horas) || horas < 0) {
                return "Por favor ingresa una cantidad válida de horas";
            }
            
            let sueldo;
            let horasNormales = 0;
            let horasExtras = 0;
            
            if (horas <= 40) {
                horasNormales = horas;
                sueldo = horas * 20;
            } else {
                horasNormales = 40;
                horasExtras = horas - 40;
                sueldo = (40 * 20) + (horasExtras * 25);
            }
            
            return `⏰ Horas trabajadas: ${horas}\n📋 Horas normales ($20/hr): ${horasNormales}\n⏱️ Horas extras ($25/hr): ${horasExtras}\n💵 Sueldo total: $${sueldo.toFixed(2)}`;
        }
    },
    7: {
        titulo: "7. Tienda de helado con descuentos por membresía.",
        codigo: `function ej7() {
    let total = Number(document.getElementById("e7a").value);
    let tipo = document.getElementById("e7b").value.toUpperCase();
    let descuento = 0;
    
    switch(tipo) {
        case 'A': descuento = 0.10; break;
        case 'B': descuento = 0.15; break;
        case 'C': descuento = 0.20; break;
    }
    
    const totalFinal = total - (total * descuento);
    document.getElementById("r7").textContent = 
        "Total: $" + totalFinal.toFixed(2);
}`,
        funcion: function() {
            const input = document.getElementById('inputField').value;
            const partes = input.split(',');
            
            if (partes.length !== 2) {
                return "Por favor ingresa: monto, tipo (ej: 100, A)";
            }
            
            const total = parseFloat(partes[0].trim());
            const tipo = partes[1].trim().toUpperCase();
            
            if (isNaN(total)) {
                return "Monto inválido";
            }
            
            let descuento = 0;
            let porcentaje = "0%";
            
            switch(tipo) {
                case 'A':
                    descuento = 0.10;
                    porcentaje = "10%";
                    break;
                case 'B':
                    descuento = 0.15;
                    porcentaje = "15%";
                    break;
                case 'C':
                    descuento = 0.20;
                    porcentaje = "20%";
                    break;
                default:
                    return "Tipo de membresía inválido (usa A, B o C)";
            }
            
            const totalFinal = total - (total * descuento);
            return `🍦 Total compra: $${total.toFixed(2)}\n💳 Membresía: Tipo ${tipo}\n🎁 Descuento: ${porcentaje}\n✅ Total a pagar: $${totalFinal.toFixed(2)}`;
        }
    },
    8: {
        titulo: "8. Calcular promedio de tres notas y determinar si aprobó.",
        codigo: `function ej8() {
    let n1 = Number(document.getElementById("e8a").value);
    let n2 = Number(document.getElementById("e8b").value);
    let n3 = Number(document.getElementById("e8c").value);
    
    const promedio = (n1 + n2 + n3) / 3;
    const resultado = promedio >= 60 ? "APROBÓ" : "NO APROBÓ";
    
    document.getElementById("r8").textContent = 
        "Promedio: " + promedio.toFixed(2) + " - " + resultado;
}`,
        funcion: function() {
            const input = document.getElementById('inputField').value;
            const notas = input.split(',').map(n => parseFloat(n.trim()));
            
            if (notas.length !== 3 || notas.some(isNaN)) {
                return "Por favor ingresa 3 notas separadas por comas (ej: 85, 90, 78)";
            }
            
            const promedio = (notas[0] + notas[1] + notas[2]) / 3;
            const estado = promedio >= 60 ? "APROBÓ ✅" : "NO APROBÓ ❌";
            
            return `📝 Notas: ${notas.join(', ')}\n📊 Promedio: ${promedio.toFixed(2)}\n${estado}`;
        }
    },
    9: {
        titulo: "9. Determinar aumento de un trabajador según su salario.",
        codigo: `function ej9() {
    let salario = Number(document.getElementById("e9").value);
    let aumento;
    
    if (salario > 2000) {
        aumento = salario * 0.05;
    } else {
        aumento = salario * 0.10;
    }
    
    const nuevoSalario = salario + aumento;
    document.getElementById("r9").textContent = 
        "Nuevo salario: $" + nuevoSalario.toFixed(2);
}`,
        funcion: function() {
            const salario = parseFloat(document.getElementById('inputField').value);
            if (isNaN(salario) || salario < 0) {
                return "Por favor ingresa un salario válido";
            }
            
            let aumento;
            let porcentaje;
            
            if (salario > 2000) {
                aumento = salario * 0.05;
                porcentaje = "5%";
            } else {
                aumento = salario * 0.10;
                porcentaje = "10%";
            }
            
            const nuevoSalario = salario + aumento;
            return `💰 Salario actual: $${salario.toFixed(2)}\n📈 Aumento (${porcentaje}): $${aumento.toFixed(2)}\n✅ Nuevo salario: $${nuevoSalario.toFixed(2)}`;
        }
    },
    10: {
        titulo: "10. Determinar si un número es par o impar.",
        codigo: `function ej10() {
    let n = Number(document.getElementById("e10").value);
    
    if (n % 2 === 0) {
        document.getElementById("r10").textContent = "Es PAR";
    } else {
        document.getElementById("r10").textContent = "Es IMPAR";
    }
}`,
        funcion: function() {
            const n = parseInt(document.getElementById('inputField').value);
            if (isNaN(n)) {
                return "Por favor ingresa un número válido";
            }
            
            return `🔢 Número: ${n}\n${n % 2 === 0 ? '✅ Es PAR' : '✅ Es IMPAR'}`;
        }
    },
    11: {
        titulo: "11. Encontrar el mayor de tres números.",
        codigo: `function ej11() {
    let n1 = Number(document.getElementById("e11a").value);
    let n2 = Number(document.getElementById("e11b").value);
    let n3 = Number(document.getElementById("e11c").value);
    
    const mayor = Math.max(n1, n2, n3);
    document.getElementById("r11").textContent = 
        "El mayor es: " + mayor;
}`,
        funcion: function() {
            const input = document.getElementById('inputField').value;
            const numeros = input.split(',').map(n => parseFloat(n.trim()));
            
            if (numeros.length !== 3 || numeros.some(isNaN)) {
                return "Por favor ingresa 3 números separados por comas";
            }
            
            const mayor = Math.max(...numeros);
            return `🔢 Números: ${numeros.join(', ')}\n🏆 El mayor es: ${mayor}`;
        }
    },
    12: {
        titulo: "12. Comparar dos números y determinar cuál es mayor.",
        codigo: `function ej12() {
    let n1 = Number(document.getElementById("e12a").value);
    let n2 = Number(document.getElementById("e12b").value);
    
    if (n1 > n2) {
        document.getElementById("r12").textContent = 
            "Mayor: " + n1;
    } else if (n2 > n1) {
        document.getElementById("r12").textContent = 
            "Mayor: " + n2;
    } else {
        document.getElementById("r12").textContent = 
            "Son iguales";
    }
}`,
        funcion: function() {
            const input = document.getElementById('inputField').value;
            const numeros = input.split(',').map(n => parseFloat(n.trim()));
            
            if (numeros.length !== 2 || numeros.some(isNaN)) {
                return "Por favor ingresa 2 números separados por coma";
            }
            
            if (numeros[0] > numeros[1]) {
                return `🏆 El mayor es: ${numeros[0]}`;
            } else if (numeros[1] > numeros[0]) {
                return `🏆 El mayor es: ${numeros[1]}`;
            } else {
                return `🤝 Los números son iguales: ${numeros[0]}`;
            }
        }
    },
    13: {
        titulo: "13. Determinar si una letra es vocal.",
        codigo: `function ej13() {
    let letra = document.getElementById("e13").value.toLowerCase();
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    
    if (vocales.includes(letra)) {
        document.getElementById("r13").textContent = 
            "Es una vocal";
    } else {
        document.getElementById("r13").textContent = 
            "No es una vocal";
    }
}`,
        funcion: function() {
            const letra = document.getElementById('inputField').value.toLowerCase().trim();
            
            if (letra.length !== 1) {
                return "Por favor ingresa solo una letra";
            }
            
            const vocales = ['a', 'e', 'i', 'o', 'u'];
            return `📝 Letra: ${letra}\n${vocales.includes(letra) ? '✅ Es una vocal' : '❌ No es una vocal'}`;
        }
    },
    14: {
        titulo: "14. Determinar si un número del 1 al 10 es primo.",
        codigo: `function ej14() {
    let n = Number(document.getElementById("e14").value);
    const primos = [2, 3, 5, 7];
    
    if (n < 1 || n > 10) {
        document.getElementById("r14").textContent = 
            "Número fuera de rango";
    } else if (primos.includes(n)) {
        document.getElementById("r14").textContent = 
            "Es primo";
    } else {
        document.getElementById("r14").textContent = 
            "No es primo";
    }
}`,
        funcion: function() {
            const n = parseInt(document.getElementById('inputField').value);
            
            if (isNaN(n) || n < 1 || n > 10) {
                return "Por favor ingresa un número entre 1 y 10";
            }
            
            const primos = [2, 3, 5, 7];
            return `🔢 Número: ${n}\n${primos.includes(n) ? '✅ Es primo' : '❌ No es primo'}`;
        }
    },
    15: {
        titulo: "15. Convertir centímetros a pulgadas y libras a kilogramos.",
        codigo: `function ej15() {
    let cm = Number(document.getElementById("e15a").value);
    let lb = Number(document.getElementById("e15b").value);
    
    const pulgadas = cm / 2.54;
    const kg = lb * 0.453592;
    
    document.getElementById("r15").textContent = 
        cm + "cm = " + pulgadas.toFixed(2) + "in\\n" +
        lb + "lb = " + kg.toFixed(2) + "kg";
}`,
        funcion: function() {
            const input = document.getElementById('inputField').value;
            const valores = input.split(',').map(n => parseFloat(n.trim()));
            
            if (valores.length !== 2 || valores.some(isNaN)) {
                return "Por favor ingresa: centímetros, libras (ej: 100, 150)";
            }
            
            const cm = valores[0];
            const lb = valores[1];
            const pulgadas = cm / 2.54;
            const kg = lb * 0.453592;
            
            return `📏 ${cm} cm = ${pulgadas.toFixed(2)} pulgadas\n⚖️ ${lb} lb = ${kg.toFixed(2)} kg`;
        }
    },
    16: {
        titulo: "16. Indicar el día de la semana según un número.",
        codigo: `function ej16() {
    let n = Number(document.getElementById("e16").value);
    const dias = ["Lunes", "Martes", "Miércoles", 
                  "Jueves", "Viernes", "Sábado", "Domingo"];
    
    if (n >= 1 && n <= 7) {
        document.getElementById("r16").textContent = 
            "Día: " + dias[n - 1];
    } else {
        document.getElementById("r16").textContent = 
            "Número inválido";
    }
}`,
        funcion: function() {
            const n = parseInt(document.getElementById('inputField').value);
            const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
            
            if (isNaN(n) || n < 1 || n > 7) {
                return "Por favor ingresa un número entre 1 y 7";
            }
            
            return `📅 Número: ${n}\n✅ Día: ${dias[n - 1]}`;
        }
    },
    17: {
        titulo: "17. Calcular la hora dentro de un segundo.",
        codigo: `function ej17() {
    let h = Number(document.getElementById("e17a").value);
    let m = Number(document.getElementById("e17b").value);
    let s = Number(document.getElementById("e17c").value);
    
    s++;
    if (s === 60) {
        s = 0;
        m++;
        if (m === 60) {
            m = 0;
            h++;
            if (h === 24) h = 0;
        }
    }
    
    document.getElementById("r17").textContent = 
        h + ":" + m + ":" + s;
}`,
        funcion: function() {
            const input = document.getElementById('inputField').value;
            const tiempo = input.split(':').map(n => parseInt(n.trim()));
            
            if (tiempo.length !== 3 || tiempo.some(isNaN)) {
                return "Por favor ingresa hora:minuto:segundo (ej: 23:59:59)";
            }
            
            let [h, m, s] = tiempo;
            const original = `${h}:${m}:${s}`;
            
            s++;
            if (s === 60) {
                s = 0;
                m++;
                if (m === 60) {
                    m = 0;
                    h++;
                    if (h === 24) h = 0;
                }
            }
            
            return `⏰ Hora actual: ${original}\n⏱️ Un segundo después: ${h}:${m}:${s}`;
        }
    },
    18: {
        titulo: "18. Venta de CDs vírgenes con precios por cantidad.",
        codigo: `function ej18() {
    let cantidad = Number(document.getElementById("e18").value);
    let precio;
    
    if (cantidad < 10) precio = 10;
    else if (cantidad < 100) precio = 8;
    else if (cantidad < 500) precio = 7;
    else precio = 6;
    
    const total = cantidad * precio;
    const ganancia = total * 0.0825;
    
    document.getElementById("r18").textContent = 
        "Total: $" + total + "\\nGanancia: $" + ganancia.toFixed(2);
}`,
        funcion: function() {
            const cantidad = parseInt(document.getElementById('inputField').value);
            
            if (isNaN(cantidad) || cantidad < 0) {
                return "Por favor ingresa una cantidad válida";
            }
            
            let precio;
            if (cantidad < 10) precio = 10;
            else if (cantidad < 100) precio = 8;
            else if (cantidad < 500) precio = 7;
            else precio = 6;
            
            const total = cantidad * precio;
            const ganancia = total * 0.0825;
            
            return `💿 Cantidad: ${cantidad} CDs\n💵 Precio unitario: $${precio}\n💰 Total cliente: $${total.toFixed(2)}\n💼 Ganancia vendedor: $${ganancia.toFixed(2)}`;
        }
    },
    19: {
        titulo: "19. Calcular pago de empleados en heladería.",
        codigo: `function ej19() {
    let id = Number(document.getElementById("e19a").value);
    let dias = Number(document.getElementById("e19b").value);
    
    const salarios = { 1: 56, 2: 64, 3: 80, 4: 48 };
    
    if (dias > 6) {
        document.getElementById("r19").textContent = 
            "Máximo 6 días";
    } else if (salarios[id]) {
        const total = salarios[id] * dias;
        document.getElementById("r19").textContent = 
            "Total: $" + total;
    } else {
        document.getElementById("r19").textContent = 
            "ID inválido";
    }
}`,
        funcion: function() {
            const input = document.getElementById('inputField').value;
            const valores = input.split(',').map(n => parseInt(n.trim()));
            
            if (valores.length !== 2 || valores.some(isNaN)) {
                return "Por favor ingresa: ID, días (ej: 1, 5)";
            }
            
            const [id, dias] = valores;
            const puestos = {
                1: { nombre: "Cajero", salario: 56 },
                2: { nombre: "Servidor", salario: 64 },
                3: { nombre: "Preparador", salario: 80 },
                4: { nombre: "Mantenimiento", salario: 48 }
            };
            
            if (dias > 6) {
                return "❌ Máximo 6 días permitidos";
            }
            
            if (!puestos[id]) {
                return "❌ ID inválido (1-4)";
            }
            
            const total = puestos[id].salario * dias;
            return `👤 Puesto: ${puestos[id].nombre}\n💵 Salario/día: $${puestos[id].salario}\n📅 Días: ${dias}\n💰 Total: $${total}`;
        }
    },
    20: {
        titulo: "20. Operaciones múltiples con 4 números.",
        codigo: `function ej20() {
    let n1 = Number(document.getElementById("e20a").value);
    let n2 = Number(document.getElementById("e20b").value);
    let n3 = Number(document.getElementById("e20c").value);
    let n4 = Number(document.getElementById("e20d").value);
    
    let pares = 0;
    if (n1 % 2 === 0) pares++;
    if (n2 % 2 === 0) pares++;
    if (n3 % 2 === 0) pares++;
    if (n4 % 2 === 0) pares++;
    
    const mayor = Math.max(n1, n2, n3, n4);
    let resultado = "Pares: " + pares + "\\nMayor: " + mayor;
    
    if (n3 % 2 === 0) {
        resultado += "\\nCuadrado de n2: " + (n2 * n2);
    }
    if (n1 < n4) {
        const media = (n1 + n2 + n3 + n4) / 4;
        resultado += "\\nMedia: " + media;
    }
    if (n2 > n3 && n3 >= 50 && n3 <= 700) {
        const suma = n1 + n2 + n3 + n4;
        resultado += "\\nSuma: " + suma;
    }
    
    document.getElementById("r20").textContent = resultado;
}`,
        funcion: function() {
            const input = document.getElementById('inputField').value;
            const numeros = input.split(',').map(n => parseInt(n.trim()));
            
            if (numeros.length !== 4 || numeros.some(isNaN)) {
                return "Por favor ingresa 4 números separados por comas";
            }
            
            const [n1, n2, n3, n4] = numeros;
            let resultado = [];
            
            let pares = numeros.filter(n => n % 2 === 0).length;
            resultado.push(`📊 Números pares: ${pares}`);
            
            const mayor = Math.max(...numeros);
            resultado.push(`🏆 Mayor: ${mayor}`);
            
            if (n3 % 2 === 0) {
                resultado.push(`✅ Tercero es par. Cuadrado del segundo: ${n2 * n2}`);
            }
            
            if (n1 < n4) {
                const media = (n1 + n2 + n3 + n4) / 4;
                resultado.push(`✅ Primero < Cuarto. Media: ${media}`);
            }
            
            if (n2 > n3 && n3 >= 50 && n3 <= 700) {
                const suma = n1 + n2 + n3 + n4;
                resultado.push(`✅ Condiciones cumplidas. Suma: ${suma}`);
            }
            
            return resultado.join('\n');
        }
    },
    21: {
        titulo: "21. Calcular el factorial de un número.",
        codigo: `function ej21() {
    let n = Number(document.getElementById("e21").value);
    let factorial = 1;
    
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    document.getElementById("r21").textContent = 
        n + "! = " + factorial;
}`,
        funcion: function() {
            const n = parseInt(document.getElementById('inputField').value);
            
            if (isNaN(n) || n < 0) {
                return "Por favor ingresa un número entero positivo";
            }
            
            let factorial = 1;
            for (let i = 1; i <= n; i++) {
                factorial *= i;
            }
            
            return `🔢 Número: ${n}\n✅ ${n}! = ${factorial}`;
        }
    },
    22: {
        titulo: "22. Calcular la suma de los n primeros números.",
        codigo: `function ej22() {
    let n = Number(document.getElementById("e22").value);
    let suma = 0;
    
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    
    document.getElementById("r22").textContent = 
        "Suma: " + suma;
}`,
        funcion: function() {
            const n = parseInt(document.getElementById('inputField').value);
            
            if (isNaN(n) || n < 0) {
                return "Por favor ingresa un número entero positivo";
            }
            
            let suma = 0;
            for (let i = 1; i <= n; i++) {
                suma += i;
            }
            
            return `🔢 N: ${n}\n➕ Suma de 1 a ${n}: ${suma}`;
        }
    },
    23: {
        titulo: "23. Suma de números impares menores o iguales a n.",
        codigo: `function ej23() {
    let n = Number(document.getElementById("e23").value);
    let suma = 0;
    
    for (let i = 1; i <= n; i += 2) {
        suma += i;
    }
    
    document.getElementById("r23").textContent = 
        "Suma impares: " + suma;
}`,
        funcion: function() {
            const n = parseInt(document.getElementById('inputField').value);
            
            if (isNaN(n) || n < 0) {
                return "Por favor ingresa un número entero positivo";
            }
            
            let suma = 0;
            const impares = [];
            for (let i = 1; i <= n; i += 2) {
                suma += i;
                impares.push(i);
            }
            
            return `🔢 N: ${n}\n📋 Impares: ${impares.join(', ')}\n➕ Suma: ${suma}`;
        }
    },
    24: {
        titulo: "24. Suma de todos los números pares hasta 1000.",
        codigo: `function ej24() {
    let suma = 0;
    
    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }
    
    document.getElementById("r24").textContent = 
        "Suma pares hasta 1000: " + suma;
}`,
        funcion: function() {
            let suma = 0;
            for (let i = 2; i <= 1000; i += 2) {
                suma += i;
            }
            
            return `🔢 Rango: 2 a 1000\n➕ Suma de todos los pares: ${suma}`;
        }
    },
    25: {
        titulo: "25. Factorial recursivo.",
        codigo: `function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function ej25() {
    let n = Number(document.getElementById("e25").value);
    const resultado = factorial(n);
    
    document.getElementById("r25").textContent = 
        n + "! = " + resultado;
}`,
        funcion: function() {
            const n = parseInt(document.getElementById('inputField').value);
            
            if (isNaN(n) || n < 0) {
                return "Por favor ingresa un número entero positivo";
            }
            
            function factorialRec(num) {
                if (num === 0 || num === 1) return 1;
                return num * factorialRec(num - 1);
            }
            
            const resultado = factorialRec(n);
            return `🔢 Número: ${n}\n🔄 Método: Recursivo\n✅ ${n}! = ${resultado}`;
        }
    },
    26: {
        titulo: "26. Calcular resto y cociente por restas sucesivas.",
        codigo: `function ej26() {
    let dividendo = Number(document.getElementById("e26a").value);
    let divisor = Number(document.getElementById("e26b").value);
    
    let cociente = 0;
    let resto = dividendo;
    
    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }
    
    document.getElementById("r26").textContent = 
        "Cociente: " + cociente + "\\nResto: " + resto;
}`,
        funcion: function() {
            const input = document.getElementById('inputField').value;
            const valores = input.split(',').map(n => parseInt(n.trim()));
            
            if (valores.length !== 2 || valores.some(isNaN)) {
                return "Por favor ingresa: dividendo, divisor (ej: 17, 3)";
            }
            
            let [dividendo, divisor] = valores;
            
            if (divisor === 0) {
                return "❌ No se puede dividir por cero";
            }
            
            let cociente = 0;
            let resto = dividendo;
            
            while (resto >= divisor) {
                resto -= divisor;
                cociente++;
            }
            
            return `🔢 ${dividendo} ÷ ${divisor}\n📊 Cociente: ${cociente}\n📊 Resto: ${resto}`;
        }
    },
    27: {
        titulo: "27. Media de lista indefinida de números positivos.",
        codigo: `function ej27() {
    let suma = 0;
    let contador = 0;
    let numero;
    
    do {
        numero = Number(prompt("Número (negativo para terminar):"));
        if (numero >= 0) {
            suma += numero;
            contador++;
        }
    } while (numero >= 0);
    
    const media = contador > 0 ? suma / contador : 0;
    document.getElementById("r27").textContent = 
        "Media: " + media.toFixed(2);
}`,
        funcion: function() {
            let suma = 0;
            let contador = 0;
            let numero;
            const numeros = [];
            
            do {
                numero = prompt(`Ingrese un número (negativo para terminar)\nNúmeros ingresados: ${contador}`);
                if (numero === null) break;
                numero = parseFloat(numero);
                
                if (numero >= 0) {
                    suma += numero;
                    contador++;
                    numeros.push(numero);
                }
            } while (numero >= 0);
            
            if (contador === 0) {
                return "No se ingresaron números positivos";
            }
            
            const media = suma / contador;
            return `📊 Cantidad: ${contador}\n📋 Números: ${numeros.join(', ')}\n➕ Suma: ${suma.toFixed(2)}\n📈 Media: ${media.toFixed(2)}`;
        }
    },
    28: {
        titulo: "28. Suma de los primeros 100 números con do-while.",
        codigo: `function ej28() {
    let suma = 0;
    let i = 1;
    
    do {
        suma += i;
        i++;
    } while (i <= 100);
    
    document.getElementById("r28").textContent = 
        "Suma (do-while): " + suma;
}`,
        funcion: function() {
            let suma = 0;
            let i = 1;
            
            do {
                suma += i;
                i++;
            } while (i <= 100);
            
            return `🔄 Método: do-while\n🔢 Rango: 1-100\n➕ Suma: ${suma}`;
        }
    },
    29: {
        titulo: "29. Suma de los primeros 100 números con while.",
        codigo: `function ej29() {
    let suma = 0;
    let i = 1;
    
    while (i <= 100) {
        suma += i;
        i++;
    }
    
    document.getElementById("r29").textContent = 
        "Suma (while): " + suma;
}`,
        funcion: function() {
            let suma = 0;
            let i = 1;
            
            while (i <= 100) {
                suma += i;
                i++;
            }
            
            return `🔄 Método: while\n🔢 Rango: 1-100\n➕ Suma: ${suma}`;
        }
    },
    30: {
        titulo: "30. Suma de los primeros 100 números con for.",
        codigo: `function ej30() {
    let suma = 0;
    
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    
    document.getElementById("r30").textContent = 
        "Suma (for): " + suma;
}`,
        funcion: function() {
            let suma = 0;
            
            for (let i = 1; i <= 100; i++) {
                suma += i;
            }
            
            return `🔄 Método: for\n🔢 Rango: 1-100\n➕ Suma: ${suma}`;
        }
    },
    31: {
        titulo: "31. Media de números pares e impares (10 números).",
        codigo: `function ej31() {
    let sumaPares = 0, sumaImpares = 0;
    let contPares = 0, contImpares = 0;
    
    for (let i = 1; i <= 10; i++) {
        const num = Number(prompt("Número " + i + ":"));
        
        if (num % 2 === 0) {
            sumaPares += num;
            contPares++;
        } else {
            sumaImpares += num;
            contImpares++;
        }
    }
    
    const mediaPares = contPares > 0 ? sumaPares / contPares : 0;
    const mediaImpares = contImpares > 0 ? sumaImpares / contImpares : 0;
    
    document.getElementById("r31").textContent = 
        "Media pares: " + mediaPares.toFixed(2) + 
        "\\nMedia impares: " + mediaImpares.toFixed(2);
}`,
        funcion: function() {
            let sumaPares = 0, sumaImpares = 0;
            let contPares = 0, contImpares = 0;
            const pares = [], impares = [];
            
            for (let i = 1; i <= 10; i++) {
                const num = prompt(`Ingrese el número ${i} de 10:`);
                if (num === null) return "Operación cancelada";
                
                const numero = parseFloat(num);
                if (isNaN(numero)) return "Número inválido ingresado";
                
                if (numero % 2 === 0) {
                    sumaPares += numero;
                    contPares++;
                    pares.push(numero);
                } else {
                    sumaImpares += numero;
                    contImpares++;
                    impares.push(numero);
                }
            }
            
            const mediaPares = contPares > 0 ? (sumaPares / contPares).toFixed(2) : 0;
            const mediaImpares = contImpares > 0 ? (sumaImpares / contImpares).toFixed(2) : 0;
            
            return `📊 Pares (${contPares}): ${pares.join(', ')}\n📈 Media pares: ${mediaPares}\n📊 Impares (${contImpares}): ${impares.join(', ')}\n📈 Media impares: ${mediaImpares}`;
        }
    },
    32: {
        titulo: "32. Ciudad con mayor población.",
        codigo: `function ej32() {
    let mayorPoblacion = 0;
    let ciudadMayor = "";
    
    for (let p = 1; p <= 3; p++) {
        for (let c = 1; c <= 11; c++) {
            const nombre = prompt("Provincia " + p + " - Ciudad " + c + ":");
            const pob = Number(prompt("Población de " + nombre + ":"));
            
            if (pob > mayorPoblacion) {
                mayorPoblacion = pob;
                ciudadMayor = nombre;
            }
        }
    }
    
    document.getElementById("r32").textContent = 
        "Mayor población: " + ciudadMayor + 
        " (" + mayorPoblacion + " hab.)";
}`,
        funcion: function() {
            let mayorPoblacion = 0;
            let ciudadMayor = "";
            const ciudades = [];
            
            for (let p = 1; p <= 3; p++) {
                for (let c = 1; c <= 11; c++) {
                    const nombre = prompt(`Provincia ${p} - Ingrese nombre de ciudad ${c}:`);
                    if (nombre === null) return "Operación cancelada";
                    
                    const pob = prompt(`Población de ${nombre}:`);
                    if (pob === null) return "Operación cancelada";
                    
                    const poblacion = parseInt(pob);
                    if (isNaN(poblacion)) return "Población inválida";
                    
                    ciudades.push({ nombre, poblacion });
                    
                    if (poblacion > mayorPoblacion) {
                        mayorPoblacion = poblacion;
                        ciudadMayor = nombre;
                    }
                }
            }
            
            return `🏆 Ciudad con mayor población: ${ciudadMayor}\n👥 Población: ${mayorPoblacion.toLocaleString()} habitantes\n📊 Total ciudades: ${ciudades.length}`;
        }
    },
    33: {
        titulo: "33. Permitir al usuario continuar con el programa.",
        codigo: `function ej33() {
    let continuar;
    let veces = 0;
    
    do {
        veces++;
        alert("Ejecutando programa... vez " + veces);
        continuar = prompt("¿Continuar? (s/n):").toLowerCase();
    } while (continuar === 's');
    
    document.getElementById("r33").textContent = 
        "Programa ejecutado " + veces + " veces";
}`,
        funcion: function() {
            let continuar;
            let veces = 0;
            
            do {
                veces++;
                alert(`✅ Programa ejecutado ${veces} ${veces === 1 ? 'vez' : 'veces'}`);
                continuar = prompt("¿Desea continuar? (s/n):").toLowerCase();
            } while (continuar === 's' || continuar === 'si' || continuar === 'sí');
            
            return `🔄 El programa se ejecutó ${veces} ${veces === 1 ? 'vez' : 'veces'}\n✅ Programa finalizado`;
        }
    },
    34: {
        titulo: "34. Tablas de multiplicar del 1 al 9.",
        codigo: `function ej34() {
    let resultado = "";
    
    for (let i = 1; i <= 9; i++) {
        resultado += "Tabla del " + i + ":\\n";
        for (let j = 1; j <= 10; j++) {
            resultado += i + " × " + j + " = " + (i * j) + "\\n";
        }
        resultado += "\\n";
    }
    
    document.getElementById("r34").textContent = resultado;
}`,
        funcion: function() {
            let resultado = [];
            
            for (let i = 1; i <= 9; i++) {
                resultado.push(`\n📊 Tabla del ${i}:`);
                for (let j = 1; j <= 10; j++) {
                    resultado.push(`${i} × ${j} = ${i * j}`);
                }
            }
            
            return resultado.join('\n');
        }
    },
    35: {
        titulo: "35. Mayor y menor de 20 números.",
        codigo: `function ej35() {
    let mayor = -Infinity;
    let menor = Infinity;
    
    for (let i = 1; i <= 20; i++) {
        const num = Number(prompt("Número " + i + ":"));
        if (num > mayor) mayor = num;
        if (num < menor) menor = num;
    }
    
    document.getElementById("r35").textContent = 
        "Mayor: " + mayor + "\\nMenor: " + menor;
}`,
        funcion: function() {
            let mayor = -Infinity;
            let menor = Infinity;
            const numeros = [];
            
            for (let i = 1; i <= 20; i++) {
                const num = prompt(`Ingrese el número ${i} de 20:`);
                if (num === null) return "Operación cancelada";
                
                const numero = parseFloat(num);
                if (isNaN(numero)) return "Número inválido";
                
                numeros.push(numero);
                if (numero > mayor) mayor = numero;
                if (numero < menor) menor = numero;
            }
            
            return `📊 Números: ${numeros.join(', ')}\n🏆 Mayor: ${mayor}\n📉 Menor: ${menor}\n📏 Diferencia: ${(mayor - menor).toFixed(2)}`;
        }
    },
    36: {
        titulo: "36. Serie de Fibonacci.",
        codigo: `function ej36() {
    const n = Number(document.getElementById("e36").value);
    let a = 0, b = 1;
    let resultado = a.toString();
    
    for (let i = 1; i < n; i++) {
        resultado += ", " + b;
        const temp = a + b;
        a = b;
        b = temp;
    }
    
    document.getElementById("r36").textContent = 
        "Fibonacci: " + resultado;
}`,
        funcion: function() {
            const n = parseInt(document.getElementById('inputField').value);
            
            if (isNaN(n) || n < 1) {
                return "Por favor ingresa un número mayor a 0";
            }
            
            let a = 0, b = 1;
            const fibonacci = [a];
            
            for (let i = 1; i < n; i++) {
                fibonacci.push(b);
                const temp = a + b;
                a = b;
                b = temp;
            }
            
            return `🔢 Términos: ${n}\n📊 Serie: ${fibonacci.join(', ')}`;
        }
    },
    37: {
        titulo: "37. M.C.D. con algoritmo de Euclides.",
        codigo: `function ej37() {
    let a = Number(document.getElementById("e37a").value);
    let b = Number(document.getElementById("e37b").value);
    
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    
    document.getElementById("r37").textContent = 
        "M.C.D.: " + a;
}`,
        funcion: function() {
            const input = document.getElementById('inputField').value;
            const valores = input.split(',').map(n => parseInt(n.trim()));
            
            if (valores.length !== 2 || valores.some(isNaN)) {
                return "Por favor ingresa dos números separados por coma";
            }
            
            let [a, b] = valores;
            const originalA = a;
            const originalB = b;
            
            while (b !== 0) {
                const temp = b;
                b = a % b;
                a = temp;
            }
            
            return `🔢 Números: ${originalA}, ${originalB}\n✅ M.C.D.: ${a}`;
        }
    },
    38: {
        titulo: "38. Determinar si un número es perfecto.",
        codigo: `function ej38() {
    const n = Number(document.getElementById("e38").value);
    let suma = 0;
    
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            suma += i;
        }
    }
    
    if (suma === n) {
        document.getElementById("r38").textContent = 
            n + " es perfecto";
    } else {
        document.getElementById("r38").textContent = 
            n + " NO es perfecto";
    }
}`,
        funcion: function() {
            const n = parseInt(document.getElementById('inputField').value);
            
            if (isNaN(n) || n < 1) {
                return "Por favor ingresa un número entero positivo";
            }
            
            let suma = 0;
            const divisores = [];
            
            for (let i = 1; i < n; i++) {
                if (n % i === 0) {
                    suma += i;
                    divisores.push(i);
                }
            }
            
            const esPerfecto = suma === n;
            return `🔢 Número: ${n}\n📊 Divisores: ${divisores.join(', ')}\n➕ Suma: ${suma}\n${esPerfecto ? '✅ ES un número perfecto' : '❌ NO es un número perfecto'}`;
        }
    },
    39: {
        titulo: "39. Aproximación de PI (Gregory-Leibniz).",
        codigo: `function ej39() {
    const iter = Number(document.getElementById("e39").value);
    let pi = 0;
    
    for (let i = 0; i < iter; i++) {
        const termino = 4 / (2 * i + 1);
        if (i % 2 === 0) {
            pi += termino;
        } else {
            pi -= termino;
        }
    }
    
    document.getElementById("r39").textContent = 
        "PI ≈ " + pi + "\\nPI real: " + Math.PI;
}`,
        funcion: function() {
            const iter = parseInt(document.getElementById('inputField').value);
            
            if (isNaN(iter) || iter < 1) {
                return "Por favor ingresa un número de iteraciones válido";
            }
            
            let pi = 0;
            for (let i = 0; i < iter; i++) {
                const termino = 4 / (2 * i + 1);
                if (i % 2 === 0) {
                    pi += termino;
                } else {
                    pi -= termino;
                }
            }
            
            return `🔢 Iteraciones: ${iter}\n📊 PI aproximado: ${pi}\n🎯 PI real: ${Math.PI}\n📏 Diferencia: ${Math.abs(Math.PI - pi).toFixed(10)}`;
        }
    },
    40: {
        titulo: "40. Aproximación de PI (Nilakantha).",
        codigo: `function ej40() {
    const iter = Number(document.getElementById("e40").value);
    let pi = 3;
    
    for (let i = 1; i <= iter; i++) {
        const denom = (2 * i) * (2 * i + 1) * (2 * i + 2);
        const termino = 4 / denom;
        
        if (i % 2 === 1) {
            pi += termino;
        } else {
            pi -= termino;
        }
    }
    
    document.getElementById("r40").textContent = 
        "PI ≈ " + pi + "\\nPI real: " + Math.PI;
}`,
        funcion: function() {
            const iter = parseInt(document.getElementById('inputField').value);
            
            if (isNaN(iter) || iter < 1) {
                return "Por favor ingresa un número de iteraciones válido";
            }
            
            let pi = 3;
            for (let i = 1; i <= iter; i++) {
                const denom = (2 * i) * (2 * i + 1) * (2 * i + 2);
                const termino = 4 / denom;
                
                if (i % 2 === 1) {
                    pi += termino;
                } else {
                    pi -= termino;
                }
            }
            
            return `🔢 Iteraciones: ${iter}\n📊 PI aproximado: ${pi}\n🎯 PI real: ${Math.PI}\n📏 Diferencia: ${Math.abs(Math.PI - pi).toFixed(10)}`;
        }
    }
};

// Función para mostrar un ejercicio
function mostrarEjercicio(numero) {
    ejercicioActual = numero;
    const ejercicio = ejercicios[numero];
    
    // Actualizar título
    document.getElementById('exerciseTitle').textContent = ejercicio.titulo;
    
    // Actualizar código
    document.getElementById('codeDisplay').textContent = ejercicio.codigo;
    
    // Mostrar sección de input y ocultar resultado
    document.getElementById('inputSection').style.display = 'flex';
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('inputField').value = '';
    document.getElementById('inputField').focus();
    
    // Actualizar botones activos
    document.querySelectorAll('.exercise-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Función para ejecutar el ejercicio actual
function ejecutarEjercicioActual() {
    if (!ejercicioActual) {
        alert('Por favor selecciona un ejercicio primero');
        return;
    }
    
    const ejercicio = ejercicios[ejercicioActual];
    const resultado = ejercicio.funcion();
    
    // Mostrar resultado
    const resultSection = document.getElementById('resultSection');
    const resultOutput = document.getElementById('resultOutput');
    
    resultOutput.innerHTML = resultado.split('\n').map(line => 
        `<p>${line}</p>`
    ).join('');
    
    resultSection.style.display = 'block';
}

// Función para limpiar todo
function limpiarTodo() {
    ejercicioActual = null;
    document.getElementById('exerciseTitle').textContent = 'Selecciona un ejercicio';
    document.getElementById('codeDisplay').textContent = '// Selecciona un ejercicio del menú lateral para ver su código';
    document.getElementById('inputSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('inputField').value = '';
    
    document.querySelectorAll('.exercise-btn').forEach(btn => {
        btn.classList.remove('active');
    });
}

// Permitir ejecutar con Enter
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inputField').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            ejecutarEjercicioActual();
        }
    });
});

// Mensaje de bienvenida
console.log("%c🚀 Hackaton 03 - 40 Ejercicios de JavaScript", "color: #2563eb; font-size: 24px; font-weight: bold;");
console.log("%cSelecciona un ejercicio del menú lateral para comenzar", "color: #6b7280; font-size: 14px;");
