
Proceso ejercicio08
	
	Repetir
		Escribir "Ingresar la primera nota"
		Leer primera
		
		Escribir "Ingresar la segunda nota"
		Leer segunda
		
		Escribir "Ingresar la tercera nota"
		Leer tercera
		
		Si primera < 0 O segunda < 0 O tercera < 0 Entonces
			Escribir "Ingrese una nota valida"
		FinSi
	Hasta Que primera >= 0 Y segunda >= 0 Y tercera >= 0
	
	promedio = (primera + segunda + tercera) / 3
	Si promedio >= 10.5 Y promedio <=20 Entonces
	
			Escribir "El estudiante saco " , promedio
			Escribir "APROBO"
		SiNo
			
			Escribir "El estudiante saco " , promedio
			Escribir "NO APROBO"
	Fin si
	
	
FinProceso
