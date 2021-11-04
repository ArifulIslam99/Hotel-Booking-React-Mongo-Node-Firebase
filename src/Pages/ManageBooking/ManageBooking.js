import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './ManageBooking.css'

const ManageBooking = () => {
     const [bookings, setBookings] = useState([]);
     const history = useHistory();

    useEffect(()=>{
        fetch('https://fathomless-castle-31807.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])

    const handleDelete = id =>{
       const procced = window.confirm('Are You Sure to Remove ? Undo is Not Possible');

       if(procced)
       {
        fetch(`https://fathomless-castle-31807.herokuapp.com/bookings/${id}`,{
            method: 'DELETE',
          
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) 
            {
               alert('Booking Removed')
               
            }

            const remainingBookings = bookings.filter(bk => bk._id !== id);
            setBookings(remainingBookings)
        })
       }
        
    }  

    const handleUpdate = id =>{ 
      
        fetch(`https://fathomless-castle-31807.herokuapp.com/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0)
            {
                alert('Booking Approved!')
                history.go('/managebooking')
            }
            else{
                alert('Already Approved')
            }
        })
    }
    return (
        <div style={{width:'95%'}} className='my-5 mx-auto '>
            <h1 className="my-5 fs-1 fw-bolder">Manage All The Booking</h1> 

            <div className='row top-con'>
                <p className="col-lg-2 fw-bold">Name</p>
                <p className="col-lg-2 fw-bold">E-mail</p>
                <p className="col-lg-2 fw-bold">Booking ID</p>
                <p className="col-lg-2 fw-bold">Booking Date</p>
                <p className="col-lg-2 fw-bold">Status</p>
                <p className="col-lg-1 fw-bold">Approve</p>
                <p className="col-lg-1 fw-bold">Delete</p>
            </div>
            {
                bookings.map(book =>
                   
                    <div className='row mng-booking'>
                        <div className='col-lg-2 '>
                            <p className="py-2"> {book.name} </p>
                        </div>
                        <div className='col-lg-2'>
                            <p className="py-2"> {book.email} </p>
                        </div>
                        <div className='col-lg-2'>
                            <p className="py-2"> {book.bookingId} </p>
                        </div>
                        <div className='col-lg-2'>
                            <p className="py-2"> {book.date} </p>
                        </div>
                        <div className='col-lg-2'>
                            <p className="py-2"> {book.status} </p>
                        </div>
                        <div className='col-lg-1 py-2'>
                            <button onClick={()=> handleUpdate(book._id)} > <i class="fas fa-check-circle"></i></button>
                        </div>
                        <div className='col-lg-1 py-2'>
                            <button   onClick={()=>handleDelete(book._id)}> <i class="fas fa-trash"></i> </button>
                        </div>
                    </div>
                    
                    )
            }
        </div>
    );
};

export default ManageBooking;