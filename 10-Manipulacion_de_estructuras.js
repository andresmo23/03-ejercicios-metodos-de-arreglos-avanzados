/* 
Categoría 4: Manipulación de Estructuras y Lógica Condicional Compleja

10. Actualización de Stock en Base a Ventas:

Problema: Tienes tu productosTienda y un array de ventas (ej. [{ productoId: 1, cantidadVendida: 2 }, ...]). 
Necesitas devolver un nuevo array de productos con los stocks actualizados tras las ventas.

Input: productosTienda, ventas

Output: Un nuevo array de productos con stock modificado.

Pistas: map sobre productosTienda. Dentro del map, para cada producto, find si hay una venta para ese 
producto y ajusta el stock. Considera qué hacer si un productoId de la venta no existe en productosTienda.
*/
import { productosTiendaCompleto, ventasEjercicio10 } from "./00-Datos.js";

function productosConStockModificado(productos, ventas) {
  const verificarIdVentas = ventas.forEach((element) => {
    const productoCorrespondiente = productos.find((producto) => producto.id === element.productoId);

    if (!productoCorrespondiente) {
      console.warn("Advertencia: El producto con ID: " + element.productoId + " en las ventas no existe en el catálogo de productos.");
    }
  });
  const copiaProductos = [...productos];
  const productosModificados = copiaProductos.map((producto) => {
    const ventaEncontrada = ventas.find((venta) => producto.id === venta.productoId);

    if (ventaEncontrada) {
      const cantidadVendida = ventaEncontrada.cantidadVendida;
      const nuevoStock = producto.stock - cantidadVendida;
      return {
        ...producto,
        stock: nuevoStock,
      };
    } else {
      return producto;
    }
  });
  return productosModificados;
}

console.log(productosConStockModificado(productosTiendaCompleto, ventasEjercicio10));
