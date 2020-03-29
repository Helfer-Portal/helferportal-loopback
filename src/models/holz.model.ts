import {Entity, model, property, hasOne} from '@loopback/repository';
import {Holzart} from './holzart.model';

@model()
export class Holz extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @hasOne(() => Holzart)
  holzart: Holzart;

  constructor(data?: Partial<Holz>) {
    super(data);
  }
}

export interface HolzRelations {
  // describe navigational properties here
}

export type HolzWithRelations = Holz & HolzRelations;
