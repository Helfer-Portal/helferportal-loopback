import {model, property} from '@loopback/repository';

@model()
export class Address{
  @property({
    id: true,
    description: 'The unique identifier for a product',
  })
  id: number;

  //*******************************
  //***** Address data
  //*******************************

  @property()
  street: string;

  @property()
  hn: string;

  @property()
  zip: number;

  @property()
  city: string;

  @property()
  country: number;

  //*******************************
  //***** POINT
  //*******************************

  //@property()
  //geom: POINT;

  //*******************************
  //***** ASSOCIATION
  //*******************************


}
