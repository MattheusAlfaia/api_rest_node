import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json'; // Importa o JSON de configuração
import express from 'express';
import exampleRouter from './routes/example.route';

const app = express();
// Middleware para JSON
app.use(express.json());
// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Rotas
app.get('/', (req, res) => {
    res.send({ message: 'API is running!' });
});

app.use('/api', exampleRouter);

// Inicializando o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;