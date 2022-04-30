import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import styles from '../styles/Home.module.css'


function bazikonan() {
    return (
        <div>
            <Head>
                <title>ویدیوهای ورزشی گربدان</title>
            </Head>
            <main>
                <Container className={styles.contmain}>
                    <Row>
                        <Col sm={12} className={styles.titlevid}>بازیکنان ورزشی</Col>
                        <Col sm={12} className={styles.videoo}>
                                <Row >
                                    <Col className={styles.vidcoo1}>
                                        <img className={styles.img1} src="images/passdolfin.jpg"/>
                                    </Col>
                                    <Col className={styles.vidcoo2}>
                                    <img className={styles.img1} src="images/passdolfin.jpg"/>

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