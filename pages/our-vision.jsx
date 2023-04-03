import Default from "@/helpers/layout/default";
import axios from "@/components/axios";
import Head from "next/head";
import React from "react";
import PageTitle from "@/components/pageTitle";

const OurVision = ({ info, vision }) => {
  return (
    <>
      <Head>
        <title>Climate - Our Vision</title>
      </Head>
      <Default siteInfo={info}>
        <div className="our-vision-page">
          <PageTitle
            title="Our Vision"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet repellat odit odio nam nisi excepturi fuga libero eligendi natus."
            image="/images/Our-teaam-title-img.jpg"
            marked="True experince"
          />
          <section className="pt80 top-vis">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="vision--card">
                    <div className="vc-p">
                      <h3>{vision.first_section_title}</h3>
                      <p>{vision.first_section_description}</p>
                      <blockquote>{vision.first_section_advice}</blockquote>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="vision--card">
                    <img
                      src={`/uploads/${vision.first_section_image}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt80 bot-vis">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="vision--card">
                    <img
                      src={`/uploads/${vision.second_section_image}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="vision--card">
                    <div className="vc-p">
                      <h3> {vision.second_section_title}</h3>
                      <p>{vision.second_section_description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Default>
    </>
  );
};

export default OurVision;

export async function getServerSideProps() {
  try {
    const siteInfo = await axios.get("/api/site-information");
    const siteVision = await axios.get("/api/our-vision");

    return {
      props: {
        info: siteInfo.data[0],
        vision: siteVision.data[0],
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
