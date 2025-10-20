import { PrismaClient } from "../src/generated/prisma";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const NB_POSTS = 10;

async function main() {
  for (let i = 0; i < NB_POSTS; i++) {
    await prisma.post.create({
      data: {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log(`✅ ${NB_POSTS} posts créés avec succès!`);
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
