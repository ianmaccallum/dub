import { prismaEdge } from "@dub/prisma/edge";

// Edge-compatible database connection using Prisma Accelerate
// This provides a compatible interface for raw SQL queries
export const conn = {
  execute: async <T = any>(
    query: string,
    params: any[] = [],
  ): Promise<{ rows: T[] }> => {
    const rows = await prismaEdge.$queryRawUnsafe<T[]>(query, ...params);
    return { rows };
  },
};
