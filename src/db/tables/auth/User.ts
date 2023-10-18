import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const User = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name"),
  email: varchar("email"),
  emailVerified: timestamp("emailVerified", { withTimezone: true }),
  image: text("image"),
});
