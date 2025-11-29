import express from 'express';
import  cors from 'cors';
import morgan from 'morgan';
import joyasRoutes from './routes/joyasRoutes.js';
import { joyasMiddleware } from './db/middleware/joyasMiddleware.js';


const PORT = process.eventNames.PORT || 3000;
const app = express();

// Middlewares
app.use (cors()); //Permite que el front haga peticiones al backend 
app.use (morgan('dev'));//muestra en consola las peticiones que llegan al servidor
app.use (express.json()); //Permite que el servidor entienda JSON en el body de las peticiones
app.use (joyasMiddleware); //Middleware personalizado para registrar detalles de las solicitudes
app.use('/api', joyasRoutes); //Rutas de joyas


//Ruta Raiz 

app.get('/' , (req,res) => {
    res.send('Servidor funcionando correctamente')
});

//Manejo de rutas no definidas
app.use((req, res) => {
  res.status(404).send('Esta ruta no existe');
});

//Iniciar servidor
app.listen (PORT , () => {
    console.log (`Servidor encendido en http://localhost:${PORT}`);
})


