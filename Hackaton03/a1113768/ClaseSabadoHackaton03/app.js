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

// ====== Lógica del Ejercicio 1 ======
const btnEj1 = document.getElementById("btn_ej1");
const inputEj1 = document.getElementById("input_ej1");
const resultadoEj1 = document.getElementById("resultado_ej1");

btnEj1.addEventListener("click", () => {
  const valor = Number(inputEj1.value);

  // Validar que sea número
  if (isNaN(valor) || inputEj1.value.trim() === "") {
    resultadoEj1.textContent = "⚠️ No es un número válido";
    resultadoEj1.classList.remove("hidden", "border-accent/30", "text-accent");
    resultadoEj1.classList.add("border-red-500/30", "text-red-400");
    return;
  }

  // Verificar 3 dígitos
  resultadoEj1.classList.remove("hidden", "border-red-500/30", "text-red-400");
  resultadoEj1.classList.add("border-accent/30", "text-accent");

  if (valor >= 100 && valor <= 999) {
    resultadoEj1.textContent = `✅ ${valor} tiene 3 dígitos`;
  } else {
    resultadoEj1.textContent = `❌ ${valor} NO tiene 3 dígitos`;
  }
});

// Enter también ejecuta
inputEj1.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnEj1.click();
});

// ====== Lógica del Ejercicio 2 ======
const btnEj2 = document.getElementById("btn_ej2");
const inputEj2 = document.getElementById("input_ej2");
const resultadoEj2 = document.getElementById("resultado_ej2");

btnEj2.addEventListener("click", () => {
  const valor = Number(inputEj2.value);

  // Validar que sea número
  if (isNaN(valor) || inputEj2.value.trim() === "") {
    resultadoEj2.textContent = "⚠️ No es un número válido";
    resultadoEj2.classList.remove("hidden", "border-accent/30", "text-accent");
    resultadoEj2.classList.add("border-red-500/30", "text-red-400");
    return;
  }

  // Verificar 3 dígitos
  resultadoEj2.classList.remove("hidden", "border-red-500/30", "text-red-400");
  resultadoEj2.classList.add("border-accent/30", "text-accent");

  if (valor <= 0) {
    resultadoEj2.textContent = `Es un numero negativo`;
  } else {
    resultadoEj2.textContent = `Es un numero entero positivo`;
  }
});

// Enter también ejecuta
inputEj2.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnEj2.click();
});

// ====== Lógica del Ejercicio 3 ======
const btnEj3 = document.getElementById("btn_ej3");
const inputEj3 = document.getElementById("input_ej3");
const idResult = "resultado_ej3";

btnEj3.addEventListener("click", () => {
  const valor = Number(inputEj3.value);

  // Validar que sea número
  if (isNaN(valor) || inputEj3.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido", true);
    return;
  }

  const ultimo = Math.abs(valor) % 10;

  if (ultimo === 4) {
    showResult(idResult, "El numero termina en 4", false);
  } else {
    showResult(idResult, "El numero no termina en 4", true);
  }
});

// Enter también ejecuta
inputEj3.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnEj3.click();
});

// ====== Lógica del Ejercicio 4 ======
const btnEj4 = document.getElementById("btn_ej4");
const inputEj41 = document.getElementById("input_ej4_1");
const inputEj42 = document.getElementById("input_ej4_2");
const inputEj43 = document.getElementById("input_ej4_3");

btnEj4.addEventListener("click", () => {
  const valor1 = Number(inputEj41.value);
  const valor2 = Number(inputEj42.value);
  const valor3 = Number(inputEj43.value);

  const idResult = btnEj4.dataset.resultado;
  // Validar que sea número
  if ([valor1, valor2, valor3].some(isNaN)) {
    showResult(idResult, "⚠️ No es un número válido", true);
    return;
  }

  const sorted = [valor1, valor2, valor3].sort((x, y) => x - y);

  const str = sorted.join("");

  showResult(idResult, str, false);
  return;
});

// ====== Lógica del Ejercicio 5 ======
const btnEj5 = document.getElementById("btn_ej5");
const inputEj5 = document.getElementById("input_ej5");

btnEj5.addEventListener("click", () => {
  const valor = Number(inputEj5.value);
  const precio = 80;

  const idResult = btnEj5.dataset.resultado;
  // Validar que sea número
  if (isNaN(valor) || inputEj5.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido", true);
    return;
  }

  const total = valor * precio;
  let desc = 0;
  if (valor > 30) desc = 0.4;
  else if (valor > 20) desc = 0.2;
  else if (valor > 10) desc = 0.1;

  const montoDesc = total * desc;

  const final = total - montoDesc;

  const str = `total sin Descuento: ${total}, %desc: ${desc * 100} cantidad: ${valor}, monto Descuento: ${montoDesc}, total a pagar: ${final}`;

  showResult(idResult, str, false);
  return;
});

