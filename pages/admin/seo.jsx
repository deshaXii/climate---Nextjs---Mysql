import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "@/helpers/parseCookies";

const AdminSeo = ({ seoData }) => {
  const router = useRouter();
  const [intro_title, setIntro_title] = useState(
    seoData ? seoData?.intro_title : ""
  );
  const [intro_subtitle, setIntro_subtitle] = useState(
    seoData ? seoData?.intro_subtitle : ""
  );
  const [intro_description, setIntro_description] = useState(
    seoData ? seoData?.intro_description : ""
  );
  const [meet_the_team_title, setMeet_the_team_title] = useState(
    seoData ? seoData?.meet_the_team_title : ""
  );
  const [meet_the_team_subtitle, setMeet_the_team_subtitle] = useState(
    seoData ? seoData?.meet_the_team_subtitle : ""
  );
  const [meet_the_team_description, setMeet_the_team_description] = useState(
    seoData ? seoData?.meet_the_team_description : ""
  );
  const [latest_news_title, setLatest_news_title] = useState(
    seoData ? seoData?.latest_news_title : ""
  );
  const [latest_news_subtitle, setLatest_news_subtitle] = useState(
    seoData ? seoData?.latest_news_subtitle : ""
  );
  const [latest_news_description, setLatest_news_description] = useState(
    seoData ? seoData?.latest_news_description : ""
  );
  const [contact_title, setContact_title] = useState(
    seoData ? seoData?.contact_title : ""
  );
  const [contact_description, setContact_description] = useState(
    seoData ? seoData?.contact_description : ""
  );
  const [news_title, setNews_title] = useState(
    seoData ? seoData?.news_title : ""
  );
  const [news_description, setNews_description] = useState(
    seoData ? seoData?.news_description : ""
  );
  const [team_title, setTeam_title] = useState(
    seoData ? seoData?.team_title : ""
  );
  const [team_description, setTeam_description] = useState(
    seoData ? seoData?.team_description : ""
  );
  const [how_can_title, setHow_can_title] = useState(
    seoData ? seoData?.how_can_title : ""
  );
  const [how_can_description, setHow_can_description] = useState(
    seoData ? seoData?.how_can_description : ""
  );
  const [vision_title, setVision_title] = useState(
    seoData ? seoData?.vision_title : ""
  );
  const [vision_description, setVision_description] = useState(
    seoData ? seoData?.vision_description : ""
  );
  const [home_title, setHome_title] = useState(
    seoData ? seoData?.home_title : ""
  );
  const [home_description, setHome_description] = useState(
    seoData ? seoData?.home_description : ""
  );

  const addSeoData = async (e) => {
    e.preventDefault();
    const data = {
      intro_title,
      intro_subtitle,
      intro_description,
      meet_the_team_title,
      meet_the_team_subtitle,
      meet_the_team_description,
      latest_news_title,
      latest_news_subtitle,
      latest_news_description,
      contact_title,
      contact_description,
      news_title,
      news_description,
      team_title,
      team_description,
      how_can_title,
      how_can_description,
      vision_title,
      vision_description,
      home_title,
      home_description,
    };
    if (seoData) {
      await axios
        .put("/api/seo", data)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    } else {
      await axios
        .post("/api/seo", data)
        .then((res) => {
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };

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
                <form onSubmit={addSeoData}>
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
                                value={home_title}
                                onChange={(e) => setHome_title(e.target.value)}
                                type="text"
                                placeholder="Enter Home Title Meta"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea
                                value={home_description}
                                onChange={(e) =>
                                  setHome_description(e.target.value)
                                }
                                placeholder="Enter Home description Meta"
                              ></textarea>
                            </div>
                          </div>
                          <div className="ssb-item related-to-page">
                            <h6>Our Vision Page</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                value={vision_title}
                                onChange={(e) =>
                                  setVision_title(e.target.value)
                                }
                                type="text"
                                placeholder="Enter Our Vision Title Meta"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea
                                value={vision_description}
                                onChange={(e) =>
                                  setVision_description(e.target.value)
                                }
                                placeholder="Enter Our Vision description Meta"
                              ></textarea>
                            </div>
                          </div>
                          <div className="ssb-item related-to-page">
                            <h6>How Can Assist Clicnts Page</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                value={how_can_title}
                                onChange={(e) =>
                                  setHow_can_title(e.target.value)
                                }
                                type="text"
                                placeholder="Enter Page Title Meta"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea
                                value={how_can_description}
                                onChange={(e) =>
                                  setHow_can_description(e.target.value)
                                }
                                placeholder="Enter Page description Meta"
                              ></textarea>
                            </div>
                          </div>
                          <div className="ssb-item related-to-page">
                            <h6>Our People Page</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                value={team_title}
                                onChange={(e) => setTeam_title(e.target.value)}
                                type="text"
                                placeholder="Enter Our People Title Meta"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea
                                value={team_description}
                                onChange={(e) =>
                                  setTeam_description(e.target.value)
                                }
                                placeholder="Enter Our People description Meta"
                              ></textarea>
                            </div>
                          </div>
                          <div className="ssb-item related-to-page">
                            <h6>News Page</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                value={news_title}
                                onChange={(e) => setNews_title(e.target.value)}
                                type="text"
                                placeholder="Enter News Title Meta"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea
                                value={news_description}
                                onChange={(e) =>
                                  setNews_description(e.target.value)
                                }
                                placeholder="Enter News description Meta"
                              ></textarea>
                            </div>
                          </div>
                          <div className="ssb-item related-to-page">
                            <h6>Contact Us Page</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                value={contact_title}
                                onChange={(e) =>
                                  setContact_title(e.target.value)
                                }
                                type="text"
                                placeholder="Enter contact us Title Meta"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea
                                value={contact_description}
                                onChange={(e) =>
                                  setContact_description(e.target.value)
                                }
                                placeholder="Enter contact us description Meta"
                              ></textarea>
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
                                value={intro_title}
                                onChange={(e) => setIntro_title(e.target.value)}
                                type="text"
                                placeholder="Enter Home Intro Title"
                              />
                            </div>
                            <div className="form-group">
                              <label>subtitle</label>
                              <input
                                value={intro_subtitle}
                                onChange={(e) =>
                                  setIntro_subtitle(e.target.value)
                                }
                                type="text"
                                placeholder="Enter Home Intro subtitle"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea
                                value={intro_description}
                                onChange={(e) =>
                                  setIntro_description(e.target.value)
                                }
                                placeholder="Enter Home Intro description"
                              ></textarea>
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
                                value={meet_the_team_title}
                                onChange={(e) =>
                                  setMeet_the_team_title(e.target.value)
                                }
                                type="text"
                                placeholder="Enter Home Team Title"
                              />
                            </div>
                            <div className="form-group">
                              <label>subtitle</label>
                              <input
                                value={meet_the_team_subtitle}
                                onChange={(e) =>
                                  setMeet_the_team_subtitle(e.target.value)
                                }
                                type="text"
                                placeholder="Enter Home Team subtitle"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea
                                value={meet_the_team_description}
                                onChange={(e) =>
                                  setMeet_the_team_description(e.target.value)
                                }
                                placeholder="Enter Home Team description"
                              ></textarea>
                            </div>
                          </div>
                          <div className="ssb-item">
                            <h6>Latest News Section</h6>
                            <div className="form-group">
                              <label>title</label>
                              <input
                                value={latest_news_title}
                                onChange={(e) =>
                                  setLatest_news_title(e.target.value)
                                }
                                type="text"
                                placeholder="Enter Home News Title"
                              />
                            </div>
                            <div className="form-group">
                              <label>subtitle</label>
                              <input
                                value={latest_news_subtitle}
                                onChange={(e) =>
                                  setLatest_news_subtitle(e.target.value)
                                }
                                type="text"
                                placeholder="Enter Home News subtitle"
                              />
                            </div>
                            <div className="form-group">
                              <label>description</label>
                              <textarea
                                value={latest_news_description}
                                onChange={(e) =>
                                  setLatest_news_description(e.target.value)
                                }
                                placeholder="Enter Home News description"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-submit">
                        <button type="submit" className="btn">
                          Save
                        </button>
                      </div>
                    </div>
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

export async function getServerSideProps({ res, req }) {
  const cookies = parseCookies(req);
  const token = cookies.userToken;
  if (!token) {
    return {
      redirect: {
        destination: "/admin/login",
      },
      props: {},
    };
  }
  try {
    const seoInfo = await axios.get("/api/seo");
    if (seoInfo.data[0]) {
      return {
        props: {
          seoData: seoInfo.data[0],
        },
      };
    } else {
      return {
        props: {
          seoData: null,
        },
      };
    }
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
}
