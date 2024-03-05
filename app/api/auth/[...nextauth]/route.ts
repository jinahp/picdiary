import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

const cookiePrefix = "__Host-";

const getGoogleCredentials = () => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  if (!clientId || clientId.length === 0) {
    throw new Error("Missing GOOGLE_CLIENT_ID");
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error("Missing GOOGLE_CLIENT_SECRET");
  }

  return { clientId, clientSecret };
};

const authOptions: NextAuthOptions = {
  secret: process.env.SECRET,
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("url:", url);
      console.log("baseUrl:", baseUrl);
      return url.startsWith(baseUrl) ? url : baseUrl + "/calendar";
    },
    async session({ session, token }) {
      const user = session.user;
      if (user) {
        user.email = token.email;
        user.image = token.picture;
        user.name = token.name;
      }
      return session;
    },
    async signIn({ account, profile }) {
      // if (account?.provider === "google") {
      //   const googleProfile = profile as GoogleProfile;
      //   return googleProfile.email_verified;
      //   // && googleProfile.email.endsWith("@example.com")
      // }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
  cookies: {
    sessionToken: {
      name: "__Secure-next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
    callbackUrl: {
      name: `__Secure-next-auth.callback-url`,
      options: {
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
    csrfToken: {
      name: `__Host-next-auth.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
    pkceCodeVerifier: {
      name: `${cookiePrefix}next-auth.pkce.code_verifier`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
        maxAge: 900,
      },
    },
    state: {
      name: `${cookiePrefix}next-auth.state`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
        maxAge: 900,
      },
    },
    nonce: {
      name: `${cookiePrefix}next-auth.nonce`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
  },
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
