Proceso Ejercicio_07
	//7. Hacer un algoritmo en Pseint para una tienda de helado que da un 
	//descuento por compra a sus clientes con membresía dependiendo de su 
	//tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
	//Los descuentos son los siguientes:
	//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
	Definir tipoMembresia Como Caracter
    Definir compra, descuento, totalFinal Como Real
    
	Escribir "DESCUENTOS EN VENTA DE HELADOS"
    Escribir "Ingrese el monto de la compra:"
    Leer compra
    Escribir "Ingrese el tipo de membresía (A, B o C):"
    Leer tipoMembresia
    
    Segun tipoMembresia Hacer
        "A", "a":
            descuento = compra * 0.10
        "B", "b":
            descuento = compra * 0.15
        "C", "c":
            descuento = compra * 0.20
        De Otro Modo:
            descuento = 0
            Escribir "Tipo de membresía inválida"
    FinSegun
    
    totalFinal = compra - descuento
    
    Escribir "Total sin descuento: $", compra
    Escribir "Descuento aplicado: $", descuento
    Escribir "Total a pagar: $", totalFinal

FinProceso