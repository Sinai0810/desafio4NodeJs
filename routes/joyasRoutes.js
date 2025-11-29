import { Router } from "express";
import {getJoyasController, getJoyasFilteredByCategoryController} from '../src/controllers/joyasController.js';

const router = Router();

// Definir la ruta para obtener las joyas 

router.get('/getJoyas', getJoyasController); 
router.get ('/joyas/filtros' , getJoyasFilteredByCategoryController)



export default router;