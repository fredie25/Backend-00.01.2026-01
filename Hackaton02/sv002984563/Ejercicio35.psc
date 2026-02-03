Proceso Ejercicio35
	
	//35.Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
	Escribir "Ingresa el primer numero"
	leer num
	nunMayor = num
	numMenor = num
	
	Para i = 2 Hasta 20 Hacer
		Escribir "Ingrese un numero"
		leer num
		
		si num > nunMayor entonces
			nunMayor = num
			
		FinSi
		si num < numMenor Entonces
			numMenor = num
		FinSi
	FinPara
	
	Escribir "El numero mayor es: " nunMayor
	Escribir "El numero menor es: " numMenor
	
	
FinProceso
