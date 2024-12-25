import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Home.css"; // You can still use a little custom CSS if needed

const Home = () => {
    return (
        <div className="home">
            <Container className="text-center my-5">
                <h1>Welcome to the Home Page!</h1>
                <p>Explore our collection of beautiful art pieces for sale!</p>

                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="shadow-sm">
                            <div className="card-image bg-primary text-white d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                                Image 1
                            </div>
                            <Card.Body>
                                <Card.Title>Beautiful Landscape</Card.Title>
                                <Card.Text>
                                    A serene view of mountains during sunset.
                                </Card.Text>
                                <Card.Text>
                                    <strong>$150</strong>
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="shadow-sm">
                            <div className="card-image bg-primary text-white d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                                Image 2
                            </div>
                            <Card.Body>
                                <Card.Title>Ocean Waves</Card.Title>
                                <Card.Text>
                                    A refreshing view of crashing ocean waves.
                                </Card.Text>
                                <Card.Text>
                                    <strong>$200</strong>
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="shadow-sm">
                            <div className="card-image bg-primary text-white d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                                Image 3
                            </div>
                            <Card.Body>
                                <Card.Title>Cityscape at Night</Card.Title>
                                <Card.Text>
                                    A breathtaking view of the city skyline under the stars.
                                </Card.Text>
                                <Card.Text>
                                    <strong>$120</strong>
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
