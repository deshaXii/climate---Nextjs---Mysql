import Contact from "@/components/contact";
import PageTitle from "@/components/pageTitle";
import Default from "@/helpers/layout/default";
import axios from "@/components/axios";
import Head from "next/head";
import React from "react";

const OurPeople = ({ data, error }) => {
  return (
    <>
      <Head>
        <title>Our People - climate</title>
        <meta
          name="description"
          content="CLIMATE is an international privately owned engineering and sustainability firm providing legendary client service and smart solutions in sustainability, climate, environmental, social, and governance (ESG) and energy transition —from the A to Z. CLIMATE was founded with a commitment to maintain the enduring pursuit of excellence, putting our responsibility to our clients second only to our responsibility to the public. By being true to our promise for almost a decade, we’ve forged massive, long-standing relationships, believing responsiveness is the core of serving our clients. We invest in our people, technology and tools to find better solutions and foster careers. Whether you’re a client, employee, partner or stakeholder – trust that we’re the partners you want to be working with. We are collaborating with our clients to lead a wave of sustainable innovation and economic growth that safeguards the planet and advances sustainability practices. We are CLIMATE. "
        />
      </Head>
      <Default siteInfo={data.info}>
        <PageTitle
          title="Meet our team"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet repellat odit odio nam nisi excepturi fuga libero eligendi natus."
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
