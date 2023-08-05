import React, { useEffect } from 'react'
import { useState,useEffect  } from 'react';
import ProductCards from './ProductCards';
import Shimmer from './Shimmer';
import resList from '../utils/mockData';
export default function Body() {
    const [listOfProducts, setListOfProducts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedProducts, setSearchedProducts] = useState([]);
   
    useEffect(()=>{
            fetchData();
    },[]);

    const fetchData = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        
        const data = await response.json();
        setListOfProducts(data);
        setSearchedProducts(data);
    };
    

    return listOfProducts.length=== 0 ? (<Shimmer/>):(
        <>  
            
            <div className="body" >
            <div className='search-bar'>
                <input type="text" placeholder='Search' value={searchText} onChange={(e)=>{setSearchText(e.target.value);}} />
                <button onClick={()=>{
                   const searchedProducts = listOfProducts.filter((product)=> product.title.toLowerCase().includes(searchText.toLowerCase()));
                   setSearchedProducts(searchedProducts);
                }}>Search</button>
            </div>
                <div className='filtered'>
                    <button className='filter-btn' onClick={() => {
                        const filteredProducts = listOfProducts.filter(
                            (product) => product.rating.rate > 4);
                        setListOfProducts(filteredProducts);
                    }}>Top Rated</button>
                </div>
                <div className="cards-container" style={{ padding: "30px" }}>
                    {

                        searchedProducts.map((product) => (
                            <ProductCards key={product.id} productdata={product} />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
