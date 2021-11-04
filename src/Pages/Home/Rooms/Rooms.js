import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Room from './Room';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(()=>{
        fetch('https://fathomless-castle-31807.herokuapp.com/rooms')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])
    return (
        <div className="my-5"> 
            <h1 className="mb-3 fs-1 fw-bold">Dorms and Private Suits</h1>
            <Row xs={1} md={3} className="mx-auto">
         {
             rooms.map(room => <Room key={room._id} room={room}></Room>)
         }
         </Row>
        </div>
    );
};

export default Rooms;