  function ejercicio01() {
    const numeroUsuario = parseInt(prompt("Escribe tu numero"), 10);

    if (numeroUsuario > 99 && numeroUsuario < 1000) {
      alert("Si tiene 3 digitos");
    } else {
      alert("NO tiene 3 digitos");
    }
  }

  function ejercicio02(){
    const numero = parseInt (prompt ("Escribe tu numero"), 10);

    if (numero > 0){
        alert("Tu numero no es negativo");
    } else {
        alert("Tu numero es negativo");
      }

  }

  

function ejercicio03(){
    const numero = parseInt (prompt("Escribe tu numero"), 10);

    if (numero % 10 === 4){
        alert ("Tu numero termina en 4");
    }else {
        alert ("Tu numero no termina en 4");
    }

}

function ejercicio04() {
    const numero01 = parseInt(prompt("Ingresa primero numero"), 10);
    const numero02 = parseInt(prompt("Ingresa segundo numero"), 10);
    const numero03 = parseInt(prompt("Ingresar tercer numero"), 10);

    let mensaje = "";

    if (numero01 <= numero02 && numero01 <= numero03) {
      if (numero02 <= numero03) {
        mensaje = "El orden es " + numero03 + ", " + numero02 + ", " + numero01;
      } else {
        mensaje = "El orden es " + numero02 + ", " + numero03 + ", " + numero01;
      }
    }

    if (numero02 <= numero01 && numero02 <= numero03) {
      if (numero01 <= numero03) {
        mensaje = "El orden es " + numero03 + ", " + numero01 + ", " + numero02;
      } else {
        mensaje = "El orden es " + numero01 + ", " + numero03 + ", " + numero02;
      }
    }

    if (numero03 <= numero01 && numero03 <= numero02) {
      if (numero02 <= numero01) {
        mensaje = "El orden es " + numero01 + ", " + numero02 + ", " + numero03;
      } else {
        mensaje = "El orden es " + numero02 + ", " + numero01 + ", " + numero03;
      }
    }

    document.getElementById("resultado").textContent = mensaje;
  }


function ejercicio05() {
    const unidad = 80;
    const cantidad = parseInt(prompt("Cuantas zapatillas desea"), 10);

    const total = unidad * cantidad;

    let porcentaje = 0;

    if (cantidad >= 30) {
      porcentaje = 40;
    } else if (cantidad >= 20 && cantidad <= 29) {
      porcentaje = 20;
    } else if (cantidad >= 10) {
      porcentaje = 10;
    } else {
      porcentaje = 0;
    }

    const descuento = total * (porcentaje / 100);
    const totalfinal = total - descuento;

    document.getElementById("resultado05").textContent =
      "Total de pagar: $ " + totalfinal;

}


function ejercicio06() {
    const horas = parseFloat(prompt("Ingresa las horas trabajadas en la semana"));
    let sueldo = 0;

    if (horas <= 40) {
      sueldo = horas * 20;
    } else {
      const horasNormales = 40;
      const horasExtra = horas - 40;
      sueldo = (horasNormales * 20) + (horasExtra * 25);
    }

    document.getElementById("resultado06").textContent =
      "Tu sueldo semanal es: $" + sueldo;
}



  function ejercicio07() {
  const m = prompt("Indica tu tipo de membresía (a, b o c)")
    .trim()
    .toLowerCase();

  let n = 0;

  if (m === "a") {
    n = 10;
  } else if (m === "b") {
    n = 15;
  } else if (m === "c") {
    n = 20;
  } 

  document.getElementById("resultado07").textContent =
    "Su descuento de membresía es " + n + "%";
}



function ejercicio08() {
  const n1 = parseFloat (prompt ("Ingresar su primera nota"));
  const n2 = parseFloat (prompt ("Ingresar su segunda nota"));
  const n3 = parseFloat (prompt ("Ingresar su tercera nota"));

let np = n1 + n2 + n3
let nf = np / 3


if (nf >= 10.5){
  men = "Usted a sido aprobado con " + nf
} else {
  men = "Usted a sido desaprobado con " + nf
}

document.getElementById("resultado08").textContent = men
}


function ejercicio09(){

  const s = parseFloat (prompt("Ingresar su sueldo"));
let a = 0;

if (s > 2000){
   a = 5;
}else{
   a = 10;
}

const ap = s * (a / 100);
const sf = ap + s;

document.getElementById("resultado09").textContent =
"Su sueldo total es " + sf.toFixed(2);
}


