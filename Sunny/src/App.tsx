import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Day from "./components/Day";
import Home from "./components/Home";
import Month from "./components/Month";

import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day" element={<Day />} />
      <Route path="/month" element={<Month />} />
    </Routes>
  );
}

export default App;
