import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/css/all.min.css";
import "@/styles/globals.css";
import "@/styles/responsive.css";
import axios from "@/components/axios";
import Head from "next/head";
import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps, seoData, pinnedCats, siteImages }) {
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
      <Component
        {...pageProps}
        siteImages={siteImages}
        seoData={seoData}
        pinnedCats={pinnedCats}
      />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const seoRes = await axios.get("/api/seo");
  const pinnedCategories = await axios.get("/api/categories/pinned");
  const siteImagesRes = await axios.get("/api/images");
  const seoData = seoRes.data[0];
  const siteImages = siteImagesRes.data[0];
  const pinnedCats = pinnedCategories.data;
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(appContext)
    : {};
  if (seoData && siteImages) {
    return { pageProps, pinnedCats, seoData, siteImages };
  } else {
    return { pageProps };
  }
};

export default MyApp;
