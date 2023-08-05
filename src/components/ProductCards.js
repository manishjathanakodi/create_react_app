import React from 'react'
import {CDN_URL} from '../utils/constants';
export default function ProducCards({productdata}) {
    
        const { title,price,image, rating} = productdata;

  return (
    <>
            <div className="card">
                <img className="card-image" alt="dosa" src={image} />
                <h3>{title}</h3>
                <h4>${price}</h4>
                <h4>{rating?.rate} 🌟</h4>
                
            </div>
        </>
  )
}
