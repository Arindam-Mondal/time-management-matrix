import NextAuth from "next-auth";
import GoogleProviders from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
