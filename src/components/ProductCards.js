import React from 'react'
import { CDN_URL } from '../utils/constants';
const ProductCards= ({ productdata })=> {

  const { name, sprites, types } = productdata;

  return (
    <>
      <div className="m-4 p-4 w-[150px] rounded-lg hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center" style={{ background: "whitesmoke", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <img className="card-image" alt="dosa" src={sprites.front_shiny} />
        <h3>{name.toUpperCase()}</h3>
        <h4>{types[0].type.name}</h4>
      </div>
    </>

  )
}
export const withFireLabel = (ProductCards) => {
  return(props)=>{
    return(
        <div>
          <label className='absolute ml-5'>🔥</label>
          <ProductCards {...props}/>
        </div>
    );
  };
  
}
export default ProductCards;
