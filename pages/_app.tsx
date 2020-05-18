import { AppProps } from "next/app";
import "antd/dist/antd.css";
import "ant-design-pro/dist/ant-design-pro.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />{" "}
    </>
  );
}

export default App;
