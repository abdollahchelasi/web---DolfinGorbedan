import Head from "next/head";
import { Container , Col,Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Navb from "./Navb";

const Layout = ({ children }) => {
  return (
    <div dir="rtl">
      <Navb />
      
        <div>{children}</div>

      <footer className={styles.footerr}>

        <Container >
          <Row>
            <Col sm={12} >
              <img src="/images/dolfin.png" width={70}/>
              <p>باشگاه فرهنگی ورزشی دلفین گربدان</p>
            </Col>
            
            
              
            <Col sm={12} className={styles.abdollah}>
              این سایت توسط <span className={styles.abdol}>عبدالله چلاسی <img src="/images/a.jpg" className={styles.imabdol} width={20}/></span>ساخته شده است
            </Col>
          </Row>
        </Container>

      </footer>
    </div>
  );
};

export default Layout;
