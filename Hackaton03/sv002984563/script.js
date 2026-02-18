console.log("Hackaton 3");

function Ejercicio01(){

    console.log("Inicio de ejercicio 1");
    let strNumero = prompt("Ingresa un numero para saber si tiene tres digitos: ");

    let numero = Number.parseInt(strNumero);

    if (Number.isNaN(numero)){
        Swal.fire({
            title: "Respuesta",
            text: "Debes digitar numeros, no palabras",
            icon: "error"
        });
    } else {
        if (numero >90 && numero <1000) {
            Swal.fire({
            title: "Respuesta",
            text: "Si tiene 3 digitos",
            icon: "success"
        });
        }
        else{
            Swal.fire({
            title: "Respuesta",
            text: "No tiene 3 digitos",
            icon: "error"
        });
        }
    } 
    console.log(typeof(numero));
    console.log(numero);
    console.log("Fin de ejercicio 01");
}

function Ejercicio02(){

    console.log("Inicio de ejercicio 2");
    let strNumero = prompt("Ingresa un numero para determinar si es negativo: ");

    let numero = Number.parseInt(strNumero);

    if (Number.isNaN(numero)){
        Swal.fire({
            title: "Respuesta",
            text: "Debes digitar numeros, no palabras",
            icon: "error"
        });
    } else {
        if (numero <0) {
            Swal.fire({
            title: "Respuesta",
            text: "Es un numero negativo",
            icon: "success"
        });
        }
        else{
            Swal.fire({
            title: "Respuesta",
            text: "No es un numero negativo",
            icon: "success"
        });
        }
    } 
    console.log(typeof(numero));
    console.log(numero);
    console.log("Fin de ejercicio 01");
}

function Ejercicio03(){

    console.log("Inicio de ejercicio 3");
    let strNumero = prompt("Ingresa un numero para determinar si termina en 4: ");

    let numero = Number.parseInt(strNumero);

    if (Number.isNaN(numero)){
        Swal.fire({
            title: "Respuesta",
            text: "Debes digitar numeros, no palabras",
            icon: "error"
        });
    } else {
        if (numero <0){
            numero = numero * (-1);
        };
    } 

    let ultimo = numero % 10;

    if(ultimo === 4){
            Swal.fire({
            title: "Respuesta",
            text: "Si termina en 4",
            icon: "success"
        });
    } else{
            Swal.fire({
            title: "Respuesta",
            text: "No termina en 4",
            icon: "error"
        });
    }
    console.log(typeof(numero));
    console.log(numero);
    console.log("Fin de ejercicio 02");
}

function Ejercicio04(){
    console.log("Inicio de ejercicio 4");
    let a = Number(prompt("Ingresa tu primer numero"));
    let b = Number(prompt("Ingresa tu segundo numero"));
    let c = Number(prompt("Ingresa tu tercer numero"));

    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)){
        Swal.fire({
            title: "Respuesta",
            text: "Debes digitar numeros, no palabras",
            icon: "error"
        });
    }

    let menor;
    let mayor;

  //Definir numero menor
  if (a < b && a < c){
    menor = a;
  } else if (b < a && b < c) {
        menor = b;
    } else {
        menor = c;
    }
  

  //Definir numero mayor
  if (a > b && a > c){
    mayor = a;
  } else if (b > a && b > c){
        mayor = b;
    } else {
        mayor = c;
    }

  //Definir numero del medio
  let medio = a + b + c - menor - mayor;

    Swal.fire({
            title: "Respuesta",
            text: "Ordenados de menor a mayor: " + menor + "," + medio + "," + mayor, 
            icon: "success"
        });

  console.log("Menor: ", menor);
  console.log("medio: ", medio);
  console.log("mayor ", mayor);

}

function Ejercicio05(){
    console.log("Inicio ejercicio 5")

    let Respuesta;
    let precio = 80;
    let a = 0.9;
    let b = 0.8; 
    let c = 0.6;

    let numero = Number(prompt("Ingresa la cantidad de zapatos que quieres: "))
    

    if (Number.isNaN(numero)){
        Swal.fire({
            title: "Respuesta",
            text: "Debe ingresar numeros, no letras", 
            icon: "error"
        });
    } else if (numero < 0){
        Swal.fire({
            title: "Respuesta",
            text: "Debe ingresar numeros positivos", 
            icon: "error"
        });
    } 
    
    if (numero >= 10 && numero <= 20) {
         Respuesta = numero * precio * a
     } else if (numero >= 21 && numero <= 30) {
         Respuesta = numero * precio * b
     } else {
          Respuesta = numero * precio * c
        }

     Swal.fire({
         title: "Respuesta",
         text: "Su monto a pagar es: " + Respuesta, 
         icon: "success"
       });

     console.log("Su monto a cancelar es: ", Respuesta)

}

