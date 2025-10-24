# Start project

```bash
  # Start containers
  docker compose up -d
  # OR
  docker-compose up -d

  # Install dependancies
  npm install

  # Start project
  npm run dev
```

```bash
  # update db schema
  npx prisma db push

  # Generated
  npx prisma generate

  # Seed
  npm run seed
```

# TODO

# 1

- Create model for user into prisma schema (email, password)
- update schema
- create form auth user (email, password) for sign in and sign up with react hook form

- Implement authentication with JWT (NextAuth.js)
