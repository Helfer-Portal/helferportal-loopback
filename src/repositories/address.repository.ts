import {DefaultCrudRepository} from '@loopback/repository';
import {Address, AddressRelations} from '../models';
import {HosDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AddressRepository extends DefaultCrudRepository<
  Address,
  typeof Address.prototype.id,
  AddressRelations
> {
  constructor(
    @inject('datasources.hos') dataSource: HosDataSource,
  ) {
    super(Address, dataSource);
  }
}
