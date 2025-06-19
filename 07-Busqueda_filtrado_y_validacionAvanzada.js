/* 
Categoría 3: Búsqueda, Filtrado y Validación Avanzada

7. Búsqueda Multi-Criterio (AND):

Problema: Filtrar una lista de productos que cumplan con MÚLTIPLES condiciones simultáneamente 
(ej. de una categoría específica Y con stock mayor a X Y precio menor a Y).

Input: productosTienda, criterios (ej. { categoria: 'perifericos', stockMinimo: 10, precioMaximo: 100000 })

Output: Array de productos que cumplen todos los criterios.

Pistas: filter. Dentro del callback, múltiples condiciones && (AND). Considera cómo acceder a los criterios 
dinámicamente si los pasas en un objeto. 
*/
import { productosTiendaCompleto } from "./00-Datos.js";

function busquedaAvanzada(productos, categoria, stockMinimo, precioMaximo) {
  const productosEncontrados = productos.filter((producto) => {
    return producto.categoria === categoria && producto.stock > stockMinimo && producto.precio < precioMaximo;
  });

  if (productosEncontrados.length > 0) {
    return productosEncontrados;
  } else {
    return "No hay productos que coincidan con la búsqueda.";
  }
}

console.log(busquedaAvanzada(productosTiendaCompleto, "perifericos", 8, 30000));
console.log(busquedaAvanzada(productosTiendaCompleto, "perifericos", 4, 90000));
