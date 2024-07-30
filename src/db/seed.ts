import { db } from "./index";
import { users } from "./schema";

// Function to generate a random string
function randomString(length: number): string {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Function to generate a random name
function randomName(): string {
  const firstNames = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eva",
    "Frank",
    "Grace",
    "Henry",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
  ];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
    lastNames[Math.floor(Math.random() * lastNames.length)]
  }`;
}

// Function to generate a random email
function randomEmail(): string {
  const username = randomString(8);
  const domains = ["gmail.com", "yahoo.com", "hotmail.com", "example.com"];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${username}@${domain}`;
}

// Seed function
async function seed() {
  const dummyUsers = [
    { name: randomName(), email: randomEmail() },
    { name: randomName(), email: randomEmail() },
    { name: randomName(), email: randomEmail() },
  ];

  console.log("Seeding database...");

  for (const user of dummyUsers) {
    await db.insert(users).values(user);
    console.log(`Inserted user: ${user.name} (${user.email})`);
  }

  console.log("Seeding completed.");
}

// Run the seed function
seed()
  .catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
