/* ============================================================
   CONFIGURACIÓN (imágenes opcionales)
   ============================================================ */
const IMG_PRINCIPAL = "./Images/Neuvillete Iocn.webp";
const IMG_EXITO = "./Images/Good Kaveh.webp";
const IMG_FALLO = "./Images/Exercise Wrong.webp";

/* ============================================================
   HELPERS SWEETALERT2
   ============================================================ */
function requireSwal() {
  if (typeof Swal === "undefined") {
    alert("Falta SweetAlert2. Verifica el <script> en index.html.");
    return false;
  }
  return true;
}

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/**
 * Nota clave:
 * - SweetAlert2 ya confirma con Enter en <input> y <select>.
 * - Solo forzamos Enter->Confirmar en <textarea> (sin Shift),
 *   para que no aparezcan "errores" por doble confirmación.
 */
function enableEnterConfirm() {
  const input = Swal.getInput();
  if (!input) return;

  if (input.tagName === "TEXTAREA") {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        Swal.clickConfirm();
      }
    });
  }
}

/* ---------------------------
   Modal: Guía del ejercicio
---------------------------- */
async function guia({ titulo, descripcion, entradas = [], ejemplo = "" }) {
  if (!requireSwal()) return false;

  const html =
    `<div style="text-align:left;line-height:1.55">` +
      `<p>${esc(descripcion)}</p>` +
      (entradas.length
        ? `<p><b>¿Qué vas a ingresar?</b></p><ul>${entradas.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`
        : ``) +
      (ejemplo ? `<p><b>Ejemplo:</b> ${esc(ejemplo)}</p>` : ``) +
      `<p style="opacity:.85"><i>Tip:</i> puedes presionar Enter para aceptar.</p>` +
    `</div>`;

  const r = await Swal.fire({
    title: titulo,
    html,
    imageUrl: IMG_PRINCIPAL,
    imageWidth: 90,
    confirmButtonText: "Continuar",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#4f46e5",
    didOpen: enableEnterConfirm
  });

  return r.isConfirmed;
}

/* ---------------------------
   Modal: pedir texto
---------------------------- */
async function pedirTexto({ titulo, placeholder = "Escribe aquí...", validate = null }) {
  const r = await Swal.fire({
    title: titulo,
    input: "text",
    inputPlaceholder: placeholder,
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#4f46e5",
    didOpen: enableEnterConfirm,
    inputValidator: (v) => {
      const val = (v ?? "").trim();
      if (!val) return "Campo obligatorio.";

      if (validate) {
        const msg = validate(val);
        if (msg) return msg;
      }
      return undefined; // importante: SweetAlert2 espera undefined si es válido
    }
  });

  if (!r.isConfirmed) return null;
  return (r.value ?? "").trim();
}

/* ---------------------------
   Modal: pedir texto largo
---------------------------- */
async function pedirTextoLargo({ titulo, placeholder = "Pega aquí...", validate = null }) {
  const r = await Swal.fire({
    title: titulo,
    input: "textarea",
    inputPlaceholder: placeholder,
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#4f46e5",
    didOpen: enableEnterConfirm,
    inputValidator: (v) => {
      const val = (v ?? "").trim();
      if (!val) return "Campo obligatorio.";

      if (validate) {
        const msg = validate(val);
        if (msg) return msg;
      }
      return undefined;
    }
  });

  if (!r.isConfirmed) return null;
  return (r.value ?? "").trim();
}

/* ---------------------------
   Modal: pedir número
---------------------------- */
async function pedirNumero({ titulo, allowDecimal = true, allowNegative = true, placeholder = "Ej.: 10" }) {
  const raw = await pedirTexto({
    titulo,
    placeholder,
    validate: (v) => {
      const re = allowDecimal ? /^-?\d+(\.\d+)?$/ : /^-?\d+$/;
      if (!re.test(v)) return "Ingresa un número válido.";
      const n = Number(v);
      if (!Number.isFinite(n)) return "Número no válido.";
      if (!allowNegative && n < 0) return "No se permiten negativos.";
      return undefined;
    }
  });
  if (raw === null) return null;
  return Number(raw);
}

/* ---------------------------
   Listas de números
---------------------------- */
function parseListaNumeros(raw) {
  const parts = String(raw).split(/[\s,]+/).filter(Boolean);
  const nums = parts.map(Number);
  if (nums.length === 0 || nums.some((n) => Number.isNaN(n))) return null;
  return nums;
}

async function pedirListaNumeros({ titulo, placeholder = "Ej.: 1, 5, 9" }) {
  const raw = await pedirTexto({ titulo, placeholder });
  if (raw === null) return null;

  const nums = parseListaNumeros(raw);
  if (!nums) {
    await Swal.fire({ icon: "error", title: "Dato inválido", text: "Usa números separados por coma o espacio." });
    return pedirListaNumeros({ titulo, placeholder });
  }
  return nums;
}

/* ---------------------------
   JSON
---------------------------- */
function parseJson(raw, expected = "any") {
  try {
    const val = JSON.parse(raw);
    if (expected === "array" && !Array.isArray(val)) return null;
    if (expected === "object" && (val === null || Array.isArray(val) || typeof val !== "object")) return null;
    return val;
  } catch {
    return null;
  }
}

