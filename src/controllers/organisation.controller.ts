import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Organisation} from '../models';
import {OrganisationRepository} from '../repositories';

export class OrganisationController {
  constructor(
    @repository(OrganisationRepository)
    public organisationRepository : OrganisationRepository,
  ) {}

  @post('/organisations', {
    responses: {
      '200': {
        description: 'Organisation model instance',
        content: {'application/json': {schema: getModelSchemaRef(Organisation)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Organisation, {
            title: 'NewOrganisation',
            exclude: ['id'],
          }),
        },
      },
    })
    organisation: Omit<Organisation, 'id'>,
  ): Promise<Organisation> {
    return this.organisationRepository.create(organisation);
  }

  @get('/organisations/count', {
    responses: {
      '200': {
        description: 'Organisation model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Organisation) where?: Where<Organisation>,
  ): Promise<Count> {
    return this.organisationRepository.count(where);
  }

  @get('/organisations', {
    responses: {
      '200': {
        description: 'Array of Organisation model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Organisation, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Organisation) filter?: Filter<Organisation>,
  ): Promise<Organisation[]> {
    return this.organisationRepository.find(filter);
  }

  @patch('/organisations', {
    responses: {
      '200': {
        description: 'Organisation PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Organisation, {partial: true}),
        },
      },
    })
    organisation: Organisation,
    @param.where(Organisation) where?: Where<Organisation>,
  ): Promise<Count> {
    return this.organisationRepository.updateAll(organisation, where);
  }

  @get('/organisations/{id}', {
    responses: {
      '200': {
        description: 'Organisation model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Organisation, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Organisation, {exclude: 'where'}) filter?: FilterExcludingWhere<Organisation>
  ): Promise<Organisation> {
    return this.organisationRepository.findById(id, filter);
  }

  @patch('/organisations/{id}', {
    responses: {
      '204': {
        description: 'Organisation PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Organisation, {partial: true}),
        },
      },
    })
    organisation: Organisation,
  ): Promise<void> {
    await this.organisationRepository.updateById(id, organisation);
  }

  @put('/organisations/{id}', {
    responses: {
      '204': {
        description: 'Organisation PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() organisation: Organisation,
  ): Promise<void> {
    await this.organisationRepository.replaceById(id, organisation);
  }

  @del('/organisations/{id}', {
    responses: {
      '204': {
        description: 'Organisation DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.organisationRepository.deleteById(id);
  }
}
