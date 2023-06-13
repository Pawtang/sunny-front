import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Day from "./components/Day";
import Home from "./components/Home";
import Month from "./components/Month";
import Setup from "./components/Setup";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CorrelationReport from "./components/CorrelationReport";

import "./styles/App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/correlationreport" element={<CorrelationReport />} />
      <Route path="/setup" element={<Setup />} />
      <Route path="/day" element={<Day />} />
      <Route path="/month" element={<Month />} />
    </Routes>
  );
};

export default App;
