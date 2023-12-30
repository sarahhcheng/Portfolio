import "./ProjectPage.css";
import Card from "../ProjectCards/Card";

function ProjectPage() {
  return (
    <div className="project-page">
      <h1 className="project-headline">Projects</h1>
      <div className="project-container">
        <Card
          title="Labby"
          description="Built a lab management website for BC Cancer with a team of 15.$
Connected the frontend in React to send user input to the MySQL database."
          tech="React, Node, Express, MySQL"
          image="labby"
        />
        <Card
          title="Enspo"
          description="Developed a full-stack application that integrates OpenAI’s API to generate unique outfit combinations.
"
          tech="React, Node, Express, OpenAI"
          image="enspo"
        />
        <Card
          title="Recipe Book"
          tech="Java, Java Swing"
          description="Developed a console application that organizes and stores recipes.$ I made this because I was living by myself for the first time and wanted to learn how to cook."
          image="recipebook"
        />
        <Card
          title="BobaTracks - HydraHacks 2022"
          tech="JavaScript, HTML, CSS"
          description="Won Organizer’s Choice Award out of 300+ female hackers. $
Developed front-end application that tracks bubble tea calories based on flavors, toppings, and sugar."
          image="bobatracks"
        />
        <Card title="AReward" tech="Figma, UX/UI" image="areward" />
      </div>
    </div>
  );
}

export default ProjectPage;
