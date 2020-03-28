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

  @property()
  name: string;

  @property()
  surname: string;

  //*******************************
  //***** PASSWORD
  //*******************************

  @property()
  password: string;

  @property()
  passwordResetToken: string;

  @property()
  passwordResetTokenExpiresAt: number;

  //*******************************
  //***** EMAIL
  //*******************************

  @property()
  emailAddress: string;

  @property()
  emailStatus: string;

  @property()
  emailChangeCandidate: string;

  @property()
  emailProofToken: string;

  @property()
  emailProofTokenExpiresAt: number;

  //*******************************
  //***** CUSTOMISATION
  //*******************************

  @property()
  avatarPath: string;

  //*******************************
  //***** ASSOCIATION
  //*******************************

  @property()
  cart: Address;

  @hasMany(() => Quality)
  qualities?: Quality[];

  @hasMany(() => Volunteer)
  participation?: Volunteer[];

}
