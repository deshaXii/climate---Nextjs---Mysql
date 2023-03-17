import React from "react";

const Team = ({ data }) => {
  return (
    <section className="pt80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <span className="marked">True Experince</span>
              <h2>Meet the team</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="team-wrapper">
              <div className="row">
                {data.map((team) => (
                  <div className="col-md-3" key={team.id}>
                    <div className="team-box">
                      <div className="qodef-e-inner">
                        <div className="qodef-e-team-item-holder">
                          <div className="qodef-e-media-image">
                            <img src={team.image} alt={team.name + " image"} />
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
  );
};

export default Team;
