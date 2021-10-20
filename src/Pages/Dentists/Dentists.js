import React, { useEffect, useState } from 'react';
import Heros from '../Heros/Heros';


const Dentists = () => {
    const [dentists, setDentists] = useState([])

         useEffect( () => {
            fetch('doctor.json')
            .then(res => res.json())
            .then(data => setDentists(data));
    },[])

    return (
        

        <div className="service-container container my-5">
            {

                dentists.map(dentist => <Heros
                
                    key={dentist.id}
                    dentist={dentist}
                
                >

                </Heros>
            
                )}

        </div>
        



    
    );
};

export default Dentists;