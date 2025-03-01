let segmentacionCliente = prompt('Ingrese la segmentacion del cliente')
segmentacionCliente = segmentacionCliente.toUpperCase
const monto = Number(prompt('Ingrrese el monto de la compra'));
let totalFactura = 0;
let descuntoAplicar = 0;
switch (segmentacionCliente) {
    case 'ESTUDIANTE':
        descuntoAplicar = 0.1;
        break;
    case 'ADULTO MAYOR':
        descuntoAplicar = 0.15;
        break;
    case 'CLIENTE FRECUENTE':
        descuntoAplicar = 0.20;
        break;
    default:
        descuntoAplicar = 0;
        break;
}

totalFactura = monto * descuntoAplicar
console.log(`El descuento a aplicar es de : ${descuntoAplicar} % y el total de la compra es Q${totalFactura}`)