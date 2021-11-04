
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import BookingDetails from './BookingDetails';
import './MyBooking.css'
 


const MyBooking = () => {
    const history = useHistory();
    const [mybooking, setMybooking] = useState([]);


    const {user} = useAuth();

    useEffect(()=>{
        fetch('https://fathomless-castle-31807.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setMybooking(data));
    },[])
     

     let booked = mybooking.find(bk => bk.email === user.email);
    const handleCancel = id =>{
        const procced = window.confirm('Are You Sure to Cancel Booking ?')
        if(procced)
        {
            fetch(`https://fathomless-castle-31807.herokuapp.com/bookings/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0)
            {
                   alert('Booking Removed Successfully')
                   history.push('/');
                   
            }
        })
        }
        
    }
    return (
        <div className="b-container">
            <h2 className='my-3 fw-bold my-4'>My Booking!</h2> 
                   
                   {
                       (booked!==undefined) ?
                        
                       <div className=" my-4">
                           <div>
                            <BookingDetails id={booked.bookingId}></BookingDetails>
                          </div>
                       <p  className='col-lg-4 col-xs-8 mx-auto service'>Booked Id : {booked.bookingId}</p>
                       <p  className='col-lg-4 col-xs-8 mx-auto service'>Booked Date : {booked.date}</p>
                       <p  className='col-lg-4 col-xs-8 mx-auto service'>Booked Person: {booked.name} </p>
                       <p  className='col-lg-4 col-xs-8 mx-auto service'> Person Email: {booked.email} </p>
                       <Button onClick={()=>handleCancel(booked._id)} variant='warning'>Cancel Booking!</Button>
                       </div> :
                       <div>
                           <h3 style={{border:'1px solid black', width:'40%'}} className="mx-auto p-4">No Booking is Available</h3>
                       </div>
                   }
                   
                    
               </div>
            
          
        
    );
};

export default MyBooking;