import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/css/all.min.css";
import "@/styles/globals.css";
import "@/styles/responsive.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
