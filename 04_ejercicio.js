let mes = prompt('Ingrese el mes que desea verificar: ');
let dias;


switch (mes) {
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
        dias = 31;
        break;

    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre':
        dias = 30;
        break;

    case 'febrero':
        dias = 28;

        break;

    default:
        alert("Mes inválido");
        dias = 0;
}

if (dias) {
    alert(`El mes de ${mes} tiene ${dias} días`);
}