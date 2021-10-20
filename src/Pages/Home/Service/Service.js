import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = ({service}) => {
    const{name, image, description, id} = service
    return (
        <div className="service pb-3">
            <img src={image} alt="" srcset="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>

            <Link to={`/details/${id}`}> <button className="btn btn-warning">Read More</button></Link>
        </div>
    );
};

export default Service;