function Ejercicio06(){

    console.log("Inicio de ejercicio 6")

    let precio1 = 20;
    let precio2 = 25;
    let n = 40;
    let pago;

    let numero = Number(prompt("Ingrese la cantidad de horas trabajadas: "));
    if (numero > n){
        pago = n * precio1 + (numero - n) * precio2
    } else {
        pago = numero * precio1
    }

    console.log("El pago es de: " + pago)
    Swal.fire({
        title: "Respuesta",
        text: "El pago es de: " + pago,
        icon: "success"
    })
}

function Ejercicio07(){

    console.log("Inicio de ejercicio 7")

    let membresia = prompt("Ingrese su tipo de membresia (a, b, c): ");
    let resultado;
    membresia = membresia.toLowerCase();


    if (membresia === "a"){
        resultado = 10 
    } else if (membresia === "b"){
        resultado = 15 
    } else if (membresia === "c") {
         resultado = 20 
    } else {
        resultado = "Membresia invalida"
    }

    console.log("Descuento de: " + resultado)
    Swal.fire({
        title: "Respuesta",
        text: "Usted tiene un descuento de: " + resultado,
        icon: "success"
    })        
}

function Ejercicio08(){
 
   console.log("Inicio de ejercicio 8");

    let a = Number(prompt("Ingresa tu primera nota: "));
    let b = Number(prompt("Ingresa tu segunda nota: "));
    let c = Number(prompt("Ingresa tu tercera nota: "));
   
    let promedio = (a + b + c) / 3
    if (promedio >= 0 && promedio <= 9){
        Swal.fire({
            title: "Respuesta",
            text: "No esta aprobado", 
            icon: "error"
        });
    } else if (promedio >= 10 && promedio <= 20) {
        Swal.fire({
            title: "Respuesta",
            text: "Esta aprobado",
            icon: "success"
        })
    } 
    console.log("Fin de ejercicio 8")
}

function Ejercicio09(){

    console.log("Inicio de ejrcicio 9")
    let sueldo = Number(prompt("Ingresa tu suedo: "));
    let aumento;

    if (sueldo > 2000){
        aumento = sueldo * 0.05
    } else {
        aumento = sueldo * 0.1
    }

    sueldoFinal = sueldo + aumento
    Swal.fire({
            title: "Respuesta",
            text: "Tu sueldo sera: " + sueldoFinal,
            icon: "success"
    })
    console.log("Fin del ejercicio 9")
}

function Ejercicio10(){

    console.log("Inicio de ejercicio 10")
    let n = Number(prompt("Escribe un numero: "))
    let n1;

    if (n % 2 === 0){
        Swal.fire({
            title: "Respuesta",
            text: "Es numero par",
            icon: "success"
        })
    } else {
          Swal.fire({
            title: "Respuesta",
            text: "Es numero impar",
            icon: "success"
        })
    }
    console.log("Fin del ejercicio 10")

}

function Ejercicio11(){

    console.log("Inicio de ejercicio 11")

    let a = Number(prompt("Ingresa tu primer numero: "));
    let b = Number(prompt("Ingresa tu segundo numero: "));
    let c = Number(prompt("Ingresa tu tercer numero: "))

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        Swal.fire({
            title: "Error",
            text: "Debes ingresar un numero: ",
            icon: "error"
        });
        return;
    }

   let mayor = a;

   if (b > mayor) mayor = b 
   
   if (c > mayor)mayor = c

     Swal.fire({
            title: "Respuesta",
            text: "El numero mayor es: " + mayor,
            icon: "success"
        });
        console.log("Fin del ejercicio 11")
}

function Ejercicio12(){

    console.log("Inicio de ejercicio 12")
    let a = Number(prompt("Ingresa tu primer numero"));
    let b = Number(prompt("Ingresa tu segundo numero"));

    let mayor = a
    if (b > mayor){
        mayor = b
    }
    Swal.fire({
        title: "Respuesta",
        text: "El numero mayor es: " + mayor,
        icon: "success"
    })
    console.log("Fin del ejercicio 12")
}

