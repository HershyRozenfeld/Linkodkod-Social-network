import { Link } from 'react-router'
export default function Routing() {
  return (
    <>
      <div className="routing">
        <Link to="/">
        <div className="home-route">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="32"
            height="32"
            focusable="false"
          >
            <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
          </svg>
          <span className="home-span">Home</span>
        </div>
        </Link>
      </div>
    </>
  );
}
