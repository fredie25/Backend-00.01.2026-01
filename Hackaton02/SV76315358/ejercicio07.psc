Proceso ejercicio07
		Escribir "Ingresar el precio:"
		Leer precio
		
		Escribir "Cual es su tipo de membresia (A, B o C):"
		Leer membresia
		
		Si tipo = A Entonces
			descuento = precio * 0.10
		SiNo
			Si tipo = B Entonces
				descuento = precio * 0.15
			SiNo
				Si tipo = C Entonces
					descuento = monto * 0.20
				SiNo
					descuento = 0
					Escribir "Su menbresia no es valida"
				FinSi
			FinSi
		FinSi
		
		total_pagar = precio - descuento
		Escribir "El total a pagar es de: ", total_pagar "$"
FinProceso


