/* 
6. Generar un Resumen de Stock por Categoría:

Problema: Crear un objeto que muestre el stock total disponible para cada categoría de producto.

Input: productosTienda

Output: { perifericos: 35, monitores: 15, audio: 22, ... }

Pistas: reduce, similar al ejercicio 16 pero sumando stock en lugar de precio y sin contar cantidades.
*/
import { productosTiendaCompleto } from "./00-Datos.js";

function stockTotalDisponible(productos) {
  return productos.reduce((acc, producto) => {
    // Si ya existe esa categoria
    if (acc[producto.categoria]) {
      acc[producto.categoria] += producto.stock; // Se suma el stock
    } else {
      acc[producto.categoria] = producto.stock; // se asigna el primer elemento como el stock
    }

    return acc; // llama el objeto completo
  }, {});
}

console.log(stockTotalDisponible(productosTiendaCompleto));
