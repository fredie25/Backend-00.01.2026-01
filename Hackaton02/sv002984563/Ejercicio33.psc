Proceso Ejercicio33 
	
	//33.Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
	
	Repetir
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
		
		Escribir "¿Quiere hacer otra operacion? (s/n)"
		Leer respuesta
	Hasta Que respuesta = "n" o respuesta = "N"
	
FinProceso
