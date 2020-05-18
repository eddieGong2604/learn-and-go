import styles from "./NavBar.module.css";
import Search from "antd/lib/input/Search";

export const NavBarSearch: React.SFC<{}> = () => {
  return (
    <div className={styles.navElement}>
      <div>
        <Search
          placeholder="input search text"
          onSearch={(value) => console.log(value)}
          style={{ width: "20vw" }}
        />
      </div>
    </div>
  );
};
