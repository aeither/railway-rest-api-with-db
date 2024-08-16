import { defineConfig } from "drizzle-kit";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DATABASE_PUBLIC_URL!
    : process.env.DATABASE_URL!;

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: url,
  },
});
