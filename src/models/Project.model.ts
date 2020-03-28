import {Entity, hasMany, model, property} from '@loopback/repository';
import {AddressModel} from "./Address.model";
import {RequestModel} from "./Request.model";

@model()
export class ProjectModel extends Entity{
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
  address: AddressModel;

  //*******************************
  //***** ASSOCIATION
  //*******************************

  @hasMany(() => RequestModel)
  requests?: RequestModel[];

}
