Proceso Ejercicio_19
	//19. Hacer un algoritmo en Pseint para una heladería 
	//se tienen 4 tipos de empleados ordenados de la 
	//siguiente forma con su número identificador y salario
	//diario correspondiente:
	//Cajero (56$/día).
	//Servidor (64$/día).
	//Preparador de mezclas (80$/día).
	//Mantenimiento (48$/día).
	//El dueño de la tienda desea tener un programa 
	//donde sólo ingrese dos números enteros que representen
	//al número identificador del empleado y la cantidad
	//de días que trabajó en la semana (6 días máximos).
	//Y el programa le mostrará por pantalla la cantidad
	//de dinero que el dueño le debe pagar al empleado
	//que ingresó
	Definir id, dias Como Entero
    Definir salarioDiario, totalPagar Como Real
    
	Escribir "CALDULANDO SALARIO - HELADERIA"
	Escribir ""
    Escribir "Ingrese el ID del empleado:"
	Escribir ""
    Escribir "1. Cajero ($56/día)"
    Escribir "2. Servidor ($64/día)"
    Escribir "3. Preparador de mezclas ($80/día)"
    Escribir "4. Mantenimiento ($48/día)"
    Leer id
    
    Escribir "Ingrese la cantidad de días trabajados (máximo 6):"
    Leer dias
    
    Si dias > 6 Entonces
        Escribir "Error: máximo 6 días"
    Sino
        Segun id Hacer
            1: salarioDiario = 56
            2: salarioDiario = 64
            3: salarioDiario = 80
            4: salarioDiario = 48
            De Otro Modo:
                salarioDiario = 0
                Escribir "ID no válido"
        FinSegun
        
        totalPagar = salarioDiario * dias
        Escribir "Total a pagar al empleado: $", totalPagar
    FinSi
	
FinProceso
