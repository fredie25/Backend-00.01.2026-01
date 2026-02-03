Proceso Ejercicio09
	
	//9.Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
	
	Escribir "Ingrese su sueldo"
	Leer sueldo
	
	si sueldo > 2000 Entonces
		aumento = sueldo * 0.05
	SiNo
		aumento = sueldo * 0.1
	FinSi
	
	sueldofinal = sueldo + aumento
	escribir "Su sueldo sera: " sueldofinal
FinProceso
