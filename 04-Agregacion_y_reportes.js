/* 
Categoría 2: Agregación y Reportes

4. Conteo de Elementos Únicos:

Problema: Dada una lista de ítems (ej. IDs de productos, nombres de categorías), contar la frecuencia de 
cada ítem único.

Input: ['manzana', 'pera', 'manzana', 'kiwi', 'pera', 'manzana']

Output: { manzana: 3, pera: 2, kiwi: 1 }

Pistas: reduce. El acumulador será un objeto.
*/
import { itemsEjercicio4 } from "./00-Datos.js";

function conteoElementos(elementos) {
  return elementos.reduce((acumulador, elemento) => {
    // Verifica si la clave ya existe
    if (acumulador[elemento]) {
      acumulador[elemento]++; // Incremento si ya existe
    } else {
      acumulador[elemento] = 1; // Inicializa en 1 si es la primera vez que se ve el elemento
    }

    return acumulador; // Pasa el estado actualizado del objeto a la siguiente iteración
  }, {});
}

console.log(conteoElementos(itemsEjercicio4));

/* 
 1. Uso el metodo reduce para devolver un objeto con las propiedades como nombres de los elementos y el valor 
 es el conteo de las veces que estan esos elementos.

 2. En el metodo reduce declaro dos variables, la primera acumulador que sera el objeto y la segunda elemento 
 que sera el elemento del arreglo en cada iteracion y declaro el acumulador como un objeto vacio para que me 
 devuelva un objeto.

 3. Hago una validacion con la condicion de que si en el objeto acumulador que tiene como propiedad el elemento 
 en este caso el primero si ya existe entonces va a sumarle uno si no existe entonces vas a crear el conteo 
 comenzando en 1 y por ultimo retorno el objeto acumulador completo.

*/
