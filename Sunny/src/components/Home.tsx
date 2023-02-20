import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <h2>Welcome to the homepage!</h2>
        <p>Landing page and call-to-action</p>
        <nav>
          <Link to="/daily">
            <button>Daily Quality Tracker</button>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Home;
