import Default from "@/layout/default";
import axios from "@/components/axios";
import Head from "next/head";
import React, { useState } from "react";
import PageTitle from "@/components/pageTitle";
import { htmlToText } from "html-to-text";
import Link from "next/link";
import moment from "moment";

const HowWeCanAssistOurClients = ({
  info,
  seoData,
  services,
  blogs,
  pinnedCats,
  siteImages,
}) => {
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
            image={`/uploads/${siteImages?.services}`}
            marked="&nbsp;"
          />
          <section className="pt80 services-first-section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="services-image">
                    <img
                      src={`/uploads/${siteImages?.servicessection}`}
                      alt="services image"
                    />
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
              <div className="row justify-content-center">
                {/* <div className="col-md-12">
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
                </div> */}
                {blogs.map((item) => (
                  <div
                    className="col-md-4 col-lg-3 col-sm-6 col-12"
                    key={item.id}
                  >
                    <article className="blog-item">
                      <div className="new-inner">
                        <div className="new-media-image">
                          <Link href={`/news/${item.id}`}>
                            <img
                              src={`/uploads/${item.image}`}
                              className="attachment-full size-full"
                              alt={item.name}
                            />
                          </Link>
                        </div>
                        <div className="new-content">
                          <div className="qodef-image-date">
                            <div className="new-info-item new-info-date entry-date published updated">
                              <Link
                                href={`/news/${item.id}`}
                                suppressHydrationWarning={true}
                              >
                                <svg
                                  width="12.07"
                                  height="11.31"
                                  viewBox="0 0 12.07 11.31"
                                >
                                  <rect
                                    x="0.48"
                                    y="0.48"
                                    width="11.12"
                                    height="10.35"
                                    fill="none"
                                    stroke="#000"
                                    strokeLinecap="square"
                                    strokeWidth="0.95"
                                  ></rect>
                                  <rect
                                    x="1.99"
                                    y="3.37"
                                    width="2.06"
                                    height="1.65"
                                  ></rect>
                                  <rect
                                    x="5.01"
                                    y="3.37"
                                    width="2.06"
                                    height="1.65"
                                  ></rect>
                                  <rect
                                    x="8.02"
                                    y="3.37"
                                    width="2.06"
                                    height="1.65"
                                  ></rect>
                                  <rect
                                    x="1.99"
                                    y="6.29"
                                    width="2.06"
                                    height="1.65"
                                  ></rect>
                                  <rect
                                    x="5.01"
                                    y="6.29"
                                    width="2.06"
                                    height="1.65"
                                  ></rect>
                                  <rect
                                    x="8.02"
                                    y="6.29"
                                    width="2.06"
                                    height="1.65"
                                  ></rect>
                                </svg>
                                {moment(item.time).format(
                                  "Do MMMM YYYY, h:mm a"
                                )}
                              </Link>
                            </div>
                          </div>
                          <div className="new-supertitle-holder"></div>
                          <div className="new-text">
                            <h4 className="new-title entry-title">
                              <Link
                                className="new-title-link"
                                href={`/news/${item.id}`}
                              >
                                {item.title}
                              </Link>
                            </h4>
                            <p className="new-excerpt">
                              {htmlToText(item.description.substring(0, 500), {
                                wordwrap: 130,
                              })}
                            </p>
                          </div>
                          <div className="new-info qodef-info--bottom">
                            <div className="new-info-left">
                              <div className="new-read-more">
                                <Link href={`/news/${item.id}`} target="_self">
                                  <span className="qodef-m-text">
                                    Find out more
                                  </span>
                                </Link>
                              </div>
                            </div>
                            <div className="new-info-slider"></div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
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
    const blogsRes = await axios.get(`/api/categories/${8}`);
    const siteServices = await axios.get("/api/our-services");
    return {
      props: {
        blogs: blogsRes?.data,
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
