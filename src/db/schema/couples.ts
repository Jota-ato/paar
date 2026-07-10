import { relations } from "drizzle-orm";
import { pgTable, timestamp, text } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";
import { memories } from "./memories";

export const couples = pgTable('couples', {
    id: text('id')
        .primaryKey()
        .notNull()
    ,
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const couplesRelations = relations(couples, ({ many }) => ({
    memories: many(memories)
}))

export type Couple = typeof couples.$inferSelect