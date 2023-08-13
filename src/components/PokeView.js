import React, { useState, useEffect } from "react";
import { baseUrl } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const PokeView = () => {
    const [pokeDetails, setPokeDetails] = useState(null); 
    const {pokeId} = useParams();

    useEffect(() => {
        fetchPokeView();
    }, []);

    const fetchPokeView = async () => {
        const data = await fetch(baseUrl+pokeId);
        const json = await data.json();
        console.log (json);
        setPokeDetails(json);
    }
    if(!pokeDetails) {
        return <Shimmer />;
    }
    const { name, sprites } = pokeDetails;
    
    return (
        <div>
             
                <>
                    <img className="PokeImage" alt="whosethatpokemon" src={sprites.front_default} />
                    <h4>{name}</h4>
                </>
            
        </div>
    );
}

export default PokeView;
