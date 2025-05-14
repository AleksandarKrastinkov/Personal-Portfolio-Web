import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/LogoA.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} className="d-flex justify-content-start">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          <Col size={12} md={6} className="d-flex flex-column align-items-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aleksandar-krastinkov-14b755308"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100009374042970"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/alexsandar_kr/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>&copy; 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
