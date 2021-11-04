import React from 'react';
import { Card, Col , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Room = ({room}) => {

    const {_id, img, name, guest , bathroom, breakfast, kitchen, price} = room;
    return (
        <Col>
        <Card className="my-3">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="fw-bold text-danger">{name} </Card.Title>
            <Card.Text>
              <p>Maximum : {guest} Person Allowed</p>
              <p>Bathroom : {bathroom} </p>
              <p>BreakFast : {breakfast} </p>
              <p>Kitchen : {kitchen} </p>
              <p>Starting From : {price} USD</p> 
              <Link to={ `/booking/${_id}`}>
                 <Button variant="warning">Book Now</Button>
              </Link>
                
             
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Room;