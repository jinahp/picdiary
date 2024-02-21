import { AppProps } from "next/app";
import "../globals.css";
import RootLayout from "./layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
