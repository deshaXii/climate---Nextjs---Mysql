import Contact from "@/components/contact";
import Default from "@/layout/default";
import Head from "next/head";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Default>
        <Contact />
      </Default>
    </>
  );
};

export default ContactUs;
