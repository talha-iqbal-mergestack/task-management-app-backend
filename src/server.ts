import 'module-alias/register';
require('./database/connect')();
import express from 'express';
import cors from 'cors';
import errorHandler from '@middleware/functions/error-handler';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/v1/auth', require('@resources/auth/auth.router'));
app.use('/api/v1/products', require('@resources/product/product.router'));
app.use('/api/v1/tasks', require('@resources/task/task.router'));
app.use(errorHandler);

app.get('/', (req, res) => {
	res.send('Hello from server');
});

app.listen(PORT, () => console.log(`Server listening at port: ${PORT}`));
