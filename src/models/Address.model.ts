import {Entity, model, property} from '@loopback/repository';

@model()
export class Address extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  street?: string;

  @property({
    type: 'string',
  })
  hn?: string;

  @property({
    type: 'number',
  })
  zip?: number;

  @property({
    type: 'number',
  })
  city?: number;

  @property({
    type: 'number',
  })
  country?: number;

  @property({
    type: 'number',
  })
  organisationId?: number;

  constructor(data?: Partial<Address>) {
    super(data);
  }
}

export interface AddressRelations {
  // describe navigational properties here
}

export type AddressWithRelations = Address & AddressRelations;
