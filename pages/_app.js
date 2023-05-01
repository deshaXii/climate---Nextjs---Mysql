import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/css/all.min.css";
import "@/styles/globals.css";
import "@/styles/responsive.css";
import axios from "@/components/axios";
import Head from "next/head";
import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps, seoData }) {
  const notify = () => toast("Wow so easy !");

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <Component {...pageProps} seoData={seoData} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const seoRes = await axios.get("/api/seo");
  const seoData = seoRes.data[0];
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(appContext)
    : {};
  if (seoData) {
    return { pageProps, seoData };
  } else {
    return { pageProps };
  }
};

export default MyApp;
