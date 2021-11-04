import React, { useEffect, useState } from 'react';

const BookingDetails = ({id}) => {
    const [room, setRoom] = useState([]);
    useEffect(()=>{
         fetch(`https://fathomless-castle-31807.herokuapp.com/rooms/${id}`)
         .then(res=> res.json())
         .then(data => setRoom(data))
          },[])
    

    console.log(room)
    return (
        <div>
             <img style={{borderRadius:'30px'}} className="w-25 my-3 img-fluid" src={room.img} alt="" />
             <h4>Service Type: {room.name} </h4>
             <p>Price : {room.price} USD/Night </p>
        </div>
    );
};

export default BookingDetails;