import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import map from '../../images/Map.png';
import rideData from '../Data/Data';

const Destination = (props) => {
    
    const {id} = useParams();
    const history = useHistory();
    return (

        <div className="d-flex">
            <div style={{width: '200px' ,marginLeft:"150px",marginTop:"150px"}}>
                <Form>
                    <Form.Group controlId="formBasicStart">
                        <Form.Label>Pick Form</Form.Label>
                        <Form.Control type="text" name="startForm" placeholder="Mirpur" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEnd">
                        <Form.Label>Pick To</Form.Label>
                        <Form.Control type="text" name="journyEnd" placeholder="Mongla" required/>
                    </Form.Group>
                    <Form.Group controlId="selectDate">
                    <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Set your Date" />
                    </Form.Group>
                    
                </Form>
                
                    <button onClick={()=>history.push(`/finalDestination/${id}`)} className="">Search</button>
                    
            </div>
            <div>
                <img style={{height: '600px', marginLeft:"200px" , marginTop:"50px"}}src={map} alt=""/>
            </div>
        </div>
    );
};   

export default Destination;