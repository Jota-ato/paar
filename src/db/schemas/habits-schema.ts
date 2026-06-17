import { pgTable, uuid } from "drizzle-orm/pg-core";

export const habits = pgTable("habits", {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
})