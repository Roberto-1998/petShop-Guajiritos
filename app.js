const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config();
require('./db');






// Variables
const app = express();
const port = process.env.PORT;
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');


// Middlewares
app.use(cors());

// Carga de Archivos
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    createParentPath: true
}));

app.use(express.json());

// Rutas
app.use('/api', apiRouter);
app.use('/auth', authRouter);



app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}!`))