import { relations } from "drizzle-orm";
import { pgTable, timestamp, text } from "drizzle-orm/pg-core";
import { notes } from "./notes-schema";
import { user } from "./auth-schema";
import { memories } from "./memories";

export const couples = pgTable('couples', {
    id: text('id')
        .primaryKey()
        .notNull()
    ,
    userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const couplesRelations = relations(couples, ({ many }) => ({
    notes: many(notes),
    user: many(user),
    memories: many(memories)
}))

export type Couple = typeof couples.$inferSelect