Proceso ejercicio011
	Escribir "Ingresar el primer numero"
	Leer numero1
	Escribir " Ingresar el segundo numero"
	Leer numero2
	Escribir " Ingresar el segundo numero"
	Leer numero3
	Si numero1 > numero2 Y numero1 > numero3 Entonces
		Escribir " el numero  " , numero1 " es mayor al numero " , numero2 " y este es mayor a " , numero3
	SiNo
		Si numero2 > numero1 Y numero2 > numero3  Entonces
			Escribir " el numero  " , numero2 " es mayor al numero " , numero1 " y este es mayor a " , numero3
		SiNo
			Escribir " el numero  " , numero3 " es mayor al numero " , numero2 " y este es mayor a " , numero1
		Fin Si
	Fin Si
	
	
FinProceso