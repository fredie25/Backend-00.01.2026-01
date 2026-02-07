/* ============================================================
   CONFIGURACIÓN DE IMÁGENES
   ============================================================ */
const IMG_PRINCIPAL = "./Images/Neuvillete Iocn.webp"; 
const IMG_EXITO = "./Images/Good Kaveh.webp"; 
const IMG_FALLO = "./Images/Exercise Wrong.webp"; 

/* --- MOTOR DE VALIDACIÓN Y REINTENTO --- */

async function pedirDato(titulo, permitirNegativo = true, esSoloLetra = false) {
    let valido = false;
    let respuesta;

    while (!valido) {
        const { value: res } = await Swal.fire({
            title: `Hola, ${titulo}`,
            imageUrl: IMG_PRINCIPAL,
            imageWidth: 90, imageHeight: 90,
            input: 'text',
            inputPlaceholder: esSoloLetra ? "Escribe una letra..." : "Solo números, sin símbolos...",
            confirmButtonText: 'Enviar',
            showCancelButton: true,
            customClass: { popup: 'bot-popup animate__animated animate__fadeInDown' },
            confirmButtonColor: '#4f46e5'
        });

        if (res === undefined) return null; // Si cancela el prompt
        respuesta = res.trim();

        if (esSoloLetra) {
            // Validar que sea solo una letra y nada de símbolos
            if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]$/.test(respuesta)) {
                await Swal.fire({
                    title: "Letra Inválida",
                    html: `"${respuesta}" no es una letra válida o contiene símbolos/números.`,
                    icon: "warning"
                });
                continue;
            }
        } else {
            // Validar números y BLOQUEAR símbolos #$%&/()=?...
            const patronSencillo = /^-?\d+$/;
            if (!patronSencillo.test(respuesta)) {
                await Swal.fire({
                    title: "Formato Incorrecto",
                    html: `El valor "<b>${respuesta}</b>" tiene símbolos, letras o espacios.<br><b>No uses:</b> !"#$%&/()=?`,
                    icon: "warning"
                });
                continue;
            }
            if (!permitirNegativo && Number(respuesta) < 0) {
                await Swal.fire({
                    title: "Sin Negativos",
                    text: `El número ${respuesta} debe ser positivo para este ejercicio.`,
                    icon: "error"
                });
                continue;
            }
        }
        valido = true;
    }
    return respuesta;
}

function botRespuesta(mensaje, esExito = true) {
    Swal.fire({
        title: esExito ? "¡Resultado listo!" : "Atención",
        html: mensaje,
        imageUrl: esExito ? IMG_EXITO : IMG_FALLO,
        imageWidth: 90, imageHeight: 90,
        confirmButtonText: 'Entendido',
        customClass: { popup: 'bot-popup animate__animated animate__zoomIn' }
    });
}

/* ============================================================
   EJERCICIOS COMPLETOS (01 - 40)
   ============================================================ */

async function ej01() {
    let n = await pedirDato("Número de 3 dígitos:");
    if (!n) return;
    let r = (Math.abs(Number(n)) > 99 && Math.abs(Number(n)) < 1000);
    botRespuesta(`Tu número <b>${n}</b> ${r?'sí':'no'} tiene 3 dígitos.`);
}

async function ej02() {
    let n = await pedirDato("Dime un número:");
    if (!n) return;
    botRespuesta(`El <b>${n}</b> es ${Number(n)<0?'Negativo':'Positivo'}.`);
}

async function ej03() {
    let n = await pedirDato("¿Termina en 4?");
    if (!n) return;
    botRespuesta(`El número <b>${n}</b> ${n.endsWith('4')?'termina':'no termina'} en 4.`);
}

async function ej04() {
    let a=await pedirDato("N1"), b=await pedirDato("N2"), c=await pedirDato("N3");
    if (!a || !b || !c) return;
    let arr = [Number(a), Number(b), Number(c)].sort((x,y)=>x-y);
    botRespuesta(`Tus datos <b>${a}, ${b}, ${c}</b> ordenados: ${arr.join(' < ')}.`);
}

async function ej05() {
    let q = await pedirDato("¿Pares de zapatos?", false);
    if (!q) return;
    let n=Number(q), d=n>30?0.4:n>20?0.2:n>10?0.1:0;
    botRespuesta(`Por <b>${n}</b> pares: $${(n*80)*(1-d)}.`);
}

async function ej06() {
    let h = await pedirDato("Horas trabajadas:", false);
    if (!h) return;
    let t=Number(h), e=Math.max(0,t-40);
    botRespuesta(`Pago por <b>${h}</b> horas: $${(Math.min(40,t)*20)+(e*25)}.`);
}

