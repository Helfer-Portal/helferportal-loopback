import {Entity, model, property} from '@loopback/repository';
import {UserModel} from './User.model';
import {RequestModel} from './Request.model';

//TODO: Bitte richtig auflösen, PrimärKey auf User / Request
@model()
export class VolunteerModel extends Entity{
  @property({
    id: true,
    description: 'The unique identifier for a product',
  })
  user: UserModel;

  @property({
    id: true,
    description: 'The unique identifier for a product',
  })
  request: RequestModel;
}
