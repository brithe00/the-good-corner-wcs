import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { dataSource } from './config/db';
import adControllers from './controllers/adControllers';
import categoryController from './controllers/categoryControllers';
import tagControllers from './controllers/tagControllers';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get('/ads', adControllers.read);
app.get('/ads/:id', adControllers.readById);
app.post('/ads', adControllers.create);
app.put('/ads/:id', adControllers.update);
app.delete('/ads/:id', adControllers.delete);

app.get('/categories', categoryController.read);
app.get('/categories/:id', categoryController.readById);
app.post('/categories', categoryController.create);
app.put('/categories/:id', categoryController.update);
app.delete('/categories/:id', categoryController.delete);

app.get('/tags', tagControllers.read);
app.post('/tags', tagControllers.create);
app.put('/tags', tagControllers.update);
app.delete('/tags', tagControllers.delete);

app.listen(port, async () => {
	await dataSource.initialize();
	console.log(`Server launch on: http://localhost:${port}`);
});
