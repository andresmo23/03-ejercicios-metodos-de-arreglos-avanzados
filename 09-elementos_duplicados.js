/* 
9. Encontrar Elementos Duplicados en Array de Objetos:

Problema: Dado un array de productos, encontrar y retornar aquellos objetos que tienen un id duplicado.

Input: [{ id: 1, ... }, { id: 2, ... }, { id: 1, ... }, { id: 3, ... }]

Output: [{ id: 1, ... }] (el/los objeto(s) duplicado(s)). Puedes retornar solo el primer objeto 
de cada duplicado o ambos.

Pistas: reduce para construir un objeto de conteo de IDs, luego filter para encontrar los duplicados.
*/
import { productosEjercicio9 } from "./00-Datos.js";

function elementosDuplicados(productos) {
  // Paso 1: Usar reduce para construir un objeto que cuente la frecuencia de cada ID.
  // 'acc' será el objeto acumulador { id: conteo }.
  const conteoIds = productos.reduce((acc, producto) => {
    // Si el ID del producto ya existe como propiedad en 'acc', incrementa su conteo
    if (acc[producto.id]) {
      acc[producto.id]++;
    } else {
      // Si el ID del producto no existe, inicializa su conteo en 1.
      acc[producto.id] = 1;
    }

    // Devuelve el acumulador actualizado para la siguiente iteración.
    return acc;
  }, {}); // El reduce comienza con un objeto vacío.

  // Paso 2: Usar un Set para almacenar los IDs de los duplicados que ya hemos agregado al resultado.
  // Esto nos permite asegurar que solo agregamos la primera ocurrencia de cada ID duplicado.
  const idsYaAgregados = new Set();

  // Paso 3: Filtrar el array original para encontrar solo los productos duplicados
  // y asegurar que solo se incluya la primera ocurrencia de cada ID.
  const productosDuplicados = productos.filter((producto) => {
    // Primero, verificamos si el ID de este producto actual es realmente un duplicado
    // consultando el 'conteoIds' que creamos en el Paso 1.
    const esDuplicadoEnArray = conteoIds[producto.id] > 1;

    // Si el ID del producto es un duplicado...
    if (esDuplicadoEnArray) {
      // ...Y si AÚN NO hemos agregado este ID a nuestro Set 'idsYaAgregadosAlResultado'
      if (!idsYaAgregados.has(producto.id)) {
        // Significa que esta es la PRIMERA VEZ que encontramos este ID duplicado.
        // Lo agregamos al Set para no incluir futuras ocurrencias de este mismo ID.
        idsYaAgregados.add(producto.id);

        // Retornamos true para incluir este producto en el resultado filtrado.
        return true;
      }
    }
    // Si no es un ID duplicado, O si ya fue agregado al resultado,
    // retornamos false para NO incluir este producto.
    return false;
  });

  // Retorna el array final con solo la primera ocurrencia de cada elemento duplicado.
  return productosDuplicados;
}

console.log(elementosDuplicados(productosEjercicio9));

// El método .has() de un Set se utiliza para verificar si un elemento específico ya existe dentro del Set.
// Sintaxis: miSet.has(valor)
// Parámetro: valor es el elemento que quieres buscar dentro del Set.
// Retorno:
// Devuelve true si el valor está presente en el Set.
// Devuelve false si el valor no está presente en el Set.
