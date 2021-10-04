import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack'
import './Header.css'


const Header = () => {
    return (
        <div>

            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className="text-white">BDSU University</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <nav className="me-auto my-2 my-lg-0  "
                            style={{ maxHeight: '100px' }}
                            navbarScroll

                        >
                            <Stack direction="horizontal" gap={3}>
                                <NavLink className="text-white" to="/">Home</NavLink>

                                <NavLink className="text-white" to="/courses">Courses</NavLink>

                                <NavLink className="text-white" to="/blogs">Blogs</NavLink>

                                <NavLink className="text-white" to="/about">About Us</NavLink>
                            </Stack>
                        </nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div >
    );
};

export default Header;

