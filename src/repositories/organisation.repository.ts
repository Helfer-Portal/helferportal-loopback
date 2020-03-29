import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Organisation, OrganisationRelations, Address} from '../models';
import {HosDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AddressRepository} from './address.repository';

export class OrganisationRepository extends DefaultCrudRepository<
  Organisation,
  typeof Organisation.prototype.id,
  OrganisationRelations
> {

  public readonly address: HasOneRepositoryFactory<Address, typeof Organisation.prototype.id>;

  constructor(
    @inject('datasources.hos') dataSource: HosDataSource, @repository.getter('AddressRepository') protected addressRepositoryGetter: Getter<AddressRepository>,
  ) {
    super(Organisation, dataSource);
    this.address = this.createHasOneRepositoryFactoryFor('address', addressRepositoryGetter);
    this.registerInclusionResolver('address', this.address.inclusionResolver);
  }
}
