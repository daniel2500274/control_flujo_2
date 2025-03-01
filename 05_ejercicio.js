function determinarDiaSemana() {
  
  let dia = prompt("Ingresa un día de la semana:").toLowerCase();

  switch (dia) {
    case "lunes":
    case "martes":
    case "miércoles":
    case "miercoles": 
    case "jueves":
    case "viernes":
      alert("Es un día laborable.");
      break;
    case "sábado":
    case "sabado":
    case "domingo":
      alert("Es fin de semana.");
      break;
    default:
      alert("Día inválido. Por favor, ingresa un día de la semana válido.");
  }
}


determinarDiaSemana();
undefined
