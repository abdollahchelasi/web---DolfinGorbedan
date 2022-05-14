import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const khabar3 = () => {
  return (
    <div>
      <Head>
        <title>خبر ورزشی - افتتاح زمین چمن دلفین گربدان</title>
        <link rel="icon" href="/images/dolfin.png" />
        <meta
          name="keywords"
          content="  افتتاح زمین چمن دلفین گربدان , خبر ورزشی افتتاح زمین چمن قشم , اخبار قشم"
        />
        <meta
          name="description"
          content="افتتاح و بهره برداری زمین چمن مصنوعی دلفین روستای گربدان قشم "
        />
      </Head>
      <Container>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <Row>
          <Col sm={12} className={styles.news1}>
            <h3>
              افتتاح و بهره برداری زمین چمن مصنوعی دلفین روستای گربدان قشم{" "}
            </h3>
          </Col>

          <Col sm={12}>
            <img
              className={styles.imgkh}
              width={250}
              height={150}
              src="/images/eft.jpg"
            />
          </Col>

          <Col>
            <p className={styles.pp}>
              زمین چمن مصنوعی دلفین روستای گربدان قشم افتتاح و به بهربرداری
              رسید. با حضور دکتر تقی زاده معاون حقوقی، مجلس و امور استان های
              وزارت ورزش و جوانان،دکترمرادی نماینده مردم استان در مجلس شورای
              اسلامی، امیاری مدیرکل ورزش و جوانان هرمزگان و جمعی از مسوولین محلی
              زمین چمن مصنوعی دلفین روستای گربدان قشم افتتاح شد. شایان گفتن است
              ، زمین چمن مصنوعی محله ای روستای گربدان بخش مرکزی شهرستان قشم با
              اعتباری بالغ بر ۶۰۰ میلیون تومان و متراژ ۹۲۴ متر مربع از محل
              اعتبارات استانی و در سال ۹۹ شروع و در ۲۳ خرداد۱۴۰۰ مورد بهره
              برداری و دراختیار مردم روستای گربدان قشم قرارگرفت.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default khabar3;
