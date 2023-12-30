import React from "react";
import "./Clubs.css";

function ClubsCard(props) {
  const { title, company, location, time, description, image } = props;
  return (
    <div className="club-container">
      <div className="details-container">
        <img src={image} class="company-logos" />
        <div className="club-info-container">
          <h3 className="club-title">{title}</h3>
          <p className="company-title">{company} </p>
          <p className="time">{time}</p>
        </div>
      </div>
      <div className="club-description">
        <p>{description}</p>
      </div>
    </div>
  );
}
export default ClubsCard;
