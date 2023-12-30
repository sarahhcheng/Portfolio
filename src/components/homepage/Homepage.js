import "./homepage.css";
import Headline from "./Headline";

function Homepage() {
  return (
    <div className="container">
      <div className="main-content">
        <h1 className="intro-text">Hi, I am Sarah</h1>
        <div className="img-container">
          {" "}
          <img
            src="https://cdn.dribbble.com/users/300776/screenshots/1937476/boba.gif"
            class="intro__img"
          />
        </div>
      </div>
      <div className="headline">
        <Headline />
      </div>
    </div>
  );
}

export default Homepage;
