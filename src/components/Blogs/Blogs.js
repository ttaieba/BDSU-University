import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../../img/blogs-03.webp'


const Blogs = () => {
    return (
        <div className="blogs">
            <h1>Latest Blog Post</h1>

            <div>
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />

            </div>
            <h1>Best Educational <span>Environment</span> </h1>
            <p>Even slightly believable. If you are going use passage of Lorem Ipsum need desire to obtain pain of itself, because it is pain de sires many pain of itself occur for your study

                Even slightly believable. If you are going use passage of Lorem Ipsum need desir</p>
            <Button variant="warning">Visit Blog</Button>


        </div>
    );
};

export default Blogs;