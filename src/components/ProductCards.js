import React from 'react'
import {CDN_URL} from '../utils/constants';
export default function ProductCards({productdata}) {
    
        const {name, sprites, types} = productdata;

  return (
    <>
            <div className="card">
                <img className="card-image" alt="dosa" src={sprites.front_shiny}/>
                <h3>{name}</h3>
                <h4>{types[0].type.name}</h4>
                {/* <h4>{costForTwo}</h4>
                <h4>{avgRating} 🌟</h4> */}
                
            </div>
        </>
  )
}
