/* 
8. Verificar Disponibilidad de Múltiples Items (para un pedido):

Problema: Dada una lista de ítems en un pedido ([{id: X, cantidad: Y}]) y tu productosTienda, verificar 
si todos los ítems del pedido están disponibles en el stock suficiente. Si un solo ítem no cumple, 
la función debe retornar false.
Input: [{ id: 1, cantidad: 2 }, { id: 3, cantidad: 1 }] (pedido), productosTienda

Output: true o false.

Pistas: every. Dentro del every necesitarás find para buscar el producto en productosTienda y 
comparar las cantidades.
*/
import { productosTiendaCompleto } from "./00-Datos.js";

function verificarPedido(pedido, productos) {
  return pedido.every((itemPedido) => {
    const productoEncontrado = productos.find((producto) => producto.id === itemPedido.id);

    if (productoEncontrado === undefined) {
      return false;
    }

    if (itemPedido.cantidad <= productoEncontrado.stock) {
      return true;
    } else {
      return false;
    }
  });
}

console.log(
  verificarPedido(
    [
      { id: 6, cantidad: 4 },
      { id: 9, cantidad: 10 },
    ],
    productosTiendaCompleto
  )
);

console.log(
  verificarPedido(
    [
      { id: 5, cantidad: 4 },
      { id: 12, cantidad: 10 },
    ],
    productosTiendaCompleto
  )
);
