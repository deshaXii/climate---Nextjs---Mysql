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
            subtitle={seoData?.services_subtitle}
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
                      src={`/uploads/${services.section_image}`}
                      alt="services image"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="services-text">
                    <h3>{services.section_description}</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt80 services-sec-section">
            <div className="container">
              <div className="row justify-content-center">
                {blogs.map((item) => (
                  <div
                    className="col-md-4 col-lg-3 col-sm-6 col-12"
                    key={item.id}
                  >
                    <article className="blog-item">
                      <div className="new-inner">
                        <div className="new-media-image">
                          <Link href={`/news/${item.slug}`}>
                            <img
                              src={`/uploads/${item.image}`}
                              className="attachment-full size-full"
                              alt={item.name}
                            />
                          </Link>
                        </div>
                        <div className="new-content">
                          <div className="new-supertitle-holder"></div>
                          <div className="new-text">
                            <h4 className="new-title entry-title">
                              <Link
                                className="new-title-link"
                                href={`/news/${item.slug}`}
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
    const blogsRes = await axios.get(`/api/categories/services`);
    const siteServices = await axios.get("/api/our-services");
    return {
      props: {
        blogs: blogsRes?.data,
        info: siteInfo.data[0],
        services: siteServices.data[0],
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
