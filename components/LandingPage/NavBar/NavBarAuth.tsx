import { Button, Modal, Form, Input, Checkbox } from "antd";
import styles from "./NavBar.module.css";
import { useState } from "react";
import { ModalDetails } from "./ModalDetails";

const validateMessages = {
  types: {
    email: "${label} is not validate email!",
  },
};

const NavBarAuth: React.SFC<{}> = () => {
  const [visible, setVisibility] = useState<boolean>(false);

  const showModal = () => {
    setVisibility(() => true);
  };

  const handleCancel = () => {
    setVisibility(() => false);
  };

  return (
    <div className={styles.navElement}>
      <div>
        <Button type="primary" className="mr-1" onClick={showModal}>
          Log In
        </Button>
        <Button type="default" className="ml-1">
          Sign Up
        </Button>
      </div>

      <Modal
        visible={visible}
        title={<b>Login to Learn and Go</b>}
        footer={null}
        onCancel={handleCancel}
      >
        <ModalDetails />
      </Modal>
    </div>
  );
};
export default NavBarAuth;
