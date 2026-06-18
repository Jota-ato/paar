import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";
import { couples } from "./couples";
import { relations } from "drizzle-orm";

export const notes = pgTable("notes", {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    title: varchar("title", { length: 60 }).notNull().default("Nota sin título"),
    content: text("content").notNull(),
    createdBy: text("created_by")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" })
    ,
    coupleId: text("couple_id")
        .notNull()
        .references(() => couples.id, { onDelete: "cascade" })
})

export const notesRelations = relations(notes, ({ one }) => ({
    createdBy: one(user, {
        fields: [notes.createdBy],
        references: [user.id],
    }),
    coupleId: one(couples, {
        fields: [notes.coupleId],
        references: [couples.id],
    }),
}))