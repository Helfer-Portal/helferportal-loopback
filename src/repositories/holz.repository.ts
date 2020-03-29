import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Holz, HolzRelations, Holzart} from '../models';
import {HosDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {HolzartRepository} from './holzart.repository';

export class HolzRepository extends DefaultCrudRepository<
  Holz,
  typeof Holz.prototype.id,
  HolzRelations
> {

  public readonly holzart: HasOneRepositoryFactory<Holzart, typeof Holz.prototype.id>;

  constructor(
    @inject('datasources.hos') dataSource: HosDataSource, @repository.getter('HolzartRepository') protected holzartRepositoryGetter: Getter<HolzartRepository>,
  ) {
    super(Holz, dataSource);
    this.holzart = this.createHasOneRepositoryFactoryFor('holzart', holzartRepositoryGetter);
    this.registerInclusionResolver('holzart', this.holzart.inclusionResolver);
  }
}
