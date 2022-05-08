import { motion } from "framer-motion";
import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Head from "next/head";

function news() {
  return (
    <div>

<Head>
        <title>خبرهای ورزشی</title>
        <meta
          name="description"
          content="آخرین خبرهای ورزشی باشگاه دلفین گربدان , خبر های لحظه به لحظه با دلفین گربدان"
        />
        <link rel="icon" href="images/dolfin.png"/>
        <meta
          name="keywords"
          content="خبرهای فوتبال دلفین گربدان , خبرهای ورزشی قشم, خبرهای ورزشی تیم دلفین گربدان  , خبرهای باشگاه گربدان"
        />
      </Head>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <Container>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Row>
            <Col sm={12} className={styles.titlevid}>
              خبر های ورزشی
            </Col>
          </Row>

          <Link href={"/news/khabar1"} passHref>
            <Row className={styles.khabar1}>
              <Col sm={6}>
                <img className={styles.ikhabar} width={200} height={150} src="/images/i34.jpg" />
              </Col>
              <Col sm={4} className={styles.pkhabar}>
                <p> همه نگاه‌ها به دلفین گربدان , لیگ 2 در اوج حساسیت </p>
              </Col>

              <Col sm={2} className={styles.tarikh}>
                <p>تاریخ بازی</p>
                <p> 1395 </p>
              </Col>
            </Row>
          </Link>

          <br />

          <Link href={"/news/khabar2"} passHref>
            <Row className={styles.khabar1}>
              <Col sm={6}>
              <img  className={styles.ikhabar} width={200} height={150} src="/images/i39.jpg" />
              </Col>
              <Col sm={4} className={styles.pkhabar}>
                <p> برد پرگل دلفین گربدان مقابل قایقسازی رمچاه </p>
              </Col>

              <Col sm={2} className={styles.tarikh}>
                <p>تاریخ بازی</p>
                <p> 1396 </p>
              </Col>
            </Row>
          </Link>

          <br />

          <Link href={"/news/khabar3"} passHref>
            <Row className={styles.khabar1}>
              <Col sm={6}>
              <img  className={styles.ikhabar} width={200} height={150} src="/images/eft.jpg" />
              </Col>
              <Col sm={4} className={styles.pkhabar}>
                <p> افتتاح و بهره برداری زمین چمن مصنوعی دلفین روستای گربدان قشم </p>
              </Col>

              <Col sm={2} className={styles.tarikh}>
                <p>تاریخ</p>
                <p> 1400 </p>
              </Col>
            </Row>
          </Link>

        </Container>
      </motion.div>
    </div>
  );
}

export default news;
