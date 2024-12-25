import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"; // Optional custom styling

const Footer = () => {
    return (
        <footer className="footer bg-primary text-white py-4">
            <Container>
                <Row>
                    <Col xs={12} md={6} className="mb-3">
                        <h5>Footer</h5>
                        <p>Explore our collection of beautiful artwork available for sale!</p>
                    </Col>
                    <Col xs={12} md={6} className="mb-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled d-flex">
                            <li><a href="#" className="text-white me-3">Privacy Policy</a></li>
                            <li><a href="#" className="text-white me-3">Terms of Service</a></li>
                            <li><a href="#" className="text-white me-3">Contact</a></li>
                            <li><a href="#" className="text-white me-3">FAQ</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-3">
                        <p>© 2024 Your Company. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
