import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Organisation,
  Address,
} from '../models';
import {OrganisationRepository} from '../repositories';

export class OrganisationAddressController {
  constructor(
    @repository(OrganisationRepository) protected organisationRepository: OrganisationRepository,
  ) { }

  @get('/organisations/{id}/address', {
    responses: {
      '200': {
        description: 'Organisation has one Address',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Address),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Address>,
  ): Promise<Address> {
    return this.organisationRepository.address(id).get(filter);
  }

  @post('/organisations/{id}/address', {
    responses: {
      '200': {
        description: 'Organisation model instance',
        content: {'application/json': {schema: getModelSchemaRef(Address)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Organisation.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Address, {
            title: 'NewAddressInOrganisation',
            exclude: ['id'],
            optional: ['organisationId']
          }),
        },
      },
    }) address: Omit<Address, 'id'>,
  ): Promise<Address> {
    return this.organisationRepository.address(id).create(address);
  }

  @patch('/organisations/{id}/address', {
    responses: {
      '200': {
        description: 'Organisation.Address PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Address, {partial: true}),
        },
      },
    })
    address: Partial<Address>,
    @param.query.object('where', getWhereSchemaFor(Address)) where?: Where<Address>,
  ): Promise<Count> {
    return this.organisationRepository.address(id).patch(address, where);
  }

  @del('/organisations/{id}/address', {
    responses: {
      '200': {
        description: 'Organisation.Address DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Address)) where?: Where<Address>,
  ): Promise<Count> {
    return this.organisationRepository.address(id).delete(where);
  }
}
