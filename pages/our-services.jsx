import Default from "@/layout/default";
import axios from "@/components/axios";
import Head from "next/head";
import React, { useState } from "react";
import PageTitle from "@/components/pageTitle";
import { htmlToText } from "html-to-text";

const HowWeCanAssistOurClients = ({ info, seoData, services, pinnedCats }) => {
  const [activeTab, setActiveTab] = useState();
  return (
    <>
      <Head>
        <title>Climate - {seoData?.how_can_title}</title>
        <meta name="description" content={seoData?.how_can_description} />
      </Head>
      <Default pinnedCats={pinnedCats} siteInfo={info}>
        <div className="our-services-page">
          <PageTitle
            title={seoData?.how_can_title}
            description={seoData?.how_can_description}
            image="/images/Our-teaam-title-img.jpg"
            marked="True experince"
          />
          <section className="pt80 services-first-section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="services-image">
                    <img src="/images/h3-img-3.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="services-text">
                    <h3>
                      Talking Sustainability, our team have extensive experience
                      applying the principles of sustainability strategies and
                      rating systems to national standards, city-scale
                      solutions, high-end projects with multiple real-estate
                      assets typologies and infrastructure, from concept all the
                      way through to construction in a fully coordinated and
                      streamlined process.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt80 services-sec-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="services-tabs">
                    <ul className="services-tabs-list">
                      {services.map((item, index) => (
                        <li
                          suppressHydrationWarning={true}
                          key={item.id}
                          className={
                            activeTab === `tab${index}` ? "active" : ""
                          }
                          onClick={() => setActiveTab(`tab${index}`)}
                        >
                          <h5>{item.text}</h5>

                          <p>
                            {htmlToText(item.value.substring(0, 150), {
                              wordwrap: 130,
                            })}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="services-tabs-content">
                    {services.map((item, index) => (
                      <div
                        key={item.id}
                        className={`s-tab${index} s-tab ${
                          activeTab === `tab${index}` ? "show" : ""
                        }`}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.value,
                          }}
                        ></div>
                      </div>
                    ))}
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

export default HowWeCanAssistOurClients;

export async function getServerSideProps() {
  try {
    const siteInfo = await axios.get("/api/site-information");
    const siteServices = await axios.get("/api/our-services");
    return {
      props: {
        info: siteInfo.data[0],
        services: siteServices.data,
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
