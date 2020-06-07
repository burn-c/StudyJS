import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use('/src/images', express.static(path.resolve(__dirname, '..', 'src', 'images')));

app.use(errors());

app.listen(3333);

console.log('Server On-line on port: 3333');
