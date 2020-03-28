import {Entity, hasMany, model, property} from '@loopback/repository';
import {AddressModel} from "./Address.model";
import {UserModel} from "./User.model";
import {VolunteerModel} from "./Volunteer.model";
import {QualityModel} from "./Quality.model";

@model()
export class RequestModel extends Entity{
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

  @property()
  coordinator: UserModel;

  @property()
  address: AddressModel;

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

  @hasMany(() => QualityModel)
  qualities?: QualityModel[];

  @hasMany(() => VolunteerModel)
  volunteers?: VolunteerModel[];
}
