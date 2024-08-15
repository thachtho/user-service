import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';
import { CONNECTION_POOL } from './database.module-definition';
import { Observable, from } from 'rxjs';
import { createTableQuery } from 'src/asset/sql/create-table';

@Injectable()
class DatabaseService implements OnModuleInit {
  constructor(@Inject(CONNECTION_POOL) private readonly pool: Pool) {}

  onModuleInit() {
    return this.runQuery(createTableQuery);
  }

  runQuery(query: string, params?: unknown[]): Observable<QueryResult<any>> {
    return from(this.pool.query(query, params));
  }
}

export default DatabaseService;
