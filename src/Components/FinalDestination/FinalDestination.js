import React, { useEffect, useState } from 'react';
import rideData1 from '../Data/Data';
import map from '../../images/Map.png';
import './FinalDestination.css';
import { useParams } from 'react-router';



const FinalDestination = () => {

  
  const {id} = useParams();
  
    

     const vehicle = rideData1.find(ride => ride.id == id);
     console.log(vehicle);
     const { name, quantity, img, price} = vehicle;
    return (
        <div className="d-flex">
            
        <div style={{width: '200px' ,marginLeft:"150px",marginTop:"150px"}}>
            <div className='divStyle'>
                <h4> Mirpur</h4>
                <h4> Mongla</h4>
            </div>
            <div className="bike">
              <p><img style={{height: '40px'}} src={img} alt=""/><span style={{marginLeft: '20px'}}> {name}</span> <span style={{marginLeft: '20px'}}> {quantity}</span> <span style={{marginLeft: '20px'}}> {price}</span></p>  
            </div>
            <div className="bike">
              <p><img style={{height: '40px'}} src={img} alt=""/><span style={{marginLeft: '20px'}}> {name}</span> <span style={{marginLeft: '20px'}}> {quantity}</span> <span style={{marginLeft: '20px'}}> {price}</span></p>  
            </div>
            <div className="bike">
              <p><img style={{height: '40px'}} src={img} alt=""/><span style={{marginLeft: '20px'}}> {name}</span> <span style={{marginLeft: '20px'}}> {quantity}</span> <span style={{marginLeft: '20px'}}> {price}</span></p>  
            </div>
            
        </div>
        <div>
            <img style={{height: '600px', marginLeft:"200px" , marginTop:"50px"}}src={map} alt=""/>
        </div>
    </div>
    );
};

export default FinalDestination;