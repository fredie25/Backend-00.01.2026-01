Proceso ejercicio19
	Definir id , dias Como Entero
		Escribir "Cajero, ID : 1"	
		Escribir "Servidor , ID : 2"
		Escribir "Preparador de mezclas, ID : 3"
		Escribir "Mantenimiento, ID : 4"
		
		Repetir
			Escribir "Ingrese el ID del trabajador:"
			Leer id
			Escribir "Ingrese los dias laborales del trabajador"
			Leer dias
		Hasta Que dias >0 Y dias <=6 Y id >=1 Y id <=4
		
		sueldo=0
		Si id=1  Entonces
			sueldo=dias*56
		SiNo
			Si id=2 Entonces
				sueldo=dias*64
			SiNo
				Si id=3 Entonces
					sueldo=dias*80
				SiNo
					Si id=4 Entonces
						sueldo=dias*48
					Fin Si
				Fin Si
			Fin Si
		Fin Si
		Escribir "El sueldo del trabajador es de:" ,sueldo "$"
FinProceso
