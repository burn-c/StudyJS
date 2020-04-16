import 'reflect-metadata';
import colors from 'colors';

import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log(colors.green('\n >>>>>>>> 🚀 - Server started on port 3333!'));
});
