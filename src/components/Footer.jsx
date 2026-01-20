import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section animate-footer">
      <Container>
        <Row className="gy-3 text-center text-md-start">
          {/* Contact Info */}
          <Col md={4}>
            <h5 className="footer-heading">Contact Us</h5>
            <p>satheeshaswathi@gmail.com</p>
            <p>+91 9567904901‬</p>
            <p>Thazhe Chovva, Kannur</p>
          </Col>

          {/* Social Links */}
          <Col md={4}>
            <h5 className="footer-heading">Follow Us</h5>
            <div className="social-icons">
              <FaFacebookF />
              <FaYoutube />
              <FaInstagram />
      </div>
          </Col>

          {/* Policies */}
          <Col md={4}>
            <h5 className="footer-heading">Legal</h5>
            <p>Privacy Policy</p>
            <p>Accessibility Statement</p>
          </Col>
        </Row>

        {/* Bottom Line */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="footer-copy">© 2025 MR TILE DESIGNING</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
