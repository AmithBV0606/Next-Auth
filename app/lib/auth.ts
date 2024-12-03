import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";
import { pages } from "next/dist/build/templates/app-page";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email & Password",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        // const username = credentials.username;
        // const password = credentials.password;
        // const user = await prisma.user.findOne({
        //     where:{
        //         username,
        //         password
        //     }
        // });

        // if (!user) {
        //     return null
        // }

        console.log(credentials);

        return {
          id: "777Charlie",
          name: credentials.username,
          password: credentials.password,
        };
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token, user }: any) => {
      if (session && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin"
  }
};