import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap" rel="stylesheet" />
        <title>باشگاه دلفین گربدان</title>
        <meta name="description" content="⚽ باشگاه فرهنگی ورزشی دلفین گربدان ⚽ 
        باشگاه فوتبال دلفین گربدان یکی از پر افتخارترین و پر هوادارترین باشگاه های فوتبال در جزیره قشم است دلفین گربدان پیش از انقلاب ستاره جنوب گربدان نام داشت باشگاه هم اکنون در لیگ دسته دو قشم قرار گرفته دلفین گربدان در سال 1324 در جزیره قشم روستای گربدان بنیان گذاری شده است" />
        <link rel="icon" href="images/dolfin.png" />
        <meta name="keywords" content="باشگاه فوتبال دلفین گربدان , تیم فوتبال قشم , تیم دلفین گربدان"/>

      </Head>

      <main className={styles.main}>
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


        
        <Container fluid className={styles.cont}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          <Row >
            
            <Col className={styles.hom1} sm={6}>
              <Col className={styles.hom11} md={12}>
                <p className={styles.textdolfin}>
                  ⚽ باشگاه فرهنگی ورزشی دلفین گربدان ⚽{" "}
                </p>
              </Col>
            </Col>
            <Col className={styles.hom2} sm={5}>

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
              delay: 0.9,
            },
          },
        }}
      >

        <p className={styles.txtdolfin}>

       باشگاه فوتبال دلفین گربدان یکی از پر افتخارترین و پر هوادارترین باشگاه های فوتبال در جزیره قشم است دلفین گربدان پیش از انقلاب ستاره جنوب گربدان نام داشت باشگاه هم اکنون در لیگ دسته دو قشم قرار گرفته
        , دلفین گربدان در سال 1324 در جزیره قشم روستای گربدان بنیان گذاری شده است

        </p>

        </motion.div>
              

              
            </Col>
          </Row>
        </Container>





        </motion.div>
      </main>
    </div>
  );
}
