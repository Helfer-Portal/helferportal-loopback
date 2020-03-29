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
  Holz,
  Holzart,
} from '../models';
import {HolzRepository} from '../repositories';

export class HolzHolzartController {
  constructor(
    @repository(HolzRepository) protected holzRepository: HolzRepository,
  ) { }

  @get('/holzs/{id}/holzart', {
    responses: {
      '200': {
        description: 'Holz has one Holzart',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Holzart),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Holzart>,
  ): Promise<Holzart> {
    return this.holzRepository.holzart(id).get(filter);
  }

  @post('/holzs/{id}/holzart', {
    responses: {
      '200': {
        description: 'Holz model instance',
        content: {'application/json': {schema: getModelSchemaRef(Holzart)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Holz.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Holzart, {
            title: 'NewHolzartInHolz',
            exclude: ['id'],
            optional: ['holzId']
          }),
        },
      },
    }) holzart: Omit<Holzart, 'id'>,
  ): Promise<Holzart> {
    return this.holzRepository.holzart(id).create(holzart);
  }

  @patch('/holzs/{id}/holzart', {
    responses: {
      '200': {
        description: 'Holz.Holzart PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Holzart, {partial: true}),
        },
      },
    })
    holzart: Partial<Holzart>,
    @param.query.object('where', getWhereSchemaFor(Holzart)) where?: Where<Holzart>,
  ): Promise<Count> {
    return this.holzRepository.holzart(id).patch(holzart, where);
  }

  @del('/holzs/{id}/holzart', {
    responses: {
      '200': {
        description: 'Holz.Holzart DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Holzart)) where?: Where<Holzart>,
  ): Promise<Count> {
    return this.holzRepository.holzart(id).delete(where);
  }
}
