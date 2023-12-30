import "./ProjectPage.css";
import Card from "../ProjectCards/Card";

function ProjectPage() {
  return (
    <div className="project-page">
      <h1 className="project-headline">Projects</h1>
      <div className="project-container">
        <Card
          title="Labby"
          description="• Built a lab management website at UBC Launch Pad with a team of 15 for BC Cancer for 100+ employees
• Connected the frontend in React to send user input to the MySQL database"
          tech="React, Node, Express, MySQL"
          image="labby"
        />
        <Card
          title="Enspo"
          description=""
          tech="React, Node, Express, OpenAI"
          image="enspo"
        />
        <Card
          title="Recipe Book"
          tech="Java, Java Swing"
          description="Hello"
          image="recipebook"
        />
        <Card
          title="BobaTracks"
          tech="JavaScript, HTML, CSS"
          image="bobatracks"
        />
        <Card title="AReward" tech="Figma, UX/UI" image="areward" />
      </div>
    </div>
  );
}

export default ProjectPage;
