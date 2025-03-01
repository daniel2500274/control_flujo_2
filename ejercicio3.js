/*una empresa de envios quiere implementar un programa  para calcular el costo de envio de un paquete. el costo depende del destino y del peso de paquete. si el destino es dentro del pais, el costo es de $10 por cada kilo. si el destino es fuera del pais, el costo es de $20 por cada kilo. Escribe un programa que calcule el costo de envio de un paquete dado su destino y peso*/
let kilo = Number(prompt("Ingrese la cantidad de kilos del paquete"))
let destino = prompt("El destino es dentro o fuera del pais?")
let costo 

switch(destino){
    case 'dentro':
        costo = kilo * 10
        break
    case 'fuera':
        costo = kilo * 20
        break 
    default:
        costo = kilo *20
        break
}
alert("El costo del envio es de: " + costo)