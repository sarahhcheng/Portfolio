import ExperiencePage from "./components/experiences/ExperiencePage";
import Navbar from "./components/navbar/navbar";
import Homepage from "./components/homepage/Homepage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/experiences" element={<ExperiencePage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
