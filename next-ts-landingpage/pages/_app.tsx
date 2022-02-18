import type { AppProps } from "next/app";
import { Navbar } from "../app/components/module/Navbar";
import GlobalStyle from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
