# REST API with DB

A powerful Hono Backend with Drizzle and Postgres for Node.js/Bun

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/hIiRi5?referralCode=CODE)

## Overview

This project demonstrates a robust REST API built with Hono, using Drizzle ORM for database operations with PostgreSQL. It's designed to run on Bun, providing a fast and efficient backend solution. The project structure allows for easy deployment on Railway, making it ideal for rapid development and scaling.

## Key Features

- Fast REST API using Hono framework
- Database integration with Drizzle ORM and PostgreSQL
- Runs on Bun for improved performance
- Easy deployment to Railway
- Health check endpoint for monitoring
- User management API endpoint
- Dockerized for consistent environments

## Setup

To install dependencies:

```bash
bun install
```

Set up your .env file with your database URL:

```bash
DATABASE_URL=your_postgres_url_here
```

## DB

To generate database migrations, use the following command:

```bash
bun run db:generate
```

To apply the generated migrations to the database, run:

```bash
bun run db:push
```

To seed the database with sample data, execute:

```bash
bun run db:seed
```

## Develop

To run the application locally, execute the following command in your terminal:

```bash
bun run dev
```

## Deploy

Initialize your project:

```bash
railway init
```

To deploy the bot on Railway:

```bash
railway up
```

Remember to set the `DATABASE_URL` environment variable in your Railway project settings.

![DATABASE_URL](https://github.com/user-attachments/assets/eab66d70-ebe5-42fa-b1dd-3859cdbc199a)

## Learn More

- [Hono Documentation](https://hono.dev/)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Bun Documentation](https://bun.sh/docs)
- [Railway Documentation](https://docs.railway.app/)
