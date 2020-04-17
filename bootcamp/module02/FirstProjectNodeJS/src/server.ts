import 'reflect-metadata';
import colors from 'colors';

import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

app.listen(3333, () => {
  console.log(colors.green('\n >>>>>>>> 🚀 - Server started on port 3333!'));
});
