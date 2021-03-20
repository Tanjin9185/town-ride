import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Ride.css'

const Rides = (props) => {
    const history = useHistory()
    const handleBook = (id) => {
        history.push(`/destination/${id}`);
    }
    const { name, quantity, img, price, id } = props.ride;

    return (
        <div key={id} className="col-md-3" style={{height:'768px'}}>
            <div className="singleCard py-5" onClick={() => handleBook(id)} style={{ textAlign: 'center',borderRadius:"15px",marginTop:'300px'}}>
                {/* <Card.Img variant="top" style={{ width: '150px',marginTop:"10px",marginLeft:"60px"}} src={img} /> */}
                <img className="img-fluid w-50" src={img} alt=""/>
                <div>
                    <h5 className="mt-2"> {name} </h5>
                </div>
            </div>
        </div>
    );
};

export default Rides;