function ejercicio10(){
  const n = parseFloat(prompt("Ingresa tu numero"));

  if (n % 2 === 0){
  document.getElementById("resultado10").textContent =
  "Tu numero " + n + " es par"
    }  else {
  document.getElementById("resultado10").textContent =
  "Tu numero " + n + " es impar"
    }

}

function ejercicio11(){
  const n1 = parseFloat(prompt("Ingresa tu primer numero"), 10);
  const n2 = parseFloat(prompt("Ingresa tu segundo numero"), 10);
  const n3 = parseFloat(prompt("Ingresa tu tercera numero"), 10);

let m = n1;

if (n2 > m){
  m = n2
} 
if (n3 > m) {
  m = n3
}

document.getElementById("resultado11").textContent =
"Tu numero mayor es " + m;

}


function ejercicio12(){
  const m1 = parseFloat(prompt("Ingresa tu primer numero"), 10);
  const m2 = parseFloat(prompt("Ingresa tu segundo numero"), 10);

let m = m1

if (m2 > m){
  m = m2
}

document.getElementById("resultado12").textContent =
"Tu numero mayor es " + m;

}

function ejercicio13() {
  let letra = prompt("Escribe tu letra");
  letra = letra.trim().toUpperCase();

  switch (letra) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
      document.getElementById("resultado13").textContent =
        "Tu letra si es una vocal";
      break;
    default:
      document.getElementById("resultado13").textContent =
        "Tu letra no es vocal";
      break;
  }
}

function ejercicio14(){
  const n = parseFloat (prompt("Ingresa un numerp positivo del 1 al 10"))

  if (n < 1 || n > 10){
    document.getElementById("resultado14").textContent =
    "Error debe ingresar el numero entre 1 y 10"

  } else if ( n === 2 || n === 3 || n === 5 || n === 7){
    document.getElementById("resultado14").textContent =
    "Tu numero es primo"
  } else {
    document.getElementById("resultado14").textContent = 
    "Tu numero no es primo"
  }
}

function ejercicio15() {
  const cm = parseFloat(prompt("Ingrese la medida en centimetros:"));
  const libras = parseFloat(prompt("Ingrese el peso en libras:"));

  const pulgadas = cm / 2.54;
  const kilos = libras * 0.453592;

  document.getElementById("resultado15").textContent =
    cm + " cm equivalen a " + pulgadas.toFixed(2) + " pulgadas. " +
    libras + " libras equivalen a " + kilos.toFixed(2) + " kilogramos.";
}

function ejercicio16() {
  const n = parseInt(prompt("Ingrese un numero del 1 al 7:"), 10);
  let dia = "";

  switch (n) {
    case 1:
      dia = "Lunes";
      break;
    case 2:
      dia = "Martes";
      break;
    case 3:
      dia = "Miercoles";
      break;
    case 4:
      dia = "Jueves";
      break;
    case 5:
      dia = "Viernes";
      break;
    case 6:
      dia = "Sabado";
      break;
    case 7:
      dia = "Domingo";
      break;
    default:
      dia = "";
      break;
  }

  if (dia !== "") {
    document.getElementById("resultado16").textContent =
      "El dia correspondiente es: " + dia;
  } else {
    document.getElementById("resultado16").textContent =
      "Error: el numero debe estar entre 1 y 7.";
  }
}


function ejercicio17() {
  let h = parseInt(prompt("Ingrese la hora:"), 10);
  let m = parseInt(prompt("Ingrese los minutos:"), 10);
  let s = parseInt(prompt("Ingrese los segundos:"), 10);

  s = s + 1;

  if (s === 60) {
    s = 0;
    m = m + 1;
  }

  if (m === 60) {
    m = 0;
    h = h + 1;
  }

  if (h === 24) {
    h = 0;
  }

  const hh = String(h).padStart(2, "0");
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");

  document.getElementById("resultado17").textContent =
    "Hora dentro de un segundo: " + hh + ":" + mm + ":" + ss;
}

