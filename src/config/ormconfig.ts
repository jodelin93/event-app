/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
  'ormconfig',
  (): TypeOrmModuleOptions => ({
    host: process.env.HOST,
    database: process.env.DATABASE,
    synchronize: true,
    username: process.env.USER,
    password: process.env.PASSWORD,
    type: 'mysql',
    autoLoadEntities: true,
  }),
);
