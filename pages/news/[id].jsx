import PageTitle from "@/components/pageTitle";
import Default from "@/layout/default";
import axios from "axios";
import Head from "next/head";
import React from "react";

const Blog = ({ data }) => {
  const { blog } = data;
  return (
    <>
      <Head>
        <title>new - climate</title>
      </Head>
      <Default>
        <PageTitle
          title={blog.title}
          description={blog.description.substring(0, 50)}
          image={blog.image}
          marked={`Home - News - ${blog.title}`}
        />
        <section className="pt80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-8">
                <div className="blog-page">
                  <div className="blog-image-box">
                    <img src={blog?.image} alt={blog?.title} />
                  </div>
                  <div className="blog?-content-box">
                    <h1>{blog?.title}</h1>
                    <span>{blog?.time}</span>
                    <p>{blog?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Default>
    </>
  );
};

export default Blog;

export async function getServerSideProps({ query }) {
  try {
    const blogRes = await axios.get(
      `https://climate-nextjs-mysql.vercel.app/api/blogs/${query.id}`
    );
    return {
      props: {
        data: {
          blog: blogRes?.data,
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
