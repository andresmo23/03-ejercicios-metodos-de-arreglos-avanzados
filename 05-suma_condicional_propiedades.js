/* 
5. Suma Condicional de Propiedades:

Problema: Calcular el valor total de ventas solo de productos de una categoría específica y que estén 
por encima de un cierto precio.

Input: productosTienda, categoriaBuscada, precioMinimo

Output: Un número (el total sumado).

Pistas: filter (primero), luego reduce (para sumar).
*/
import { productosTiendaCompleto } from "./00-Datos.js";

function ventasPorCategoria(productosTienda, categoriaBuscada, precioMinimo) {
  const categoriaFiltrada = productosTienda.filter((producto) => {
    return producto.categoria === categoriaBuscada && producto.precio > precioMinimo;
  });

  const sumaFinal = categoriaFiltrada.reduce((acc, producto) => acc + producto.precio, 0);

  return `Total sumado: ${sumaFinal}`;
}

console.log(ventasPorCategoria(productosTiendaCompleto, "perifericos", 30000));
console.log(ventasPorCategoria(productosTiendaCompleto, "perifericos", 50000));
console.log(ventasPorCategoria(productosTiendaCompleto, "almacenamiento", 350000));
console.log(ventasPorCategoria(productosTiendaCompleto, "almacenamiento", 100000));
