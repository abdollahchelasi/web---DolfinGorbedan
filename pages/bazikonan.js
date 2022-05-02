import Head from "next/head";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";

function bazikonan() {
  return (
    <div>
      <Head>
        <title>ویدیوهای ورزشی گربدان</title>
      </Head>
      <main>
        <Container className={styles.contmain}>
          <Row>
            <Col sm={12} className={styles.titlevid}>
              بازیکنان ورزشی
            </Col>
            <Col sm={12} className={styles.videoo}>
              <Row>
                <Col className={styles.vidcoo1}>
                  <Link href="images/passdolfin.jpg">
                    <img className={styles.img1} src="images/passdolfin.jpg" />
                  </Link>
                </Col>

                <Col className={styles.vidcoo2}>
                  <Link href="images/passdolfin.jpg">
                    <img className={styles.img1} src="images/passdolfin.jpg" />
                  </Link>
                </Col>
                

              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default bazikonan;
