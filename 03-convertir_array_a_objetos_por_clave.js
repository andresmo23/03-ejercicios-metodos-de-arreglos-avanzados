/* 
3. Convertir Array a Objeto por Clave Única:
Problema: Tienes un array de productos y quieres transformarlo en un objeto donde las claves sean los IDs de 
los productos para un acceso más rápido.
Input: productosTienda
Output: { "1": { id: 1, nombre: 'Teclado...', ... }, "2": { ... }, ... }
Pistas: reduce. El acumulador será el objeto final.
*/
import { productosTiendaCompleto } from "./00-Datos.js";

function productosPorClave(productos) {
  return productos.reduce((acc, item) => {
    // 1. Acceder al 'acc' (el objeto acumulador)
    // 2. Usar 'item.id' para definir una NUEVA PROPIEDAD en ese objeto.
    //    Esta propiedad será el ID del producto.
    // 3. Asignar el 'item' COMPLETO (el objeto del producto actual)
    //    como el VALOR de esa nueva propiedad.
    acc[item.id] = item;

    // Devolver el 'acc' (el objeto acumulador actualizado) para que se pase a la siguiente iteración.
    return acc;
  }, {});
}

console.log(productosPorClave(productosTiendaCompleto));
