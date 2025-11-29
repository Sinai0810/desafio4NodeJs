import { getJoyasModel , prepararHETEOAS, getJoyasFilteredByCategoryModel} from '../models/joyasModels.js';

export const getJoyasController = async (req, res) => {
  try {
    const order_by = req.query.order_by || 'stock_ASC';
    const limits = parseInt(req.query.limits) || 5;
    const page = parseInt(req.query.page) || 1;

    const joyas = await getJoyasModel({ order_by, limits, page });

    const joyasHATEOAS = prepararHETEOAS(joyas);

    res.status(200).json(joyasHATEOAS);

  } catch (error) {
    console.log('Error en el controlador de joyas:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

export const getJoyasFilteredByCategoryController = async (req, res) => {
    try { 
        const {precio_max, precio_min , categoria , metal} = req.query
        const joyas = await getJoyasFilteredByCategoryModel ({precio_max, precio_min , categoria , metal})
        res.status (200).json (joyas)
    } catch (error) {
        console.log ('Error en el controlador de joyas filtradas por categoria:', error)
        res.status (500).json ({error: 'Error del servidor'})
    }
}
