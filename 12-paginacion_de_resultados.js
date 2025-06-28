/* 
12. Paginación de Resultados:
Problema: Dada una lista grande de productos y un número de página y tamaño de página, retornar solo los 
productos que corresponden a esa página.

Input: productosTienda, pagina (ej. 1), tamanoPagina (ej. 5)

Output: Array de productos para la página solicitada.

Pistas: slice(). Calcula los índices de inicio y fin
*/
import { productosTiendaCompleto } from "./00-Datos.js";

function paginacionDeResultados(productos, pagina, tamanoPagina) {
  // 1. Calcular el índice de inicio
  const startIndex = (pagina - 1) * tamanoPagina;

  // 2. Calcular el índice de fin
  const endIndex = startIndex + tamanoPagina;

  // 3. Usar slice para obtener la porción del array
  const productosEnPagina = productos.slice(startIndex, endIndex);

  // 4. Devolver el resultado
  return productosEnPagina;
}

const pagina1 = paginacionDeResultados(productosTiendaCompleto, 1, 5);
console.log("Página 1:", pagina1);

const pagina2 = paginacionDeResultados(productosTiendaCompleto, 2, 5);
console.log("Página 2:", pagina2);
