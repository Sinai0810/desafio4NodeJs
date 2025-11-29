import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
import format from 'pg-format';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const pool = new pg.Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  allowExitOnIdle: true
});

export const getJoyasModel = async ({ order_by = 'stock_ASC', limits = 5, page = 1 }) => {
  try {
    const [field, direction] = order_by.split("_");
    const offset = (parseInt(page) - 1) * parseInt(limits);

    const query = format(
      'SELECT * FROM public.inventario ORDER BY %s %s LIMIT %s OFFSET %s',
      field,
      direction,
      limits,
      offset
    );

    console.log(query);
    const response = await pool.query(query);
    return response.rows;
  } catch (error) {
    console.log('Error al obtener las joyas:', error);
    throw error;
  }
};


export const prepararHETEOAS = (joyas) => {
    const totalJoyas = joyas.length;
    const stockTotal = joyas.reduce((accum,joya) => accum + joya.stock ,0);

    const joyasHATEOAS = joyas.map((joya)=>{
        return {
            name: joya.nombre,
            href: `/api/joyas/${joya.id}`, 
            stock: joya.stock,
        }
    }).slice(0,4); // Retorna solo las primeras 4 joyas
    const response = {
        totalJoyas ,
        stockTotal,
        results: joyasHATEOAS
    }
    return response;    
    }


export const getJoyasFilteredByCategoryModel = async ({ precio_max, precio_min, categoria, metal }) => {
  try {
    let filtros = [];
    let values = [];
    let i = 1; // contador para los placeholders $1, $2, $3...

    // Agregar filtros de manera parametrizada
    if (precio_max) {
      filtros.push(`precio <= $${i++}`);
      values.push(precio_max);
    }
    if (precio_min) {
      filtros.push(`precio >= $${i++}`);
      values.push(precio_min);
    }
    if (categoria) {
      filtros.push(`categoria = $${i++}`);
      values.push(categoria);
    }
    if (metal) {
      filtros.push(`metal = $${i++}`);
      values.push(metal);
    }

    // Construir la consulta base
    let consulta = 'SELECT * FROM public.inventario';

    // Si hay filtros, unirlos con AND
    if (filtros.length > 0) {
      consulta += ` WHERE ${filtros.join(' AND ')}`;
    }

    // Ejecutar consulta con los valores parametrizados
    const { rows } = await pool.query(consulta, values);
    return rows;

  } catch (error) {
    console.log('Error al obtener las joyas:', error);
    throw error;
  }
};
