import {Entity, hasMany, model, property} from '@loopback/repository';
import {Address} from "./Address";
import {Request} from "./Request";

@model()
export class Project extends Entity{
  @property({
    id: true,
    description: 'The unique identifier for a product',
  })
  id: number;

  //*******************************
  //***** BASIC
  //*******************************

  @property()
  name: string;

  @property()
  description: string;

  @property()
  phone: string;

  @property()
  address: Address;

  //*******************************
  //***** ASSOCIATION
  //*******************************

  @hasMany(() => Request)
  requests?: Request[];

}
