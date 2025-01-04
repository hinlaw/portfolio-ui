import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { withProviders } from '@/lib/context';
import "@theme-toggles/react/css/Expand.css"
import { ModeToggle } from "@/components/ThemeProvider/ModeToggle";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head >
      <Component {...pageProps} />
    </>
  );
};

export default App
