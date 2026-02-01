Proceso Ejercicio_25
	//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	Definir num, contador Como Entero
    Definir factorial Como Real
    
	Escribir "CALCULANDO FACTORIAL 2"
    Escribir "Ingrese un número:"
    Leer num
    
    factorial = 1
    contador = 1
    
    Mientras contador <= num Hacer
        factorial = factorial * contador
        contador = contador + 1
    FinMientras
    
    Escribir "El factorial de ", num, " es: ", factorial
	
FinProceso