// ====== Lógica del Ejercicio 6 ======
const btnEj6 = document.getElementById("btn_ej6");
const inputEj6 = document.getElementById("input_ej6");

btnEj6.addEventListener("click", () => {
  const valor = Number(inputEj6.value);

  let sueldo = 0;

  const idResult = btnEj6.dataset.resultado;
  // Validar que sea número
  if (isNaN(valor) || inputEj6.value.trim() === "") {
    showResult(idResult, "⚠️ No es un número válido", true);
    return;
  }

  if (valor <= 40) {
    sueldo = valor * 20;
    const str = `El sueldo generado es de: ${sueldo}`;
    showResult(idResult, str, false);
  } else {
    const extras = valor - 40;
    sueldo = 40 * 20 + extras * 25;
    const str = `El sueldo generado es de: ${sueldo} extra: ${extras}`;
    showResult(idResult, str, false);
  }
  return;
});

// ====== Lógica del Ejercicio 13 ======
const btnEj13 = document.getElementById("btn_ej13");
const inputEj13 = document.getElementById("input_ej13");

btnEj13.addEventListener("click", () => {
  const valor = inputEj13.value;

  const idResult = btnEj13.dataset.resultado;
  // // Validar que sea número
  // if (isNaN(valor) || inputEj24.value.trim() === "") {
  //   showResult(idResult, "⚠️ Debes ingresar 20 numeros.", true);
  //   return;
  // }

  const arrarDeVocale = ['a', 'e', 'i', 'o', 'u']

  const minus = valor.toLowerCase()

  const str = `${arrarDeVocale.includes(minus) ? 'Si es una vocal' : 'No es una vocal'}`;

  showResult(idResult, str, false);
  return;
});

// ====== Lógica del Ejercicio 24 ======
const btnEj24 = document.getElementById("btn_ej24");
// const inputEj24 = document.getElementById("input_ej24");

btnEj24.addEventListener("click", () => {
  // const valor = inputEj24.value;

  const idResult = btnEj24.dataset.resultado;
  // // Validar que sea número
  // if (isNaN(valor) || inputEj24.value.trim() === "") {
  //   showResult(idResult, "⚠️ Debes ingresar 20 numeros.", true);
  //   return;
  // }

  let acumulador = 0;

  for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      acumulador = acumulador + i;
    } else {
      // console.log("impar: ", i);
    }
  }
  // console.log(acumulador);

  const str = `La suma de los pares hasta el 1000 es de: ${acumulador}`;
  showResult(idResult, str, false);
  return;
});

// ====== Lógica del Ejercicio 34 ======
const btnEj34 = document.getElementById("btn_ej34");
const inputEj34 = document.getElementById("input_ej34");
const resultContainer = document.getElementById("resultado_ej34");

btnEj34.addEventListener("click", () => {
  const valor = inputEj34.value;

  const idResult = btnEj34.dataset.resultado;
  // Validar que sea número
  if (isNaN(valor) || inputEj34.value.trim() === "") {
    showResult(idResult, "⚠️ Debes ingresar 20 numeros.", true);
    return;
  }

  for (let i = 1; i <= valor; i++) {
    const card = document.createElement("div");
    const title = document.createElement("span");

    card.className =
      "w-full h-auto min-h-[32px] bg-gray-500 border border-accent/30 rounded-xl px-4 py-3 text-accent font-mono text-sm text-center flex items-center justify-center flex-col gap-2";
    title.className =
      "border border-accent/30 h-10 w-10 flex items-center justify-center rounded-full bg-gray-900";

    card.appendChild(title);
    for (let j = 0; j <= 12; j++) {
      title.innerHTML = i;
      const p = document.createElement("p");

      p.innerHTML = `${i} X ${j} = ${i * j}`;

      card.appendChild(p);
    }

    resultContainer.appendChild(card);
    // resultContainer.appendChild(title)
  }

  resultContainer.classList.remove("hidden");
  resultContainer.classList.add("grid");

  const str = ``;
  // showResult(idResult, str, false);
  return;
});

// ====== Lógica del Ejercicio 35 ======
const btnEj35 = document.getElementById("btn_ej35");
const inputEj35 = document.getElementById("input_ej35");

btnEj35.addEventListener("click", () => {
  const valor = inputEj35.value;

  const numeros = valor.split(",").map(Number);
  // "1,2,3,4,5,6..."
  //[1,2,3,4,5,6..]
  const idResult = btnEj35.dataset.resultado;
  // Validar que sea número
  if (numeros.length !== 20) {
    showResult(idResult, "⚠️ Debes ingresar 20 numeros.", true);
    return;
  }

  const mayor = Math.max(...numeros);
  const menor = Math.min(...numeros);

  const str = `El numero mayor es: ${mayor}, el menor es: ${menor}`;

  showResult(idResult, str, false);
  return;
});

