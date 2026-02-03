Proceso Ejercicio14
	
	//14.Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
	
	Definir numero Como Entero
	Definir esPrimo Como Logico
	
		Escribir Sin Saltar "Ingrese un numero entero del 1 al 10"
		leer numero

	
	Segun numero hacer
		2, 3, 5, 7:
			esPrimo = Verdadero
		De Otro Modo:
			esPrimo = Falso
			
	FinSegun
	
	si esPrimo Entonces
		escribir "El numero es primo"
	SiNo
		Escribir "El numero no es primo"
	FinSi
	
FinProceso
