import { relations } from "drizzle-orm";
import { pgTable, timestamp, text } from "drizzle-orm/pg-core";
import { notes } from "./notes-schema";
import { user } from "./auth-schema";

export const couples = pgTable('couples', {
    id: text('id')
        .primaryKey()
        .notNull()
    ,
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const couplesRelations = relations(couples, ({ many }) => ({
    notes: many(notes),
    user: many(user)
}))

export type Couple = typeof couples.$inferSelect