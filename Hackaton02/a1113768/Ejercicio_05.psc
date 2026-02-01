Proceso Ejercicio_05
	//5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene 
	//una promoción de descuento para vender al mayor, esta dependerá del 
	//número de zapatos que se compren. Si son más de diez, se les dará un 
	//10% de descuento sobre el total de la compra; si el número de zapatos
	//es mayor de veinte pero menor de treinta, se le otorga un 20% de 
	//descuento; y si son más treinta zapatos se otorgará un 40% de 
	//descuento. El precio de cada zapato es de $80.
	Definir cantidad Como Entero
    Definir precioUnitario, total, descuento, totalFinal Como Real
    
    precioUnitario = 80
    
	Escribir "VENTA DE ZAPATOS"
    Escribir "Ingrese la cantidad de zapatos a comprar:"
    Leer cantidad
    
    total = cantidad * precioUnitario
    
    Si cantidad > 30 Entonces
        descuento = total * 0.40
    Sino
        Si cantidad > 20 Entonces
            descuento = total * 0.20
        Sino
            Si cantidad > 10 Entonces
                descuento = total * 0.10
            Sino
                descuento = 0
            FinSi
        FinSi
    FinSi
    
    totalFinal = total - descuento
	
    Escribir "Cantidad de zapatos:", cantidad
    Escribir "Total sin descuento: $", total
    Escribir "Descuento aplicado: $", descuento
    Escribir "Total a pagar: $", totalFinal
FinProceso
