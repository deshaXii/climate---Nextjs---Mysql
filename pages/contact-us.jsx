import Contact from "@/components/contact";
import Map from "@/components/map";
import Default from "@/helpers/layout/default";
import Head from "next/head";
import React from "react";
import axios from "@/components/axios";

const ContactUs = ({ info, seoData }) => {
  return (
    <>
      <Head>
        <title>Climate - {seoData?.contact_title}</title>
        <meta name="description" content={seoData?.contact_description} />
      </Head>
      <Default siteInfo={info}>
        <Map mapIframe={info.map_iframe} />
        <Contact
          siteInfo={info}
          title={seoData?.contact_title}
          description={seoData?.contact_description}
        />
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