// ====== Lógica del Ejercicio 36 ======
const btnEj36 = document.getElementById("btn_ej36");
const inputEj36 = document.getElementById("input_ej36");

btnEj36.addEventListener("click", () => {
  const valor = Number(inputEj36.value);

  const idResult = btnEj36.dataset.resultado;
  // Validar que sea número
  if (isNaN(valor) || inputEj36.value.trim() === "" || valor < 1) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  let a = 0,
    b = 1,
    serie = [];

  for (let i = 0; i < valor; i++) {
    serie.push(a);
    let t = a + b;
    a = b;
    b = t;
  }

  const str = `Fibonacci(${valor}) = ${serie.join(", ")}`;

  showResult(idResult, str, false);
  return;
});

// ====== Lógica del Ejercicio 37 ======
const btnEj37 = document.getElementById("btn_ej37");
const inputEj371 = document.getElementById("input_ej371");
const inputEj372 = document.getElementById("input_ej372");

btnEj37.addEventListener("click", () => {
  const valor = Number(inputEj371.value);
  const valor2 = Number(inputEj372.value);

  const idResult = btnEj37.dataset.resultado;
  // Validar que sea número
  if (
    isNaN(valor) ||
    inputEj371.value.trim() === "" ||
    valor < 1 ||
    isNaN(valor2) ||
    inputEj372.value.trim() === "" ||
    valor2 < 1
  ) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  const num1 = valor,
    num2 = valor2;

  let x = valor,
    y = valor2;

  while (y !== 0) {
    let t = y;
    y = x % y;
    x = t;
  }

  const str = `MCD(${num1}, ${num2}) = ${x}`;

  showResult(idResult, str, false);
  return;
});

// ====== Lógica del Ejercicio 38 ======
const btnEj38 = document.getElementById("btn_ej38");
const inputEj38 = document.getElementById("input_ej38");

btnEj38.addEventListener("click", () => {
  const valor = Number(inputEj38.value);

  const idResult = btnEj38.dataset.resultado;
  // Validar que sea número
  if (isNaN(valor) || inputEj38.value.trim() === "" || valor < 1) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  let s = 0;
  let div = [];

  for (let i = 1; i < valor; i++) {
    if (valor % i === 0) {
      s += i;
      console.log(i);
      div.push(i);
    }
  }

  const str = `Divisores de ${valor}: ${div.join(" + ")} = ${s} \n ${s === valor ? "Es perfecto" : "No es perfecto."}`;
  showResult(idResult, str, false);

  return;
});

// ====== Lógica del Ejercicio 39 ======
const btnEj39 = document.getElementById("btn_ej39");
const inputEj39 = document.getElementById("input_ej39");

btnEj39.addEventListener("click", () => {
  const valor = Number(inputEj39.value);

  const idResult = btnEj39.dataset.resultado;
  // Validar que sea número
  if (isNaN(valor) || inputEj39.value.trim() === "" || valor < 1) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  let pi = 0;

  for (let i = 0; i < valor; i++) {
    pi += (-1) ** i * (4 / (2 * i + 1));
  }
  const str = `π ≈ ${pi}\nπ real: ${Math.PI}\nError: ${Math.abs(pi - Math.PI).toFixed(12)}\nIteraciones: ${valor.toLocaleString()}`;

  showResult(idResult, str, false);
  return;
});

// ====== Lógica del Ejercicio 40 ======
const btnEj40 = document.getElementById("btn_ej40");
const inputEj40 = document.getElementById("input_ej40");

btnEj40.addEventListener("click", () => {
  const valor = Number(inputEj40.value);

  const idResult = btnEj40.dataset.resultado;
  // Validar que sea número
  if (isNaN(valor) || inputEj40.value.trim() === "" || valor < 1) {
    showResult(idResult, "⚠️ No es un número válido, debe ser mayor a 1", true);
    return;
  }

  let pi = 3;

  for (let i = 0; i < valor; i++) {
    let d = 2 + 2 * i;
    // console.log((4 / (d * (d + 1) * (d + 2))))
    pi += (-1) ** i * (4 / (d * (d + 1) * (d + 2)));
  }
  const str = `π ≈ ${pi}\nπ real: ${Math.PI}\nError: ${Math.abs(pi - Math.PI).toFixed(15)}\nIteraciones: ${valor.toLocaleString()}\n`;

  showResult(idResult, str, false);

  return;
});
