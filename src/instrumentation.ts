import { dbMigrate } from "@/db/database";

export function register() {
  console.log("registering instrumentation");
  dbMigrate();
}
