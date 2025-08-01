import { drizzle } from 'drizzle-orm/postgres-js';
import postgres = require('postgres');
import * as dotenv from 'dotenv';

dotenv.config();

const client = postgres({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: process.env.DB_SSL === 'true',
});

export const db = drizzle(client);
