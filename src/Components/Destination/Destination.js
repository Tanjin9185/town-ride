import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import map from '../../images/Map.png';
import rideData from '../Data/Data';
import Map from '../Map/Map';

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
            
            <Map></Map>
        </div>
    );
};   

export default Destination;