import React, { useState, useEffect } from "react";
import { baseUrl } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const PokeView = () => {
    const [pokeDetails, setPokeDetails] = useState(null);
    const { pokeId } = useParams();

    useEffect(() => {
        fetchPokeView();
    }, []);

    const fetchPokeView = async () => {
        const data = await fetch(baseUrl + pokeId);
        const json = await data.json();
        console.log(json);
        setPokeDetails(json);
    }
    if (!pokeDetails) {
        return <Shimmer />;
    }
    const { name, sprites } = pokeDetails;

    return (
        <div>
            <div className="m-auto p-4 h-[400px] w-[400px] rounded-lg bg-slate-100 hover:bg-slate-200 transition-all duration-200 flex flex-col items-center justify-center" style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                <img className="PokeImage" alt="whosethatpokemon" src={sprites.front_default} />
                <h4>{name}</h4>
            </div>

        </div>
    );
}

export default PokeView;
