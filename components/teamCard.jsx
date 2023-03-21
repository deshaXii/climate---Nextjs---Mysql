import Link from "next/link";
import React from "react";

const TeamCard = ({ team, adminView, removeMember }) => {
  return (
    <div className="team-box">
      <div className="qodef-e-inner">
        {adminView && (
          <div className="admin-btns">
            <Link
              href={{
                pathname: "/admin/our-people/edit",
                query: { id: team.id },
              }}
              className="edit-btn btn"
            >
              <i className="fa fa-edit"></i>
            </Link>
            <button
              className="delete-btn btn"
              onClick={() => removeMember(team.id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        )}
        <div className="qodef-e-team-item-holder">
          <div className="qodef-e-media-image">
            <img src={team.image} alt={team.name + " image"} />
          </div>
          <p className="qodef-e-role">Founder</p>
          <h5 className="qodef-e-title entry-title">{team.name}</h5>
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
  );
};

export default TeamCard;
