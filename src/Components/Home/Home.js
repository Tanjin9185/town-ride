import React from 'react';
import { useState } from 'react';
import background from '../../images/Bg.png'
import Rides from '../Rides/Rides'
import rideData from '../Data/Data'
import { useEffect } from 'react';
import './Home.css'
import Header from '../Header/Header';


const Home = () => {
    const [ride, setRide] = useState([]);
    useEffect(() => {
        setRide(rideData);
        // console.log(rideData);
    }, [])
    return (
        <div>
        
        <section className="banner row">
            {/* <Header></Header> */}
            <div className="ride-section" >
                {
                    ride.map(ride => <Rides
                        key={ride.id}
                        ride={ride}></Rides>
                    )
                }
               
            </div>
           
        </section>
        </div>
    );
};

export default Home;