async function ej07() {
    const {value: t} = await Swal.fire({title:'Membresía', input:'select', inputOptions:{'A':'A','B':'B','C':'C','N':'N'}});
    let m = await pedirDato("Monto:", false);
    if (!m) return;
    let d=t=='A'?0.1:t=='B'?0.15:t=='C'?0.2:0;
    botRespuesta(`Compra de <b>$${m}</b> con tipo ${t}: $${m-(m*d)}.`);
}

async function ej08() {
    let n1=await pedirDato("Nota 1", false), n2=await pedirDato("Nota 2", false), n3=await pedirDato("Nota 3", false);
    if (!n1 || !n2 || !n3) return;
    botRespuesta(`Promedio de <b>${n1}, ${n2}, ${n3}</b>: ${((Number(n1)+Number(n2)+Number(n3))/3).toFixed(2)}.`);
}

async function ej09() {
    let s = await pedirDato("Sueldo:", false);
    if (!s) return;
    let a=Number(s)>2000?0.05:0.1;
    botRespuesta(`Sueldo <b>$${s}</b> con aumento: $${(Number(s)*(1+a)).toFixed(2)}.`);
}

async function ej10() {
    let n = await pedirDato("¿Par o Impar?");
    if (!n) return;
    botRespuesta(`El <b>${n}</b> es ${Number(n)%2==0?'Par':'Impar'}.`);
}

async function ej11() {
    let a=await pedirDato("N1"), b=await pedirDato("N2"), c=await pedirDato("N3");
    if (!a || !b || !c) return;
    botRespuesta(`De <b>${a}, ${b}, ${c}</b> el mayor es ${Math.max(a,b,c)}.`);
}

async function ej12() {
    let a=await pedirDato("N1"), b=await pedirDato("N2");
    if (!a || !b) return;
    botRespuesta(`Entre <b>${a} y ${b}</b> el mayor es ${Math.max(a,b)}.`);
}

async function ej13() {
    let l = await pedirDato("Dime una letra", true, true);
    if (!l) return;
    let r = /^[aeiouáéíóú]$/i.test(l);
    botRespuesta(`La letra <b>${l}</b> ${r?'es':'no es'} vocal.`);
}

async function ej14() {
    let n = await pedirDato("Número (1-10)", false);
    if (!n) return;
    botRespuesta(`El <b>${n}</b> ${[2,3,5,7].includes(Number(n))?'es':'no es'} primo.`);
}

async function ej15() {
    let cm=await pedirDato("CM", false), lb=await pedirDato("LB", false);
    if (!cm || !lb) return;
    botRespuesta(`<b>${cm} cm</b> = ${(cm/2.54).toFixed(2)} pulg | <b>${lb} lb</b> = ${(lb/2.204).toFixed(2)} kg.`);
}

async function ej16() {
    let n = await pedirDato("Día (1-7)", false);
    if (!n) return;
    let d=["Lun","Mar","Mie","Jue","Vie","Sab","Dom"];
    botRespuesta(`El número <b>${n}</b> es ${d[Number(n)-1] || 'inválido'}.`);
}

async function ej17() {
    let h=await pedirDato("H", false), m=await pedirDato("M", false), s=await pedirDato("S", false);
    if (!h || !m || !s) return;
    let hh=Number(h), mm=Number(m), ss=Number(s);
    ss++; if(ss==60){ss=0;mm++;} if(mm==60){mm=0;hh++;} if(hh==24)hh=0;
    botRespuesta(`De <b>${h}:${m}:${s}</b> avanzamos a ${hh}:${mm}:${ss}.`);
}

async function ej18() {
    let n = await pedirDato("Cant. CDs", false);
    if (!n) return;
    let c=Number(n), p=c<=9?10:c<=99?8:c<=499?7:6;
    botRespuesta(`Por <b>${c}</b> CDs pagas $${c*p}.`);
}

async function ej19() {
    let id=await pedirDato("ID (1-4)", false), d=await pedirDato("Días", false);
    if (!id || !d) return;
    let t={1:56, 2:64, 3:80, 4:48};
    botRespuesta(`Empleado <b>${id}</b> por <b>${d}</b> días: $${(t[id]||0)*d}.`);
}

async function ej20() {
    let a=await pedirDato("N1"), b=await pedirDato("N2"), c=await pedirDato("N3"), d=await pedirDato("N4");
    if (!a||!b||!c||!d) return;
    let l=[Number(a),Number(b),Number(c),Number(d)];
    botRespuesta(`Mayor: ${Math.max(...l)}, Pares: ${l.filter(x=>x%2==0).length}. Basado en <b>${a},${b},${c},${d}</b>.`);
}

async function ej21() {
    let n = await pedirDato("Factorial", false);
    if (!n) return;
    let r=1; for(let i=1;i<=Number(n);i++) r*=i;
    botRespuesta(`El factorial de <b>${n}</b> es ${r}.`);
}

async function ej22() {
    let n = await pedirDato("Sumar hasta", false);
    if (!n) return;
    botRespuesta(`Suma del 1 al <b>${n}</b> es ${(Number(n)*(Number(n)+1))/2}.`);
}

