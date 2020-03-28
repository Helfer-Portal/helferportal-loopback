import {DefaultCrudRepository} from '@loopback/repository';
import {Project, ProjectRelations} from '../models';
import {HosDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProjectRepository extends DefaultCrudRepository<
  Project,
  typeof Project.prototype.id,
  ProjectRelations
> {
  constructor(
    @inject('datasources.hos') dataSource: HosDataSource,
  ) {
    super(Project, dataSource);
  }
}
