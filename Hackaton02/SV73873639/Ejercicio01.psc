// 1. ¿Tiene tres dígitos?
Algoritmo Ejercicio_01
    Definir num Como Entero
    Escribir "Dime un número y te diré si tiene 3 cifras:"
    Leer num
    // Pienso: un número de 3 dígitos está entre 100 y 999 (o -999 y -100)
    Si (num >= 100 Y num <= 999) O (num <= -100 Y num >= -999) Entonces
        Escribir "¡Efectivamente! Tiene tres dígitos."
    Sino
        Escribir "Nop, ese no tiene tres dígitos."
    FinSi
FinAlgoritmo