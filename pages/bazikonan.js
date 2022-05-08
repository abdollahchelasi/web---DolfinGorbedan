import Head from "next/head";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

function bazikonan() {
  return (
    <div>
      <Head>
        <title>بازیکنان دلفین گربدان</title>
        <link rel="icon" href="/images/dolfin.png" />
        <meta
          name="keywords"
          content="بازیکنان دلفین گربدان , بازیکنان جزیره قشم , عکسهای تیم دلفین گربدان"
        />
        <meta
          name="description"
          content="عکسهای بازیکنان باشگاه فرهنگی ورزشی دلفین گربدان"
        />
      </Head>
      <main>
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
          <Container className={styles.contmain}>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
            <Row>
              <Col sm={12} className={styles.titlevid}>
                بازیکنان دلفین گربدان
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />

                  <Link href="/images/i1.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i1.jpg"
                      />
                    </Col>
                  </Link>

                  <Link href="/images/passdolfin.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/passdolfin.jpg"
                      />
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />

                  <Link href="/images/i3.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i3.jpg"
                      />
                    </Col>
                  </Link>

                  <Link href="/images/i4.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i4.jpg"
                      />
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i5.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i5.jpg"
                      />
                    </Col>
                  </Link>

                  <Link href="/images/i6.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i6.jpg"
                      />
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i7.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i7.jpg"
                      />
                    </Col>
                  </Link>

                  <Link href="/images/i8.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i8.jpg"
                      />
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i9.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i9.jpg"
                      />
                    </Col>
                  </Link>

                  <Link href="/images/i10.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i10.jpg"
                      />
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i11.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i11.jpg"
                      />
                    </Col>
                  </Link>

                  <Link href="/images/i12.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i12.jpg"
                      />
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i13.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i13.jpg"
                      />
                    </Col>
                  </Link>

                  <Link href="/images/i14.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i14.jpg"
                      />
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i15.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i15.jpg"
                      />
                    </Col>
                  </Link>

                  <Link href="/images/i16.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i16.jpg"
                      />
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i17.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i17.jpg"
                      />
                    </Col>
                  </Link>

                  <Link href="/images/i18.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i18.jpg"
                      />
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i19.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i19.jpg"
                      />
                    </Col>
                  </Link>

                  <Link href="/images/i20.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i20.jpg"
                      />
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i21.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i21.jpg"
                      />
                    </Col>
                  </Link>

                  <Link href="/images/i22.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i22.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i23.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i23.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Link href="/images/i24.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i24.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i25.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i25.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Link href="/images/i26.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i26.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i27.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i27.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Link href="/images/i28.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i28.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i29.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i29.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Link href="/images/i30.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i30.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i31.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i31.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Link href="/images/i32.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i32.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i33.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i33.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Link href="/images/i34.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i34.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i35.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i35.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Link href="/images/i36.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i36.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i37.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i37.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Link href="/images/i38.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i38.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i39.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i39.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Link href="/images/i40.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i40.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i41.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i41.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Link href="/images/i42.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i42.jpg"
                      />{" "}
                    </Col>
                  </Link>
                  <Col sm={2} />
                </Row>
              </Col>

              <Col sm={12} className={styles.videoo}>
                <Row>
                  <Col sm={2} />
                  <Link href="/images/i43.jpg" passHref>
                    <Col className={styles.vidcoo1}>
                      <img
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i43.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Link href="/images/i44.jpg" passHref>
                    <Col className={styles.vidcoo2}>
                      <img
                      
                        width={100}
                        height={100}
                        className={styles.img1}
                        src="/images/i44.jpg"
                      />{" "}
                    </Col>
                  </Link>

                  <Col sm={2} />
                </Row>
              </Col>
            </Row>
          </Container>
        </motion.div>
      </main>
    </div>
  );
}

export default bazikonan;
