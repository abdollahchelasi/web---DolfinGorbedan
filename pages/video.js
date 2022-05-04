import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

const video = () => {
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
            ویدیوهای ورزشی
          </Col>
          <Col sm={12} className={styles.videoo}>
            <Row>

              

              <Col sm={6}  className={styles.bazikon}>
                <Col className={styles.bazikon1}>
                  <video
                    className={styles.vid}
                    src="/video/d1.mp4"
                    controls
                    style={{ width: "250", height: "150px" }}
                  />
                </Col>
              </Col>

              <Col sm={6} className={styles.bazikon}>
                <Col className={styles.bazikon1}>
                   <video
                  className={styles.vid}
                    src="/video/d2.mp4"
                    controls
                    style={{ width: "250", height: "150px" }}
                 / >
                </Col>
              </Col>


              <Col sm={6}  className={styles.bazikon}>
                <Col className={styles.bazikon1}>
                   <video
                  className={styles.vid}
                    src="/video/d3.mp4"
                    controls
                    style={{ width: "250", height: "150px" }}
                 / >
                </Col>
              </Col>


              <Col sm={6}  className={styles.bazikon}>
                <Col className={styles.bazikon1}>
                   <video
                  className={styles.vid}
                    src="/video/d5.mp4"
                    controls
                    style={{ width: "250", height: "150px" }}
                 / >
                </Col>
              </Col>


            

              <Col sm={6} className={styles.bazikon}>
                <Col className={styles.bazikon1}>
                   <video
                  className={styles.vid}
                    src="/video/d6.mp4"
                    controls
                    style={{ width: "250", height: "150px" }}
                 / >
                </Col>
              </Col>



            </Row>
          </Col>
        </Row>
      </Container>






      </motion.div>
    </div>
  );
};

export default video;
