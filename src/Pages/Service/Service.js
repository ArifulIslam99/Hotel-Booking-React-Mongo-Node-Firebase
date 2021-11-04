import React from 'react';
import { Modal , Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Service.css';
const axios = require('axios').default;

const Service = () => {
    const { register, handleSubmit , reset} = useForm();
        const onSubmit = data =>{
            console.log(data);

            axios.post('https://fathomless-castle-31807.herokuapp.com/rooms', data)
            .then(res => {
                if(res.data.insertedId){
                    alert(' SuccessFully Added Service')
                reset();
                }
             }
         )
            
        } 
    return (
        
        <div className="container-form "> 
           <h2 className=" fs-1 fw-bold p-4">Please Add a New Service</h2> 

           <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name of Service" /> <br />
      <input {...register("img")} placeholder="Img Url" /> <br />
      <input {...register("bathroom")} placeholder="Bathroom Service" /> <br />
      <input {...register("kitchen")} placeholder="Kitchen" /> <br />
      <input {...register("breakfast")} placeholder="Breakfast" /> <br /> 
      <input type="number" {...register("guest")} placeholder="Maximum Guest" /> <br />
      <input type="number" {...register("price")} placeholder="Price of Service" /> <br />
      <input type="submit" value="Add Service" />
    </form>
        </div>
    );
};

export default Service;