function ejercicio18() {
  const cantidad = parseInt(prompt("Ingrese la cantidad de CDs a comprar:"), 10);
  let precioUnitario = 0;

  if (cantidad >= 1 && cantidad <= 9) {
    precioUnitario = 10;
  } else if (cantidad >= 10 && cantidad <= 99) {
    precioUnitario = 8;
  } else if (cantidad >= 100 && cantidad <= 499) {
    precioUnitario = 7;
  } else if (cantidad >= 500) {
    precioUnitario = 6;
  }

  const total = cantidad * precioUnitario;
  const ganancia = total * 0.0825;

  document.getElementById("resultado18").textContent =
    "Precio unitario: $" + precioUnitario.toFixed(2) +
    " | Total a pagar: $" + total.toFixed(2) +
    " | Ganancia del vendedor: $" + ganancia.toFixed(2);
}

function ejercicio19() {
  const id = parseInt(prompt("Ingrese el ID del empleado (1 a 4):"), 10);
  const dias = parseInt(prompt("Ingrese la cantidad de dias trabajados (maximo 6):"), 10);

  let salarioDiario = 0;

  if (dias < 0 || dias > 6) {
    document.getElementById("resultado19").textContent =
      "Error: cantidad de dias invalida";
    return;
  }

  switch (id) {
    case 1:
      salarioDiario = 56;
      break;
    case 2:
      salarioDiario = 64;
      break;
    case 3:
      salarioDiario = 80;
      break;
    case 4:
      salarioDiario = 48;
      break;
    default:
      document.getElementById("resultado19").textContent =
        "Error: ID de empleado invalido";
      return;
  }

  const pagoTotal = salarioDiario * dias;

  document.getElementById("resultado19").textContent =
    "El pago total al empleado es: $" + pagoTotal.toFixed(2);
}

function ejercicio20() {
  const n1 = parseInt(prompt("Ingrese el primer numero:"), 10);
  const n2 = parseInt(prompt("Ingrese el segundo numero:"), 10);
  const n3 = parseInt(prompt("Ingrese el tercer numero:"), 10);
  const n4 = parseInt(prompt("Ingrese el cuarto numero:"), 10);

  let pares = 0;
  if (n1 % 2 === 0) pares++;
  if (n2 % 2 === 0) pares++;
  if (n3 % 2 === 0) pares++;
  if (n4 % 2 === 0) pares++;

  let mayor = n1;
  if (n2 > mayor) mayor = n2;
  if (n3 > mayor) mayor = n3;
  if (n4 > mayor) mayor = n4;

  let mensaje = "";
  mensaje += "Cantidad de numeros pares: " + pares + " | ";
  mensaje += "El mayor de los numeros es: " + mayor;

  if (n3 % 2 === 0) {
    mensaje += " | El cuadrado del segundo numero es: " + (n2 * n2);
  }

  if (n1 < n4) {
    const media = (n1 + n2 + n3 + n4) / 4;
    mensaje += " | La media de los 4 numeros es: " + media.toFixed(2);
  }

  if (n2 > n3 && n3 >= 50 && n3 <= 700) {
    const suma = n1 + n2 + n3 + n4;
    mensaje += " | La suma de los 4 numeros es: " + suma;
  }

  document.getElementById("resultado20").textContent = mensaje;
}


function ejercicio21() {
  const n = parseInt(prompt("Ingrese un numero entero positivo:"), 10);

  if (n < 0 || Number.isNaN(n)) {
    document.getElementById("resultado21").textContent =
      "Error: debe ingresar un numero entero positivo.";
    return;
  }

  let factorial = 1;
  let i = 1;

  while (i <= n) {
    factorial = factorial * i;
    i = i + 1;
  }

  document.getElementById("resultado21").textContent =
    "El factorial de " + n + " es: " + factorial;
}


function ejercicio22() {
  const n = parseInt(prompt("Ingrese un numero entero positivo:"), 10);

  if (n < 1 || Number.isNaN(n)) {
    document.getElementById("resultado22").textContent =
      "Error: debe ingresar un numero entero positivo mayor o igual a 1.";
    return;
  }

  let suma = 0;

  for (let i = 1; i <= n; i++) {
    suma += i;
  }

  document.getElementById("resultado22").textContent =
    "La suma de los " + n + " primeros numeros es: " + suma;
}

function ejercicio23() {
  const n = parseInt(prompt("Ingrese un numero entero positivo:"), 10);

  if (n < 1 || Number.isNaN(n)) {
    document.getElementById("resultado23").textContent =
      "Error: debe ingresar un numero entero positivo mayor o igual a 1.";
    return;
  }

  let suma = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      suma += i;
    }
  }

  document.getElementById("resultado23").textContent =
    "La suma de los numeros impares menores o iguales a " + n + " es: " + suma;
}

