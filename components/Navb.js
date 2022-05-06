import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const Navb = () => {
  return (
    <>
    
      <Navbar className={styles.navb}  variant="dark" expand="sm">
        <Container>
          <Image alt="در حال بارگذاری ..." src="/images/dolfin.png" width={60} height={60} layout='intrinsic'/>
          <Navbar.Brand href="#home">
          <Image alt="در حال بارگذاری ..." layout='intrinsic' src='/images/toop.gif' width='30' height='30'/>
            دلفین گربدان
            <Image alt="در حال بارگذاری ..." layout='intrinsic' src='/images/toop.gif' width='30' height='30'/>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={styles.link}>
                <Link href="/" passHref>
                  <p>صفحه اصلی</p>                  
                </Link>
              </Nav.Link>

              <Nav.Link className={styles.link}>
                <Link href="/news" passHref>
                  
                   <p> خبر ها</p>
                  
                </Link>
              </Nav.Link>
              
              <Nav.Link className={styles.link} >
                <Link href="/bazikonan" passHref>
                    <p>بازیکنان</p>
                </Link>
              </Nav.Link>

              <Nav.Link className={styles.link}  >
                <Link href="/video" passHref>
                    <p>ویدیوها</p>
                </Link>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navb;
