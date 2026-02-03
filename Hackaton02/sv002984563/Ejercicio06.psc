Proceso Ejercicio06
	
	//6.Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora
	
	Definir numeroUsuario,  h, n Como Entero
	definir precio1, precio2, pago Como Real
	
	escribir "Escribe cuantas horas trabajaste"
	leer numeroUsuario
	h <- numeroUsuario
	
	precio1 <- 20
	precio2 <- 25
	n <- 40
	
	si h > n Entonces
		pago = n * precio1 + (h - n) * precio2
	SiNo
		pago = h * precio1
		
	FinSi
	
	Escribir "El pago es de $", pago
FinProceso
