Proceso Ejercicio27
	
	//27.Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
	
	Escribir "Ingrese numero"
	Leer n
	
	suma = 0
	op = 0 
	
	Mientras n >= 0 Hacer
		suma = suma + n
		op = op + 1
		
		media = suma / op
		Escribir "La media de la lista de numero es: " media
		escribir "Ingrese otro numero"
		leer n
	FinMientras
	
	si n < 0 Entonces
		Escribir "No se ingreso numero positivo"
	FinSi
FinProceso
