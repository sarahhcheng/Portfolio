import ExperiencePage from "./components/experiences/ExperiencePage";
import Navbar from "./components/navbar/navbar";
import Homepage from "./components/homepage/Homepage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, UseTheme } from "./theme-context";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/experiences" element={<ExperiencePage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
