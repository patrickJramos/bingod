import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const Session = pgTable("sessions", {
  id: serial("id").primaryKey(),
  userId: integer("userId").notNull(),
  expires: timestamp("expires", { withTimezone: true }).notNull(),
  sessionToken: varchar("sessionToken").notNull(),
});
