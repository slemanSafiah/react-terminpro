import Search from "./Search";
import ProfileCircle from "./ProfileCircle";
import NavOptions from "./NavOptions";
import { useAuth } from "../../../context/userContext";
import { Link } from "react-router-dom";
import "../../../App.css";

function NavBar() {
  const { currentUser } = useAuth();
  return (
    <div className="navbar">
      <p className="logo">TerminPro</p>
      <Search />
      <NavOptions />
      {currentUser.loggedIn ? (
        <ProfileCircle />
      ) : (
        <ul className="login-menu">
          <li>
            <Link to="/login" className="route">
              login
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/register" className="route">
              register
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;
