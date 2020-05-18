import styles from "./NavBar.module.css";

export const OAuthOptions: React.SFC<{}> = () => {
  return (
    <>
      <div className={styles.oauthOption}>
        <a>
          <i
            className={`${styles.textFb} fa fa-facebook-square mr-1`}
            aria-hidden="true"
          ></i>
          <span className={styles.textFb}>Proceed with Facebook</span>
        </a>
      </div>

      <div className={styles.oauthOption}>
        <a>
          <i
            className={`${styles.textGm} fa fa-google ml-1`}
            aria-hidden="true"
          ></i>{" "}
          <span className={styles.textGm}>Proceed with Gmail</span>
        </a>
      </div>
    </>
  );
};
