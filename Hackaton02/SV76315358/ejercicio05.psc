Proceso ejercicio05
	Escribir 'ingresar la cantidad de zapatos que desea comprar:'
	Leer cantidad
	precio <- 80
	total_pago <- precio*cantidad
	Si cantidad>10 Y cantidad<20 Entonces
		descuento <- (10*total_pago)/100
		precio_final <- total_pago-descuento
		Escribir 'La cantidad de zapatos que compro es de  ', cantidad, '  y tiene un precio total de :', total_pago
		Escribir 'con un descuento del 10%su total a pagar seria de ', precio_final, '$'
	SiNo
		Si cantidad>20 Y cantidad<30 Entonces
			descuento <- (20*total_pago)/100
			precio_final <- total_pago-descuento
			Escribir 'La cantidad de zapatos que compro es de ', cantidad, '  y tiene un precio total de :', total_pago
			Escribir 'con un descuento del 20% su total a pagar seria de ', precio_final, '$'
		SiNo
			Si cantidad>30 Entonces
				descuento <- (40*total_pago)/100
				precio_final <- total_pago-descuento
				Escribir 'La cantidad de zapatos que compro es de ', cantidad, '  y tiene un precio total de :', total_pago
				Escribir 'con un descuento del 40% su total a pagar seria de ', precio_final, '$'
			SiNo
				Escribir 'Su total a pagar es de :', total_pago, '$', '  Si desea un descuento debe llevar una cantidad de zapatos mayor a 10'
			FinSi
		FinSi
	FinSi
FinProceso
