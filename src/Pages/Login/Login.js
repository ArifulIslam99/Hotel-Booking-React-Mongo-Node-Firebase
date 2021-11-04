import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {googleSignIn, setUser, setIsLoading, setError, user} = useAuth();

    const history = useHistory();
    const location = useLocation();
    const uri = location.state?.from || '/home';
    

  
    const handleGoogle = ()=>{
        googleSignIn()
        .then((result)=>{
            setUser(result.user)
            history.push(uri)
           
        }).catch((error=> setError(error.message)))
        .finally(()=>setIsLoading(false))
    }
    return (
        <div className="my-4">
        <h1 className="fs-1 fw-bold">Please Login First!</h1> 
         <Button onClick={handleGoogle} style={{marginTop:'100px', marginBottom:'300px'}} variant='danger'><i class="fab fa-google"></i>oogle Sign in</Button>
        </div>
    );
};

export default Login;