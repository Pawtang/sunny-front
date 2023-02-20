import React from "react";
import Day from "./components/Day";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Day" element={<Day />} />
      <Route path="/Month" element={<Month />} />
    </Routes>
  );
}

export default App;