function Ejercicio13(){

    console.log("Inicio de ejercicio 13")
    let letras = prompt("Ingrese una letra: ")
    let resultado;

    letras = letras.toLowerCase(letras)
    switch (letras) {
        case "a":
            resultado = "Si es vocal";
            break;
        case "e":
            resultado = "Si es vocal";
            break;
        case "i":
            resultado = "Si es vocal";
            break;
        case "o":
            resultado = "Si es vocal";
            break;
        case "u":
            resultado = "Si es vocal";
            break;
        default:
            resultado = "No es vocal";
            break;
    }
     
    Swal.fire({
        title: "Respuesta",
        text: resultado,
        icon: "info"
    }) 

    console.log("Fin del ejercicio 13")
}

function Ejercicio14(){

    console.log("Inicio de ejercicio 14")
    let numero = Number(prompt("Ingrese un numero del 1 al 10"))
    let esPrimo; 

    if (isNaN(numero) || numero < 1 || numero > 10) {
        Swal.fire({
            title: "Error",
            text: "Debe ingresar un numero del 1 al 10",
            icon:"error"
        });
        return;
    }

    switch (numero){
        case "2":
             esPrimo = true;
            break;
        case "3":
             esPrimo = true;
            break;
        case "5":
             esPrimo = true;
            break;
        case "7":
            esPrimo = true;
            break;
        default:
            esPrimo = false;
    } 

    if (esPrimo){
         Swal.fire({
              title: "Respuesta",
              text: "El numero es primo",
              icon: "success"
        });
    } else {
         Swal.fire({
             title: "Respuesta",
             text: "El numero no es primo",
             icon: "error"
            });
     }

        console.log("Fin del ejercicio 14")
}

function Ejercicio15(){
 
    console.log("Inicio de ejercicio 15")

    factorCmPulg = 0.393701
    factorLbKg = 0.453592

    let opcion = Number(prompt("Ingrese la opcion a realizar (1-2)"))

    if (opcion < 1 || opcion > 2){
        Swal.fire({
            title: "Error",
            text: "Operacion no valida",
            icon: "error"
        });
    }

    let numero = Number(prompt("Ingrese el numero a convertir"));
    let resultado;

    if (opcion === 1){
        resultado = numero * factorCmPulg
    } Swal.fire({
        title:"Respuesta",
        text: numero + " pulgadas serian " + resultado + " pulgadas ",
        icon: "success"
    });

    if (opcion === 2){
        resultado = numero * factorLbKg
    } Swal.fire({
        title: "Respuesta",
        text: numero + " libras serian " + resultado + " kilogramo ",
        icon: "success"
    });

    console.log("Fin del ejercicio 15")
}

function Ejercicio16(){

    console.log("Inicico de ejercicio 16")

    let d = Number(prompt("Ingrese el numero que corresponde al dia (1-7)"));
    let resultado;

    switch(d){
        case 1:
            resultado = "Lunes";
            break;

         case 2:
            resultado = "Martes";
            break;

         case 3:
            resultado = "Miercoles";
            break;

         case 4:
            resultado = "Jueves";
            break;

        case 5:
            resultado = "Viernes";
            break;

        case 6:
            resultado = "Sabado";
            break;

        case 7:
            resultado = "Domingo"
             break;
        default:
            resultado = "Ingrese un numero correcto"
    }

    Swal.fire({
        title: "Respuesta",
        text: resultado,
        icon: "success"
    })
    console.log("Fin del ejercicio 16")
}

function Ejercicio17(){

    console.log("Inicio de ejercicio 17")

   let H, M, S;
    do{
        H = parseInt(prompt("Ingrese las horas:(0-23)"));
        if (H < 0 || H > 23 || isNaN(H)){
            alert("Error: la hora ingresada es incorrecta");
        } 
    } while (!(H >= 0 && H <= 23));

    do{
        M = parseInt(prompt("Ingrese los minutos:(0-59)"));
        if (M < 0 || M > 59 || isNaN(M)){
            alert("Error: los minutos ingresados son incorrectos");
        } 
    } while (!(M >= 0 && M <= 59));

     do{
        S = parseInt(prompt("Ingrese los segundos:(0-59)"));
        if (S < 0 || S > 59 || isNaN(S)){
            alert("Error: los segundos ingresados son incorrectos");
        } 
    } while (!(S >= 0 && S <= 59));

    let sNew = S + 1;
    let mNew = M;
    let hNew = H;

    if (sNew > 59){
        sNew = 0;
        mNew = mNew + 1;
    } if (mNew > 59){
        mNew = 0;
        hNew = hNew + 1;
    } if ( hNew > 23) {
        hNew = 0
    }
    
    Swal.fire({
        title: "Respuesta",
        text: "Hora +1 seg: " + hNew + ":" + mNew + ":" + sNew,
        icon: "info"
    }) 

    console.log("Fin del ejercicio 17")
    
}

