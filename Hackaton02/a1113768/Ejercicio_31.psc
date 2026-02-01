Proceso Ejercicio_31
	//31. Hacer un algoritmo en Pseint parar calcular la media 
	//de los números pares e impares, sólo se ingresará diez números.
	Definir i, num, contPares, contImpares, sumaPares, sumaImpares Como Entero
    Definir mediaPares, mediaImpares Como Real
    
    contPares = 0
    contImpares = 0
    sumaPares = 0
    sumaImpares = 0
	
	Escribir "PROMEDIO DE NUMEROS PARES E IMPARES"
	Escribir ""
    
    Para i = 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer num
        
        Si num MOD 2 = 0 Entonces
            sumaPares = sumaPares + num
            contPares = contPares + 1
        Sino
            sumaImpares = sumaImpares + num
            contImpares = contImpares + 1
        FinSi
    FinPara
    
    Si contPares > 0 Entonces
        mediaPares = sumaPares / contPares
        Escribir "Media de números pares: ", mediaPares
    Sino
        Escribir "No se ingresaron números pares"
    FinSi
    
    Si contImpares > 0 Entonces
        mediaImpares = sumaImpares / contImpares
        Escribir "Media de números impares: ", mediaImpares
    Sino
        Escribir "No se ingresaron números impares"
    FinSi
	
FinProceso
