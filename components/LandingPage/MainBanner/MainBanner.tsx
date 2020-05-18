import styles from "./MainBanner.module.css";
import Search from "antd/lib/input/Search";

const imgLink =
  "https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg";

export const MainBanner: React.SFC<{}> = () => {
  return (
    <div className={styles.container}>
      <img src={imgLink} alt="Background" style={{ width: "100%" }} />
      <div className={styles.textAndSearchBar}>
        <h1>Learn And Go Platform</h1>
        <p>
          Enjoy our highly flexible course delivery offered by<br></br>
          trusted experts.
        </p>
        <Search
          placeholder="Enter course keyword"
          enterButton="Search"
          size="large"
          onSearch={(value) => console.log(value)}
        />
      </div>
    </div>
  );
};