function Ejercicio18(){

    console.log("Inicio de ejercicio 18")

    let numP = Number(prompt("Ingrese la cantidad de productos: "))
    pGanancia = 8.25
    if (numP >= 500){
        precio = 6;
    } else if (numP >= 100){
            precio = 7;
        } else  if (numP >= 10){
                precio = 8;
            } else
                precio = 10;

    pCliente = precio * numP
    gVendedor = pCliente * (pGanancia / 100)

     Swal.fire({
        title: "Respuesta",
        html:`
        <p><strong>El monto a pagar por la compra es de : $</strong>$${pCliente}</p>
        <p><strong>La ganancia del vendedor es de: $</strong>$${gVendedor}</p>
        `,
        icon: "success"
    }) 

    console.log("Fin del ejercicio 18")
}

function Ejercicio19(){

    console.log("Inicio de ejercicio 19")

    let t = parseInt(prompt(`Ingrese codigo de trabajador:\n`+
        "1. Cajero \n"+ "2. Servidor \n" + "3. Preparador de mezclas \n" + "4. Mantenimiento"
    ));

    switch (t){
        case 1:
            t = 56
        case 2:
            t = 64
        case 3:
            t = 80
        case 4:
            t = 48
        default:
             Swal.fire({
        title: "Respuesta",
        text: "Codigo de trabajador incorrecto",
        icon: "error"
       })
    }
     
    let d = parseInt(prompt("Ingrese numero de dias trabajados (1-6)"));
    let pago = d * t

    if (d > 6){
        Swal.fire({
        title: "Respuesta",
        text: "Numero de dias incorrectos",
        icon: "error"
    })
    } else
        Swal.fire({
        title: "Respuesta",
        text: "Al empleado le corresponde: $" + pago,
        icon: "successr"
    })
    
    console.log("Fin del ejercicio 19") 
}

function Ejercicio20(){
    console.log("Inicio de ejercicio 20");

    Swal.fire({
        title: "Ingrese 4 numeros: ",
        html: `
        <input id="n1" class="swal2-input"
     placeholder="Primer numero"> 
        <input id="n2" class="swal2-input"
     placeholder="Segundo numero">
        <input id="n3" class="swal2-input"
     placeholder="Tercer numero">
        <input id="n4" class="swal2-input"
     placeholder="Cuarto numero">
        `,
        confirmButtonText: "Aceptar",
        preConfirm: () => {
            return [

                Number(document.getElementById("n1").value),
                Number(document.getElementById("n2").value),
                Number(document.getElementById("n3").value),
                Number(document.getElementById("n4").value)
            ];
        }
    }).then(result => {
        let n1 = result[0];
        let n2 = result[1];
        let n3 = result[2];
        let n4 = result[3];
    });

    //numeros pares
    
    if (n1 % 2 === 0){
        pares = pares + 1
    }
     if (n2 % 2 === 0){
        pares = pares + 1
    }
     if (n3 % 2 === 0){
        pares = pares + 1
    }
     if (n4 % 2 === 0){
        pares = pares + 1
    }

    let pares 
    let res1= "Hay " + pares + "numeros pares"

    let mayor;

    //numero mayor

    if (n1 >= n2 && n1 >= n3 && n1 >= n4){
        mayor = n1
    } else if (n2 >= n1 && n2 >= n3 && n2 >= n4){
        mayor = n2
    } else if (n3 >= n1 && n3 >= n2 && n3 >= n4){
        mayor = n3
    } else 
        mayor = n4

        let res2 = "El numero mayor es: " + mayor;

    
        //condicion 3
    let esPar;
    if (n3 % 2 === 0) {
        esPar = true
    } else 
        esPar = false

    let a = n2 * n2;
    let res3;
    if (esPar){
        res3 = "El cuadrado del segundo: " + a;
    } else
        res3 = "Tercer numero no es par"

    //condicion 4
    let b = (n1 + n2 + n3 + n4 ) / 4;
    let res4;
    if (n1 < n4){
         res4 = "La suma de los 4 numeros es: " + b;
    }

    //condicion 5
    let suma;
    let res5;
  if (n2 > n3 && n3 >= 50 && n3 <= 700){
    suma =(n1 + n2 + n3 + n4);
    res5 = "La suma de los numeros es: " + suma;
  }

  Swal.fire({
    title: "Resultados",
    html:`
    <p><strong>Resultado 1:</strong>${res1}</p>
    <p><strong>Resultado 2:</strong>${res2}</p>
    <p><strong>Resultado 3:</strong>${res3}</p>
    <p><strong>Resultado 4:</strong>${res4}</p>
    <p><strong>Resultado 5:</strong>${res5}</p>
    `, 
    icon: "success"
  });
  console.log("Fin del ejercicio 20")
}

