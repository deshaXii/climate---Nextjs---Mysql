import Contact from "@/components/contact";
import PageTitle from "@/components/pageTitle";
import Default from "@/helpers/layout/default";
import axios from "@/components/axios";
import Head from "next/head";
import React from "react";

const OurPeople = ({ data, error, seoData }) => {
  return (
    <>
      <Head>
        <title>Our People - {seoData.team_title}</title>
        <meta name="description" content={seoData.team_description} />
      </Head>
      <Default siteInfo={data.info}>
        <PageTitle
          title={seoData.team_title}
          description={seoData.team_description}
          image="/images/Our-teaam-title-img.jpg"
          marked="True experince"
        />
        <section className="pt80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="teams-wrapper">
                  <div className="row">
                    {data?.teams?.map((team) => (
                      <div className="col-md-3" key={team.id}>
                        <div className="team-box">
                          <div className="qodef-e-inner">
                            <div className="qodef-e-team-item-holder">
                              <div className="qodef-e-media-image">
                                <img
                                  src={`/uploads/${team.image}`}
                                  alt={team.name + " image"}
                                />
                              </div>
                              <p className="qodef-e-role">Founder</p>
                              <h5 className="qodef-e-title entry-title">
                                {team.name}
                              </h5>
                              <div className="qodef-e-content"></div>
                              <div className="qodef-e-team-social">
                                <div className="qodef-team-member-social-icons">
                                  {team.facebook && (
                                    <a
                                      className="qodef-team-member-social-icon"
                                      href={team.facebook}
                                      target="_blank"
                                    >
                                      <span className="fab fa-facebook"></span>
                                    </a>
                                  )}
                                  {team.twitter && (
                                    <a
                                      className="qodef-team-member-social-icon"
                                      href={team.twitter}
                                      target="_blank"
                                    >
                                      <span className="fab fa-twitter"></span>
                                    </a>
                                  )}
                                  {team.linkedin && (
                                    <a
                                      className="qodef-team-member-social-icon"
                                      href={team.linkedin}
                                      target="_blank"
                                    >
                                      <span className="fab fa-linkedin"></span>
                                    </a>
                                  )}
                                  {team.instagram && (
                                    <a
                                      className="qodef-team-member-social-icon"
                                      href={team.instagram}
                                      target="_blank"
                                    >
                                      <span className="fab fa-instagram"></span>
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Contact siteInfo={data.info} />
      </Default>
    </>
  );
};

export default OurPeople;

export async function getServerSideProps() {
  try {
    const teamRes = await axios.get("/api/teams");
    const siteInfo = await axios.get("/api/site-information");
    return {
      props: {
        data: {
          teams: teamRes?.data,
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
