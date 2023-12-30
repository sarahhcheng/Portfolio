import React from "react";
import "./Work.css";

function Work(props) {
  const { title, company, location, time, description, image } = props;
  return (
    <div className="job-container">
      <div className="details-container">
        <img src={image} class="company-logos" />
        <div className="job-info-container">
          <h3 className="job-title">{title}</h3>
          <div className="job-details">
            <p className="company-title">{company} </p>
            <p>
              <b>|</b>
            </p>
            <p>{location}</p>
          </div>
          <p className="time">{time}</p>
        </div>
      </div>
      <div className="job-description">
        <p>{description}</p>
      </div>
    </div>
  );
}
export default Work;
