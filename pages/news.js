import { motion } from "framer-motion";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";

function news() {
  return (
    <div>
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
          <Row>
            <Col sm={12} className={styles.titlevid}>
              خبر های ورزشی
            </Col>
          </Row>




          <Row className={styles.khabar1}>
            <Col sm={6}>
              <img className={styles.ikhabar} src="/images/i1.jpg" />
            </Col>
            <Col sm={4} className={styles.pkhabar}>
              <p> همه نگاه‌ها به دلفین گربدان , لیگ 2 در اوج حساسیت </p>
            </Col>

            <Col sm={2} className={styles.tarikh}>
              <p>تاریخ بازی</p>
              <p> 1395 </p>
            </Col>
          </Row>









        </Container>
      </motion.div>
    </div>
  );
}

export default news;
