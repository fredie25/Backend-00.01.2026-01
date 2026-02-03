Proceso Ejercicio18
	
	//18.Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
	//$10. Si se compran unidades separadas hasta 9.
	//$8. Si se compran entre 10 unidades hasta 99.
	//$7. Entre 100 y 499 unidades.
	//$6. Para mas de 500 unidades.
	//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
	
	Definir numP Como Entero
	Definir precio, precioCliente, gananciaVendedor Como Real
	definir porcentajeGanancia Como Real
	
	Escribir "Ingrese la cantidad de productos"
	leer numP
	
	porcentajeGanancia = 8.25
	
	si numP >= 500 Entonces
		precio = 6
	SiNo si numP >= 100 Entonces
			precio = 7
		sino si numP >= 10 Entonces
				precio = 8
			SiNo
				precio = 10
			FinSi
		FinSi
		
	FinSi
	
	precioCliente = precio * numP
	gananciaVendedor = precioCliente * (porcentajeGanancia / 100)
	Escribir "El monto a pagar por la compra es de: " precioCliente
	Escribir  "La ganancia del vendedor: " gananciaVendedor
	
	
	
FinProceso
