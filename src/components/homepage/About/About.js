import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-containererized">
        <h1 className="about-title">About Me</h1>
        <div className="about-img-container">
          <img src="me.png" className="about-img" />
        </div>
        <div className="about-description">
          <ul>
            <li>
              Third year business and computer science student at{" "}
              <span className="org">The University of British Columbia. </span>
            </li>
            <li>
              Previous Software Engineer Intern at{" "}
              <span className="org">Microsoft.</span>
            </li>
            <li>
              Previous Software Developer Intern at{" "}
              <span className="org">SAP. </span>
            </li>
            <li>
              I also did a program management internship at{" "}
              <span className="org">BlackBerry!</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
