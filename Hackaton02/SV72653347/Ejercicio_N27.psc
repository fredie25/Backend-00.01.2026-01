Proceso Ejercicio_N27
	/// Determinar la media de una lista indefinida de numeros positivos
	/// El programa termina cuando se ingresa un numero negativo
	
	Definir num, suma Como Real
	Definir contador Como Entero

	suma <- 0
	contador <- 0

	Escribir "Ingrese un numero positivo (negativo para terminar):"
	Leer num

	Mientras num >= 0 Hacer
		suma <- suma + num
		contador <- contador + 1

		Escribir "Ingrese otro numero:"
		Leer num
	FinMientras

	Si contador > 0 Entonces
		Escribir "La media es: ", suma / contador
	Sino
		Escribir "No se ingresaron numeros positivos."
	FinSi
FinProceso
