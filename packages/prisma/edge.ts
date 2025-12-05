import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

// Edge-compatible Prisma client using Prisma Accelerate
// Requires DATABASE_URL with prisma:// protocol
export const prismaEdge = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
}).$extends(withAccelerate());
