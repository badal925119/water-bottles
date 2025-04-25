import React, { useEffect, useState } from 'react';
import Bottol from '../Bottol/Bottol';
import './Bottols.css'

const Bottols = () => {
    const [bottols, setBottols] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('bottols.json')
            .then(res => res.json())
            .then(data => setBottols(data));
    }, []);

    const addToCard =bottol =>{
        const newCart = [...cart, bottol];
        setCart(newCart);
    }
    
    return (
        <div>
            <h2>Total {bottols.length}</h2>
            <h4>Cart : {cart.length}</h4>
         <div className='bottles'>
         {
            bottols.map(bottol => <Bottol 
                key={bottol.id}
                bottol={bottol}
                addToCard={addToCard}
            ></Bottol>)
        }
         </div>
        </div>
        
    );
};

export default Bottols;
