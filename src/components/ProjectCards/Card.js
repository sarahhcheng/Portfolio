import "./card.css";

function Card(props) {
  return (
    <>
      <div class="project-item">
        <div class="project-img card2"></div>
        <div class="project-text">
          <h3>{props.title}</h3>
          <p class="description">{props.description}</p>
          <p class="technology">HTML &nbsp; CSS &nbsp; Javascript</p>
        </div>
      </div>
    </>
  );
}
export default Card;
