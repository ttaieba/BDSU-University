import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

// all import close ///////////////////////////////////////



const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row md={4}>
                    <Col xs={6}>
                        <div>
                            <h1>Our Campus</h1>
                            <p>abc </p>
                            <p>Campus map </p>
                            <p>Notice board </p>
                            <p>360O view </p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div>
                            <h1>Information
                            </h1>
                            <p>Admission </p>
                            <p>Campus map </p>
                            <p>Tuition fee </p>
                            <p>Scholorship </p>
                            <p>Facilities </p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div>
                            <h1>Useful Link</h1>
                            <p>All Courses </p>
                            <p>Our Teachers </p>
                            <p>Our Events </p>
                            <p>FAQs </p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div>
                            <h1>Contact Info</h1>
                            <p> 245, New Town, Marklen Street North City, New York, USA </p>
                            <p>+01254 659 874,
                                +32145 857 458</p>
                            <p> info @example.com </p>
                            <p>www.example.com </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Footer;