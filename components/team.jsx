import React from "react";
import TeamCard from "./teamCard";

const Team = ({ data, title, description, subtitle }) => {
  return (
    <section className="pt80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <span className="marked">{subtitle}</span>
              <h2>{title}</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="team-wrapper">
              <div className="row">
                {data?.map((team) => (
                  <div className="col-md-3" key={team.id}>
                    <TeamCard team={team} />
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
