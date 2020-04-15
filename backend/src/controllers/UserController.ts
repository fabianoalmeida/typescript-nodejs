import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Fabiano', email: 'fabianoalmeida@gmail.com' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  
  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: 'Fabiano',
        email: 'me@fabiano.com'
      },
      message: {
        subject: 'Welcome',
        body: 'Aloha'
      }
    });

    res.send();
  }
}