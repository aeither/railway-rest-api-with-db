import { Hono } from "hono";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Hono();

app.get("/health", (c) => c.json({ status: "OK" }));

app.get("/", (c) => c.text("Hello Hono!"));

app.get("/users", async (c) => {
  const allUsers = await db.select().from(users);
  return c.json(allUsers);
});

export default {
  port: process.env.PORT ?? 3000,
  fetch: app.fetch,
};