function Ejercicio21(){

    console.log("Inicio de ejercicio 21");
    let numero = parseInt(prompt("Ingresa un numero: "));

    let factorial = 1

    for (let i = 1; i <= numero; i++){
         factorial = factorial * i
    }

    Swal.fire({
            title: "Respuesta",
            text: "El factorial de " + numero + " es: " + factorial,
            icon: "success"
    });

    console.log("Fin de ejercicio 21")
}

function Ejercicio22(){

    console.log("Inicio de jercicio 22");

    let n = parseInt(prompt("Ingrese un numero: "));
    let r = n * (n + 1) / 2;

     Swal.fire({
            title: "Respuesta",
            text: "La suma de los primeros " + n + " numeros es: " + r,
            icon: "success"
    });
    console.log("Fin del ejercicio 22")
}

function Ejercicio23(){

    console.log("Inicio de ejercicio 23")
    let n = parseInt(prompt("Inserta un numero: "));
    let suma = 0;

    for (i = 1; i <= n; i++){
        if (i % 2 !== 0) {
            suma = suma + i
        }
    }
    Swal.fire({
            title: "Respuesta",
            text: "La suma de los numeros impares que contiene el numero " + n + " es: " + suma,
            icon: "success"
    });
    console.log("Fin del ejercicio 23")
}

function Ejercicio24(){
 
    console.log("Inicio de ejercicio 24");

    let n =parseInt(prompt("Inserte un numero del 1  al 1000"));
    suma = 0;

    for (i = 1; i <= n; i++){
          if (i % 2 === 0) {
            suma = suma + i
        }
    }
      Swal.fire({
            title: "Respuesta",
            text: "La suma de los numeros pares que contiene el numero " + n + " es: " + suma,
            icon: "success"
    });
    console.log("Fin del ejercicio 24")
}

function Ejercicio25(){

    console.log("Inicio del ejercicio 25");
    let n = parseInt(prompt("Inserte un numero:"));
    let f = 1;
    let i =1;

    while (i <= n){
        f = f * i
        i = i + 1
    }
      
    Swal.fire({
        title: "Respuesta",
        text: "El factorial es: " + f,
        icon: "success"
    });
    console.log("Fin del ejercicio 25")
}

function Ejercicio26(){
    console.log("Inicio de ejercicio 26");

    let a = parseInt(prompt("Ingresar dividendo"));
    let b = parseInt(prompt("Ingresar divisor"));

    if (b === 0){
        Swal.fire({
        title: "Respuesta",
        text: "Error: no se puede dividir entre 0",
        icon: "error"
    });
    }
    
    let c = 0;
    let r = a;
    if (c === 0){
        r = a
    }

    while ( r >= b){
        r = r - b
        c = c + 1
    }
    Swal.fire({
        title: "Respuesta",
        html:`
        <p><strong>Resto:</strong>${r}</p>
        <p><strong>Cociente:</strong>${c}</p>
        `,
        icon: "success"
    });
    console.log("Fin del ejercicio 26")
}

function Ejercicio27(){
    console.log("Inivio de ejercicio 27");

    let suma = 0;
    let op = 0;
    let media;
    let n = Number(prompt("Inserte numero"));

    while (n >= 0) {
        suma = suma + n
        op = op + 1
        

        media = media / op;
        Swal.fire({
        title: "Respuesta",
        text: "La media de la lista de numeros es: " + media,
        icon: "success"
    });

    n = Number(prompt("Inserte numero"));
    } 
    if ( n < 0) {
        Swal.fire({
        title: "Respuesta",
        text: "No se ingreso numero positivo",
        icon: "error"
    });
    }
    console.log("Fin del ejercicio 27")
}

