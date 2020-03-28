import {Entity, hasMany, model, property} from '@loopback/repository';
import {Address} from "./Address";
import {Request} from "./Request";

@model()
export class Project extends Entity{
  @property({
    type: 'number',
    id: true,
    description: 'The unique identifier for a product',
  })
  id: number;

  //*******************************
  //***** BASIC
  //*******************************

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  description: string;

  @property({
    type: 'string',
  })
  phone: string;

  @property({
    type: 'Address',
  })
  address: Address;

  //*******************************
  //***** ASSOCIATION
  //*******************************

  @hasMany(() => Request)
  requests?: Request[];

}
