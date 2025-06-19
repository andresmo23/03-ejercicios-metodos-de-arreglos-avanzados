/* 
2. Aplanar y Filtrar Registros Anidados:

Problema: Tienes un array de proyectos, y cada proyecto tiene un array anidado de tareas. Necesitas obtener 
una lista plana de todas las tareas, pero solo aquellas que están pendientes (estado: 'pendiente').

Input:
javascript const proyectos = [ { id: 'p1', nombre: 'Web App', tareas: [{id: 't1', desc: 'Diseño UI', 
estado: 'completado'}, {id: 't2', desc: 'Desarrollo API', estado: 'pendiente'}] }, { id: 'p2', nombre: 
'Mobile App', tareas: [{id: 't3', desc: 'Testing', estado: 'pendiente'}, {id: 't4', desc: 'Deployment', 
estado: 'completado'}] } ];

Output: [{id: 't2', desc: 'Desarrollo API', estado: 'pendiente'}, {id: 't3', desc: 'Testing', 
estado: 'pendiente'}]

Pistas: flatMap() (si estás cómodo con él, si no reduce con concat), filter.
*/
import { proyectosEjercicio2 } from "./00-Datos.js";

function tareasPendientes(proyectos) {
  const tareasPendientes = proyectos.flatMap((proyecto) => {
    const tareas = proyecto.tareas;
    const pendientes = tareas.filter((tarea) => tarea.estado === "pendiente");

    return pendientes;
  });

  return tareasPendientes;
}

console.log(tareasPendientes(proyectosEjercicio2));