async function pedirJson({ titulo, expected, ejemplo }) {
  const hint = `Ejemplo (cópialo): ${JSON.stringify(ejemplo)}`;

  const raw = await pedirTextoLargo({
    titulo,
    placeholder: hint,
    validate: (v) => (parseJson(v, expected) ? undefined : "JSON inválido para este ejercicio.")
  });

  if (raw === null) return null;
  return parseJson(raw, expected);
}

/* ---------------------------
   Mostrar resultado + explicación
---------------------------- */
async function resultado({ titulo = "¡Resultado listo!", resHtml, expHtml }) {
  await Swal.fire({
    title: titulo,
    html: `<div style="text-align:left;line-height:1.55">
            <p><b>Resultado:</b></p>${resHtml}
            <hr style="border:none;border-top:1px solid rgba(255,255,255,.12);margin:10px 0">
            <p><b>Explicación:</b></p>${expHtml}
          </div>`,
    imageUrl: IMG_EXITO,
    imageWidth: 90,
    confirmButtonText: "Entendido",
    confirmButtonColor: "#4f46e5",
    didOpen: enableEnterConfirm
  });
}

/* ============================================================
   HELPERS LÓGICOS
   ============================================================ */
function typeOfValue(v) {
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  return typeof v;
}

function formatPhoneNumber(d) {
  return `(${d.slice(0, 3).join("")}) ${d.slice(3, 6).join("")}-${d.slice(6).join("")}`;
}

/* ============================================================
   RETO 1
   ============================================================ */

/* -----------------------------
   RETO 1 — EJERCICIO 1: suma
------------------------------ */
async function reto1_ej1() {
  const ok = await guia({
    titulo: "Reto 1.1 — Suma de dos números",
    descripcion: "Crea una función que retorne la suma de dos números.",
    entradas: ["Número A", "Número B"],
    ejemplo: "A=2.5, B=3 → 5.5"
  });
  if (!ok) return;

  const a = await pedirNumero({ titulo: "Ingresa el Número A", allowDecimal: true });
  if (a === null) return;

  const b = await pedirNumero({ titulo: "Ingresa el Número B", allowDecimal: true });
  if (b === null) return;

  const suma = (x, y) => x + y;

  await resultado({
    resHtml: `<p>${esc(a)} + ${esc(b)} = <b>${suma(a, b)}</b></p>`,
    expHtml: `<p>Se aplicó la operación aritmética básica <code>a + b</code>.</p>`
  });
}

/* -----------------------------
   RETO 1 — EJERCICIO 2: potencia
------------------------------ */
async function reto1_ej2() {
  const ok = await guia({
    titulo: "Reto 1.2 — Potencia de un número",
    descripcion: "Crea una función que retorne la potencia de un número dado. Recibe número y potencia.",
    entradas: ["Base (número)", "Exponente (número)"],
    ejemplo: "base=2, exponente=3 → 8"
  });
  if (!ok) return;

  const base = await pedirNumero({ titulo: "Ingresa la base", allowDecimal: true });
  if (base === null) return;

  const exp = await pedirNumero({ titulo: "Ingresa el exponente", allowDecimal: true });
  if (exp === null) return;

  const potencia = (b, e) => Math.pow(b, e);

  await resultado({
    resHtml: `<p>${esc(base)} ^ ${esc(exp)} = <b>${potencia(base, exp)}</b></p>`,
    expHtml: `<p>Se utilizó <code>Math.pow(base, exponente)</code> para calcular la potencia.</p>`
  });
}

/* -----------------------------
   RETO 1 — EJERCICIO 3: suma de cubos
------------------------------ */
async function reto1_ej3() {
  const ok = await guia({
    titulo: "Reto 1.3 — Suma de cubos",
    descripcion: "Crea una función que tome números y devuelva la suma de sus cubos.",
    entradas: ["Número 1", "Número 2", "Número 3"],
    ejemplo: "sumOfCubes(1, 5, 9) → 855"
  });
  if (!ok) return;

  const n1 = await pedirNumero({ titulo: "Número 1", allowDecimal: true });
  if (n1 === null) return;

  const n2 = await pedirNumero({ titulo: "Número 2", allowDecimal: true });
  if (n2 === null) return;

  const n3 = await pedirNumero({ titulo: "Número 3", allowDecimal: true });
  if (n3 === null) return;

  const sumOfCubes = (...nums) => nums.reduce((acc, n) => acc + n ** 3, 0);
  const r = sumOfCubes(n1, n2, n3);

  await resultado({
    resHtml: `<p>${esc(n1)}³ + ${esc(n2)}³ + ${esc(n3)}³ = <b>${r}</b></p>`,
    expHtml: `<p>Se elevó cada número al cubo (<code>n³</code>) y luego se sumaron los resultados.</p>`
  });
}

