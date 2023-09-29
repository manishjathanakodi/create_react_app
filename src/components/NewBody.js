import React from 'react'
import { useState, useEffect } from 'react';
import ProductCards, { withFireLabel } from './ProductCards';
import Shimmer from './Shimmer';
import { baseUrl } from '../utils/constants';
import { Link } from 'react-router-dom';
import useNetworkStatus from '../utils/useNetworkStatus';


const NewBody = () => {
    const [listOfProducts, setListOfProducts] = useState([]);
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        

        const response = await fetch(baseUrl);
        const json = await response.json();



        setListOfProducts(json.products);
        setSearchedProducts(json.products);
        console.log(json.products);
    }


    const onlineStatus = useNetworkStatus();

    console.log(onlineStatus);

    return onlineStatus === false ? <h1>Offline</h1> : (listOfProducts.length === 0 ? (<Shimmer />) :
        <>

            <div className="body" >
                <div className='search-bar'>
                    <input type="text" placeholder='Search' value={searchText} onChange={(e) => { setSearchText(e.target.value); }} />
                    <button onClick={() => {
                        const searched = listOfProducts.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()));
                        searchedProducts(searched);
                    }}>Search</button>
                </div>
                <div className="flex flex-col gap-1 p-1 bg-black">
                    <div >
                        <h1 className='text-white'>Category:</h1>
                    </div>
                    <div className="flex flex-row gap-2">

                        <button className="flex text-white  bg-red-400 p-1 rounded-lg" onClick={() => {
                            setSearchedProducts(listOfProducts);
                        }}>All</button>
                        <button className="flex text-white bg-blue-400 p-1 rounded-lg" onClick={() => {
                            const filteredProducts = listOfProducts.filter(
                                (prodcateg) => prodcateg.category === 'smartphones');
                            setSearchedProducts(filteredProducts);
                        }}>Smartphone</button>
                        <button className="flex text-white bg-yellow-600 p-1 rounded-lg" onClick={() => {
                            const filteredProducts = listOfProducts.filter(
                                (prodcateg) => prodcateg.category === 'laptops');
                            setSearchedProducts(filteredProducts);
                        }}>Laptop</button>
                        <button className="flex text-white bg-purple-400 p-1 rounded-lg" onClick={() => {
                            const filteredProducts = listOfProducts.filter(
                                (prodcateg) => prodcateg.category === 'fragrances');
                            setSearchedProducts(filteredProducts);
                        }}>Perfume</button>
                        <button className="flex text-white bg-green-400 p-1 rounded-lg" onClick={() => {
                            const filteredProducts = listOfProducts.filter(
                                (prodcateg) => prodcateg.category === 'skincare');
                            setSearchedProducts(filteredProducts);
                        }}>Skincare</button>
                        <button className="flex text-white bg-orange-400 p-1 rounded-lg" onClick={() => {
                            const filteredProducts = listOfProducts.filter(
                                (prodcateg) => prodcateg.category === 'home-decoration');
                            setSearchedProducts(filteredProducts);
                        }}>Decoration</button>
                        <button className="flex text-white bg-teal-400 p-1 rounded-lg" onClick={() => {
                            const filteredProducts = listOfProducts.filter(
                                (prodcateg) => prodcateg.category === 'groceries');
                            setSearchedProducts(filteredProducts);
                        }}>Grocery</button>
                    </div>
                </div>
                <div className=" flex flex-wrap " >
                    {
                        searchedProducts.map((product) => {
                            return (
                                <Link key={product.id} to={"/poke/" + product.id}>

                                    <ProductCards productdata={product} />

                                </Link>)
                        })
                    }

                </div>
            </div>
        </>
    );
};



export default NewBody;