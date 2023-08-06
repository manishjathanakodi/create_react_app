
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [logBtn, setLogBtn] = useState('Login');
  return (
    <>
    <div style={{ display: "flex", justifyContent: "space-between", background: "black", padding: "10px" }}>
        <div>
            <h1 style={{ color: "white" }}>Who's that Pokemon?</h1>
        </div>
        <div>
            <ul style={{ listStyle: "none", display: "flex", gap: "30px", color: "white", padding:'10px'}}>
                <li><Link to='/pokes'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li>Account</li>
                <li><button onClick={()=>{logBtn==='Login'?setLogBtn('Logout'):setLogBtn('Login');}}>{logBtn}</button></li>
            </ul>

        </div>
    </div>
</>
  )
}
