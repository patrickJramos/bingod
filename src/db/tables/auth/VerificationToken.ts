import { pgTable, primaryKey, text, timestamp } from "drizzle-orm/pg-core";

export const VerificationToken = pgTable(
  "verification_token",
  {
    identifier: text("identifier").notNull(),
    expires: timestamp("expires", { withTimezone: true }).notNull(),
    token: text("token").notNull(),
  },
  (table) => ({
    pk: primaryKey(table.identifier, table.token),
  }),
);
