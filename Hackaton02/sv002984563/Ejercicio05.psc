Proceso Ejercicio05
	
	//5.Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
	
	Escribir "Bienvenido a zapatolandia ¿cual es tu nombre?"
	Leer nombre
	Escribir "hola " nombre ", ¿cuantos zapatos deseas comprar?"
	Leer numeroZapatos
	
	//descuento de 10%
	precio = 80
	a = 0.9 
	b = 0.8
	c = 0.6
	si numeroZapatos >= 10 y numeroZapatos <= 20 Entonces
		resultado = numeroZapatos * precio * a
	FinSi
	
	si numeroZapatos >= 21 y numeroZapatos <= 30 Entonces
		resultado = numeroZapatos * precio * b
	FinSi
	
	si numeroZapatos >= 31 Entonces
		resultado = numeroZapatos * precio * c
	FinSi
	
	Escribir "Su monto a pagar es:" resultado
FinProceso
