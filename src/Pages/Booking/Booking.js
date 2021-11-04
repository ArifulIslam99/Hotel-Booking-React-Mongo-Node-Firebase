import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Booking.css';



const Booking = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const { register, handleSubmit , reset} = useForm();
    
    const [room, setRoom] = useState([])
    useEffect(()=>{
          fetch(`https://fathomless-castle-31807.herokuapp.com/rooms/${id}`)
          .then(res => res.json())
          .then(data => setRoom(data))
    },[])

    const onSubmit = data => {
        console.log(data)
          axios.post('https://fathomless-castle-31807.herokuapp.com/bookings', data)
          .then(res => {
              if(res.data.insertedId){
                  alert('Booking Successfull')
                  reset();
              }
          })
    };
    return (
        <div style={{width:'90%'}} className="my-3 mx-auto">
            <h2 className='fs-1 fw-bold'>Please Confirm Your Booking</h2>
            <div className="row">

                <div className="col-lg-6 my-5 booking">
                    <h3 className="fw-bold mb-4">Booking Details</h3>
                    <img className='img-fluid w-50' src={room.img} alt="" />
                    <h5 className='fw-bold mt-2'> {room.name}</h5> 
                    <p>Maximum Guest: {room.guest} </p>
                    <p>Price: {room.price} USD/Night</p>
                    <p></p>
                </div>
               {
                   (room._id!=null) &&

                   <div className='col-lg-6 my-5'> 
            
            <h3 className="fw-bold">User Details</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("bookingId")}  value={room._id} /> <br />         
      <input {...register("name")}  value={user.displayName} /> <br />
      <input {...register("email")} value={user.email} /> <br />
      <input type='hidden' {...register("status")} value='Pending' /> <br />
      <input required type="date" {...register("date")}  /> <br />
      <input required type='tel' {...register("contact")} placeholder="Contact No" /> <br />
      <input  type="submit" value="Confirm booking"  style={{width:'20%',  backgroundColor:'green', color:'white', border:'1px solid green'}}/>
    </form>
            </div>
               }
            </div>
        </div>
    );
};

export default Booking;