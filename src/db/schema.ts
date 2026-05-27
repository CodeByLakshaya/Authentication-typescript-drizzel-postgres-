import { uuid, pgTable, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable('users', {
    id:uuid('id').primaryKey().defaultRandom(),
    firstName:varchar('first_name', { length: 255 }).notNull(),
    lastName:varchar('last_name', { length: 255 }),
    email:varchar('email', { length: 322 }).unique(),
    emailVerified:text('email_verified').default('false').notNull(),
    password:varchar('password', { length: 66 }),
    salt:text('salt'),
    createdAt:timestamp('created_at').defaultNow().notNull(),
    updatedat:timestamp('updated_at').$onUpdate(() => new Date()),
})