import Search from "./Search";
import ProfileCircle from "./ProfileCircle";
import NavOptions from "./NavOptions";

function NavBar() {
  return (
    <div className="navbar">
      <p className="logo">TerminPro</p>
      <Search />
      <NavOptions />
      <ProfileCircle />
    </div>
  );
}

export default NavBar;
