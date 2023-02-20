import { Link } from "react-router-dom";
import React, { FunctionComponent } from "react";
// import Month from "./Month";
// import Day from "./Day";

const Home: FunctionComponent = () => {
  return (
    <div className="container">
      <h2>Welcome to the homepage!</h2>
      <p>Landing page and call-to-action</p>
      <nav>
        <Link to="/Day">
          <button>Daily Quality Tracker</button>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
