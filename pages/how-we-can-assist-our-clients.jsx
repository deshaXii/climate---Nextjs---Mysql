import Default from "@/helpers/layout/default";
import axios from "@/components/axios";
import Head from "next/head";
import React from "react";
import PageTitle from "@/components/pageTitle";

const HowWeCanAssistOurClients = ({ info, seoData }) => {
  return (
    <>
      <Head>
        <title>Climate - {seoData.how_can_title}</title>
        <meta name="description" content={seoData.how_can_description} />
      </Head>
      <Default siteInfo={info}>
        <div className="how-we-can-assist-our-clients-page">
          <PageTitle
            title={seoData.how_can_title}
            description={seoData.how_can_description}
            image="/images/Our-teaam-title-img.jpg"
            marked="True experince"
          />
          <section className="pt80">
            <div className="container">
              <div className="row text-center justify-content-center">
                <div className="col-md-10 col-12">
                  <div className="hwcaocp-content">
                    <h2 className="letter-space-max">SUSTAINABILITY</h2>
                    <div
                      className="page-assist-cover"
                      style={{
                        backgroundImage: "url(/images/news-background-img.jpg)",
                      }}
                    ></div>
                    <p>
                      Talking Sustainability, our team have extensive experience
                      applying the principles of sustainability strategies and
                      rating systems to national standards, city-scale
                      solutions, high-end projects with multiple real-estate
                      assets typologies and infrastructure, from concept all the
                      way through to construction in a fully coordinated and
                      streamlined process.
                    </p>
                    <div className="list-box">
                      <span>Our service includes:</span>
                      <ul>
                        <li>
                          <p>
                            Sustainability & ESG Strategy Development Services
                            and reporting
                          </p>
                        </li>
                        <li>
                          <p>Citywide Sustainable Infrastructure Services</p>
                        </li>
                        <li>
                          <p>Carbon Footprint Services</p>
                        </li>
                        <li>
                          <p>Smart City Services</p>
                        </li>
                        <li>
                          <p>Renewable & Energy Strategy Services</p>
                        </li>
                        <li>
                          <p>Citywide Energy Strategy Services</p>
                        </li>
                        <li>
                          <p>
                            Green Certifications Ratings Consultancy and
                            Advisory.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <h3>CLIMATE CHANGE AND CARBON MARKET</h3>
                    <p>
                      We are “involved in the problem” with our clients and we
                      want to be a leading catalyst for global decarbonization.
                      We’re working to help all industry sectors transform to
                      reach net zero by 2050, balanced with other sustainability
                      goals and tailored to regional contexts. We do this by
                      leveraging our thought leadership, innovative tools and
                      solutions, top talent, and a vibrant ecosystem of industry
                      associations and knowledge platforms focused on
                      innovating.
                    </p>
                    <div className="list-box">
                      <span>We provide advisory on:</span>
                      <ul>
                        <li>
                          <p>
                            Climate change adaptation and mitigation solutions.
                          </p>
                        </li>
                        <li>
                          <p>
                            Developing climate strategies and set targets and
                            determined contributions
                          </p>
                        </li>
                        <li>
                          <p>Climate finance and innovative mechanisms</p>
                        </li>
                        <li>
                          <p>Estimation of climate projects costs</p>
                        </li>
                        <li>
                          <p>
                            Application for climate funds and access to finance
                          </p>
                        </li>
                        <li>
                          <p>Carbon Market entry and advisory</p>
                        </li>
                      </ul>
                    </div>

                    <div className="twise-list">
                      <div className="tl-list">
                        <h4>Consulting</h4>
                        <p>
                          Listening to your needs, thinking about the right
                          approach for your unique situation, and delivering
                          high-quality results. Combining traditional practices
                          with new approaches, sparking inventive solutions for
                          our ever-changing and complex world. By investing in
                          our people, we create meaningful careers for top-notch
                          experts and a legendary service experience for our
                          clients.
                        </p>
                      </div>
                      <div className="tl-list">
                        <h4>Design</h4>
                        <p>
                          Nothing gets us more energized than an impossible
                          technical challenge. We apply game-changing,
                          innovative solutions that revolutionize the industry.
                          And, we find ingenious applications of existing
                          technologies or approaches to solve our clients'
                          biggest problems.
                        </p>
                      </div>
                    </div>
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
    return {
      props: {
        info: siteInfo.data[0],
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
