import React, { useState } from "react";
import Head from "next/head";
import Default from "@/layout/default";
import PageTitle from "@/components/pageTitle";
import Pagination from "@/components/pagination";
import { paginate } from "@/helpers/pagination";
import axios from "@/components/axios";
import Link from "next/link";
import { htmlToText } from "html-to-text";
import moment from "moment";

function NewsByCategory({ data, seoData, pinnedCats }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const { blogs } = data;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(blogs, currentPage, pageSize);
  return (
    <>
      <Head>
        <title>News - {seoData?.news_title}</title>
        <meta name="description" content={seoData?.news_description} />
      </Head>
      <Default pinnedCats={pinnedCats} siteInfo={data.info}>
        <PageTitle
          title={seoData?.news_title}
          description={seoData?.news_description}
          image="/images/news-background-img.jpg"
          marked="&nbsp;"
        />
        <section className="pt80 news-page">
          <div className="container">
            <div className="row">
              {paginatedPosts.map((item) => (
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
                              {moment(item.time).format("Do MMMM YYYY, h:mm a")}
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
            <div className="row">
              <div className="col-12">
                <Pagination
                  items={blogs.length}
                  currentPage={currentPage}
                  pageSize={pageSize}
                  onPageChange={onPageChange}
                />
              </div>
            </div>
          </div>
        </section>
      </Default>
    </>
  );
}

export default NewsByCategory;

export async function getServerSideProps({ query }) {
  try {
    const blogsRes = await axios.get(`/api/categories/${query.id}`);
    const siteInfo = await axios.get("/api/site-information");
    return {
      props: {
        data: {
          blogs: blogsRes?.data,
          info: siteInfo?.data[0],
        },
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
