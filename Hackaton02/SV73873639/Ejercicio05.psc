// 5. Tienda de zapatos (Descuentos)
Algoritmo Ejercicio_05
    Definir cant Como Entero
    Definir total, precioU Como Real
    precioU <- 80
    Escribir "¿Cuántos zapatos vas a comprar?"
    Leer cant
    total <- cant * precioU
    // Aquí aplico la lógica de la promoción según la cantidad.
    Si cant > 30 Entonces
        total <- total * 0.60 // 40% de descuento
    Sino
        Si cant > 20 Entonces
            total <- total * 0.80 // 20% de descuento
        Sino
            Si cant > 10 Entonces
                total <- total * 0.90 // 10% de descuento
            FinSi
        FinSi
    FinSi
    Escribir "El total a pagar es: $", total
FinAlgoritmo