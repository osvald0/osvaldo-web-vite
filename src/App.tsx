import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import "./App.css";
import Resume from "./pages/resume";
import { ResumeVersions } from "./types/resume";

function App() {
  return (
    <div className="flex flex-row h-full w-full">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route
            path="resume-long"
            element={<Resume version={ResumeVersions.LONG} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
