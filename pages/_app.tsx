import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@/contexts/ThemeContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Head>
        <link rel="icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
