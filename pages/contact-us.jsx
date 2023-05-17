import Contact from "@/components/contact";
import Default from "@/layout/default";
import Head from "next/head";
import React from "react";
import axios from "@/components/axios";

const ContactUs = ({ pinnedCats, info, seoData }) => {
  return (
    <>
      <Head>
        <title>Climate - {seoData?.contact_title}</title>
        <meta name="description" content={seoData?.contact_description} />
      </Head>
      <Default pinnedCats={pinnedCats} siteInfo={info}>
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
