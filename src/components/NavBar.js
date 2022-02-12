import Search from "./Search";
import ProfileCircle from "./ProfileCircle";
import NavOptions from "./NavOptions";

function NavBar() {
  return (
    <div className="navbar">
      <p className="logo">TerminPro</p>
      <Search />
      <NavOptions />
      {1 == !1 ? (
        <ProfileCircle />
      ) : (
        <ul className="login-menu">
          <li> login</li>
          <li> register</li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;
