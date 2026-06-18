import { pgTable, timestamp, text } from "drizzle-orm/pg-core";

export const couples = pgTable('couples', {
    id: text('id')
        .primaryKey()
        .notNull()
    ,
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

export type Couple = typeof couples.$inferSelect