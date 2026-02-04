Proceso Ejercicio_N26
	/// Calcular el cociente y el resto usando restas sucesivas
	
	Definir dividendo, divisor, cociente Como Entero

	Escribir "Ingrese el dividendo:"
	Leer dividendo
	Escribir "Ingrese el divisor:"
	Leer divisor

	Si divisor = 0 Entonces
		Escribir "No se puede dividir entre cero."
	Sino
		cociente <- 0

		Mientras dividendo >= divisor Hacer
			dividendo <- dividendo - divisor
			cociente <- cociente + 1
		FinMientras

		Escribir "El cociente es: ", cociente
		Escribir "El resto es: ", dividendo
	FinSi
FinSi
FinProceso
