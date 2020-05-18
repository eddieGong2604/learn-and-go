import styles from "./NavBar.module.css";
import NavBarAuth from "./NavBarAuth";
import NavBarOptions from "./NavBarOptions";
import { Logo } from "./Logo";
import { NavBarSearch } from "./NavBarSearch";
import { NavBarDrawer } from "./NavBarDrawer";
const Navbar: React.SFC<{}> = () => {
  return (
    <div className={`${styles.menuBar} d-flex justify-content-around px-5 `}>
      <Logo />
      <NavBarSearch />
      <NavBarOptions />
      <NavBarAuth />
      <NavBarDrawer />
    </div>
  );
};
export default Navbar;
