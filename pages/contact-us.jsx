import Contact from "@/components/contact";
import Map from "@/components/map";
import Default from "@/layout/default";
import Head from "next/head";
import React from "react";
import axios from "@/components/axios";

const ContactUs = ({ info }) => {
  return (
    <>
      <Head>
        <title>Climate - Contact Us</title>
      </Head>
      <Default siteInfo={info}>
        <Map />
        <Contact />
      </Default>
    </>
  );
};

export default ContactUs;

export async function getServerSideProps() {
  try {
    const siteInfo = await axios.get("/api/site-information");
    return {
      props: {
        info: siteInfo.data[0],
      },
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
}
