/* 
11. Asignar Estado Condicional Basado en Datos:

Problema: A cada producto en productosTienda, añade una nueva propiedad estadoStock con valores 
como "Alto", "Medio", "Bajo" o "Agotado", basándote en reglas de stock (ej. stock > 20 es "Alto",
 10-20 es "Medio", 1-9 es "Bajo", 0 es "Agotado").

Input: productosTienda

Output: Nuevo array de productos con la propiedad estadoStock añadida.

Pistas: map, if/else if o switch para la lógica del stock.
*/
import { productosTiendaCompleto } from "./00-Datos.js";

function estadoStock(productos) {
  // creo una copia del arreglo para la inmutabilidad
  const copiaProductos = [...productos];
  // itero en cada elemento del arreglo con un map para devovler un nuevo arreglo
  const productosConEstadoStock = copiaProductos.map((producto) => {
    // obtengo el stock de cada producto
    const stockObtenido = producto.stock;
    // creo una variable vacia para asignarle el valor por medio de las condiicones
    let estado;

    // hago las condiciones para el estado del stock y le doy valor a la variable
    if (stockObtenido > 20) {
      estado = "Alto";
    } else if (stockObtenido >= 10) {
      estado = "Medio";
    } else if (stockObtenido >= 1) {
      estado = "Bajo";
    } else if (stockObtenido === 0) {
      estado = "Agotado";
    }

    // retorno el nuevo objeto añadiendo la nuevo propiedad con el valor
    return {
      ...producto,
      estadoStock: estado,
    };
  });

  return productosConEstadoStock;
}

console.log(estadoStock(productosTiendaCompleto));
