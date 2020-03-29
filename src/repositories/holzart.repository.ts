import {DefaultCrudRepository} from '@loopback/repository';
import {Holzart, HolzartRelations} from '../models';
import {HosDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HolzartRepository extends DefaultCrudRepository<
  Holzart,
  typeof Holzart.prototype.id,
  HolzartRelations
> {
  constructor(
    @inject('datasources.hos') dataSource: HosDataSource,
  ) {
    super(Holzart, dataSource);
  }
}
