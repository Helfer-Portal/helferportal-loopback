import {Entity, model, property, hasMany} from '@loopback/repository';
import {Address} from './Address';
import {Quality} from './Quality';
import {Volunteer} from './Volunteer';

@model()
export class User extends Entity{
  @property({
    type: 'number',
    id: true,
    description: 'The unique identifier for a product',
  })
  id: number;

  //*******************************
  //***** BASICS
  //*******************************

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  surname: string;

  //*******************************
  //***** PASSWORD
  //*******************************

  @property({
    type: 'string',
  })
  password: string;

  @property({
    type: 'string',
  })
  passwordResetToken: string;

  @property({
    type: 'number',
  })
  passwordResetTokenExpiresAt: number;

  //*******************************
  //***** EMAIL
  //*******************************

  @property({
    type: 'string',
  })
  emailAddress: string;

  @property({
    type: 'string',
  })
  emailStatus: string;

  @property({
    type: 'string',
  })
  emailChangeCandidate: string;

  @property({
    type: 'string',
  })
  emailProofToken: string;

  @property({
    type: 'number',
  })
  emailProofTokenExpiresAt: number;

  @property({
    type: 'Address',
  })
  cart: Address;

  //*******************************
  //***** CUSTOMISATION
  //*******************************

  @property({
    type: 'number',
  })
  avatarPath: string;

  //*******************************
  //***** ASSOCIATION
  //*******************************

  @hasMany(() => Quality)
  qualities?: Quality[];

  @hasMany(() => Volunteer)
  participation?: Volunteer[];

}
