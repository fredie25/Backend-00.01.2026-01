Proceso Ejercicio23 
	
	//23.Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

	Escribir "Inserta un numero"
	leer numero
	
	suma = 0
	
	para i = 1 Hasta numero Hacer
		si i mod 2 <> 0 Entonces
			suma = suma + i
		FinSi
	FinPara
	
	escribir "La suma de los numeros impares que contiene el numero " numero " es igual a: " suma 
FinProceso
