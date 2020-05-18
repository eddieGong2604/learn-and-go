import { Drawer, Button, Menu } from "antd";
import styles from "./NavBar.module.css";
import { useState } from "react";

export const NavBarDrawer: React.SFC<{}> = () => {
  const [isVisible, setVisibility] = useState(false);
  const showDrawer = () => {
    setVisibility(() => true);
  };

  const onClose = () => {
    setVisibility(() => false);
  };
  return (
    <>
      <Button className={styles.barsMenu} type="default" onClick={showDrawer}>
        <span className={styles.barsBtn}></span>
      </Button>
      <Drawer
        title={
          <div>
            <Button type="primary" className="mr-1">
              Log In
            </Button>
            <Button type="default" className="ml-1">
              Sign Up
            </Button>
          </div>
        }
        placement="right"
        closable={true}
        onClose={onClose}
        visible={isVisible}
      >
        <Menu mode="vertical">
          <Menu.Item>Hello</Menu.Item>
          <Menu.Item>Hello</Menu.Item>
          <Menu.Item>Hello</Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};
