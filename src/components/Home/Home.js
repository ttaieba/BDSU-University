import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import About from '../About/About';
import { Button } from 'react-bootstrap';

// all import close ///////////////////////////////////////

// there are 4 part include in this home page. thaese are: about,blogs, home top and 4item of courses 

const Home = () => {

    // get data from {data json} its put in service component///
    const [services, setServices] = useState([])

    useEffect(() => {

        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>

            {/* home main page */}
            <div className="head  text-center " >

                <h1 className=" p-5 mt-5 font ">
                    Education is the </h1>
                <h1 className=" font p-5">most powerful Weapon</h1>


                <Button variant="warning m-2">View Coruses</Button>
                <Button variant="warning">Learn More</Button>





            </div>
            {/*  4 Courses   show here */}
            <h1 className="text-warning text=bold p-3">
                Top Courses</h1>
            <div className="">

                {
                    services.map(product => <Services
                        key={product.key}
                        product={product}

                    >
                    </Services>

                    )
                }

            </div>
            {/* extra two part show in home page */}
            <Blogs></Blogs>
            <About></About>
        </div >
    );
};

export default Home;