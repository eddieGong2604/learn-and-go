import Link from "next/link";
import styles from "./NavBar.module.css";

export const Logo: React.SFC<{}> = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>logo</a>
      </Link>
    </div>
  );
};
