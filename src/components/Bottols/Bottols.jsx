import React, { useEffect, useState } from 'react';
import Bottol from '../Bottol/Bottol';

const Bottols = () => {
    const [bottols, setBottols] = useState([]);
    
    useEffect(() => {
        fetch('bottols.json')
            .then(res => res.json())
            .then(data => setBottols(data));
    }, []);
    
    return (
        <div>
            <h2>bottols here {bottols.length}</h2>
         <div>
         {
            bottols.map(bottol => <Bottol 
                key={bottol.id}
                bottol={bottol}
            ></Bottol>)
        }
         </div>
        </div>
        
    );
};

export default Bottols;
