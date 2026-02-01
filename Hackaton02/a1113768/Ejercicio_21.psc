Proceso Ejercicio_21
	//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.

	Definir num, i Como Entero
    Definir factorial Como Real
    
	Escribir "CALCULANDO FACTORIAL"
    Escribir "Ingrese un número:"
    Leer num
    
    factorial = 1
    
    Para i = 1 Hasta num Con Paso 1 Hacer
        factorial = factorial * i
    FinPara
    
    Escribir "El factorial de ", num, " es: ", factorial
	
FinProceso
