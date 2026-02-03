Proceso Ejercicio08
	
	//8.Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
	
	Escribir "Escribe tu primera nota"
	Leer a
	Escribir "Escribe tu segunda nota"
	Leer b
	Escribir "Escribe tu tercera nota"
	Leer c
	
	promedio = (a + b + c) / 3 
	si promedio >= 0 y promedio <= 9 Entonces
		Escribir "No esta aprobado"
	FinSi
	si promedio >= 10 y promedio <= 20 Entonces
		Escribir "Esta aprobado"
	FinSi
FinProceso