/* -----------------------------
   RETO 1 — EJERCICIO 4: triArea
------------------------------ */
async function reto1_ej4() {
  const ok = await guia({
    titulo: "Reto 1.4 — Área de triángulo",
    descripcion: "Toma base y altura de un triángulo y devuelve su área.",
    entradas: ["Base (≥ 0)", "Altura (≥ 0)"],
    ejemplo: "triArea(3, 2) → 3"
  });
  if (!ok) return;

  const b = await pedirNumero({ titulo: "Base", allowDecimal: true, allowNegative: false });
  if (b === null) return;

  const h = await pedirNumero({ titulo: "Altura", allowDecimal: true, allowNegative: false });
  if (h === null) return;

  const triArea = (base, altura) => (base * altura) / 2;

  await resultado({
    resHtml: `<p>Área = ( ${esc(b)} × ${esc(h)} ) / 2 = <b>${triArea(b, h)}</b></p>`,
    expHtml: `<p>Se aplicó la fórmula geométrica estándar: <code>(base×altura)/2</code>.</p>`
  });
}

/* -----------------------------
   RETO 1 — EJERCICIO 5: calculator (switch)
------------------------------ */
async function reto1_ej5() {
  const ok = await guia({
    titulo: "Reto 1.5 — calculator (Switch)",
    descripcion: "Recibe dos números y una operación matemática (+, -, *, /, %).",
    entradas: ["Número A", "Operación", "Número B"],
    ejemplo: 'calculator(2, "+", 2) → 4'
  });
  if (!ok) return;

  const a = await pedirNumero({ titulo: "Número A", allowDecimal: true });
  if (a === null) return;

  const opRes = await Swal.fire({
    title: "Elige la operación",
    input: "select",
    inputOptions: {
      "+": "Suma (+)",
      "-": "Resta (-)",
      "*": "Multiplicación (*)",
      "/": "División (/)",
      "%": "Módulo (%)"
    },
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#4f46e5",
    didOpen: enableEnterConfirm,
    inputValidator: (v) => (v ? undefined : "Selecciona una operación.")
  });
  if (!opRes.isConfirmed) return;

  const op = opRes.value;

  const b = await pedirNumero({ titulo: "Número B", allowDecimal: true });
  if (b === null) return;

  const calculator = (x, oper, y) => {
    switch (oper) {
      case "+": return x + y;
      case "-": return x - y;
      case "*": return x * y;
      case "/": return y !== 0 ? x / y : "División por 0 inválida";
      case "%": return y !== 0 ? x % y : "Módulo por 0 inválido";
      default: return "El parámetro no es reconocido";
    }
  };

  const r = calculator(a, op, b);

  await resultado({
    resHtml: `<p>${esc(a)} ${esc(op)} ${esc(b)} = <b>${esc(r)}</b></p>`,
    expHtml: `<p>Se usó <code>switch</code> para seleccionar la operación y retornar el cálculo.</p>`
  });
}

/* ============================================================
   RETO 2 (22)
   ============================================================ */

