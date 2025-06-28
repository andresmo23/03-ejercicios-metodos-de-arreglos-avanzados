/* 
15. Simulación de "Carrito de Compras" con Límite de Stock:

Problema: Crea una función que, dado un carritoDeCompras propuesto, devuelva un nuevo carrito que solo 
contenga los productos que realmente se pueden comprar (no exceden el stock disponible en productosTienda),
ajustando las cantidades si es necesario.

Input: carritoDeCompras, productosTienda

Output: Un nuevo array de objetos de carrito (como el del ejercicio 17, pero con cantidad ajustada si 
excede el stock, o el ítem excluido si la cantidad propuesta es 0 tras el ajuste).

Pistas: map o reduce para construir el nuevo carrito. 
Para cada ítem del carrito propuesto, find el stock. 
Si la cantidad en el carrito es mayor que el stock, la cantidad resultante en el nuevo carrito debería ser 
el stock. Si el stock es 0 o la cantidad se ajusta a 0, puedes excluir el ítem (usando filter después, o 
construyendo con reduce).
*/
import { productosTiendaCompleto, carritoPropuestoEjercicio15 } from "./00-Datos.js";

function simulacionCarrito(productos, carrito) {
  // Logica para los items que deben ser excluidos
  const carritoConPosiblesNulls = carrito.map((itemCarrito) => {
    // Buscar el producto corresponidente en el stock
    const productoEncontrado = productos.find((producto) => producto.id === itemCarrito.id);

    // Lógica para EXCLUIR el item si el producto no existe en el stock
    if (!productoEncontrado) {
      return null; // Marcamos para eliminar este item más tarde
    }

    // Si el producto si se encontró
    const cantidadDisponible = productoEncontrado.stock;
    const cantidadSolicitada = itemCarrito.cantidad;

    let cantidadAComprar;

    if (cantidadSolicitada > cantidadDisponible) {
      cantidadAComprar = cantidadDisponible;
    } else {
      cantidadAComprar = cantidadSolicitada;
    }

    // Si la cantidad a comprar es 0 tambien excluirlo
    if (cantidadAComprar === 0) {
      return null;
    }

    // si el item debe ser incluido
    return {
      ...itemCarrito, // copiar las propiedades originales del carrito
      cantidad: cantidadAComprar, //sobreescribir con la cantidad ajustada
    };
  });

  // usar filter para limpiar los nulls
  const carritoFinal = carritoConPosiblesNulls.filter((item) => item !== null);

  // retornar el carrito final ajustado y filtrado
  return carritoFinal;
}

const carritoAjustado = simulacionCarrito(productosTiendaCompleto, carritoPropuestoEjercicio15);
console.log("Carrito ajustado:", carritoAjustado);
