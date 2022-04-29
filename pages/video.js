import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import styles from '../styles/Home.module.css'


function video() {
    return (
        <div>
            <Head>
                <title>ویدیوهای ورزشی گربدان</title>
            </Head>
            <main>
                <Container className={styles.contmain}>
                    <Row>
                        <Col sm={12} className={styles.titlevid}>ویدیوهای ورزشی</Col>
                        <Col sm={12} className={styles.videoo}>
                                <Row >
                                    <Col className={styles.vidcoo1}>HI</Col>
                                    <Col className={styles.vidcoo2}>HI</Col>
                                </Row>
                        </Col>

                        
                        
                    </Row>
                </Container>
            </main>
        </div>
    );
}

export default video;