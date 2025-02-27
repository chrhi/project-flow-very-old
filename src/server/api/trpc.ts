
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "~/lib/prisma";
import { supabase } from "~/lib/supabase";

type CreateContextOptions = Record<string, never>;


const createInnerTRPCContext = (_opts: CreateContextOptions) => {
  const {req , res } = _opts
  return {
    req , 
    res ,
    prisma , 
    supabase
  };
};


export const createTRPCContext = (_opts: CreateNextContextOptions) => {
  return createInnerTRPCContext({});
};


import { initTRPC } from "@trpc/server";
import superjson from "superjson";

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});


export const createTRPCRouter = t.router;


export const publicProcedure = t.procedure;
