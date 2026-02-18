//------------------- Reto 1 ---------------------

function suma2Numeoros(x, y) {
  return x + y;
}

function potencia(base, exponente) {
  return Math.pow(base, exponente);
}

function sumOfCubes(a) {
  // Recibe un array de números y calcula la suma de sus cubos
  let suma = 0;
  for (let i = 1; i <= a; i++) {
    suma += Math.pow(i, 3);
  }
  return suma;
}

function triArea(b, h) {
  return (b * h) / 2;
}

function calculator(x, operador, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return "El parámetro no es reconocido";
  }

  switch (operador) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "x":
      return x * y;
    case "/":
      return x / y;
    case "%":
      return x % y;
    default:
      return "Operador no válido";
  }
}

// ------------------- Reto 2 ---------------------

problema1 = (nombre, apellido, edad) => {
  return `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}.`;
};

function problema2(a) {
  // Recibe un array de números y calcula la suma de sus cubos
  let suma = 0;
  for (let i = 1; i <= a; i++) {
    suma += Math.pow(i, 3);
  }
  return suma;
}

function problema3(valor) {
  return Object.prototype.toString.call(valor).slice(8, -1).toLowerCase();
}

function problema4(...valores) {
  return valores.reduce((total, valor) => {
    if (typeof valor !== "number") {
      throw new Error("Todos los argumentos deben ser números");
    }
    return total + valor;
  }, 0);
}

function problema5(valores) {
  valores = valores.filter((valor) => typeof valor !== "string");
  return valores;
}

function problema6(a) {
  const min = Math.min(...a);
  const max = Math.max(...a);
  return [min, max];
}

function problema7(a) {
  if (a.length !== 10) {
    throw new Error("El array debe contener exactamente 10 números");
  }
  const numeros = a.join("");
  return `(${numeros.slice(0, 3)}) ${numeros.slice(3, 6)}-${numeros.slice(6)}`;
}

function problema8(arr) {
  return arr.map((subArr) => Math.max(...subArr));
}

function problema9(palabra, caracter) {
  const first = palabra.indexOf(caracter);
  const last = palabra.lastIndexOf(caracter);
  return first === -1 ? undefined : [first, last];
}

function problema10(obj) {
  return Object.entries(obj);
}

function problema11(arr) {
  return arr.reduce((total, persona) => total + persona.budget, 0);
}

function problema12(arr) {
  return arr.map((estudiante) => estudiante.name);
}

function problema13(obj) {
  return Object.entries(obj);
}

function problema14(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i * i;
  }
  return total;
}

function problema15(a) {
  const length = a.length;
  return a.map((num) => num * length);
}

function problema16(n) {
  const resultado = [];
  for (let i = n; i >= 0; i--) {
    resultado.push(i);
  }
  return resultado;
}

function problema17(a) {
  return Math.max(...a) - Math.min(...a);
}

function problema18(a) {
  return a.filter((item) => typeof item === "number");
}

function problema19(elemento, veces) {
  return Array(veces).fill(elemento);
}

// problema20
String.prototype.vreplace = function (vocal) {
  return this.replace(/[aeiou]/gi, vocal);
};

function problema21(str) {
  const palabras = str.split(" ");
  const index = palabras.indexOf("Nemo");
  return index !== -1 ? `I found Nemo at ${index + 1}!` : "Nemo not found!";
}

function problema22(str) {
  return str
    .split(" ")
    .map((palabra) => palabra.slice(0, -1) + palabra.slice(-1).toUpperCase())
    .join(" ");
}
