Español ✨
📦 API de Joyas
Resumen del Proyecto
Este proyecto consiste en una API REST para consultar joyas almacenadas en una base de datos PostgreSQL, desarrollada con Node.js, Express y consultas parametrizadas. La API soporta paginación, ordenamiento y filtros, y retorna resultados en formato HATEOAS.
Funcionalidades principales
GET /joyas: Devuelve todas las joyas en formato HATEOAS. Soporta parámetros en la query:
limits: número de joyas por página
page: número de página
order_by: ordenamiento de resultados (ej.: stock_ASC)
GET /joyas/filtros: Filtra joyas según:
precio_min: precio mínimo
precio_max: precio máximo
categoria: categoría de la joya
metal: metal de la joya
Las consultas están parametrizadas para evitar SQL Injection.
Middleware: Genera un log de cada petición con método, query, params y body para monitoreo de actividad.
Manejo de errores: Todas las rutas usan try/catch para capturar errores y enviar mensajes claros al cliente.
Rutas 404: Las rutas no definidas devuelven un mensaje 404 Not Found.
HATEOAS: Las respuestas incluyen enlaces a recursos individuales para navegación RESTful.
Tecnologías
Node.js, Express
PostgreSQL
pg y pg-format para consultas seguras
Middleware personalizado para logging
Nodemon para desarrollo

English ✨

📦 Jewelry API 

Project Overview
This project is a REST API to query jewelry items stored in a PostgreSQL database, built with Node.js, Express, and parameterized queries. The API supports pagination, sorting, and filtering, and returns results in HATEOAS format.
Main Features
GET /joyas: Returns all jewelry items in HATEOAS format. Supports query parameters:
limits: number of items per page
page: page number
order_by: sorting order (e.g., stock_ASC)
GET /joyas/filtros: Filter jewelry by:
precio_min: minimum price
precio_max: maximum price
categoria: category
metal: metal type
Queries are parameterized to prevent SQL Injection.
Middleware: Logs each request with method, query, params, and body. Useful for activity monitoring.
Error Handling: All routes use try/catch to catch errors and return meaningful messages.
404 Route: Any undefined route returns a 404 Not Found response.
HATEOAS: Responses include links to individual resources for RESTful navigation.
Technologies
Node.js, Express
PostgreSQL
pg and pg-format for secure queries
Custom middleware for logging
Nodemon for development
