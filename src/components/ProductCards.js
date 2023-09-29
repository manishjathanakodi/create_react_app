import React from 'react'
import { CDN_URL } from '../utils/constants';
const ProductCards= ({ productdata })=> {

  const { title, category, rating, thumbnail} = productdata;

  return (
    <>
      <div className="m-4 p-4 w-[150px] rounded-lg hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center" style={{ background: "whitesmoke", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <img className="card-image" alt="dosa" src={thumbnail} />
        <h3>{title}</h3>
        <h4>{category}</h4>
        <h4>{rating}</h4>
      </div>
    </>

  )
}

export default ProductCards;
