import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'carlos@carlos.com',
    password: '123456',
    techs: [
      'ReactJS',
      { title: 'Javascript', experience: 100 },
      { title: 'PHP', experience: 89 },
    ],
  });

  return response.json({ message: 'Hello World'});
}
