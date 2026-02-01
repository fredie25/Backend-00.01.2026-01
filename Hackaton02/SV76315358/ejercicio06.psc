Proceso ejercicio06
	Escribir "ingresa tus horas trabajadas:"
	leer horas
	horas_normales=20
	horas_extra=25
	horas_totales=horas*horas_normales
	Si horas<=40 Entonces
		
		Escribir "Tu sueldo es de ", horas_totales "$"
	SiNo
		
	Si horas>40 Entonces
	    extra=horas-40
		semanal=extra*horas_extra
		total=40*20+semanal
	Escribir "Tu sueldo semanal mas horas extras es de ", total "$"
    
	Fin Si
	Fin Si
	
FinProceso
