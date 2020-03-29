import {Entity, model, property, hasOne} from '@loopback/repository';
import {Address} from './address.model';

@model()
export class Organisation extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  emailAddress?: string;

  @hasOne(() => Address)
  address: Address;

  constructor(data?: Partial<Organisation>) {
    super(data);
  }
}

export interface OrganisationRelations {
  // describe navigational properties here
}

export type OrganisationWithRelations = Organisation & OrganisationRelations;
