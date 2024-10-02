import useEventsTrackerListener from "./hooks/use-events-tracker-listener";
import { Routes, Route } from "react-router-dom";
import Resume from "./pages/resume";
import About from "./pages/about";
import Home from "./pages/home";

import "./App.css";

function App() {
  useEventsTrackerListener();

  return (
    <div className="flex flex-row h-full w-full">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