async function ej23() {
    let n = await pedirDato("Límite impares", false);
    if (!n) return;
    let s=0; for(let i=1;i<=Number(n);i+=2) s+=i;
    botRespuesta(`Suma impares hasta <b>${n}</b> es ${s}.`);
}

async function ej24() {
    let s=0; for(let i=2;i<=1000;i+=2) s+=i;
    botRespuesta(`Suma de pares hasta el 1000 es <b>${s}</b>.`);
}

async function ej25() {
    let n = await pedirDato("Factorial", false);
    if (!n) return;
    let f=1, i=Number(n); while(i>0){f*=i;i--;}
    botRespuesta(`Factorial de <b>${n}</b> es ${f}.`);
}

async function ej26() {
    let D=await pedirDato("Dividendo", false), d=await pedirDato("Divisor", false);
    if (!D || !d) return;
    if (Number(d)==0) return botRespuesta("No divisible por cero", false);
    let c=0, r=Number(D); while(r>=Number(d)){r-=Number(d); c++;}
    botRespuesta(`<b>${D}/${d}</b>: Cociente ${c}, Resto ${r}.`);
}

async function ej27() {
    let sum=0, cont=0;
    await Swal.fire("Media", "Números positivos. Símbolos o negativos detienen.", "info");
    while(true){
        let v = await pedirDato("Dato (o cancela para terminar)");
        if (!v || Number(v)<0) break;
        sum+=Number(v); cont++;
    }
    botRespuesta(`Media: <b>${cont>0?sum/cont:0}</b>.`);
}

async function ej28() { let s=0, i=1; do{s+=i; i++;}while(i<=100); botRespuesta(`Suma 1-100: ${s}`); }
async function ej29() { let s=0, i=1; while(i<=100){s+=i; i++;} botRespuesta(`Suma 1-100: ${s}`); }
async function ej30() { let s=0; for(let i=1;i<=100;i++) s+=i; botRespuesta(`Suma 1-100: ${s}`); }

async function ej31() {
    let p=0, im=0; for(let i=0;i<10;i++){
        let v=Math.floor(Math.random()*100);
        if(v%2==0) p+=v; else im+=v;
    }
    botRespuesta(`Aleatorios: Pares ${p}, Impares ${im}.`);
}

async function ej32() {
    let m=0, id=0; for(let i=1;i<=3;i++){
        let v=Math.floor(Math.random()*100000);
        if(v>m){m=v; id=i;}
    }
    botRespuesta(`Provincia <b>${id}</b> es mayor con ${m} hab.`);
}

async function ej33() {
    for(let i=3;i<=100;i+=3) console.log(i);
    botRespuesta("Múltiplos de 3 en consola.");
}

async function ej34() {
    let n = await pedirDato("Tabla de", false);
    if (!n) return;
    let t=""; for(let i=1;i<=10;i++) t+=`${n}x${i}=${Number(n)*i}<br>`;
    botRespuesta(`<b>Tabla del ${n}:</b><br>${t}`);
}

async function ej35() {
    let l=[]; for(let i=0;i<20;i++) l.push(Math.floor(Math.random()*100));
    botRespuesta(`20 Números: Mayor ${Math.max(...l)}, Menor ${Math.min(...l)}.`);
}

async function ej36() {
    let n = await pedirDato("Cant. Fibonacci", false);
    if (!n) return;
    let c=Number(n), f=[0,1]; for(let i=2;i<c;i++) f.push(f[i-1]+f[i-2]);
    botRespuesta(`Serie de <b>${n}</b>: ${f.slice(0,c).join(', ')}.`);
}

async function ej37() {
    let a=await pedirDato("N1"), b=await pedirDato("N2");
    if (!a || !b) return;
    let n1=Math.abs(a), n2=Math.abs(b);
    while(n2!=0){let t=n2; n2=n1%n2; n1=t;}
    botRespuesta(`MCD de <b>${a} y ${b}</b> es <b>${n1}</b>.`);
}

async function ej38() {
    let n = await pedirDato("Número perfecto", false);
    if (!n) return;
    let v=Number(n), s=0; for(let i=1;i<v;i++) if(v%i==0) s+=i;
    botRespuesta(`El <b>${n}</b> ${s==v?'es':'no es'} perfecto.`);
}

async function ej39() {
    let pi=0, d=1, s=1; for(let i=0;i<10000;i++){pi+=s*(4/d); d+=2; s*=-1;}
    botRespuesta(`Pi estimado: <b>${pi.toFixed(6)}</b>.`);
}

async function ej40() {
    let pi=3, d=2, s=1; for(let i=0;i<1000;i++){pi+=s*(4/(d*(d+1)*(d+2))); d+=2; s*=-1;}
    botRespuesta(`Pi Nilakantha: <b>${pi.toFixed(6)}</b>.`);
}
