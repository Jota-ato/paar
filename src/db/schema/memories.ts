import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";
import { couples } from "./couples";
import { relations } from "drizzle-orm";

export const memories = pgTable("memories", {
    id: uuid("id")
        .primaryKey()
        .defaultRandom(),
    image: varchar("image", { length: 130 }).notNull(),
    date: timestamp("date", {
        withTimezone: true,
        mode: "date"
    }).notNull(),
    description: text("description")
        .notNull(),
    createdBy: text("created_by")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    coupleId: text("couple_id")
        .notNull()
        .references(() => couples.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => /* @__PURE__ */ new Date())
        .notNull(),
})

export const memoriesRelations = relations(memories, ({ one }) => ({
    couple: one(couples, {
        fields: [memories.coupleId],
        references: [couples.id]
    }),
    user: one(user, {
        fields: [memories.createdBy],
        references: [user.id]
    })
}))