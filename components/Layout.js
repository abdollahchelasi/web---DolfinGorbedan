import { Container , Col,Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Navb from "./Navb";

const Layout = ({ children }) => {
  return (
    <div dir="rtl">
      <Navb />
      <Container fluid>

      <Row>
        <Col sm={12}>
        <div className={styles.child}>{children}</div>
        </Col>

        <Col sm={12}>
        <footer className={styles.footerr}>

        <Container >
          <Row>
            <Col sm={12} >
              <img src="/images/dolfin.png" height={70} width={70}/>
              <p>باشگاه فرهنگی ورزشی دلفین گربدان</p>
            </Col>
            
            
              
            <Col sm={12} className={styles.abdollah}>
              این سایت توسط <a href="http://abdollahchelasi.ir/" target={'#'}><span className={styles.abdol}>عبدالله چلاسی <img src="/images/a.jpg" className={styles.imabdol} height={20} width={20} passHref/></span></a>ساخته شده است
            </Col>
          </Row>
        </Container>

      </footer>
        </Col>
      </Row>

      </Container>
        

      
    </div>
  );
};

export default Layout;
