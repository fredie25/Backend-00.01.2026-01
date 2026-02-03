Proceso Ejercicio04
	//4.Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	
	Escribir "Escribe tu primer numero"
	Leer a
	Escribir "Escribe tu segundo numero"
	Leer b
	Escribir "Escribe tu tercer numero"
	Leer c
	
	//Definir numero menor
	si a < b y a < c Entonces
		menor = a
	SiNo si b < a y b < c entonces
				menor = b
			SiNo
				menor = c
		FinSi
	
	FinSi
	
	//Definir numero mayor
	si a > b y a > c Entonces
		mayor = a
	SiNo 
		si b > a y b > c entonces
		mayor = b
	SiNo
		mayor = c
		FinSi
	FinSi
	
	medio = a + b + c - menor - mayor
	Escribir menor "," medio "," mayor
	
	
	
	
FinProceso

