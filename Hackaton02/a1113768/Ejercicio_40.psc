Proceso Ejercicio_40
	//40. Hacer un algoritmo en Pseint que cumpla con la aproximación del 
	//número pi con la serie de Nilakantha. La formula que se debe aplicar es:
	//Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...
	Definir n, i Como Entero
    Definir valorPi, signo Como Real
    
	Escribir "Número pi con la serie de Nilakantha"
	Escribir ""
    Escribir "Ingrese el número de términos:"
    Leer n
    
    valorPi = 3
    signo = 1
    
    Para i = 1 Hasta n Con Paso 1 Hacer
        valorPi = valorPi + (signo * (4 / ((2*i) * (2*i + 1) * (2*i + 2))))
        signo = signo * (-1)
    FinPara
    
    Escribir "Aproximación de Pi: ", valorPi
	
FinProceso
