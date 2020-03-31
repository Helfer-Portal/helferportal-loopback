import {Entity, model, property} from '@loopback/repository';


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

  //*******************************
  //***** Address data
  //*******************************

  @property({
    type: 'string',
  })
  street: string;

  @property({
    type: 'string',
  })
  hn: string;

  @property({
    type: 'number',
  })
  zip: number;

  @property({
    type: 'string',
  })
  city: string;

  @property({
    type: 'string',
  })
  country: number;

  //*******************************
  //***** GEO DATA
  //*******************************

  // https://apidocs.strongloop.com/loopback-datasource-juggler/#geopoint

  // @property()
  // geom: GeoPoint;

  //*******************************
  //***** CUSTOMISATION
  //*******************************

  @property({
    type: 'string',
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
