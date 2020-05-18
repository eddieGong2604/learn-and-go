import { Form, Input, Checkbox, Button } from "antd";
import { OAuthOptions } from "./OAuthOptions";
const validateMessages = {
  types: {
    email: "Email is invalid!",
  },
};
export const ModalDetails: React.SFC<{}> = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          <OAuthOptions />
          <Form
            name="basic"
            initialValues={{ remember: true }}
            validateMessages={validateMessages}
          >
            <Form.Item name="email" rules={[{ type: "email" }]}>
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
