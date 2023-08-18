import React from 'react'
import { useState, useEffect } from 'react';
import ProductCards,{withFireLabel} from './ProductCards';
import Shimmer from './Shimmer';
import { baseUrl } from '../utils/constants';
import { Link } from 'react-router-dom';
import useNetworkStatus from '../utils/useNetworkStatus';


const NewBody = () => {
    const [listOfProducts, setListOfProducts] = useState([]);
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [searchText, setSearchText] = useState("");
    const PokeCardFire = withFireLabel(ProductCards);
    const numberOfCards = 100;

    useEffect(() => {
        fetch_data();
    }, []);
    
    const fetch_data = async () => {
        let poke_data = [];
        for (let i = 1; i <= numberOfCards; i++) { 
            const response = await fetch(baseUrl+i);
            const json = await response.json();
            poke_data.push(json);
        } 
        
        setListOfProducts(poke_data);  
        setSearchedProducts(poke_data);  
        console.log(poke_data);
    }
    

    const onlineStatus = useNetworkStatus();

    console.log(onlineStatus);

    return onlineStatus===false? <h1>Offline</h1>:(listOfProducts.length === 0?  (<Shimmer />) : 
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
                <div className=" flex flex-wrap " >
                    {
                        searchedProducts.map((product) => {
                            return (
                                <Link key={product.id} to={"/poke/"+product.id}>
                                    { product.types[0].type.name === 'fire'? <PokeCardFire productdata={product}/> :
                                    <ProductCards  productdata={product} />
                                    }
                                    </Link>)
                        })
                    }

                </div>
            </div>
        </>
    );
};



export default NewBody;