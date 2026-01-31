Proceso Ejercicio05
	
	Definir  unidad, cantidad, descuento, total , totalfinal Como Entero
	Definir porcentaje Como Real
	
	
	unidad <- 80
	
	Escribir  "Cuantas zapatillas desea"
	Leer  cantidad
	
	total <- unidad * cantidad
	
	Si cantidad >= 30 Entonces
		porcentaje <- 40
	SiNo
		Si cantidad >= 20 y cantidad <= 29 Entonces
			porcentaje <- 20
		SiNo
			Si cantidad >= 10 Entonces
				porcentaje <- 10
			SiNo
				porcentaje <- 0
				
			FinSi
		FinSi
		
	FinSi
	
	descuento <- total * (porcentaje / 100)
	totalfinal <- total - descuento
	
	Escribir "Total de pagar: $ ", totalfinal
	
	
FinProceso


//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de 
//descuento para vender al mayor, esta dependerá del número de zapatos que se compren. 
//Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
//si el número de zapatos es mayor de veinte pero menor de treinta, 
//se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. 
//El precio de cada zapato es de $80.







