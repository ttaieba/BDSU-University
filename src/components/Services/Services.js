// import React, { useEffect, useState } from 'react';

import { Button } from "react-bootstrap";


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
                <h3>Course fee: {price}</h3>
                <h3>Credit : {Credit}</h3>
                <h3>Email: {email}</h3>
                <Button variant="outline-warning">Enroll</Button>

            </div>
        </div>
    );
};

export default Services;