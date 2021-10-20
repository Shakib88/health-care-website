import React from 'react';

const Heros = ({dentist}) => {
    const {name, image, description} = dentist
    return (
        <div className="service pb-3">
            <img src={image} alt="" srcset="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>

        </div>
    );
};

export default Heros;