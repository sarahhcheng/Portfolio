import "./card.css";

function Card(props) {
  const { title, description, tech, image } = props;
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
          <p class="description">{description}</p>
          <p class="tech">{tech}</p>
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
