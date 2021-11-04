import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {

  const {user, logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'chocolate'}} variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/">Hotel Exodia</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About Us</Nav.Link>
             {
               (user.uid) && <Nav.Link  as ={Link} to='/service'>Add a Service</Nav.Link>  
             }
             {
               (user.uid) && <Nav.Link  as ={Link} to='/managebooking'>Manage All Booking</Nav.Link>  
             }
             {
               (user.uid) && <Nav.Link  as ={Link} to='/mybooking'>My Booking</Nav.Link>  
             }
          </Nav>
          <Nav>

          {
         (!user.uid) ? <Nav.Link as={Link} to="/login">Login</Nav.Link> : 
         
         <div>
            
            <img style={{width:'40px', height:'40px'}} src={user.photoURL} alt="" /> <span className="text-white mx-2">Howdy, {user.displayName}</span>  <Button variant="warning" onClick={logOut}>LogOut</Button> </div>
       }
            
            
            
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;