// Datos para Ejercicio 1: Normalización de Datos de Usuarios
export const usuariosEjercicio1 = [
  { id: 1, nombre: "juan PEREZ", email: "JUAN.PEREZ@example.com", pais: "Mexico" },
  { id: 2, nombre: "ANA gomez", email: "ana.gomez@DOMAIN.COM", pais: "Colombia" },
  { id: 3, nombre: "maria DEL CARMEN", email: "MaRiA@otro.net", pais: "España" },
  { id: 4, nombre: "pedro rodriguez", email: "PEDRO@correo.es", pais: "Colombia" },
  { id: 5, nombre: "LAURA FERNANDEZ", email: "laura.fernandez@example.com", pais: "Paraguay" },
];

// Datos para Ejercicio 2: Aplanar y Filtrar Registros Anidados
export const proyectosEjercicio2 = [
  {
    id: "p1",
    nombre: "Desarrollo Web E-commerce",
    tareas: [
      { id: "t1", descripcion: "Diseño de UI/UX", estado: "completado", prioridad: "alta" },
      { id: "t2", descripcion: "Desarrollo Backend API", estado: "pendiente", prioridad: "alta" },
      { id: "t3", descripcion: "Configuración de Base de Datos", estado: "pendiente", prioridad: "media" },
    ],
  },
  {
    id: "p2",
    nombre: "App Móvil de Gestión",
    tareas: [
      { id: "t4", descripcion: "Implementación de Autenticación", estado: "pendiente", prioridad: "alta" },
      { id: "t5", descripcion: "Integración de Pagos", estado: "completado", prioridad: "alta" },
      { id: "t6", descripcion: "Pruebas de Rendimiento", estado: "pendiente", prioridad: "baja" },
    ],
  },
  {
    id: "p3",
    nombre: "Sistema de Reportes",
    tareas: [{ id: "t7", descripcion: "Generación de Reportes PDF", estado: "pendiente", prioridad: "media" }],
  },
  {
    id: "p4",
    nombre: "Mantenimiento General",
    tareas: [], // Proyecto sin tareas
  },
];

// Datos para Ejercicio 3, 5, 6, 7, 8, 10, 11, 12, 15: Productos de Tienda (ajustados para casos de prueba)
// Este es un set más completo para cubrir varios escenarios de stock y categorías.
export const productosTiendaCompleto = [
  { id: 1, nombre: "Teclado Mecánico RGB", precio: 85000, categoria: "perifericos", stock: 15, valoracion: 4.5 },
  { id: 2, nombre: "Mouse Inalámbrico Gaming", precio: 45000, categoria: "perifericos", stock: 5, valoracion: 4.2 }, // Stock bajo para prueba
  { id: 3, nombre: "SSD 1TB NVMe", precio: 250000, categoria: "almacenamiento", stock: 10, valoracion: 4.7 },
  { id: 4, nombre: "Audífonos Bluetooth Noise Cancelling", precio: 120000, categoria: "audio", stock: 0, valoracion: 4.8 }, // Stock agotado
  { id: 5, nombre: 'Monitor Curvo 27"', precio: 750000, categoria: "monitores", stock: 25, valoracion: 4.6 }, // Stock alto
  { id: 6, nombre: "Webcam Full HD", precio: 35000, categoria: "perifericos", stock: 8, valoracion: 3.9 },
  { id: 7, nombre: "Memoria RAM 16GB DDR4", precio: 180000, categoria: "componentes", stock: 7, valoracion: 4.4 },
  { id: 8, nombre: "Router Wi-Fi 6", precio: 90000, categoria: "redes", stock: 18, valoracion: 4.1 },
  { id: 9, nombre: "Disco Duro Externo 4TB", precio: 150000, categoria: "almacenamiento", stock: 12, valoracion: 4.0 },
  { id: 10, nombre: "Computadora de Escritorio Gamer", precio: 3500000, categoria: "computadoras", stock: 2, valoracion: 4.9 }, // Stock muy bajo
  { id: 11, nombre: "Silla Gamer Ergonómica", precio: 300000, categoria: "muebles", stock: 5, valoracion: 4.3 },
  { id: 12, nombre: "Smartwatch Deportivo", precio: 200000, categoria: "wearables", stock: 1, valoracion: 4.2 }, // Stock muy bajo
];

