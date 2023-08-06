import React from 'react'
import { useState, useEffect } from 'react';
import ProductCards from './ProductCards';
import Shimmer from './Shimmer';
import { baseUrl } from '../utils/constants';


const NewBody = () => {
    const [listOfProducts, setListOfProducts] = useState([]);
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [searchText, setSearchText] = useState("");
    const numberOfCards = 100;

    useEffect(() => {
        fetch_data();
    }, []);
    
    const fetch_data = async () => {
        let poke_data = [];
        for (let i = 1; i <= numberOfCards; i++) { // Start from 1
            const response = await fetch(`${baseUrl}${i}`);
            const json = await response.json();
            poke_data.push(json);
        } 
        const fetched_poke_data = await Promise.all(poke_data);
        setListOfProducts(fetched_poke_data);  
        setSearchedProducts(fetched_poke_data);  
        console.log(fetched_poke_data);
    }
    
//  return(<div>
//         <h1>testing testing</h1>
//         <pre>{JSON.stringify(listOfProducts, null, 2)}</pre>
//     </div>)

    // const fetchData = async () => {
    //     const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    //     const json = await response.json();
    //     setListOfProducts(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     setSearchedProducts(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // };

   



    return listOfProducts.length === 0 ? (<Shimmer />) : (
        <>

            <div className="body" >
                <div className='search-bar'>
                    <input type="text" placeholder='Search' value={searchText} onChange={(e) => { setSearchText(e.target.value); }} />
                    <button onClick={() => {
                        const searched = listOfProducts.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));
                        setSearchedProducts(searched);
                    }}>Search</button>
                </div>
                <div className='filtered'>
                    <button className='filter-btn' onClick={() => {
                        const filteredProducts = listOfProducts.filter(
                            (product) => product.info.avgRating > 4);
                        setListOfProducts(filteredProducts);
                    }}>Top Rated</button>
                </div>
                <div className="cards-container" style={{ padding: "30px" }}>
                    {
                        searchedProducts.map((product) => {
                            // const info = product.info
                            return (
                                <ProductCards key={product.id} productdata={product} />)
                        })
                    }

                </div>
            </div>
        </>
    );
};



export default NewBody;