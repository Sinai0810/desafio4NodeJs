# Español ✨

API de Joyas

Este proyecto es una **API REST** para consultar joyas almacenadas en una base de datos PostgreSQL. Está desarrollada con **Node.js, Express y consultas parametrizadas**, garantizando seguridad y evitando SQL Injection. La API soporta **paginación, ordenamiento y filtros**, y devuelve resultados en **formato HATEOAS**, incluyendo enlaces a recursos individuales para una navegación RESTful sencilla.

### Funcionalidades principales

- **GET /joyas**: Devuelve todas las joyas en formato HATEOAS. Soporta parámetros en la query:
  - `limits`: número de joyas por página
  - `page`: número de página
  - `order_by`: ordenamiento de resultados (ej.: `stock_ASC`)
- **GET /joyas/filtros**: Filtra joyas según:
  - `precio_min`: precio mínimo
  - `precio_max`: precio máximo
  - `categoria`: categoría de la joya
  - `metal`: metal de la joya
  Las consultas están **parametrizadas** para evitar SQL Injection.
- **Middleware**: Registra cada petición (método, query, params, body) para monitoreo.
- **Manejo de errores**: Se utiliza `try/catch` para enviar mensajes claros en caso de fallo.
- **Rutas 404**: Las rutas no definidas devuelven un **404 Not Found**.

### Tecnologías

- Node.js, Express
- PostgreSQL
- `pg` & `pg-format` para consultas seguras
- Middleware personalizado para logging
- Nodemon para desarrollo


# English✨

Jewelry API  

This project is a **REST API** for querying jewelry items stored in a PostgreSQL database. It is built with **Node.js, Express, and parameterized queries** to ensure security and prevent SQL injection. The API supports **pagination, sorting, and filtering**, and returns results in **HATEOAS format**, including links to individual resources for easy RESTful navigation.

### Main Features

- **GET /joyas**: Retrieves all jewelry items in HATEOAS format. Supports query parameters:
  - `limits`: number of items per page
  - `page`: page number
  - `order_by`: sorting order (e.g., `stock_ASC`)
- **GET /joyas/filtros**: Filters jewelry by:
  - `precio_min`: minimum price
  - `precio_max`: maximum price
  - `categoria`: category
  - `metal`: metal type
  Queries are **parameterized** to prevent SQL Injection.
- **Middleware**: Logs every request (method, query, params, body) for monitoring activity.
- **Error Handling**: Uses `try/catch` to return meaningful error messages.
- **404 Route**: Any undefined route returns a `404 Not Found`.

### Technologies

- Node.js, Express
- PostgreSQL
- `pg` & `pg-format` for secure queries
- Custom middleware for logging
- Nodemon for development


