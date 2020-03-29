// import {Entity, hasMany, model, property} from '@loopback/repository';
// import {Address} from "./Address.model";
// import {User} from "./User.model";
// import {Volunteer} from "./Volunteer.model";
// import {Quality} from "./Quality.model";
//
// @model()
// export class Request extends Entity{
//   @property({
//     id: true,
//     description: 'The unique identifier for a product',
//   })
//   id: number;
//
//   //*******************************
//   //***** BASIC
//   //*******************************
//
//   @property()
//   isActive: boolean;
//
//   @property()
//   description: string;
//
//   @property()
//   start: number;
//
//   @property()
//   end: number;
//
//   @property()
//   coordinator: User;
//
//   @property()
//   address: Address;
//
//   //*******************************
//   //***** STATISTIK
//   //*******************************
//
//   @property()
//   positiveResponses: number;
//
//   @property()
//   activeHelpers: number;
//
//   //*******************************
//   //***** ASSOCIATION
//   //*******************************
//
//   // @hasMany(() => Quality)
//   // qualities?: Quality[];
//
//   // @hasMany(() => Volunteer)
//   // volunteers?: Volunteer[];
// }
//
// export interface RequestRelations {
//   // describe navigational properties here
// }
