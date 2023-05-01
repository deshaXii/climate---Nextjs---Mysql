import Default from "@/layout/default";
import axios from "@/components/axios";
import Head from "next/head";
import React from "react";
import PageTitle from "@/components/pageTitle";

const OurVision = ({ info, vision, seoData }) => {
  return (
    <>
      <Head>
        <title>Climate - {seoData?.vision_title}</title>
        <meta name="description" content={seoData?.vision_description} />
      </Head>
      <Default siteInfo={info}>
        <div className="our-vision-page">
          <PageTitle
            title={seoData?.vision_title}
            description={seoData?.vision_description}
            image="/images/Our-teaam-title-img.jpg"
            marked="True experince"
          />
          <section className="pt-40 first-ceo-word">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 col-12">
                  {vision.first_section_description && (
                    <p>{vision.first_section_description}</p>
                  )}
                  <h4>"ceo word"</h4>
                </div>
              </div>
            </div>
          </section>
          <section className="pt80 top-vis">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="vision--card">
                    <div className="vc-p">
                      {vision.second_section_description && (
                        <p>{vision.second_section_description}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="vision--card">
                    <img
                      src={`/uploads/${vision.second_section_image}`}
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
                      src={`/uploads/${vision.third_section_image}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="vision--card">
                    <div className="vc-p">
                      {vision.third_section_description && (
                        <p>{vision.third_section_description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt80 top-vis">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="vision--card">
                    <div className="vc-p">
                      {vision.fourth_section_description && (
                        <p>{vision.fourth_section_description}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="vision--card">
                    <img
                      src={`/uploads/${vision.fourth_section_image}`}
                      alt=""
                    />
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
