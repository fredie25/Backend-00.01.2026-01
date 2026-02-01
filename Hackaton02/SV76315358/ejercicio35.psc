Proceso ejercicio35
		Definir numero_ingresado, mayor_numero, menor_numero Como Entero
		
		Escribir "Ingresa el numero" ;
		Leer numero_ingresado;
		mayor_numero = numero_ingresado
		menor_numero = numero_ingresado
		i = 2
		
		Mientras i <= 20 Hacer
			Escribir "Ingresa el numero" ;
			Leer numero_ingresado;
			Si numero_ingresado > mayor_numero Entonces 
				mayor_numero = numero_ingresado 
			FinSi
			Si numero_ingresado < menor_numero Entonces 
				menor_numero = numero_ingresado 
			FinSi
			i = i + 1
		FinMientras
		
		Escribir "El mayor numero es ",mayor_numero
        Escribir "El menor numero es ",menor_numero
		
FinProceso
