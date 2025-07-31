import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

// Create a PostgreSQL connection pool
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'my_database',
});

// Initialize Drizzle ORM with the connection pool
export const db = drizzle(pool);
