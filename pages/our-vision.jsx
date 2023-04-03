import Default from "@/layout/default";
import axios from "@/components/axios";
import Head from "next/head";
import React from "react";
import PageTitle from "@/components/pageTitle";

const OurVision = ({ info }) => {
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
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="vision--card">
                  <div className="vc-p">
                    <h3>As President and CEO of CLIMATE</h3>
                    <p>
                      it's my mission to make decisions aligned with our vision,
                      and to connect and empower our staff to deliver on our
                      four differentiators of providing legendary client
                      experiences, unmatched employee experiences, to innovate
                      and differentiate, and to remain private. With more than
                      15 years in the career, I give this advice to an upcoming
                      engineer:
                    </p>
                    <blockquote>
                      "While it's important to be an expert in your field,
                      always maintain a broad perspective and get as much
                      exposure to other areas as you can. Don't limit yourself.”
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  );
};

export default OurVision;

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
