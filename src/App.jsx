import "./App.css";
import HomePage from "../src/pages/Home/HomePage";
import Agenda from "../src/pages/Agenda/Agenda";
import Activity from "../src/pages/Activity/Activity";
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/agenda" element={<Agenda />} />
        <Route exact path="/activity" element={<Activity />} />
      </Routes>
    </Router>
  );
}

export default App;