import PageTitle from "@/components/pageTitle";
import Default from "@/layout/default";
import axios from "@/components/axios";
import moment from "moment";
import Head from "next/head";
import React, { useRef } from "react";
import LatestNews from "@/components/latestNews";
import Author from "@/components/author";
import ScrollBar from "@/components/scrollBar";

const Blog = ({ data, pinnedCats, siteImages }) => {
  const { blog, blogs } = data;
  const blogRef = useRef();
  return (
    <>
      <Head>
        <title>Climate - {blog.title}</title>
      </Head>
      <ScrollBar element={blogRef} />
      <Default pinnedCats={pinnedCats} siteInfo={data.info}>
        <div className="blog-page">
          <PageTitle
            title={blog.title}
            time={moment(blog.time).format("Do MMMM YYYY, h:mm a")}
            image={`/uploads/${siteImages?.news}`}
            marked="&nbsp;"
          />
          <section className="pt80" ref={blogRef}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 col-12">
                  <div className="blog-content">
                    <div className="blog-image-box">
                      <img src={`/uploads/${blog?.image}`} alt={blog?.title} />
                    </div>
                    <div className="blog-content-box">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: blog?.description,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <LatestNews data={blogs} />
        </div>
      </Default>
    </>
  );
};

export default Blog;

export async function getServerSideProps({ query }) {
  try {
    const blogsRes = await axios.get(`/api/blogs`);
    const blogRes = await axios.get(`/api/blogs/${query.id}`);
    const siteInfo = await axios.get("/api/site-information");
    return {
      props: {
        data: {
          blog: blogRes?.data,
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
