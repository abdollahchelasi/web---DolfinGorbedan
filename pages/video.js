import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";

const video = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} className={styles.titlevid}>
            ویدیوهای ورزشی
          </Col>
          <Col sm={12} className={styles.videoo}>
            <Row>
              <Col sm={6} className={styles.bazikon}>
                <Col className={styles.bazikon1}>
                  <video
                    className={styles.vid}
                    src="http://amoozeshgahjazire.ir/static/media/jazire.006d6accf424db3dae6f.mp4"
                    controls
                    style={{ width: "250", height: "150px" }}
                  />
                </Col>
              </Col>

              <Col sm={6} className={styles.bazikon}>
                <Col className={styles.bazikon1}>
                  <video
                    className={styles.vid}
                    src="http://amoozeshgahjazire.ir/static/media/jazire.006d6accf424db3dae6f.mp4"
                    controls
                    style={{ width: "250", height: "150px" }}
                  />
                </Col>
              </Col>

              <Col sm={6} className={styles.bazikon}>
                <Col className={styles.bazikon1}>
                   <video
                  className={styles.vid}
                    src="http://amoozeshgahjazire.ir/static/media/jazire.006d6accf424db3dae6f.mp4"
                    controls
                    style={{ width: "250", height: "150px" }}
                 / >
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default video;
