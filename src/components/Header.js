
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useNetworkStatus from '../utils/useNetworkStatus';
import pokeball from "../../assets/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825865wixqe.png"

export default function Header() {
    const [logBtn, setLogBtn] = useState('Login');
    const onlineStatus = useNetworkStatus();

  return (
    <>
    <div style={{ display: "flex", justifyContent: "space-between", background: "black", padding: "10px" }}>
        <div>
            <img className="w-12 " src={pokeball} />
        </div>
        <div>
            <ul style={{ listStyle: "none", display: "flex", gap: "30px", color: "white", padding:'10px'}}>
                <li>{onlineStatus?'Online':'Offline'}</li>
                <li><Link to='/poke'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li>Account</li>
                <li><button onClick={()=>{logBtn==='Login'?setLogBtn('Logout'):setLogBtn('Login');}}>{logBtn}</button></li>
            </ul>

        </div>
    </div>
</>
  )
}
