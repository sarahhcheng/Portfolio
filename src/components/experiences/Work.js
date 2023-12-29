import React from "react";

function Work(props) {
  return (
    <div className="job-container">
      <h3 className="job-title">{props.title}</h3>
      <div className="job-details">
        <p className="company-title">{props.company} </p>
        <p>
          <b>|</b>
        </p>
        <p>{props.location}</p>
      </div>
      <p className="time">{props.time}</p>
      <div className="job-description">
        <p>{props.description}</p>
      </div>
    </div>
  );
}
export default Work;
