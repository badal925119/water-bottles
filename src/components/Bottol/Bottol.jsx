import React from 'react';
import './Bottol.css'

const Bottol = ({bottol}) => {
   const {name,img,price}=bottol
    return (
        <div className='bottol'> 
            <h2>Name : {name}</h2>
            <img src={img} alt="" />
            <p>Pirce : ${price}</p>
        </div>
    );
};

export default Bottol;