function ejercicio24() {
  let suma = 0;

  for (let i = 2; i <= 1000; i += 2) {
    suma += i;
  }

  document.getElementById("resultado24").textContent =
    "La suma de los numeros pares hasta 1000 es: " + suma;
}

function ejercicio25() {
  const n = parseInt(prompt("Ingrese un numero entero positivo:"), 10);

  if (Number.isNaN(n) || n < 0) {
    document.getElementById("resultado25").textContent =
      "Error: ingrese un entero positivo.";
    return;
  }

  let factorial = 1;

  for (let i = n; i >= 1; i--) {
    factorial *= i;
  }

  document.getElementById("resultado25").textContent =
    "El factorial de " + n + " es: " + factorial;
}

function ejercicio26() {
  const dividendo = parseInt(prompt("Ingrese el dividendo:"), 10);
  const divisor = parseInt(prompt("Ingrese el divisor:"), 10);

  if (Number.isNaN(dividendo) || Number.isNaN(divisor)) {
    document.getElementById("resultado26").textContent =
      "Error: ingrese numeros enteros validos";
    return;
  }

  if (divisor <= 0) {
    document.getElementById("resultado26").textContent =
      "Error: el divisor debe ser mayor que 0";
    return;
  }

  let cociente = 0;
  let resto = dividendo;

  while (resto >= divisor) {
    resto = resto - divisor;
    cociente = cociente + 1;
  }

  document.getElementById("resultado26").textContent =
    "Cociente: " + cociente + " | Resto: " + resto;
}

function ejercicio27() {
  let suma = 0;
  let contador = 0;

  let num = parseFloat(
    prompt("Ingrese numeros positivos (un numero negativo para terminar):")
  );

  while (num >= 0) {
    suma += num;
    contador++;
    num = parseFloat(prompt("Ingrese otro numero (negativo para terminar):"));
  }

  if (contador > 0) {
    const media = suma / contador;
    document.getElementById("resultado27").textContent =
      "La media de los numeros ingresados es: " + media.toFixed(2);
  } else {
    document.getElementById("resultado27").textContent =
      "No se ingresaron numeros positivos";
  }
}

function ejercicio28() {
  let i = 1;
  let suma = 0;

  do {
    suma += i;
    i++;
  } while (i <= 100);

  document.getElementById("resultado28").textContent =
    "La suma de los primeros 100 numeros es: " + suma;
}

function ejercicio29() {
  let i = 1;
  let suma = 0;

  while (i <= 100) {
    suma += i;
    i++;
  }

  document.getElementById("resultado29").textContent =
    "La suma de los primeros 100 numeros es: " + suma;
}

function ejercicio30() {
  let suma = 0;

  for (let i = 1; i <= 100; i++) {
    suma += i;
  }

  document.getElementById("resultado30").textContent =
    "La suma de los primeros 100 numeros es: " + suma;
}

function ejercicio31() {
  let sumaPares = 0;
  let sumaImpares = 0;
  let contPares = 0;
  let contImpares = 0;

  for (let i = 1; i <= 10; i++) {
    const n = parseInt(prompt("Ingrese el numero " + i + ":"), 10);

    if (n % 2 === 0) {
      sumaPares += n;
      contPares++;
    } else {
      sumaImpares += n;
      contImpares++;
    }
  }

  const mediaPares = contPares > 0 ? (sumaPares / contPares).toFixed(2) : "No hay pares";
  const mediaImpares = contImpares > 0 ? (sumaImpares / contImpares).toFixed(2) : "No hay impares";

  document.getElementById("resultado31").textContent =
    "Media pares: " + mediaPares + " | Media impares: " + mediaImpares;
}

function ejercicio32() {
  let mayorPoblacion = -1;
  let ciudadMayor = "";
  let provinciaMayor = "";

  for (let p = 1; p <= 3; p++) {
    const cantCiudades = parseInt(
      prompt("Ingrese cuantas ciudades tiene la provincia " + p + ":"), 10
    );

    for (let c = 1; c <= cantCiudades; c++) {
      const nombreCiudad = prompt("Nombre de la ciudad " + c + " de la provincia " + p + ":");
      const poblacion = parseInt(prompt("Poblacion de " + nombreCiudad + ":"), 10);

      if (poblacion > mayorPoblacion) {
        mayorPoblacion = poblacion;
        ciudadMayor = nombreCiudad;
        provinciaMayor = "Provincia " + p;
      }
    }
  }

  document.getElementById("resultado32").textContent =
    "La ciudad con mas poblacion es " + ciudadMayor +
    " (" + provinciaMayor + ") con " + mayorPoblacion + " habitantes.";
}

