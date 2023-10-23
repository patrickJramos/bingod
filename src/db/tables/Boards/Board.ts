import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Board = pgTable("boards", {
  id: serial("id").primaryKey(),
  userId: integer("userId").notNull(),
  name: varchar("name").notNull(),
});
