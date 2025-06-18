/* 
Categoría 1: Manipulación y Transformación de Datos

1. Normalización de Datos de Usuarios:

Problema: Tienes una lista de usuarios (objetos) donde los nombres y correos pueden tener formatos 
inconsistentes. Necesitas normalizarlos.

Input: [{ id: 1, nombre: 'juan PEREZ', email: 'JUAN.PEREZ@example.com' }, { id: 2, 
nombre: 'Ana GOMEZ', email: 'ana.gomez@domain.com' }]

Output: Un nuevo array de usuarios donde nombre está en formato "Capital Case" (primera letra mayúscula, 
el resto minúscula para cada palabra) y email está en minúsculas.

Pistas: map, toLowerCase(), toUpperCase(), split(), join(), substring() o slice().

*/
import { usuariosEjercicio1 } from "./00-Datos.js";

function normalizarDatosUsuarios(usuarios) {
  const nuevoArray = usuarios.map((usuario) => {
    const nombreMinuscula = usuario.nombre.toLowerCase();
    const nombreCapitalCase = nombreMinuscula.charAt(0).toUpperCase() + nombreMinuscula.slice(1);
    const emailLowerCase = usuario.email.toLowerCase();

    return {
      ...usuario,
      nombre: nombreCapitalCase,
      email: emailLowerCase,
    };
  });
  return nuevoArray;
}

console.log(normalizarDatosUsuarios(usuariosEjercicio1));