function ejercicio33() {
  let opcion = "";
  let contador = 0;

  do {
    contador++;
    opcion = prompt(
      "Ejecucion #" + contador + ". Desea continuar? (S/N)"
    ).trim().toUpperCase();
  } while (opcion === "S");

  document.getElementById("resultado33").textContent =
    "Programa finalizado por el usuario.";
}

function ejercicio34() {
  let salida = "";

  for (let n = 1; n <= 9; n++) {
    salida += "Tabla del " + n + ":\n";
    for (let i = 1; i <= 10; i++) {
      salida += n + " x " + i + " = " + (n * i) + "\n";
    }
    salida += "\n";
  }

  document.getElementById("resultado34").textContent = salida;
}

function ejercicio35() {
  let mayor = null;
  let menor = null;

  for (let i = 1; i <= 20; i++) {
    const n = parseFloat(prompt("Ingrese el numero " + i + ":"));

    if (i === 1) {
      mayor = n;
      menor = n;
    } else {
      if (n > mayor) mayor = n;
      if (n < menor) menor = n;
    }
  }

  document.getElementById("resultado35").textContent =
    "Numero mayor: " + mayor + " | Numero menor: " + menor;
}

function ejercicio36() {
  const n = parseInt(prompt("Ingrese cuantos terminos de Fibonacci desea ver:"), 10);

  if (Number.isNaN(n) || n <= 0) {
    document.getElementById("resultado36").textContent =
      "Error: ingrese un entero positivo.";
    return;
  }

  let a = 0;
  let b = 1;
  let salida = "";

  for (let i = 1; i <= n; i++) {
    salida += a + (i < n ? ", " : "");
    const siguiente = a + b;
    a = b;
    b = siguiente;
  }

  document.getElementById("resultado36").textContent =
    "Serie de Fibonacci (" + n + " terminos):\n" + salida;
}

function ejercicio37() {
  let a = parseInt(prompt("Ingrese el primer numero:"), 10);
  let b = parseInt(prompt("Ingrese el segundo numero:"), 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    document.getElementById("resultado37").textContent =
      "Error: ingrese numeros enteros validos.";
    return;
  }

  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }

  document.getElementById("resultado37").textContent =
    "El M.C.D es: " + a;
}

function ejercicio38() {
  const n = parseInt(prompt("Ingrese un numero entero positivo:"), 10);

  if (Number.isNaN(n) || n <= 0) {
    document.getElementById("resultado38").textContent =
      "Error: ingrese un entero positivo.";
    return;
  }

  let sumaDivisores = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sumaDivisores += i;
    }
  }

  if (sumaDivisores === n) {
    document.getElementById("resultado38").textContent =
      "El numero " + n + " SI es perfecto.";
  } else {
    document.getElementById("resultado38").textContent =
      "El numero " + n + " NO es perfecto.";
  }
}

function ejercicio39() {
  const terminos = parseInt(
    prompt("Ingrese la cantidad de terminos para aproximar PI:"),
    10
  );

  if (Number.isNaN(terminos) || terminos <= 0) {
    document.getElementById("resultado39").textContent =
      "Error: ingrese un entero positivo.";
    return;
  }

  let pi = 0;
  let signo = 1;
  let denominador = 1;

  for (let i = 1; i <= terminos; i++) {
    pi += signo * (4 / denominador);
    signo *= -1;
    denominador += 2;
  }

  document.getElementById("resultado39").textContent =
    "Aproximacion de PI con " + terminos + " terminos: " + pi.toFixed(10);
}

function ejercicio40() {
  const terminos = parseInt(
    prompt("Ingrese la cantidad de terminos para aproximar PI (Nilakantha):"),
    10
  );

  if (Number.isNaN(terminos) || terminos <= 0) {
    document.getElementById("resultado40").textContent =
      "Error: ingrese un entero positivo.";
    return;
  }

  let pi = 3;
  let signo = 1;
  let a = 2;

  for (let i = 1; i <= terminos; i++) {
    pi += signo * (4 / (a * (a + 1) * (a + 2)));
    signo *= -1;
    a += 2;
  }

  document.getElementById("resultado40").textContent =
    "Aproximacion de PI con " + terminos + " terminos: " + pi.toFixed(10);
}



















