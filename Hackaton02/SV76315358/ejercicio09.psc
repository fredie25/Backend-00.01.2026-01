Proceso ejercicio09
	Definir sueldo , aumento , sueldo_final Como Real
	Escribir "Ingresar su sueldo ganado:"
	Leer sueldo
	Si sueldo > 2000 Entonces
		aumento = sueldo * 0.05
		sueldo_final=sueldo + aumento
		Escribir " Usted tiene un aumento del 5% y su aumento es de: ",aumento " y tiene un sueldo final de " ,sueldo_final "$"
	SiNo
		Si sueldo <= 2000 Entonces
			aumento = sueldo * 0.10
			sueldo_final=sueldo + aumento
			Escribir " Usted tiene un aumento del 10% y su aumento es de: ",aumento " y tiene un sueldo final de " ,sueldo_final "$"
		Fin Si
	Fin Si
FinProceso
