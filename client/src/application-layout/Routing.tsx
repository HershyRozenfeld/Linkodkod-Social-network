import { Link } from "react-router";
import '/src/css/routes.css';
export default function Routing() {
  return (
    <>
      <div className="routing">
        <Link to="/">
          <div className="home-route">
            <svg className="svg-home" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
            </svg>
            <span className="home-span">Home</span>
          </div>
        </Link>
        <Link to="/search">
          <div className="search-route">
            <svg className="svg-search" viewBox="0 0 24 24"       fill="currentColor">
              <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
            </svg>
            <span className="search-span">Search</span>
          </div>
        </Link>
      </div>
    </>
  );
}
