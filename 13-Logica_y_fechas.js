/* 
Categoría 5: Retos Adicionales (Lógica y Fechas)

13. Calcular Promedio Ponderado de Valoraciones:

Problema: Tienes un array de valoraciones, donde algunas valen más que otras (ej. las de usuarios 
"premium" cuentan doble). Calcula el promedio general.

Input: [{ rating: 5, tipoUsuario: 'normal' }, { rating: 4, tipoUsuario: 'premium' }, 
{ rating: 3, tipoUsuario: 'normal' }]

Output: Un número (el promedio ponderado).

Pistas: reduce. En el acumulador, sumar el total de puntos y el total de "pesos" 
(cantidad de valoraciones, o el doble si es premium). Al final, dividir.
*/
import { valoracionesEjercicio13 } from "./00-Datos.js";

function promedioValoracionesDeUsuario(valoraciones) {
  return valoraciones.reduce(
    (acumulador, valoracion) => {
      // Extraer los Datos
      const rating = valoracion.rating;
      const tipoUsuario = valoracion.tipoUsuario;

      // Calcular puntosValoracionActual
      let puntosValoracionActual;

      if (tipoUsuario === "premium") {
        puntosValoracionActual = rating * 2;
      } else if (tipoUsuario === "normal") {
        puntosValoracionActual = rating;
      }

      // Calcular pesoValoracionActual
      let pesoValoracionActual;

      if (tipoUsuario === "premium") {
        pesoValoracionActual = 2;
      } else if (tipoUsuario === "normal") {
        pesoValoracionActual = 1;
      }

      // Actualizar las propiedades del acumulador
      acumulador.totalPuntosAcumulados += puntosValoracionActual;
      acumulador.totalPesosAcumulados += pesoValoracionActual;

      // Retornar el acumulador
      return acumulador;
    },
    { totalPuntosAcumulados: 0, totalPesosAcumulados: 0 }
  );
}

console.log(promedioValoracionesDeUsuario(valoracionesEjercicio13));
