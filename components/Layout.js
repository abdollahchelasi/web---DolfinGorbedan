import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navb from "./Navb";

const Layout = ({ children }) => {
  return (
    <div dir="rtl">
      <Navb />
      
        <div>{children}</div>

      <footer className={styles.footerr}>Powered By Dolfin Gorbedan</footer>
    </div>
  );
};

export default Layout;
