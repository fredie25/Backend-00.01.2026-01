Proceso Ejercicio_06
	//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál 
	//será su sueldo semanal, se sabe que si trabaja 40 horas o menos, 
	//se le pagará $20 por hora, pero si trabaja más de 40 horas entonces 
	//las horas extras se le pagarán a $25 por hora.

	Definir horas Como Entero
    Definir sueldo Como Real
    
	Escribir "CALCULANDO SALARIO"
    Escribir "Ingrese la cantidad de horas trabajadas:"
    Leer horas
    
    Si horas <= 40 Entonces
        sueldo = horas * 20
    Sino
        sueldo = (40 * 20) + ((horas - 40) * 25)
    FinSi
    
    Escribir "El sueldo semanal es: $", sueldo
FinProceso
