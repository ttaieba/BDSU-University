import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {

        fetch('./datas.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h3>All Courses</h3>

            <div>
                <Container >
                    <Row md={3}  >
                        {
                            courses.map(product => <div >

                                <Col md={11} className="bg-secondary text-light ">
                                    <img src={product.img} alt="" />
                                    <div className="px-3">
                                        <h4>Course: {product.name}</h4>
                                        <p>Duration: {product.duration}</p>
                                        <p>Fee: ${product.price}</p>

                                    </div>

                                </Col>

                            </div>

                            )
                        }
                    </Row>
                </Container>
            </div>

        </div >
    );
};

export default Courses;