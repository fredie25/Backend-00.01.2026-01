// UTIL
const showResult = (id, text, isError) => {
  const element = document.getElementById(id);
  if (isError) {
    element.classList.remove("hidden", "border-accent/30", "text-accent");
    element.classList.add("border-red-500/30", "text-red-400");
  } else {
    element.classList.remove("hidden", "border-red-500/30", "text-red-400");
    element.classList.add("border-accent/30", "text-accent");
  }
  element.innerHTML = text;
};

const accordionBtn = document.getElementsByClassName("btn-accordion");

Array.from(accordionBtn).forEach((item) => {
  item.addEventListener("click", () => {
    const ejercicio = item.dataset.ejercicio;
    toggleAccordion(ejercicio);
  });
});

function toggleAccordion(id) {
  const content = document.getElementById(id);
  const arrow = document.getElementById("arrow-" + id);
  content.classList.toggle("open");
  arrow.classList.toggle("rotate");
}

// ====== Lógica del Ejercicio 01 ======
const btnEj1 = document.getElementById("btn_ej1");
const inputEj11 = document.getElementById("input_ej1_1");
const inputEj12 = document.getElementById("input_ej1_2");

btnEj1.addEventListener("click", () => {
  const valor1 = Number(inputEj11.value);
  const valor2 = Number(inputEj11.value);

  const idResult = btnEj1.dataset.resultado;
  // Validar que sea número
  if (
    isNaN(valor2) ||
    inputEj12.value.trim() === "" ||
    isNaN(valor1) ||
    inputEj11.value.trim() === ""
  ) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  let result = suma(valor1, valor2);

  const str = `La suma de los dos numeros es: ${result}`;
  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 02 ======
const btnEj2 = document.getElementById("btn_ej2");
const inputEj22 = document.getElementById("input_ej2_1");
const inputEj21 = document.getElementById("input_ej2_2");

btnEj2.addEventListener("click", () => {
  const valor1 = Number(inputEj22.value);
  const valor2 = Number(inputEj21.value);

  const idResult = btnEj2.dataset.resultado;
  // Validar que sea número
  if (
    isNaN(valor2) ||
    inputEj21.value.trim() === "" ||
    isNaN(valor1) ||
    inputEj22.value.trim() === ""
  ) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  const result = potencia(valor1, valor2);

  const str = `numero: ${valor1}, potencia: ${valor2}, resultado: ${result}`;
  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 03 ======
const btnEj3 = document.getElementById("btn_ej3");
const inputEj3 = document.getElementById("input_ej3");

btnEj3.addEventListener("click", () => {
  // const valor1 = Number(inputEj22.value);

  const idResult = btnEj3.dataset.resultado;
  // Validar que sea número
  if (inputEj3.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  // "1,5,9"
  // [1,5,9]

  const arrayDeNumeros = inputEj3.value.split(",").map(Number);
  const result = arrayDeNumeros.map((item) => {
    return (item = potencia(item, 3));
  });
  // [1,125,729];
  const total = result.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0,
  );

  const str = `la suma de los cubos de los numeros: ${inputEj3.value} es: ${total}`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 05 ======
const btnEj4 = document.getElementById("btn_ej4");
const inputEj41 = document.getElementById("input_ej4_1");
const inputEj42 = document.getElementById("input_ej4_2");

btnEj4.addEventListener("click", () => {
  const valor1 = Number(inputEj41.value);
  const valor2 = Number(inputEj42.value);

  const idResult = btnEj4.dataset.resultado;
  // Validar que sea número
  if (
    isNaN(valor2) ||
    inputEj41.value.trim() === "" ||
    isNaN(valor1) ||
    inputEj42.value.trim() === ""
  ) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  const result = triArea(valor1, valor2);

  const str = `El area del triangulo es de: ${result}`;

  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 06 ======
const btnEj6 = document.getElementById("btn_ej6");

btnEj6.addEventListener("click", () => {
  const idResult = btnEj6.dataset.resultado;

  const str = `6.2: Indefinida`;
  showResult(idResult, str, false);
  return;
});

// ====== Lógica del Ejercicio 04 ======
const btnEj5 = document.getElementById("btn_ej5");
const inputEj51Num = document.getElementById("input_ej51_num");
const inputEj5Op = document.getElementById("input_ej5_op");
const inputEj52Num = document.getElementById("input_ej52_num");

btnEj5.addEventListener("click", () => {
  const valor1 = Number(inputEj51Num.value);
  const valor2 = Number(inputEj52Num.value);

  const idResult = btnEj5.dataset.resultado;
  // Validar que sea número
  if (
    isNaN(valor2) ||
    inputEj51Num.value.trim() === "" ||
    isNaN(valor1) ||
    inputEj52Num.value.trim() === "" ||
    inputEj5Op.value.trim() === ""
  ) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  const result = calculadora(valor1, valor2, inputEj5Op.value);

  const str = `El resultado de: ${valor1} ${inputEj5Op.value} ${valor2} = ${result}`;

  showResult(idResult, str, false);

  return;
});

//* FUNCTIONS
function suma(numero1, numero2) {
  return numero1 + numero2;
}

function potencia(numero, potencia) {
  const result = Math.pow(numero, potencia);
  return result;
}

const triArea = (base, altura) => (base * altura) / 2;

const calculadora = (num1, num2, op) => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;

    case "*":
    case "x":
    case "X":
      return num1 * num2;

    case "/":
      return num2 === 0 ? "No se puede dividir entre 0" : num1 / num2;
    default:
      return "Operacion Invalida";
  }
};

// const crearUsuario  = (nombre, apellido_paterno, apellido_materno, edad, fecha_nacimiento, lugar_nacimiento, dni) => {



const crearUsuario = ({
  nombre,
  apellido_paterno,
  apellido_materno,
  edad,
  fecha_nacimiento,
  lugar_nacimiento,
  dni,
}) => {
  console.log(
    nombre,
    apellido_paterno,
    apellido_materno,
    edad,
    fecha_nacimiento,
    lugar_nacimiento,
    dni,
  );
};

console.log(
  crearUsuario({
  nombre: "Erick",
  apellido_paterno: "Millan",
  apellido_paterno: "Millan",
  edad: 12,
  fecha_nacimiento: "12/12/2022",
  lugar_nacimiento: "Lima",
  dni: "7272727",
})
)
