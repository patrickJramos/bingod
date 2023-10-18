import type { Config } from "drizzle-kit";

console.log(process.env);

export default {
  schema: "./src/db/tables/**/*.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    database: process.env.POSTGRES_DATABASE!,
    host: process.env.POSTGRES_HOST!,
    password: process.env.POSTGRES_PASSWORD!,
    user: process.env.POSTGRES_USER!,
    ssl: true,
  },
} satisfies Config;
