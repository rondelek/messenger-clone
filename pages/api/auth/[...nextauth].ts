import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: "744678113658704",
      clientSecret: "df9e7d019f4369d0e2b565e1e5b5ec7e",
    }),
    // ...add more providers here
  ],
  secret: "01031997",
  pages: {
    signIn: "/auth/signin",
  },
};
export default NextAuth(authOptions);
