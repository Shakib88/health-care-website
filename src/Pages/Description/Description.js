import React from 'react';
import { useParams } from 'react-router';


const Description = () => {
    const {servicsId} = useParams();
    
    return (
        <div>
            <h1>Thes is details {servicsId}</h1>

            
        </div>
    );
};

export default Description;