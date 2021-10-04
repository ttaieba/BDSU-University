// import React, { useEffect, useState } from 'react';

import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Services = (props) => {
    const { name, img, price, duration, email, Credit } = props.product

    return (
        <div className="service  bg-secondary m-5 ">
            <div className="p-5">
                <img src={img} alt="" />
            </div>
            <div className="p-5 m-auto text-white  ">
                <h3>Course: {name}</h3>
                <h4>Course duration: {duration}</h4>
                <h3>Course fee: ${price}</h3>
                <h3>Credit : {Credit}</h3>
                <p>Email: {email}</p>
                {/* <Button variant="outline-warning">Enroll</Button> */}

                <NavLink to="/Courses">
                    <Button variant="outline-warning">View Coruses</Button>
                </NavLink>

            </div>
        </div>
    );
};

export default Services;