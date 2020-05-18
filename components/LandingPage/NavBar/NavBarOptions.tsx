import { Menu } from "antd";
import styles from "./NavBar.module.css";

const NavBarOptions: React.SFC<{}> = () => {
  return (
    <div className={styles.navElementMenu}>
      <div>
        <Menu
          mode="horizontal"
          style={{ borderBottom: "1px solid transparent" }}
        >
          <Menu.Item>Hello</Menu.Item>
          <Menu.Item>Hello</Menu.Item>
          <Menu.Item>Hello</Menu.Item>
          <Menu.Item>Hello</Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default NavBarOptions;
