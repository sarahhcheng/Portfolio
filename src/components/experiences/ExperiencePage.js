import React from "react";
import "./experiences-page.css";
import Work from "./Work";
import ClubsCard from "./Clubs";
import "./Work.css";
import ToggleExperience from "./ToggleExperience";
import { useState } from "react";

function ExperiencePage() {
  const [ToggleState, setToggleState] = useState("work");

  const changeToggleState = (toggle) => {
    setToggleState(toggle);
  };

  return (
    <div className="container">
      <h1 className="work-experience-title">Experiences</h1>
      <div className="toggleExperienceContainer">
        <ToggleExperience
          toggleState={ToggleState}
          changeToggleState={changeToggleState}
        />
      </div>
      <div className="experiences">
        {ToggleState === "work" ? (
          <>
            <Work
              title="Software Engineer Intern"
              company="Microsoft"
              location="Vancouver, BC"
              time="Sept. 2023 - Dec. 2023"
              description="I was in the Online Services team for the Coalition Studio. I helped build internal tools to help track service outages."
              image="http://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png"
            />
            <Work
              title="Software Developer Intern"
              company="SAP"
              location="Vancouver, BC"
              time="Jan. 2023 - Aug. 2023"
              description="In my 8 month term at SAP, I had the opportunity to impact over 400,000 users as I worked on the SAP Analytics Cloud."
              image="https://logos-download.com/wp-content/uploads/2016/08/SAP_logo.png"
            />
            <Work
              title="Security Response Program Manager Intern"
              company="BlackBerry"
              location="Waterloo, ON"
              time="Sept. 2022 - Dec. 2022"
              description="I worked on the BlackBerry Security Incident Response Team and helped manage a large scale project that tracked open-source software vulnerabilities used in BlackBerry products."
              image="https://pluspng.com/img-png/blackberry-logo-png-blackberry-limited-logo-1200x826.png"
            />
            <Work
              title="Undergraduate Teaching Assistant"
              company="UBC"
              location="Vancouver, BC"
              time="Sept. 2022 - April 2023"
              description="I had the opportunity to TA UBC's introductory computer science course: CPSC 110, where I led lab sections, and held office hours for over 400 students. "
              image="https://avatars.githubusercontent.com/u/30203266?s=280&v=4"
            />
          </>
        ) : (
          <>
            {" "}
            <ClubsCard
              title="Software Developer"
              company="UBC Launch Pad"
              time="Jan. 2023 - Dec. 2023"
              description="As a Software Developer for UBC Launch Pad, I previously worked on Labby, a labratory management system for BC Cancer. I also helped work on the algorithm for Nom Appetit, a restaurant picker application that incorporates the Google Maps API to help users pick a restaurant within their vicinity."
              image="https://buttondown.s3.amazonaws.com/icons/fc54777a-b619-4d1c-b650-80d45cbfd228.png"
            />
            <ClubsCard
              title="Events Director"
              company="UBC Product Management Club"
              time="Aug. 2022 - June 2023"
              description="As an events director, I had the opportunity to help plan many events for PMC. In September 2022, I helped organize Discover PM: an event where we invited product managers to share their journey and how they broke into industry. I also organized PM Chats, a bi-weekly discussion with product managers to help the audience interact with industry professionals."
              image="https://avatars.githubusercontent.com/u/68244655?s=200&v=4"
            />
            <ClubsCard
              title="External Officer"
              company="Computer Science Student Society (CSSS)"
              time="June 2022 - Dec. 2022"
              description="As an external officer for CSSS, I helped plan the 2022 Tech Career Fair and invited company representatives to speak at our events."
              image="https://ubccsss.org/files/logo.png"
            />
          </>
        )}
      </div>
    </div>
  );
}
export default ExperiencePage;
