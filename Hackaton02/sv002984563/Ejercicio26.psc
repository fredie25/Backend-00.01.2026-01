Proceso Ejercicio26
	
	//26.Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas
	
	Escribir "Ingresar dividendo"
	Leer a
	Escribir "Escribir divisor"
	leer b
	
	//a = dividento
	//b = divisor
	
	si b = 0 Entonces
		Escribir "Error: no se puede dividir entre 0"
	FinSi
	
	si cociente = 0 Entonces
		resto = a 
	FinSi
	
	Mientras resto >= b Hacer
		resto = resto - b
		cociente = cociente + 1
	FinMientras
	
	escribir "El resto es: " resto
	escribir "El cociente es: " cociente
	
	
FinProceso
