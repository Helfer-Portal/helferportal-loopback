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
import {Holz} from '../models';
import {HolzRepository} from '../repositories';

export class HolzController {
  constructor(
    @repository(HolzRepository)
    public holzRepository : HolzRepository,
  ) {}

  @post('/holzs', {
    responses: {
      '200': {
        description: 'Holz model instance',
        content: {'application/json': {schema: getModelSchemaRef(Holz)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Holz, {
            title: 'NewHolz',
            exclude: ['id'],
          }),
        },
      },
    })
    holz: Omit<Holz, 'id'>,
  ): Promise<Holz> {
    return this.holzRepository.create(holz);
  }

  @get('/holzs/count', {
    responses: {
      '200': {
        description: 'Holz model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Holz) where?: Where<Holz>,
  ): Promise<Count> {
    return this.holzRepository.count(where);
  }

  @get('/holzs', {
    responses: {
      '200': {
        description: 'Array of Holz model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Holz, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Holz) filter?: Filter<Holz>,
  ): Promise<Holz[]> {
    return this.holzRepository.find(filter);
  }

  @patch('/holzs', {
    responses: {
      '200': {
        description: 'Holz PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Holz, {partial: true}),
        },
      },
    })
    holz: Holz,
    @param.where(Holz) where?: Where<Holz>,
  ): Promise<Count> {
    return this.holzRepository.updateAll(holz, where);
  }

  @get('/holzs/{id}', {
    responses: {
      '200': {
        description: 'Holz model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Holz, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Holz, {exclude: 'where'}) filter?: FilterExcludingWhere<Holz>
  ): Promise<Holz> {
    return this.holzRepository.findById(id, filter);
  }

  @patch('/holzs/{id}', {
    responses: {
      '204': {
        description: 'Holz PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Holz, {partial: true}),
        },
      },
    })
    holz: Holz,
  ): Promise<void> {
    await this.holzRepository.updateById(id, holz);
  }

  @put('/holzs/{id}', {
    responses: {
      '204': {
        description: 'Holz PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() holz: Holz,
  ): Promise<void> {
    await this.holzRepository.replaceById(id, holz);
  }

  @del('/holzs/{id}', {
    responses: {
      '204': {
        description: 'Holz DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.holzRepository.deleteById(id);
  }
}
