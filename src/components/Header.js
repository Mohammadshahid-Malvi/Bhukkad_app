import { useState } from "react";
import { CDN_LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
    const [ btnName, setBtnName ] = useState('Login');
    const onlineStatus = useOnlineStatus();
    
    return (
        <div className="flex justify-between bg-pink-100">
            <div className="w-[100px]">
                <img src={CDN_LOGO_URL}/>
            </div>
            <div className="flex align-middle">
            <ul className="flex">
                <li className="p-2 m-2">{ onlineStatus ? "🟢" : "🔴"}</li>
                <li className="p-2 m-2"><Link to="/">Home</Link></li>
                <li className="p-2 m-2"><Link to="/about">About Us</Link></li>
                <li className="p-2 m-2"><Link to="/contact">Contact Us</Link></li>
                <li className="p-2 m-2"><Link to="/contact">Cart</Link></li>
                <button className="p-4 bg-gray-100 hover:cursor-pointer" onClick={()=>{
                    (btnName === 'Login') ? setBtnName('Logout') : setBtnName('Login')
                }}>{btnName}</button>
            </ul>
            </div>
        </div>
    )
}

export default Header;