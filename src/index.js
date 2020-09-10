import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import productoRoutes from './routes/producto.routes';

//setting
import './database';
const app = express(); //instaciar a express

app.set('port', process.env.PORT || 4000); //nos creamos un puert

app.listen(app.get('port'), () => {
    console.log("Estoy escuchando el puerto" + app.get('port'));
})
//middlewares

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());//me permite entender mi formato json
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public')))


//crear una ruta 
app.use('/api/cafeteria', productoRoutes)