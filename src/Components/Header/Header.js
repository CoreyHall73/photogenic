import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.css"; // Optional custom styling

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
                <Container>
                    <Navbar.Brand href="#">Header</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Services</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
