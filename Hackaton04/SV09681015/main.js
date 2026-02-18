function showTab(index) {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tabs[index].classList.add("active");
    contents[index].classList.add("active");
}
function limpiarTodo() {
    // Limpiar todos los inputs
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
    inputs.forEach(input => input.value = '');
    // Limpiar todos los divs de resultado
    const resultados = document.querySelectorAll('.resultado, [id^="r"]');
    resultados.forEach(resultado => {
        if (resultado.tagName === 'TABLE') {
            resultado.innerHTML = ''; // Para tablas
        } else {
            resultado.textContent = ''; // Para divs normales
        }
    });
    console.log('Campos limpiados');
}
//--- RETO 1 --//
function ej1() {
    const a = Number(e1a.value);
    const b = Number(e1b.value);
    r1.textContent = a + b;
}
function ej2() {
    const num = Number(e2a.value);
    const pot = Number(e2b.value);
    r2.textContent = num ** pot;
}
function ej3() {
    const a = Number(e3a.value);
    const b = Number(e3b.value);
    const c = Number(e3c.value);

    r3.textContent = a**3 + b**3 + c**3;
}
function ej4() {
    const base = Number(e4a.value);
    const altura = Number(e4b.value);
    r4.textContent = (base * altura) / 2;
}
function ej5() {
    const calculator = (a, op, b) => {
        switch (op) {
            case "+": return a + b;
            case "-": return a - b;
            case "*":
            case "x": return a * b;
            case "/": return b !== 0 ? a / b : "No se puede dividir por 0";
            case "%": return a % b;
            default: return "El parámetro no es reconocido";
        }
    };
    const a = Number(num1.value);
    const b = Number(num2.value);
    const op = operacion.value.trim();
    r5.textContent = (!isNaN(a) && !isNaN(b))
        ? calculator(a, op, b)
        : "Ingrese números válidos";
}

