import {model, property, hasMany} from '@loopback/repository';
import {Address} from './Address';
import {Quality} from './Quality';
import {Request} from './Request';

@model()
export class User{
  @property({
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
  email: string;

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
  logo: string;

  //*******************************
  //***** ASSOCIATION
  //*******************************

  @property()
  cart: Address;

  @hasMany(() => Quality)
  qualities?: Quality[];

  @hasMany(() => Request)
  participation?: Request[];

  }
}
