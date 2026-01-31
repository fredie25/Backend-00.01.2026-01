Proceso Ejercicio04
	
	Definir numero01, numero02, numero03 Como Entero
	
	Escribir "Ingresa primero numero"
	Leer numero01
	
	Escribir "Ingresa segundo numero"
	Leer  numero02
	
	Escribir "Ingresar tercer numero"
	Leer numero03
	
	Si (numero01 <= numero02) y (numero01 <= numero03) Entonces 
		Si (numero02 <= numero03 )
			Escribir "El orden es " numero03 "," numero02 "," numero01
		SiNo
			Escribir "El orden es " numero02 "," numero03 "," numero01
			
		FinSi
		
	FinSi
	
	Si (numero02 <= numero01) y (numero02 <= numero03) Entonces
		Si (numero01 <= numero03)
			Escribir  "El orden es " numero03 "," numero01 "," numero02
		SiNo
			Escribir "El orden es " numero01 "," numero03 "," numero02 
		FinSi
		
		
	FinSi
	
	Si (numero03 <= numero01) y (numero03 <= numero02) Entonces
		Si (numero02 <= numero01)
			Escribir "El orden es " numero01 "," numero02 "," numero03
		SiNo
			Escribir "El orden es " numero02 "," numero01 "," numero03
		FinSi
	FinSi
	
	
FinProceso


// Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.//


