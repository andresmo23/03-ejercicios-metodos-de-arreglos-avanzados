/* 
14. Agrupar Eventos por Mes:

Problema: Dada una lista de eventos con fechas completas, agruparlos por el mes en que ocurrieron y 
contar cuántos eventos hubo en cada mes.

Input: [{ nombre: 'Conferencia', fecha: '2023-01-15' }, { nombre: 'Taller', fecha: '2023-01-28' }, 
{ nombre: 'Reunión', fecha: '2023-02-10' }]

Output: { "Enero": 2, "Febrero": 1 } (o 01: 2, 02: 1)

Pistas: reduce. Para extraer el mes, puedes crear un objeto Date (new Date(fechaString)) y usar getMonth()
*/
import { eventosEjercicio14 } from "./00-Datos.js";

function agruparEventosPorMes(eventos) {
  // Definir el array de meses una sola vez al inicio de la funcion
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  return eventos.reduce((acc, eventoActual) => {
    // Crear un objeto Date y convertir el string de fecha en un objeto para poder trabajar con sus propiedades
    // el evento tiene una propiedad fecha que es un string
    const fechaEvento = new Date(eventoActual.fecha);

    // El metodo getMonth obtienen el mes de un objeto Date pero devuelve el valor como un array
    // es decir enero = 0, febrero = 1, etc... hasta 11. Toca hacer una conversion
    const numeroMes = fechaEvento.getMonth();

    // el numeroMes se convierte directamente en meses y asi podemos tomar el valor con el nombre
    const nombreMes = meses[numeroMes];

    if (acc[nombreMes]) {
      acc[nombreMes]++;
    } else {
      acc[nombreMes] = 1;
    }

    return acc;
  }, {});
}

const eventosAgrupados = agruparEventosPorMes(eventosEjercicio14);
console.log("Eventos agrupados por mes:", eventosAgrupados);
