/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
  'ormconfig-prod',
  (): TypeOrmModuleOptions => ({
    host: process.env.HOST,
    database: process.env.DATABASE,
    username: process.env.USER,
    password: process.env.PASSWORD,
    type: 'mysql',
    autoLoadEntities: true,
  }),
);
