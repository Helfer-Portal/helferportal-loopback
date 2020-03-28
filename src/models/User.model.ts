import {Entity, model, property, hasMany} from '@loopback/repository';
import {AddressModel} from './Address.model';
import {QualityModel} from './Quality.model';
import {VolunteerModel} from './Volunteer.model';

@model()
export class UserModel extends Entity{
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
  cart: AddressModel;

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

  @hasMany(() => QualityModel)
  qualities?: QualityModel[];

  @hasMany(() => VolunteerModel)
  participation?: VolunteerModel[];

}
