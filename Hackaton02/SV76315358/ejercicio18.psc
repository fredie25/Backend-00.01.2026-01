Proceso ejercicio18
	
    Definir cantidad, precio, total, ganancia Como Real
	
    Escribir "Ingrese la cantidad de los CD ";
    Leer cantidad;
    Si cantidad <= 9 Entonces
        precio = 10
		Si cantidad >= 10 Y cantidad <= 99 Entonces
			precio = 8
			Si cantidad >= 100 Y cantidad <= 499 Entonces
				precio = 7
				Si cantidad >= 500 Entonces
					precio = 6
				FinSi
				total = cantidad * precio
				ganancia = total * 0.0825
				
				Escribir "Precio total para el cliente es de :", total "$"
				Escribir "La ganancia para el vendedir es de:", ganancia "$"
FinProceso

