import React, { useState, useEffect } from "react";
import "./homepage.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Headline() {
  const [typeEffect] = useTypewriter({
    words: [
      "Computer Science and Business Student at UBC.",
      "Aspiring Software Engineer.",
      "Passionate about learning and problem solving.",
    ],
    loop: {},
    typeSpeed: "70",
    deleteSpeed: "50",
    delaySpeed: "1000",
    cursor: true,
    cursorStyle: "|",
    cursorBlinking: true,
  });
  return (
    <h2>
      {typeEffect}
      <span style={{ color: "#FF007F" }}>
        <Cursor />
      </span>
    </h2>
  );
}

export default Headline;
