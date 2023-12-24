import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import { Database } from './types/database';

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env['DATABASE_URL'],
    ssl: true,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});
