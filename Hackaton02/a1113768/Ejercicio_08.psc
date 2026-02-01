Proceso Ejercicio_08
	//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y 
	//determinar si el estudiante aprobó o no.
	Definir nota1, nota2, nota3, promedio Como Real
    
	Escribir "PROMEDIANDO NOTAS"
    Escribir "Ingrese la primera nota:"
    Leer nota1
	
    Escribir "Ingrese la segunda nota:"
    Leer nota2
	
    Escribir "Ingrese la tercera nota:"
    Leer nota3
    
    promedio = (nota1 + nota2 + nota3) / 3
    
    Escribir "El promedio es: ", promedio
    //Escribir "El promedio es: ", Redon(promedio)	// redondea a mayor
	//Escribir "El promedio es: ", Trunc(promedio)	// redondea a menor
	
    Si promedio >= 11 Entonces
        Escribir "El estudiante APROBÓ"
    Sino
        Escribir "El estudiante REPROBÓ"
    FinSi

FinProceso
