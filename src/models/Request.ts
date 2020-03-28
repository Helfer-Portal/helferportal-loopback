import {hasMany, model, property} from '@loopback/repository';
import {Address} from "./Address";
import {User} from "./User";
import {Organisation} from "./Organisation";
import {Quality} from "./Quality";

@model()
export class Request{
  @property({
    id: true,
    description: 'The unique identifier for a product',
  })
  id: number;

  //*******************************
  //***** BASIC
  //*******************************

  @property()
  isActive: boolean;

  @property()
  description: string;

  @property()
  start: number;

  @property()
  end: number;

  //*******************************
  //***** STATISTIK
  //*******************************

  @property()
  positiveResponses: number;

  @property()
  activeHelpers: number;

  //*******************************
  //***** ASSOCIATION
  //*******************************

  @property()
  coordinator: User;

  @property()
  address: Address;

  @property()
  organisation: Organisation;

  @hasMany(() => Quality)
  qualities?: Quality[];

  @hasMany(() => Quality)
  qualities?: Quality[];


}
