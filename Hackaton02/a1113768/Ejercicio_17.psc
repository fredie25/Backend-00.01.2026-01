Proceso Ejercicio_17
	//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule 
	// la hora dentro de un segundo.
	Definir horas, minutos, segundos Como Entero
    
	Escribir "CALCULANDO LA HORAS DENTRO DE UN SEGUNDO"
	
    Escribir "Ingrese la hora (0-23):"
    Leer horas
	
    Escribir "Ingrese los minutos (0-59):"
    Leer minutos
	
    Escribir "Ingrese los segundos (0-59):"
    Leer segundos
    
    segundos = segundos + 1
    
    Si segundos = 60 Entonces
        segundos = 0
        minutos = minutos + 1
        
        Si minutos = 60 Entonces
            minutos = 0
            horas = horas + 1
            
            Si horas = 24 Entonces
                horas = 0
            FinSi
        FinSi
    FinSi
	
	Escribir ""
	Escribir "====================================================="
	Escribir "						RESULTADO						"
	Escribir "====================================================="
	Escribir "La hora dentro de un segundo será: ", horas, ":", minutos, ":", segundos
FinProceso
