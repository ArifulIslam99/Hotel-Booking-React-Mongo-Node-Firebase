import React from 'react';

const AboutUs = () => {
    return (
        <div className="my-5">
            <img className="img-fluid h-25 w-25 mx-auto" src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />

            <div className="mt-3">
            <h2 className="fs-1 fw-bold"> Hotel Exodia Private Limited.</h2>
            <h4>Founded: 1999</h4>
            <h5>Location: 237/4 Jackson Parker Road Rangamati Chittagong </h5>
            <p>Email: admin@exodia.com</p>
            <p>Phone: 0223-889-12, 0224-889-129</p>
            </div>
        </div>
    );
};

export default AboutUs;