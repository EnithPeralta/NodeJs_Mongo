const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const opeRoutes = require('./routes/operarios');
const proveRoutes = require('./routes/proveedores');
const tiproRoutes = require('./routes/tiposProcesos')
const variedad = require('./routes/variedad');
const maquina = require('./routes/maquina');
const estados = require('./routes/estados_maquina')
const lote = require('./routes/lote_cafe')
const app = express();

const port = process.env.PORT || 7000;

// Middleware para las rutas de operarios
app.use(express.json());
app.use('/api', opeRoutes);
app.use('/api',proveRoutes)
app.use('/api',tiproRoutes)
app.use('/api',variedad)
app.use('/api',maquina)
app.use('/api',estados)
app.use('/api',lote)

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error(error));

// Iniciar el servidor
app.listen(port, () => console.log('Servidor funcionando en el puerto', port));
