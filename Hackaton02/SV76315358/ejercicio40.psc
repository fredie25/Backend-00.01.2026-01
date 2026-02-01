Proceso ejercicio40
		Definir n, i, a Como Entero
		Definir p, s Como Real
		
		Escribir "Ingrese la cantidad del numero:";
		Leer n;
		
		p <-3
		s <-1
		a<-2
		Para i<-1 Hasta n Con Paso 1 Hacer
			p = p + s * (4 / (a * (a+1) * (a+2)))
			s = s * (-1)
			a = a + 2
		Fin Para
		Escribir "La aproximacion de pi es de : ", p 
FinProceso
