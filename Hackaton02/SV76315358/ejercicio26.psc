Proceso ejercicio26
		Definir dividendo, divisor, cociente Como Entero
		
		Escribir "Ingrese el valor del dividendo:";
		Leer dividendo;
		Escribir "Ingrese el valor del divisor:";
		Leer divisor;
		
		cociente = 0
		
		Mientras dividendo >= divisor Hacer 
			dividendo = dividendo - divisor
			cociente = cociente + 1
		FinMientras
		
		Escribir "El valor del cociente es de: ", cociente
		Escribir "El valor del resto es de: ", dividendo
FinProceso

