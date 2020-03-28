import {Entity, model, property} from '@loopback/repository';


@model({Settings: {}})
export class QualityModel extends Entity{
  @property({
    id: true,
    description: 'The unique identifier for a Quality',
  })
  id: number;

  @property()
  name: string;

  /**
   * 1: skills, 2: handicaps, 3: tools
   */
  @property()
  type: number;

}
