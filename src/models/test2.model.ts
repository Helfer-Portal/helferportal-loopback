import {Entity, model, property} from '@loopback/repository';

@model()
export class Test2 extends Entity {
  @property({
    type: 'number',
  })
  address?: number;


  constructor(data?: Partial<Test2>) {
    super(data);
  }
}

export interface Test2Relations {
  // describe navigational properties here
}

export type Test2WithRelations = Test2 & Test2Relations;
