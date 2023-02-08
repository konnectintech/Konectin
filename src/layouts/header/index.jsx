import { Link } from "react-router-dom";
import { konectinIcon } from "../../assets";

function Header() {
  return (
    <div className="mx-auto max-w-screen-2xl flex items-center justify-between mb-auto">
      <div>
        <img src={konectinIcon} />
      </div>
      <nav className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
      </nav>
    </div>
  );
}

export default Header;
