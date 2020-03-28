import {Entity, hasMany, model, property} from '@loopback/repository';
import {AddressModel} from "./Address.model";
import {ProjectModel} from "./Project.model";

@model()
export class OrganisationModel extends Entity{
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
  logoPath: string;

  @property()
  phone: string;

  @property()
  emailAddress: string;

  @property()
  address: AddressModel;

  //*******************************
  //***** ASSOCIATION
  //*******************************

  @hasMany(() => ProjectModel)
  projects?: ProjectModel[];


}
