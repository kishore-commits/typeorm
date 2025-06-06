import { Inject } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';
import { EntityClassOrSchema } from '../interfaces/entity-class-or-schema.type';
/**
 * @publicApi
 */
export declare const InjectRepository: (entity: EntityClassOrSchema, dataSource?: string) => ReturnType<typeof Inject>;
/**
 * @publicApi
 */
export declare const InjectDataSource: (dataSource?: DataSource | DataSourceOptions | string) => ReturnType<typeof Inject>;
/** @deprecated */
export declare const InjectConnection: (dataSource?: DataSource | DataSourceOptions | string) => ReturnType<typeof Inject>;
/**
 * @publicApi
 */
export declare const InjectEntityManager: (dataSource?: DataSource | DataSourceOptions | string) => ReturnType<typeof Inject>;
