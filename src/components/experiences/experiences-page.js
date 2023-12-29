import React from "react";
import "./experiences-page.css";
import Work from "./Work";
import "./Work.css";

function ExperiencePage() {
  return (
    <div className="container">
      <h1 className="work-experience-title">Experiences</h1>

      <div className="experiences">
        <Work
          title="Software Engineer Intern"
          company="Microsoft"
          location="Vancouver, BC"
          time="Sept. 2023 - Dec. 2023"
          description="I was in the Online Services team for the Coalition Studio. I helped build internal tools to help track service outages."
        />
        <Work
          title="Software Developer Intern"
          company="SAP"
          location="Vancouver, BC"
          time="Jan. 2023 - Aug. 2023"
          description="In my 8 month term at SAP, I had the opportunity to impact over 400,000 users as I worked on the SAP Analytics Cloud. "
        />
        <Work
          title="Security Response Program Manager Intern"
          company="BlackBerry"
          location="Waterloo, ON"
          time="Sept. 2022 - Dec. 2022"
          description="I worked on the BlackBerry Security Incident Response Team and helped manage a large scale project that tracked open-source software vulnerabilities used in BlackBerry products."
        />
      </div>
    </div>
  );
}
export default ExperiencePage;
