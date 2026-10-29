import { env } from "cloudflare:workers";
import { AsyncLocalStorage } from "node:async_hooks";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/index.js";

const store = new AsyncLocalStorage<PrismaClient>();

// dipanggil sekali per request
export function withPrisma<T>(fn: () => T): T {
  const adapter = new PrismaPg({
    connectionString: env.HYPERDRIVE.connectionString,
    maxUses: 1,
  });
  return store.run(new PrismaClient({ adapter }), fn);
}

// tetap bisa dipakai sebagai prisma.user.findMany di seluruh kode
const prisma = new Proxy({} as PrismaClient, {
  get(_t, prop) {
    const client = store.getStore();
    if (!client) {
      throw new Error("Prisma dipakai di luar konteks request");
    }

    const value = (client as any)[prop];
    return typeof value === "function" ? value.bind(client) : value;
  },
});

export default prisma;