// Datos para Ejercicio 4: Conteo de Elementos Únicos
export const itemsEjercicio4 = [
  "perifericos",
  "monitores",
  "perifericos",
  "audio",
  "almacenamiento",
  "perifericos",
  "monitores",
  "audio",
  "muebles",
  "almacenamiento",
  "perifericos",
  "redes",
  "componentes",
  "redes",
  "monitores",
];

// Datos para Ejercicio 8: Pedidos de ejemplo
export const pedidoEjercicio8 = [
  { id: 1, cantidad: 1 }, // Teclado Mecánico RGB (stock 15)
  { id: 2, cantidad: 5 }, // Mouse Inalámbrico Gaming (stock 5)
  { id: 4, cantidad: 1 }, // Audífonos Bluetooth (stock 0 - debería fallar)
  { id: 10, cantidad: 2 }, // Computadora de Escritorio Gamer (stock 2)
];
// Este pedido debería dar TRUE si usas `productosTiendaCompleto` y el stock permite
// Prueba con: [{ id: 1, cantidad: 20 }, { id: 2, cantidad: 1 }] para un FALSE (excede teclado)

// Datos para Ejercicio 9: Encontrar Elementos Duplicados en Array de Objetos
export const productosEjercicio9 = [
  { id: "prod-A", nombre: "Producto Alpha", version: "v1" },
  { id: "prod-B", nombre: "Producto Beta", version: "v1" },
  { id: "prod-C", nombre: "Producto Gamma", version: "v1" },
  { id: "prod-A", nombre: "Producto Alpha - Nueva Serie", version: "v2" }, // Duplicado por ID
  { id: "prod-D", nombre: "Producto Delta", version: "v1" },
  { id: "prod-B", nombre: "Producto Beta - Mejorado", version: "v2" }, // Otro duplicado por ID
  { id: "prod-E", nombre: "Producto Epsilon", version: "v1" },
];

// Datos para Ejercicio 10: Ventas de ejemplo
export const ventasEjercicio10 = [
  { productoId: 1, cantidadVendida: 2 }, // Teclado Mecánico RGB
  { productoId: 2, cantidadVendida: 3 }, // Mouse Inalámbrico Gaming
  { productoId: 10, cantidadVendida: 1 }, // Computadora de Escritorio Gamer
  { productoId: 99, cantidadVendida: 1 }, // ID inexistente - para probar manejo de errores
];

// Datos para Ejercicio 13: Calcular Promedio Ponderado de Valoraciones
export const valoracionesEjercicio13 = [
  { idUsuario: "u1", rating: 5, tipoUsuario: "normal" },
  { idUsuario: "u2", rating: 4, tipoUsuario: "premium" }, // Pesa doble
  { idUsuario: "u3", rating: 3, tipoUsuario: "normal" },
  { idUsuario: "u4", rating: 5, tipoUsuario: "premium" }, // Pesa doble
  { idUsuario: "u5", rating: 2, tipoUsuario: "normal" },
  { idUsuario: "u6", rating: 1, tipoUsuario: "premium" }, // Pesa doble
];
// Regla: 'premium' cuenta el doble.

// Datos para Ejercicio 14: Agrupar Eventos por Mes
export const eventosEjercicio14 = [
  { id: "e1", nombre: "Lanzamiento de Producto", fecha: "2024-01-15T10:00:00Z" },
  { id: "e2", nombre: "Reunión Trimestral", fecha: "2024-03-01T09:30:00Z" },
  { id: "e3", nombre: "Hackathon Anual", fecha: "2024-01-28T18:00:00Z" },
  { id: "e4", nombre: "Conferencia de Desarrolladores", fecha: "2024-05-10T08:00:00Z" },
  { id: "e5", nombre: "Entrenamiento Interno", fecha: "2024-03-20T14:00:00Z" },
  { id: "e6", nombre: "Celebración Aniversario", fecha: "2024-05-25T19:00:00Z" },
];

// Datos para Ejercicio 15: Carrito Propuesto de ejemplo (para probar ajuste de stock)
export const carritoPropuestoEjercicio15 = [
  { id: 1, cantidad: 10 }, // Teclado (stock 15) -> debería pasar 10
  { id: 2, cantidad: 7 }, // Mouse (stock 5) -> debería ajustarse a 5
  { id: 4, cantidad: 3 }, // Audífonos (stock 0) -> debería ser excluido o cantidad 0
  { id: 10, cantidad: 4 }, // Computadora (stock 2) -> debería ajustarse a 2
  { id: 99, cantidad: 1 }, // ID inexistente -> debería ser excluido o cantidad 0
];
