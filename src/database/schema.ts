import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

// Example table definition
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: text('email').notNull(),
});
