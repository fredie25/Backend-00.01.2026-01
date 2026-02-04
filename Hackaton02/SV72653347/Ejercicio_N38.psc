Proceso Ejercicio_N38
	/// Determinar si un numero es un numero perfecto
	
	Definir num, i, suma Como Entero

	Escribir "Ingrese un numero:"
	Leer num

	suma <- 0

	Para i <- 1 Hasta num - 1 Con Paso 1 Hacer
		Si num % i = 0 Entonces
			suma <- suma + i
		FinSi
	FinPara

	Si suma = num Entonces
		Escribir num, " es un numero perfecto."
	Sino
		Escribir num, " no es un numero perfecto."
	FinSi
FinProceso