/* -----------------------------
   RETO 2 — EJERCICIO 1: saludo
------------------------------ */
async function reto2_ej1() {
  const ok = await guia({
    titulo: "Reto 2.1 — Saludo (Arrow + Template)",
    descripcion: "Recibe nombre, apellido y edad y retorna un string concatenado.",
    entradas: ["Nombre (solo letras)", "Apellido (solo letras)", "Edad (entero)"],
    ejemplo: "Hola mi nombre es Sebastián Yabiku y mi edad 33"
  });
  if (!ok) return;

  const nombre = await pedirTexto({
    titulo: "Nombre",
    placeholder: "Ej.: Sebastián",
    validate: (v) => (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(v) ? undefined : "Solo letras y espacios.")
  });
  if (nombre === null) return;

  const apellido = await pedirTexto({
    titulo: "Apellido",
    placeholder: "Ej.: Yabiku",
    validate: (v) => (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(v) ? undefined : "Solo letras y espacios.")
  });
  if (apellido === null) return;

  const edad = await pedirNumero({ titulo: "Edad (entero)", allowDecimal: false, allowNegative: false, placeholder: "Ej.: 33" });
  if (edad === null) return;

  const saludo = (n, a, e) => `Hola mi nombre es ${n} ${a} y mi edad ${e}`;
  const frase = saludo(nombre, apellido, edad);

  await resultado({
    resHtml: `<p><b>${esc(frase)}</b></p>`,
    expHtml: `<p>Se construyó el texto con <i>template literals</i>: <code>\`...\${variable}...\`</code>.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 2: sumOfCubes
------------------------------ */
async function reto2_ej2() {
  const ok = await guia({
    titulo: "Reto 2.2 — sumOfCubes",
    descripcion: "Toma números y devuelve la suma de sus cubos.",
    entradas: ["Lista de números (coma o espacio)"],
    ejemplo: "sumOfCubes(1, 5, 9) → 855"
  });
  if (!ok) return;

  const nums = await pedirListaNumeros({ titulo: "Ingresa los números", placeholder: "Ej.: 1, 5, 9" });
  if (!nums) return;

  const sumOfCubes = (...args) => args.reduce((acc, n) => acc + n ** 3, 0);
  const r = sumOfCubes(...nums);

  await resultado({
    resHtml: `<p>Números: <code>[${esc(nums.join(", "))}]</code></p><p>Σ(n³) = <b>${r}</b></p>`,
    expHtml: `<p>Se elevó cada número al cubo y se sumaron los cubos con <code>reduce</code>.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 3: typeOfValue
------------------------------ */
async function reto2_ej3() {
  const ok = await guia({
    titulo: "Reto 2.3 — typeOfValue",
    descripcion: "Retorna el tipo del valor entregado (distingue array y null).",
    entradas: ["Elegir tipo", "Ingresar valor (si aplica)"],
    ejemplo: '7 → number, "hola" → string, null → null, [] → array'
  });
  if (!ok) return;

  const tipoRes = await Swal.fire({
    title: "¿Qué tipo quieres probar?",
    input: "select",
    inputOptions: {
      number: "Número",
      string: "Texto (string)",
      boolean: "Boolean (true/false)",
      object: "Objeto (JSON)",
      array: "Array (JSON)",
      null: "null",
      undefined: "undefined"
    },
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#4f46e5",
    didOpen: enableEnterConfirm
  });
  if (!tipoRes.isConfirmed) return;

  const t = tipoRes.value;
  let v;

  if (t === "null") v = null;
  else if (t === "undefined") v = undefined;
  else if (t === "boolean") {
    const b = await pedirTexto({
      titulo: "Ingresa true o false",
      placeholder: "Ej.: true",
      validate: (x) => (/^(true|false)$/i.test(x) ? undefined : "Solo true o false.")
    });
    if (b === null) return;
    v = b.toLowerCase() === "true";
  } else if (t === "number") {
    v = await pedirNumero({ titulo: "Número", allowDecimal: true });
    if (v === null) return;
  } else if (t === "string") {
    v = await pedirTexto({ titulo: "Texto", placeholder: "Ej.: hola" });
    if (v === null) return;
  } else if (t === "object") {
    v = await pedirJson({ titulo: "Pega un OBJETO JSON", expected: "object", ejemplo: { a: 1, b: 2 } });
    if (v === null) return;
  } else if (t === "array") {
    v = await pedirJson({ titulo: "Pega un ARRAY JSON", expected: "array", ejemplo: [1, "x", true] });
    if (v === null) return;
  }

  const shown = (v === undefined) ? "undefined" : JSON.stringify(v);

  await resultado({
    resHtml: `<p>typeOfValue(valor) = <b>${esc(typeOfValue(v))}</b></p>
              <p>Valor:</p><pre style="white-space:pre-wrap">${esc(shown)}</pre>`,
    expHtml: `<p>Se distingue <code>array</code> y <code>null</code> explícitamente, porque <code>typeof</code> no los diferencia como se espera.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 4: REST suma
------------------------------ */
async function reto2_ej4() {
  const ok = await guia({
    titulo: "Reto 2.4 — Suma con REST",
    descripcion: "Recibe n cantidad de argumentos y los suma.",
    entradas: ["Lista de números (coma o espacio)"],
    ejemplo: "10, 20, 5 → 35"
  });
  if (!ok) return;

  const nums = await pedirListaNumeros({ titulo: "Ingresa los números", placeholder: "Ej.: 10, 20, 5" });
  if (!nums) return;

  const sumarTodo = (...args) => args.reduce((acc, curr) => acc + Number(curr), 0);
  const r = sumarTodo(...nums);

  await resultado({
    resHtml: `<p>Suma = <b>${r}</b></p>`,
    expHtml: `<p><code>...args</code> captura una cantidad variable y <code>reduce</code> acumula la suma.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 5: filtrar no-string -> solo strings
------------------------------ */
async function reto2_ej5() {
  const ok = await guia({
    titulo: "Reto 2.5 — Filtrar no-string",
    descripcion: "Recibe un array y devuelve solo los elementos tipo string.",
    entradas: ["Array en JSON"],
    ejemplo: '[1,2,3,"x","y",10] → ["x","y"]'
  });
  if (!ok) return;

  const arr = await pedirJson({
    titulo: "Pega el ARRAY JSON",
    expected: "array",
    ejemplo: [1, 2, 3, "x", "y", 10]
  });
  if (arr === null) return;

  const out = arr.filter((x) => typeof x === "string");

  await resultado({
    resHtml: `<pre style="white-space:pre-wrap">${esc(JSON.stringify(out))}</pre>`,
    expHtml: `<p>Se filtró por tipo: se conserva si <code>typeof elemento === "string"</code>.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 6: minMax
------------------------------ */
async function reto2_ej6() {
  const ok = await guia({
    titulo: "Reto 2.6 — minMax",
    descripcion: "Toma una matriz de números y devuelve [mínimo, máximo].",
    entradas: ["Lista numérica (coma o espacio)"],
    ejemplo: "minMax([1,2,3,4,5]) → [1,5]"
  });
  if (!ok) return;

  const nums = await pedirListaNumeros({ titulo: "Ingresa los números", placeholder: "Ej.: 1,2,3,4,5" });
  if (!nums) return;

  const res = [Math.min(...nums), Math.max(...nums)];

  await resultado({
    resHtml: `<p>minMax = <b>[${esc(res.join(", "))}]</b></p>`,
    expHtml: `<p>Se usó <code>Math.min</code> y <code>Math.max</code> con spread (<code>...</code>).</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 7: formatPhoneNumber
------------------------------ */
async function reto2_ej7() {
  const ok = await guia({
    titulo: "Reto 2.7 — formatPhoneNumber",
    descripcion: "Toma 10 enteros (0–9) y devuelve un string con formato de teléfono.",
    entradas: ["10 dígitos (1234567890 o 1,2,3,...)"],
    ejemplo: "(123) 456-7890"
  });
  if (!ok) return;

  const raw = await pedirTexto({
    titulo: "Ingresa 10 dígitos",
    placeholder: "Ej.: 1234567890  (o 1,2,3,4,5,6,7,8,9,0)"
  });
  if (raw === null) return;

  let digits;
  if (/^\d{10}$/.test(raw)) digits = raw.split("").map(Number);
  else digits = raw.split(/[\s,]+/).filter(Boolean).map(Number);

  const okDigits = Array.isArray(digits)
    && digits.length === 10
    && digits.every((d) => Number.isInteger(d) && d >= 0 && d <= 9);

  if (!okDigits) {
    await Swal.fire({ icon: "error", title: "Dato inválido", text: "Debes ingresar exactamente 10 dígitos (0 a 9)." });
    return;
  }

  const tel = formatPhoneNumber(digits);

  await resultado({
    resHtml: `<p><b>${esc(tel)}</b></p>`,
    expHtml: `<p>Se agruparon los dígitos en (3)-(3)-(4) y se concatenó el formato.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 8: findLargestNums
------------------------------ */
async function reto2_ej8() {
  const ok = await guia({
    titulo: "Reto 2.8 — findLargestNums",
    descripcion: "Toma una matriz de matrices numéricas y retorna el mayor de cada sub-array.",
    entradas: ["Matriz en JSON (array de arrays)"],
    ejemplo: "[[4,2,7,1],[20,70,40,90],[1,2,0]] → [7,90,2]"
  });
  if (!ok) return;

  const mat = await pedirJson({
    titulo: "Pega la MATRIZ en JSON",
    expected: "array",
    ejemplo: [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]
  });
  if (mat === null) return;

  const valid = Array.isArray(mat)
    && mat.length > 0
    && mat.every((row) => Array.isArray(row) && row.length > 0 && row.every((x) => !Number.isNaN(Number(x))));

  if (!valid) {
    await Swal.fire({ icon: "error", title: "Dato inválido", text: "Debe ser un array de arrays numéricos." });
    return;
  }

  const out = mat.map((row) => Math.max(...row.map(Number)));

  await resultado({
    resHtml: `<pre style="white-space:pre-wrap">${esc(JSON.stringify(out))}</pre>`,
    expHtml: `<p>Se obtuvo el máximo de cada sub-array con <code>Math.max</code>.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 9: charIndex
------------------------------ */
async function reto2_ej9() {
  const ok = await guia({
    titulo: "Reto 2.9 — charIndex",
    descripcion: "Devuelve el primer y último índice de un carácter dentro de una palabra.",
    entradas: ["Palabra", "Carácter (1)"],
    ejemplo: 'charIndex("hello","l") → [2,3]'
  });
  if (!ok) return;

  const word = await pedirTexto({ titulo: "Palabra", placeholder: "Ej.: hello" });
  if (word === null) return;

  const ch = await pedirTexto({
    titulo: "Carácter (solo 1)",
    placeholder: "Ej.: l",
    validate: (v) => (v.length === 1 ? undefined : "Debe ser un solo carácter.")
  });
  if (ch === null) return;

  const first = word.indexOf(ch);
  const last = word.lastIndexOf(ch);

  await resultado({
    resHtml: first === -1 ? `<p>El carácter no aparece.</p>` : `<p>Salida: <b>[${first}, ${last}]</b></p>`,
    expHtml: `<p>Se usó <code>indexOf</code> y <code>lastIndexOf</code>.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 10: toArray
------------------------------ */
async function reto2_ej10() {
  const ok = await guia({
    titulo: "Reto 2.10 — toArray",
    descripcion: "Convierte un objeto en una matriz [clave, valor].",
    entradas: ["Objeto en JSON"],
    ejemplo: '{"a":1,"b":2} → [["a",1],["b",2]]'
  });
  if (!ok) return;

  const obj = await pedirJson({ titulo: "Pega el OBJETO JSON", expected: "object", ejemplo: { a: 1, b: 2 } });
  if (obj === null) return;

  const out = Object.entries(obj);

  await resultado({
    resHtml: `<pre style="white-space:pre-wrap">${esc(JSON.stringify(out))}</pre>`,
    expHtml: `<p>Se aplicó <code>Object.entries</code> para obtener pares clave-valor.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 11: getBudgets
------------------------------ */
async function reto2_ej11() {
  const ok = await guia({
    titulo: "Reto 2.11 — getBudgets",
    descripcion: "Suma los presupuestos (budget) de una matriz de objetos.",
    entradas: ["Array de objetos en JSON con propiedad budget"],
    ejemplo: '[{"name":"John","budget":23000},{"name":"Steve","budget":40000}] → 63000'
  });
  if (!ok) return;

  const people = await pedirJson({
    titulo: "Pega el ARRAY de OBJETOS (JSON)",
    expected: "array",
    ejemplo: [
      { name: "John", age: 21, budget: 23000 },
      { name: "Steve", age: 32, budget: 40000 },
      { name: "Martin", age: 16, budget: 2700 }
    ]
  });
  if (people === null) return;

  const budgets = people.map((p) => Number(p?.budget));
  if (budgets.some((b) => Number.isNaN(b))) {
    await Swal.fire({ icon: "error", title: "Dato inválido", text: "Cada objeto debe tener budget numérico." });
    return;
  }

  const total = budgets.reduce((acc, b) => acc + b, 0);

  await resultado({
    resHtml: `<p>Suma de budgets = <b>${total}</b></p>`,
    expHtml: `<p>Se extrajo <code>budget</code> y se sumó con <code>reduce</code>.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 12: getStudentNames
------------------------------ */
async function reto2_ej12() {
  const ok = await guia({
    titulo: "Reto 2.12 — getStudentNames",
    descripcion: "Devuelve una matriz solo con los nombres de estudiantes.",
    entradas: ["Array de objetos en JSON con propiedad name"],
    ejemplo: '[{"name":"Steve"},{"name":"Mike"},{"name":"John"}] → ["Steve","Mike","John"]'
  });
  if (!ok) return;

  const students = await pedirJson({
    titulo: "Pega el ARRAY de estudiantes (JSON)",
    expected: "array",
    ejemplo: [{ name: "Steve" }, { name: "Mike" }, { name: "John" }]
  });
  if (students === null) return;

  const names = students.map((s) => s?.name).filter((n) => typeof n === "string");

  await resultado({
    resHtml: `<pre style="white-space:pre-wrap">${esc(JSON.stringify(names))}</pre>`,
    expHtml: `<p>Se recorrió el array y se proyectó el campo <code>name</code>.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 13: objectToArray
------------------------------ */
async function reto2_ej13() {
  const ok = await guia({
    titulo: "Reto 2.13 — objectToArray",
    descripcion: "Convierte un objeto en una matriz de claves y valores.",
    entradas: ["Objeto en JSON"],
    ejemplo: '{"likes":2,"dislikes":3} → [["likes",2],["dislikes",3]]'
  });
  if (!ok) return;

  const obj = await pedirJson({
    titulo: "Pega el OBJETO JSON",
    expected: "object",
    ejemplo: { likes: 2, dislikes: 3, followers: 10 }
  });
  if (obj === null) return;

  const out = Object.entries(obj);

  await resultado({
    resHtml: `<pre style="white-space:pre-wrap">${esc(JSON.stringify(out))}</pre>`,
    expHtml: `<p>Se utilizó <code>Object.entries</code> para obtener <code>[clave, valor]</code>.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 14: squaresSum
------------------------------ */
async function reto2_ej14() {
  const ok = await guia({
    titulo: "Reto 2.14 — squaresSum(n)",
    descripcion: "Dado n, devuelve 1² + 2² + ... + n².",
    entradas: ["n entero (≥ 0)"],
    ejemplo: "squaresSum(3) → 14"
  });
  if (!ok) return;

  const n = await pedirNumero({ titulo: "Ingresa n (entero ≥ 0)", allowDecimal: false, allowNegative: false });
  if (n === null) return;

  let total = 0;
  for (let i = 1; i <= n; i++) total += i ** 2;

  await resultado({
    resHtml: `<p>squaresSum(${esc(n)}) = <b>${total}</b></p>`,
    expHtml: `<p>Se acumuló la suma de cuadrados iterando desde 1 hasta n.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 15: multiplyByLength
------------------------------ */
async function reto2_ej15() {
  const ok = await guia({
    titulo: "Reto 2.15 — multiplyByLength",
    descripcion: "Multiplica cada valor por la longitud total del array.",
    entradas: ["Lista numérica (coma o espacio)"],
    ejemplo: "[2,3,1,0] → [8,12,4,0]"
  });
  if (!ok) return;

  const nums = await pedirListaNumeros({ titulo: "Ingresa los números", placeholder: "Ej.: 2, 3, 1, 0" });
  if (!nums) return;

  const k = nums.length;
  const out = nums.map((x) => x * k);

  await resultado({
    resHtml: `<p>length = <b>${k}</b></p><pre style="white-space:pre-wrap">${esc(JSON.stringify(out))}</pre>`,
    expHtml: `<p>Cada elemento se transformó como <code>x ↦ x·length</code>.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 16: countdown
------------------------------ */
async function reto2_ej16() {
  const ok = await guia({
    titulo: "Reto 2.16 — countdown(n)",
    descripcion: "Devuelve un array contando desde n hasta 0.",
    entradas: ["n entero (≥ 0)"],
    ejemplo: "countdown(5) → [5,4,3,2,1,0]"
  });
  if (!ok) return;

  const n = await pedirNumero({ titulo: "Ingresa n (entero ≥ 0)", allowDecimal: false, allowNegative: false });
  if (n === null) return;

  const out = [];
  for (let i = n; i >= 0; i--) out.push(i);

  await resultado({
    resHtml: `<pre style="white-space:pre-wrap">${esc(JSON.stringify(out))}</pre>`,
    expHtml: `<p>Se generó una secuencia decreciente desde n hasta 0 (incluyéndolos).</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 17: diffMaxMin
------------------------------ */
async function reto2_ej17() {
  const ok = await guia({
    titulo: "Reto 2.17 — diffMaxMin",
    descripcion: "Devuelve la diferencia entre el mayor y el menor número del array (max − min).",
    entradas: ["Lista numérica (coma o espacio)"],
    ejemplo: "diffMaxMin([10,4,1,4,-10,-50,32,21]) → 82"
  });
  if (!ok) return;

  const nums = await pedirListaNumeros({ titulo: "Ingresa los números", placeholder: "Ej.: 10,4,1,4,-10,-50,32,21" });
  if (!nums) return;

  const mn = Math.min(...nums);
  const mx = Math.max(...nums);
  const diff = mx - mn;

  await resultado({
    resHtml: `<p>min=${mn}, max=${mx} → max-min = <b>${diff}</b></p>`,
    expHtml: `<p>Se hallaron extremos con <code>Math.min/Math.max</code> y se calculó la diferencia.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 18: filterList (solo enteros)
------------------------------ */
async function reto2_ej18() {
  const ok = await guia({
    titulo: "Reto 2.18 — filterList",
    descripcion: "Filtra las cadenas de una matriz y devuelve una nueva matriz que solo contenga enteros.",
    entradas: ["Array mixto en JSON"],
    ejemplo: '[1,2,3,"x","y",10] → [1,2,3,10]'
  });
  if (!ok) return;

  const arr = await pedirJson({
    titulo: "Pega el ARRAY JSON",
    expected: "array",
    ejemplo: [1, 2, 3, "x", "y", 10]
  });
  if (arr === null) return;

  const out = arr.filter((x) => typeof x === "number" && Number.isInteger(x));

  await resultado({
    resHtml: `<pre style="white-space:pre-wrap">${esc(JSON.stringify(out))}</pre>`,
    expHtml: `<p>Se conservaron únicamente valores numéricos enteros; los strings se eliminaron.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 19: repeat(element, times)
------------------------------ */
async function reto2_ej19() {
  const ok = await guia({
    titulo: "Reto 2.19 — repeat(element, times)",
    descripcion: "Repite un elemento la cantidad de veces indicada y lo devuelve en un array.",
    entradas: ["Elemento (texto o número)", "times (entero ≥ 0)"],
    ejemplo: "repeat(13, 5) → [13,13,13,13,13]"
  });
  if (!ok) return;

  const tipoRes = await Swal.fire({
    title: "¿Qué tipo de elemento repetir?",
    input: "select",
    inputOptions: { number: "Número", string: "Texto" },
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#4f46e5",
    didOpen: enableEnterConfirm
  });
  if (!tipoRes.isConfirmed) return;

  let element;
  if (tipoRes.value === "number") {
    element = await pedirNumero({ titulo: "Elemento numérico", allowDecimal: true });
    if (element === null) return;
  } else {
    element = await pedirTexto({ titulo: "Elemento de texto", placeholder: "Ej.: hola" });
    if (element === null) return;
  }

  const times = await pedirNumero({ titulo: "Veces (entero ≥ 0)", allowDecimal: false, allowNegative: false });
  if (times === null) return;

  const out = Array.from({ length: times }, () => element);

  await resultado({
    resHtml: `<pre style="white-space:pre-wrap">${esc(JSON.stringify(out))}</pre>`,
    expHtml: `<p>Se creó un array de longitud <b>${times}</b> replicando el mismo elemento.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 20: vreplace (String.prototype)
------------------------------ */
async function reto2_ej20() {
  const ok = await guia({
    titulo: "Reto 2.20 — vreplace",
    descripcion: "Extiende el prototipo String reemplazando todas las vocales por una vocal indicada.",
    entradas: ["Texto", "Vocal de reemplazo (a,e,i,o,u)"],
    ejemplo: '"apples and bananas".vreplace("u") → "upplus und bununus"'
  });
  if (!ok) return;

  if (typeof String.prototype.vreplace !== "function") {
    // eslint-disable-next-line no-extend-native
    String.prototype.vreplace = function (vowel) {
      const v = String(vowel ?? "").toLowerCase();
      if (!/^[aeiou]$/.test(v)) return String(this);
      return String(this).replace(/[aeiouáéíóú]/gi, (m) => (m === m.toUpperCase() ? v.toUpperCase() : v));
    };
  }

  const text = await pedirTexto({ titulo: "Texto", placeholder: "Ej.: apples and bananas" });
  if (text === null) return;

  const vowel = await pedirTexto({
    titulo: "Vocal (a/e/i/o/u)",
    placeholder: "Ej.: u",
    validate: (v) => (/^[aeiou]$/i.test(v) ? undefined : "Debe ser una vocal: a, e, i, o, u.")
  });
  if (vowel === null) return;

  const out = text.vreplace(vowel);

  await resultado({
    resHtml: `<p><b>${esc(out)}</b></p>`,
    expHtml: `<p>Se reemplazaron todas las vocales por la vocal indicada, conservando mayúsculas/minúsculas.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 21: findNemo
------------------------------ */
async function reto2_ej21() {
  const ok = await guia({
    titulo: "Reto 2.21 — findNemo",
    descripcion: 'Encuentra la palabra "Nemo" y retorna su posición (orden de palabra).',
    entradas: ["Frase (texto)"],
    ejemplo: 'findNemo("I am finding Nemo !") → "¡Encontré a Nemo en 4!"'
  });
  if (!ok) return;

  const frase = await pedirTexto({ titulo: "Frase", placeholder: "Ej.: I am finding Nemo !" });
  if (frase === null) return;

  const words = frase.trim().split(/\s+/);
  const idx = words.findIndex((w) => w.replace(/[^\w]/g, "").toLowerCase() === "nemo");
  const msg = idx >= 0 ? `¡Encontré a Nemo en ${idx + 1}!` : "Nemo no aparece...";

  await resultado({
    resHtml: `<p><b>${esc(msg)}</b></p>`,
    expHtml: `<p>Se dividió la frase por espacios y se buscó “nemo” ignorando mayúsculas.</p>`
  });
}

/* -----------------------------
   RETO 2 — EJERCICIO 22: capLast
------------------------------ */
async function reto2_ej22() {
  const ok = await guia({
    titulo: "Reto 2.22 — capLast",
    descripcion: "Capitaliza la última letra de cada palabra.",
    entradas: ["Texto"],
    ejemplo: 'capLast("hello world") → "hellO worlD"'
  });
  if (!ok) return;

  const text = await pedirTexto({ titulo: "Texto", placeholder: "Ej.: hello world" });
  if (text === null) return;

  const out = text
    .split(/\s+/)
    .map((w) => (w.length <= 1 ? w.toUpperCase() : w.slice(0, -1) + w.slice(-1).toUpperCase()))
    .join(" ");

  await resultado({
    resHtml: `<p><b>${esc(out)}</b></p>`,
    expHtml: `<p>Para cada palabra se transformó solo el último carácter a mayúscula.</p>`
  });
}

/* ============================================================
   TEORÍA
   ============================================================ */
async function teoria_1() {
  const ok = await guia({
    titulo: "Teoría — ¿Cómo defines una función?",
    descripcion: "Una función encapsula un bloque reutilizable que puede recibir parámetros y producir un resultado.",
    entradas: ["Ejemplo mental: sumar(a,b) devuelve a+b"],
    ejemplo: "const sumar = (a,b) => a + b;"
  });
  if (!ok) return;

  await resultado({
    resHtml: `<p><b>Ejemplo:</b> <code>const sumar = (a,b) =&gt; a + b;</code></p>`,
    expHtml: `<p>Las funciones facilitan reutilización, organización y lectura del programa.</p>`
  });
}

async function teoria_2() {
  const ok = await guia({
    titulo: "Teoría — ¿Cuántos argumentos declarar?",
    descripcion: "Aunque JS permite muchos parámetros, conviene mantener firmas pequeñas. Si son muchos, agrupa en objeto o usa rest.",
    entradas: ["Objeto: fn({a,b,c})", "Rest: fn(...args)"],
    ejemplo: "fn({a,b,c})  o  fn(...args)"
  });
  if (!ok) return;

  await resultado({
    resHtml: `<ul>
                <li><code>fn({a,b,c})</code> mejora legibilidad</li>
                <li><code>fn(...args)</code> permite cantidad variable</li>
              </ul>`,
    expHtml: `<p>Esto reduce errores y hace el código más mantenible.</p>`
  });
}

/* ============================================================
   ROUTER: data-action (evita que se mezclen ejercicios)
   ============================================================ */
const ACTIONS = {
  /* Reto 1 */
  "reto1-ej1": reto1_ej1,
  "reto1-ej2": reto1_ej2,
  "reto1-ej3": reto1_ej3,
  "reto1-ej4": reto1_ej4,
  "reto1-ej5": reto1_ej5,

  /* Reto 2 */
  "reto2-ej1": reto2_ej1,
  "reto2-ej2": reto2_ej2,
  "reto2-ej3": reto2_ej3,
  "reto2-ej4": reto2_ej4,
  "reto2-ej5": reto2_ej5,
  "reto2-ej6": reto2_ej6,
  "reto2-ej7": reto2_ej7,
  "reto2-ej8": reto2_ej8,
  "reto2-ej9": reto2_ej9,
  "reto2-ej10": reto2_ej10,
  "reto2-ej11": reto2_ej11,
  "reto2-ej12": reto2_ej12,
  "reto2-ej13": reto2_ej13,
  "reto2-ej14": reto2_ej14,
  "reto2-ej15": reto2_ej15,
  "reto2-ej16": reto2_ej16,
  "reto2-ej17": reto2_ej17,
  "reto2-ej18": reto2_ej18,
  "reto2-ej19": reto2_ej19,
  "reto2-ej20": reto2_ej20,
  "reto2-ej21": reto2_ej21,
  "reto2-ej22": reto2_ej22,

  /* Teoría */
  "teoria-1": teoria_1,
  "teoria-2": teoria_2
};

document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  if (!requireSwal()) return;

  const key = btn.getAttribute("data-action");
  const fn = ACTIONS[key];

  if (typeof fn !== "function") {
    await Swal.fire({ icon: "error", title: "No implementado", text: `No existe acción: ${key}` });
    return;
  }

  try {
    await fn();
  } catch (err) {
    console.error(err);
    await Swal.fire({ icon: "error", title: "Error", text: "Ocurrió un error. Revisa la consola (F12)." });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-ejercicios")?.addEventListener("click", () => {
    document.getElementById("ejercicios")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("btn-teoria")?.addEventListener("click", async () => {
    if (!requireSwal()) return;
    await Swal.fire({
      title: "Teoría",
      text: "Elige un tema desde la tarjeta de Teoría (abajo).",
      icon: "info",
      confirmButtonColor: "#4f46e5",
      didOpen: enableEnterConfirm
    });
    document.getElementById("ejercicios")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
