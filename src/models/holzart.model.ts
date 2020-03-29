import {Entity, model, property} from '@loopback/repository';

@model()
export class Holzart extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
  })
  holzId?: number;

  constructor(data?: Partial<Holzart>) {
    super(data);
  }
}

export interface HolzartRelations {
  // describe navigational properties here
}

export type HolzartWithRelations = Holzart & HolzartRelations;