//-- RETO 2 --//
/*-- EJERCICIO 01 --*/
function eje1() {
    const saludo = (nombre, apellido, edad) =>
        `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad} años`;
    re1.textContent = saludo(eje1a.value, eje1b.value, eje1c.value);
}
/*-- EJERCICIO 02 --*/
function eje2() {

    const sumOfCubes = (...nums) =>
        nums.reduce((acc, n) => acc + n ** 3, 0);
    const nums = eje2txt.value
        .split(",")
        .map(n => Number(n.trim()))
        .filter(n => !isNaN(n));
    re2.textContent = nums.length
        ? sumOfCubes(...nums)
        : "Ingrese números válidos";
}
/*-- EJERCICIO 03 --*/
function eje3() {

    const tipo = v =>
        Array.isArray(v) ? "array"
        : v === null ? "null"
        : typeof v;
    try {
        const valor = eval(eje3txt.value);
        re3.textContent = tipo(valor);
    } catch {
        re3.textContent = "Valor no válido";
    }
}
/*-- EJERCICIO 04 --*/
function eje4() {

    const sumar = (...nums) =>
        nums.reduce((acc, n) => acc + n, 0);
    const nums = eje4txt.value
        .split(",")
        .map(n => Number(n.trim()))
        .filter(n => !isNaN(n));
    re4.textContent = nums.length
        ? sumar(...nums)
        : "Ingrese números válidos";
}
/*-- EJERCICIO 05 --*/
function eje5() {

    const valores = eje5txt.value
        .split(",")
        .map(v => v.trim());
    re5.textContent = JSON.stringify(
        valores.filter(v => isNaN(v) || v === "")
    );
}
/*-- EJERCICIO 06 --*/
function eje6() {

    const nums = eje6txt.value
        .split(",")
        .map(n => Number(n.trim()))
        .filter(n => !isNaN(n));
    re6.textContent = nums.length
        ? JSON.stringify([Math.min(...nums), Math.max(...nums)])
        : "Ingrese números válidos";
}
/*-- EJERCICIO 07 --*/
function eje7() {

    const nums = eje7txt.value
        .split(",")
        .map(n => Number(n.trim()))
        .filter(n => Number.isInteger(n) && n >= 0 && n <= 9);
    re7.textContent = nums.length === 10
        ? `(${nums.slice(0,3).join("")}) ${nums.slice(3,6).join("")}-${nums.slice(6).join("")}`
        : "Debe ingresar exactamente 10 números entre 0 y 9";
}
/*-- EJERCICIO 08 --*/
function eje8() {

    try {
        const arr = JSON.parse(eje8txt.value);
        re8.textContent = JSON.stringify(
            arr.map(sub => Math.max(...sub))
        );
    } catch {
        re8.textContent = "Ingrese un JSON válido";
    }
}
/*-- EJERCICIO 09 --*/
function eje9() {

    const str = eje9txt.value;
    const char = eje9char.value;
    if (!str || !char) {
        re9.textContent = "Ingrese palabra y carácter";
        return;
    }
    const first = str.indexOf(char);
    const last = str.lastIndexOf(char);
    re9.textContent = first === -1
        ? "Carácter no encontrado"
        : JSON.stringify([first, last]);
}
/*-- EJERCICIO 10 --*/
function eje10() {

    try {
        re10.textContent = JSON.stringify(
            Object.entries(JSON.parse(eje10txt.value))
        );
    } catch {
        re10.textContent = "Ingrese un JSON válido";
    }
}
/*-- EJERCICIO 11 --*/
function eje11() {

    try {
        const arr = JSON.parse(eje11txt.value);
        re11.textContent = arr
            .reduce((acc, p) => acc + Number(p.budget || 0), 0);
    } catch {
        re11.textContent = "Ingrese un JSON válido";
    }
}
/*-- EJERCICIO 12 --*/
function eje12() {
    try {
        const arr = JSON.parse(eje12txt.value);
        re12.textContent = JSON.stringify(
            arr.map(s => s.name)
        );
    } catch {
        re12.textContent = "Ingrese un JSON válido";
    }
}
/*-- EJERCICIO 13 --*/
function eje13() {

    try {
        const obj = JSON.parse(eje13txt.value);

        re13.textContent = JSON.stringify(Object.entries(obj));

    } catch {
        re13.textContent = "Ingrese un JSON válido";
    }
}
/*-- EJERCICIO 14 --*/
function eje14() {

    const n = Number(eje14num.value);
    re14.textContent = !isNaN(n) && n > 0
        ? Array.from({length: n}, (_, i) => (i+1) ** 2)
              .reduce((a,b) => a + b, 0)
        : "Ingrese un número válido mayor a 0";
}
/*-- EJERCICIO 15 --*/
function eje15() {

    const nums = eje15txt.value
        .split(",")
        .map(n => Number(n.trim()))
        .filter(n => !isNaN(n));
    re15.textContent = nums.length
        ? JSON.stringify(nums.map(n => n * nums.length))
        : "Ingrese números válidos";
}
/*-- EJERCICIO 16 --*/
function eje16() {
    const n = Number(eje16num.value);
    re16.textContent = !isNaN(n) && n >= 0
        ? JSON.stringify(Array.from({length: n + 1}, (_, i) => n - i))
        : "Ingrese un número válido mayor o igual a 0";
}
/*-- EJERCICIO 17 --*/
function eje17() {

    const nums = eje17txt.value
        .split(",")
        .map(n => Number(n.trim()))
        .filter(n => !isNaN(n));
    nums.length
        ? re17.textContent = Math.max(...nums) - Math.min(...nums)
        : re17.textContent = "Ingrese números válidos";
}
/*-- EJERCICIO 18 --*/
function eje18() {

    const texto = eje18txt.value.trim();
    if (texto === "") {
        re18.textContent = "Ingrese valores separados por coma";
        return;
    }
    const array = texto.split(",").map(item => item.trim());
    const procesado = array.map(item => {
        return !isNaN(item) && item !== "" 
            ? Number(item) 
            : item;
    });
    const filterList = arr =>
        arr.filter(n => Number.isInteger(n));
    const resultado = filterList(procesado);
    re18.textContent = JSON.stringify(resultado);
}
/*-- EJERCICIO 19 --*/
function eje19() {
    const elemento = eje19el.value.trim();
    const veces = Number(eje19times.value);
    if (elemento === "") {
        re19.textContent = "Ingrese un elemento válido";
        return;
    }
    if (isNaN(veces) || veces <= 0) {
        re19.textContent = "Ingrese una cantidad válida mayor a 0";
        return;
    }
    const repeat = (el, times) =>
        Array(times).fill(
            isNaN(el) ? el : Number(el)
        );
    re19.textContent = JSON.stringify(repeat(elemento, veces));
}
/*-- EJERCICIO 20 --*/
String.prototype.vreplace = function(vocal) {
    return this.replace(/[aeiou]/gi, vocal);
};
function eje20() {
    const texto = eje20txt.value.trim();
    const vocal = eje20vocal.value.trim().toLowerCase();
    // Validaciones
    if (texto === "" || vocal === "") {
        re20.textContent = "Ingrese texto y una vocal";
        return;
    }
    if (!"aeiou".includes(vocal)) {
        re20.textContent = "Debe ingresar una vocal válida (a,e,i,o,u)";
        return;
    }
    re20.textContent = texto.vreplace(vocal);
}
/*-- EJERCICIO 21 --*/
function eje21() {
    const texto = eje21txt.value.trim();
    if (texto === "") {
        re21.textContent = "Ingrese una frase válida";
        return;
    }
    const palabras = texto.split(" ");
    const index = palabras.findIndex(p =>
        p.replace(/[^\w]/g, "") === "Nemo"
    );
    if (index === -1) {
        re21.textContent = "No encontré a Nemo 😢";
    } else {
        re21.textContent = `¡Encontré a Nemo en la posición ${index + 1}!`;
    }
}
/*-- EJERCICIO 22 --*/
function eje22() {
    const texto = eje22txt.value.trim();
    if (texto === "") {
        re22.textContent = "Ingrese texto";
        return;
    }
    const capLast = str =>
        str.split(" ")
           .map(w => 
                w.length > 1
                ? w.slice(0,-1) + w.slice(-1).toUpperCase()
                : w.toUpperCase()
           )
           .join(" ");
    re22.textContent = capLast(texto);
}