Proceso ejercicio03
	Escribir "ingresa un numero:"
	Leer numero_ingresado
	Para i <- Longitud(numero_ingresado) Hasta Longitud(numero_ingresado) Con Paso 1 Hacer
		Si ConvertirANumero(SubCadena(numero_ingresado,i,i)) = 4 Entonces
			Escribir " en número es" , numero_ingresado " y termina en 4"
		SiNo
			escribir "el numero es" , numero_ingresado " pero no termina en 4"
		Fin Si
		
	Fin Para
FinProceso
