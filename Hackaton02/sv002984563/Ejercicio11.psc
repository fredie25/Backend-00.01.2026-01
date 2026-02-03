Proceso Ejercicio11
	
	//11.Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	
	Escribir "Escribe tu primer numero"
	Leer a
	Escribir "Escribe tu segundo numero"
	Leer b
	Escribir "Escribe tu tercer numero"
	Leer c
	
	si a > b y a > c Entonces
		mayor = a
	SiNo 
		si b > a y b > c entonces
			mayor = b
		SiNo
			mayor = c
		FinSi
	FinSi
	
	Escribir "El numero mayor es: " mayor
	
FinProceso
