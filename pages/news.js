import { motion } from "framer-motion";
import { Container,Col, Row } from "react-bootstrap";
import styles from '../styles/Home.module.css'

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
        </Container>





      </motion.div>
    </div>
  );
}

export default news;
