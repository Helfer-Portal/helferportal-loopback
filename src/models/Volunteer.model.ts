import {Entity, model, property} from '@loopback/repository';
import {User} from './User.model';
import {Request} from './Request.model';

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

export interface VolunteerRelations {
  // describe navigational properties here
}