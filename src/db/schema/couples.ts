import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

export const couples = pgTable('couples', {
    id: uuid('id')
        .primaryKey()
        .notNull()
        .defaultRandom()
    ,
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

export type Couple = typeof couples.$inferSelect