function Ejercicio28(){

    console.log("Inicio de ejercicio 28");

    let suma = 0;
    let a = 1;
    do (
        suma = suma + a,
        a = a + 1
    ) 
    while (!(a > 100));
    Swal.fire({
        title: "Respuesta",
        text: "La suma de los primeros 100 numeros es: " + suma,
        icon: "success"
    });
    console.log("Fin del ejercicio 28")
}

function Ejercicio29(){

     console.log("Inicio de ejercicio 29");

    let suma = 0;
    let a = 1;
    while (a <= 100){
        suma = suma + a,
        a = a + 1
    };
     Swal.fire({
        title: "Respuesta",
        text: "La suma de los primeros 100 numeros es: " + suma,
        icon: "success"
    });
    console.log("Fin del ejercicio 29")
}

function Ejercicio30(){
      console.log("Inicio de ejercicio 30");

    let suma = 0;
    for (a = 1; a <= 100; a++ ){
        suma = suma + a
    }
      Swal.fire({
        title: "Respuesta",
        text: "La suma de los primeros 100 numeros es: " + suma,
        icon: "success"
    });
    console.log("Fin del ejercicio 30")
}

function Ejercicio31(){
    console.log("Inicio de ejercicio 31");

    let pares;
    let nPares;
    let impares;
    let nImpares;
    for (i = 1; i <= 100; i++){
        let n = Number(prompt("Ingresa un numero"))

        if (n % 2 === 0) {
            pares = pares + n
            nPares = nPares + 1
        } else {
            impares = impares + 1
            nImpares = nImpares + 1
        }

        let mPares;
        if (nPares > 0){
            mPares = pares / nPares

            Swal.fire({
               title: "Respuesta",
               text: "La media de los numeros pares es: " + mPares,
               icon: "success"
           });
            
        } else {
            Swal.fire({
              title: "Respuesta",
              text: "No hay numeros pares",
              icon: "error"
           });
        }

        let mImpares;
        if (nInpares > 0){
            mImpares = impares / nimPares

            Swal.fire({
               title: "Respuesta",
               text: "La media de los numeros pares es: " + mPares,
               icon: "success"
           });
            
        } else {
            Swal.fire({
              title: "Respuesta",
              text: "No hay numeros pares",
              icon: "error"
           });
        }
    }
    console.log("Fin de ejercicio 31")

}

function Ejercicio32(){

    console.log("Inicio de ejercicio 32");

    let mayorPoblacion = 0;
    let ciudadMasPoblada = "";

    for (let a = 1; a <= 11; a++){
        let ciudad = prompt("Ingresa el nombere de la ciudad: ");
        let poblacion = parseInt(prompt("Ingresa el numero de poblacion: "));

        if (poblacion > mayorPoblacion) {
            mayorPoblacion = poblacion;
            ciudadMasPoblada = ciudad;
        }
    }

     Swal.fire({
         title: "Respuesta",
         text: "La ciudad mas poblada es: " + ciudadMasPoblada + " con " + mayorPoblacion + " habitantes ",
         icon: "success"
       });
    
       console.log("Fin del ejercicio 32")
}

function Ejercicio33(){        

    console.log("Inicio de ejercicio 33");

    do {

        let t = parseInt(prompt(`Ingrese codigo de trabajador:\n`+
          "1. Cajero \n"+ "2. Servidor \n" + "3. Preparador de mezclas \n" + "4. Mantenimiento"
        ));

       switch (t){
        case 1:
            t = 56
        case 2:
            t = 64
        case 3:
            t = 80
        case 4:
            t = 48
        default:
             Swal.fire({
               title: "Respuesta",
               text: "Codigo de trabajador incorrecto",
               icon: "error"
           })
        }
     
        let d = parseInt(prompt("Ingrese numero de dias trabajados (1-6)"));
        let pago = d * t

       if (d > 6){
          Swal.fire({
              title: "Respuesta",
              text: "Numero de dias incorrectos",
              icon: "error"
            })
        } else
            Swal.fire({
                title: "Respuesta",
                text: "Al empleado le corresponde: $" + pago,
                icon: "successr"
           })
        
    } while (cierre === "n" || cierre === "N")

        let cierre = prompt("¿quieres hacer otra operacion? (s/n)")
   
}

