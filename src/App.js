import Experience from "./components/experiences/experiences";
import Navbar from "./components/navbar/navbar";
import Homepage from "./components/homepage/Homepage";
import Project from "./components/projects/projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
