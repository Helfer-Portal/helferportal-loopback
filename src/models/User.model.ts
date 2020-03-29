import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {Address} from './Address.model';
// import {Quality} from './Quality.model';
// import {Volunteer} from './Volunteer.model';

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

  @hasOne(()=> Address)
  address?: Address;

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

  // @hasMany(() => Quality)
  // qualities?: Quality[];

  // @hasMany(() => Volunteer)
  // participation?: Volunteer[];

}

export interface UserRelations {
  // describe navigational properties here
}
