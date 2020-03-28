import {Entity, model, property, hasMany} from '@loopback/repository';
import {User} from './User';
import {Request} from './Request';

//TODO: Bitte richtig auflösen, PrimärKey auf User / Request
@model()
export class Volunteer extends Entity{
  @property({
    id: true,
    description: 'The unique identifier for a product',
  })
  user: User;

  @property({
    id: true,
    description: 'The unique identifier for a product',
  })
  request: Request;
}
