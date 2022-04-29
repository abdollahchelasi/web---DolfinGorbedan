import React from 'react';
import { Col,Container,Row } from 'react-bootstrap';
import styles from '../styles/Home.module.css';


const bazikon = () => {
    return (
        <div>
            
            <Container>
                <Row>
                    <Col sm={6} className={styles.bazikon}>
                        <Col className={styles.bazikon1}>Hi</Col>
                        <Col>Hi</Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default bazikon;