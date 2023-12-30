import "./card.css";

function Card(props) {
  const { title, description = "", tech = "", image } = props;

  // Checking the amount of bullet points we have for the description and splitting them
  let descriptionPoints;
  var isDescription = false;

  if (description.length > 0) {
    descriptionPoints = description.split("$");
    var isDescription = true;
    console.log(isDescription);
  }

  // splitting the tech stack so that they could be styled in their own divs
  const techStack = tech.split(",");

  console.log(isDescription);
  return (
    <>
      <div class="project-item">
        <div className="project-image">
          {" "}
          <img
            alt="image"
            className="image"
            src={`project-images/${image}.png`}
          ></img>
        </div>
        <div class="project-text">
          <h3>{title}</h3>
          <div class="tech">
            {techStack.map((t) => (
              <div className="language">{t.trim()}</div>
            ))}
          </div>
          {isDescription ? (
            <ul class="description">
              {descriptionPoints.map((point) => (
                <li>{point.trim()}</li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
        <div class="project-buttons">
          <a
            href="https://tdanielles.github.io/boba-tracks/"
            target="_blank"
            class="demo"
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <a
            href="https://github.com/sarahhcheng/boba-tracks"
            target="_blank"
            class="code"
          >
            <i class="fa-brands fa-github-alt"></i>
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;
