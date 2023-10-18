import {
  bigint,
  integer,
  pgTable,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";

export const Account = pgTable("accounts", {
  id: serial("id").primaryKey(),
  userId: integer("userId").notNull(),
  type: varchar("type").notNull(),
  provider: varchar("provider").notNull(),
  providerAccountId: varchar("providerAccountId").notNull(),
  refreshToken: text("refresh_token"),
  accessToken: text("access_token"),
  expiresAt: bigint("expires_at", { mode: "number" }),
  idToken: text("id_token"),
  scope: text("scope"),
  sessionState: text("session_state"),
  tokenType: text("token_type"),
});
