import PostgresAdapter from "@auth/pg-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { Pool } from "pg";

const authOptions = {
  adapter: PostgresAdapter(
    new Pool({
      database: process.env.POSTGRES_DATABASE!,
      host: process.env.POSTGRES_HOST!,
      password: process.env.POSTGRES_PASSWORD!,
      user: process.env.POSTGRES_USER!,
      ssl: {
        rejectUnauthorized: true,
      },
    }),
  ),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],
} satisfies Parameters<typeof NextAuth>[2];

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
