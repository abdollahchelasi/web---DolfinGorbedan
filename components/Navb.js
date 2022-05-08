import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navb = () => {
  return (
    <>
    
      <Navbar className={styles.navb} fixed="top" variant="dark" expand="sm">
        <Container>
          <img src="/images/dolfin.png" width={60} height={60}/>
          <Navbar.Brand href="#home">
          <img src='/images/toop.gif' width='30' height='30'/>
            دلفین گربدان
            <img  src='/images/toop.gif' width='30' height='30'/>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id={styles.control} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={styles.link}>
                <Link href="/" passHref>
                  <p className={styles.linkp}>صفحه اصلی</p>                  
                </Link>
              </Nav.Link>

              <Nav.Link className={styles.link}>
                <Link  href="/news" passHref>
                  
                   <p className={styles.linkp}> خبر ها</p>
                  
                </Link>
              </Nav.Link>
              
              <Nav.Link className={styles.link} >
                <Link href="/bazikonan" passHref>
                    <p className={styles.linkp}>بازیکنان</p>
                </Link>
              </Nav.Link>

              <Nav.Link className={styles.link}  >
                <Link href="/video" passHref>
                    <p className={styles.linkp}>ویدیوها</p>
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
