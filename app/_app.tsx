import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import "../globals.css";
import RootLayout from "./layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <RootLayout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </RootLayout>
  );
}

export default MyApp;
