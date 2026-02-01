Proceso Ejercicio_38
	//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
	
	Definir num, i, sumaDivisores Como Entero
	
	Escribir "NUMERO PERFECTO"
	Escribir ""
    
	Repetir
		
	    Escribir "Ingrese un número entero positivo:"
		Leer num
		
		Si num <= 0
			Escribir "ERROR: El número debe ser mayor que cero."
		FinSi
    	Hasta Que num > 0

	sumaDivisores = 0
	
    Para i = 1 Hasta num - 1 Con Paso 1 Hacer
        Si num MOD i = 0 Entonces
            sumaDivisores = sumaDivisores + i
        FinSi
    FinPara
    
    Si sumaDivisores = num Entonces
        Escribir num, " es un número perfecto"
    Sino
        Escribir num, " NO es un número perfecto"
    FinSi
	
FinProceso
