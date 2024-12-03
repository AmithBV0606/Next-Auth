// Auth using Credential Provider :
import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth from "next-auth";

// /api/auth/.... : Will be handled by this handler method
const handler = NextAuth(NEXT_AUTH);

export const GET = handler;
export const POST = handler;
