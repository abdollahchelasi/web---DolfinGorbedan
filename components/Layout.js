import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";
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
              <Container>
                <Row>
                  <Col sm={6}>
                    <img src="/images/dolfin.png" height={70} width={70} />
                    <p>باشگاه فرهنگی ورزشی دلفین گربدان</p>
                  </Col>
                  <Col sm={6} className={styles.dastras}>
                    <h5>دسترسی سریع</h5>
                    <Link href="/">
                      <p className={styles.pdast}>صفحه اصلی</p>
                    </Link>
                    <Link href="/news">
                      <p className={styles.pdast}>خبر ورزشی</p>
                    </Link>

                    <Link href="/video">
                      <p className={styles.pdast}>ویدیوهای ورزشی</p>
                    </Link >
                    
                    <Link href="/bazikonan">
                      <p className={styles.pdast}>بازیکنان</p>
                    </Link>
                  </Col>

                  <Col sm={12} className={styles.abdollah}>
                    <p className={styles.time}>
                      کپی‌رایت 2021 - تمامی حقوق وبسایت برای دلفین گربدان محفوظ
                      می باشد
                    </p>
                    طراحی شده توسط{" "}
                    <a href="http://abdollahchelasi.ir/" target={"#"}>
                      <span className={styles.abdol}>
                        عبدالله چلاسی{" "}
                        <img
                          src="/images/a.jpg"
                          className={styles.imabdol}
                          height={20}
                          width={20}
                          passHref
                        />
                      </span>
                    </a>
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
