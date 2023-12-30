import "./card.css";

function Card(props) {
  const { title, description = "", tech, image } = props;

  let descriptionPoints;
  var isDescription = false;

  if (description.length > 0) {
    descriptionPoints = description.split("$");
    var isDescription = true;
    console.log(isDescription);
  }

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
          <p class="tech">{tech}</p>
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
