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
          
          <Navbar.Brand href="#home">
          <img src='/images/toop.gif' width='30px'/>
            دلفین گربدان
            <img src='/images/toop.gif' width='30px'/>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={styles.link}>
                <Link href="/">
                  <p>صفحه اصلی</p>                  
                </Link>
              </Nav.Link>

              <Nav.Link className={styles.link}>
                <Link href="/news">
                  
                   <p> خبر ها</p>
                  
                </Link>
              </Nav.Link>
              
              <Nav.Link className={styles.link} >
                <Link href="/video">
                    <p>ویدیوها</p>
                </Link>
              </Nav.Link>

              <Nav.Link className={styles.link} >
                <Link href="/bazikon">
                    <p>بازیکنان</p>
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
