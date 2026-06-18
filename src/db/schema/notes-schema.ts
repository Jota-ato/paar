import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";
import { couples } from "./couples";

export const notes = pgTable("notes", {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    title: varchar("title", { length: 60 }).notNull().default("Nota sin título"),
    content: text("content").notNull(),
    createdBy: text("created_by").notNull().references(() => user.id, {
        onDelete: "cascade",
    }),
    coupleId: text("couple_id").notNull().references(() => couples.id, {
        onDelete: "cascade",
    }),
})