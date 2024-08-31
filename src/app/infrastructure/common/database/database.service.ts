import { Inject, Injectable } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';
import { Observable, from } from 'rxjs';
import { CONNECTION_POOL } from './database.module-definition';

@Injectable()
class DatabaseService {
  constructor(@Inject(CONNECTION_POOL) private readonly pool: Pool) {}

  runQuery(query: string, params?: unknown[]): Observable<QueryResult<any>> {
    return from(this.pool.query(query, params));
  }
}

export default DatabaseService;
