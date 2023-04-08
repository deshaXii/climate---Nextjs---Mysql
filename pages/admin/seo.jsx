import AdminLayout from "@/helpers/layout/admin";
import axios from "@/components/axios";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

const AdminSeo = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Climate - Admin \ Seo</title>
      </Head>
      <AdminLayout>
        <div className="admin-seo-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-top-header admin-section-title">
                  <h2>Seo Page</h2>
                  <button onClick={() => router.back()}>Go Back</button>
                </div>
              </div>
              <div className="col-12">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="seo-section-box">
                        <h4 className="section-name">Pages Meta</h4>
                        <div className="ssb-wrap">
                          <div className="ssb-item related-to-page">
                            <h6>Home Page</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                type="text"
                                placeholder="Enter Home Title Meta"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea placeholder="Enter Home description Meta"></textarea>
                            </div>
                          </div>
                          <div className="ssb-item related-to-page">
                            <h6>Our Vision Page</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                type="text"
                                placeholder="Enter Our Vision Title Meta"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea placeholder="Enter Our Vision description Meta"></textarea>
                            </div>
                          </div>
                          <div className="ssb-item related-to-page">
                            <h6>How Can Assist Clicnts Page</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                type="text"
                                placeholder="Enter Page Title Meta"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea placeholder="Enter Page description Meta"></textarea>
                            </div>
                          </div>
                          <div className="ssb-item related-to-page">
                            <h6>Our People Page</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                type="text"
                                placeholder="Enter Our People Title Meta"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea placeholder="Enter Our People description Meta"></textarea>
                            </div>
                          </div>
                          <div className="ssb-item related-to-page">
                            <h6>News Page</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                type="text"
                                placeholder="Enter News Title Meta"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea placeholder="Enter News description Meta"></textarea>
                            </div>
                          </div>
                          <div className="ssb-item related-to-page">
                            <h6>Contact Us Page</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                type="text"
                                placeholder="Enter contact us Title Meta"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea placeholder="Enter contact us description Meta"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="seo-section-box">
                        <h4 className="section-name">Sections Details</h4>
                        <div className="ssb-wrap">
                          <div className="ssb-item">
                            <h6>Intro Section</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                type="text"
                                placeholder="Enter Home Intro Title"
                              />
                            </div>
                            <div className="form-group">
                              <label>subtitle</label>
                              <input
                                type="text"
                                placeholder="Enter Home Intro subtitle"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea placeholder="Enter Home Intro description"></textarea>
                            </div>
                          </div>
                          {/* <div className="ssb-item">
                            <h6>About Us Section</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                type="text"
                                placeholder="Enter Home About Title"
                              />
                            </div>
                            <div className="form-group">
                              <label>subtitle</label>
                              <input
                                type="text"
                                placeholder="Enter Home About subtitle"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea placeholder="Enter Home About description"></textarea>
                            </div>
                          </div> */}
                          <div className="ssb-item">
                            <h6>Meet the Team Section</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                type="text"
                                placeholder="Enter Home Team Title"
                              />
                            </div>
                            <div className="form-group">
                              <label>subtitle</label>
                              <input
                                type="text"
                                placeholder="Enter Home Team subtitle"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea placeholder="Enter Home Team description"></textarea>
                            </div>
                          </div>
                          <div className="ssb-item">
                            <h6>Latest News Section</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                type="text"
                                placeholder="Enter Home News Title"
                              />
                            </div>
                            <div className="form-group">
                              <label>subtitle</label>
                              <input
                                type="text"
                                placeholder="Enter Home News subtitle"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea placeholder="Enter Home News description"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminSeo;

export async function getServerSideProps() {
  try {
    const seoRes = await axios.get("/api/seo");
    return {
      props: {
        data: seoRes.data[0],
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
