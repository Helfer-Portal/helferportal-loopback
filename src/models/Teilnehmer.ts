import {model, property, hasMany} from '@loopback/repository';
import {User} from './User';
import {Request} from './Request';

@model()
export class User{
  @property({
    id: true,
    description: 'The unique identifier for a product',
  })
  id: number;

  //*******************************
  //***** ASSOCIATION
  //*******************************

  @hasMany(() => User)
  user?: User[];

  @hasMany(() => Request)
  participation?: Request[];
  }
}
