import { Injectable } from '@nestjs/common';
import { MSSQL } from 'mssql';

@Injectable()
export class UsersService {
  constructor(private readonly mssql: MSSQL) {}

  async findAll(): Promise<any[]> {
    const request = new this.mssql.Request();
    const result = await request.query('SELECT * FROM users');
    return result.recordset;
  }
}