function Ejercicio34(){

    console.log("Inicio de jercicio 34")

    let n = parseInt(prompt("Ingresa el numero segun la tabla de multiplicar: "));
    let resultadoText = "";

    for (let a = 1; a <= 10; a++){
        let resultado = n * a
        resultadoText +=  n + " x " + a + " = " + resultado + " / "

        Swal.fire({
               title: "Respuesta",
               text: resultadoText,
               icon: "success"
           });
    }


    console.log("Fin de ejercicio 34")
}

function Ejercicio35(){
    console.log("Inicio de ejercicio 35");

    // Pedir el primer número
    let num = parseInt(prompt("Ingresa el primer número"));
    let numMayor = num;
    let numMenor = num;

    // Repetir desde el 2 hasta el 20
    for (let i = 2; i <= 20; i++) {
        num = parseInt(prompt("Ingresa el número " + i));

        if (num > numMayor) {
            numMayor = num;
        }

        if (num < numMenor) {
            numMenor = num;
        }
    }

    // Mostrar resultados
    alert("El número mayor es: " + numMayor + "\nEl número menor es: " + numMenor);

    console.log("Fin de ejercicio 35");

}

function Ejercicio36(){

    console.log("Inicio de ejercicio 36");

    let n = parseInt(prompt("¿Cuántos números de Fibonacci quieres ver?"));

    let a = 0;
    let b = 1;
    let serie = "";

    if (n <= 0) {
        alert("Debe ingresar un número mayor a 0");
    } else if (n === 1) {
        serie = a;
    } else if (n === 2) {
        serie = a + ", " + b;
    } else {
        serie = a + ", " + b;
        for (let i = 2; i < n; i++) {
            let c = a + b;
            serie += ", " + c;
            a = b;
            b = c;
        }
    }

    Swal.fire({
        title: "Respuesta",
        text: "Serie de Fibonacci:\n" + serie,
        icon: "success"
    })

    console.log("Fin de ejercicio 36");


}

function Ejercicio37(){

    console.log("Inicio de ejercicio 37");

    let a = parseInt(prompt("Ingrese el primer numero:"));
    let b = parseInt(prompt("Ingrese el segundo numero:"));
    let resto;

    while (b != 0) {
        resto = a % b
        a = b
        b = resto
    }
     Swal.fire({
        title: "Respuesta",
        text: "El M.C.D es: " + a,
        icon: "success"
    })
    console.log("Fin del ejercicio 37")
}

function Ejercicio38(){

    console.log("Inicio de ejercicio 38");
    let n = parseInt(prompt("Ingrese un numero: "));
    suma = 0;

    for (i = 1; i < n-1; i++){
        if (n % i === 0){
            suma = suma + i

            Swal.fire({
             title: "Respuesta",
             text: "Es un numero perfecto",
             icon: "success"
            })
        } else {

        Swal.fire({
             title: "Respuesta",
             text: "No es un numero perfecto",
             icon: "error"
            })
    }
    } 

    console.log("Fin del ejercicio 38")
}

function Ejercicio39(){

    console.log("Inicio de ejercicio 39");
    let n = parseInt(prompt("Ingrese la cantidad de terminos: "));

    let piAprox = 0
    let signo = 1
    let termino = 0;

    for (i = 0; i < n-1; i++){
        termino = signo / (2 * i + 1)
        piAprox =piAprox + termino
        signo = signo * (-1)
    }

    piAprox === piAprox * 4

    Swal.fire({
      title: "Respuesta",
      text: "Aproximacion de pi con " + n + " terminos es: " + piAprox,
      icon: "success"
    })
    console.log("Fin de ejercicio 39")
}

function Ejercicio40(){

    console.log("Inicio de ejrcicio 40");
    let n = parseInt(prompt("Ingrese la cantidad de terminos: "));

    let piApro = 3;
    let signo2 = 1;
    let t = 0;

    for (i = 1; i < n; i++){
        t = signo * (4 / ((2*i) * (2*i + 1) * (2*i + 2)))
        piApro = piApro + t
        signo = signo * (-1)
    }
    

    Swal.fire({
      title: "Respuesta",
      text: "Aproximacion de pi con " + n + " terminos es: " + piApro,
      icon: "success"
    })
    console.log("Fin de ejercicio 40")
}