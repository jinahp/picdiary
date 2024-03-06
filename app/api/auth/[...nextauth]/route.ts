import NextAuth, { Account, Profile } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("url:", url);
      console.log("baseUrl:", baseUrl);
      return url.startsWith(baseUrl) ? url : baseUrl + "/calendar";
    },
    async signIn({
      account,
      profile,
    }: {
      account: Account | null;
      profile?: Profile | undefined;
    }) {
      const isAccount = account && profile;
      if (isAccount && account.provider === "google") {
        return true;
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };
