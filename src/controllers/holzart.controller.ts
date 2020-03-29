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
import {Holzart} from '../models';
import {HolzartRepository} from '../repositories';

export class HolzartController {
  constructor(
    @repository(HolzartRepository)
    public holzartRepository : HolzartRepository,
  ) {}

  @post('/holzarts', {
    responses: {
      '200': {
        description: 'Holzart model instance',
        content: {'application/json': {schema: getModelSchemaRef(Holzart)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Holzart, {
            title: 'NewHolzart',
            exclude: ['id'],
          }),
        },
      },
    })
    holzart: Omit<Holzart, 'id'>,
  ): Promise<Holzart> {
    return this.holzartRepository.create(holzart);
  }

  @get('/holzarts/count', {
    responses: {
      '200': {
        description: 'Holzart model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Holzart) where?: Where<Holzart>,
  ): Promise<Count> {
    return this.holzartRepository.count(where);
  }

  @get('/holzarts', {
    responses: {
      '200': {
        description: 'Array of Holzart model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Holzart, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Holzart) filter?: Filter<Holzart>,
  ): Promise<Holzart[]> {
    return this.holzartRepository.find(filter);
  }

  @patch('/holzarts', {
    responses: {
      '200': {
        description: 'Holzart PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Holzart, {partial: true}),
        },
      },
    })
    holzart: Holzart,
    @param.where(Holzart) where?: Where<Holzart>,
  ): Promise<Count> {
    return this.holzartRepository.updateAll(holzart, where);
  }

  @get('/holzarts/{id}', {
    responses: {
      '200': {
        description: 'Holzart model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Holzart, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Holzart, {exclude: 'where'}) filter?: FilterExcludingWhere<Holzart>
  ): Promise<Holzart> {
    return this.holzartRepository.findById(id, filter);
  }

  @patch('/holzarts/{id}', {
    responses: {
      '204': {
        description: 'Holzart PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Holzart, {partial: true}),
        },
      },
    })
    holzart: Holzart,
  ): Promise<void> {
    await this.holzartRepository.updateById(id, holzart);
  }

  @put('/holzarts/{id}', {
    responses: {
      '204': {
        description: 'Holzart PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() holzart: Holzart,
  ): Promise<void> {
    await this.holzartRepository.replaceById(id, holzart);
  }

  @del('/holzarts/{id}', {
    responses: {
      '204': {
        description: 'Holzart DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.holzartRepository.deleteById(id);
  }
}
