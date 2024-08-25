import React, {memo,useState} from 'react'
import { NavLink } from "react-router-dom";
import logo from "../../assets/Header.png"
import { IoSearchOutline, IoLocationOutline, IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import "./header.scss"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
        const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div>
        <div className="header my-2">
            <nav className='container mx-auto justify-between px-4 flex gap-3 items-center'>
                <NavLink to="/">
                    <div className="logo w-40">
                        <img src={logo} alt="" />
                    </div>
                </NavLink>
                <div className='border search md:object-none sm:object-none flex-1 border-green-200 rounded-md p-3 flex'>
                    <select className='outline-none' name="" id="">
                        <option value="All categories">All categories</option>
                        <option value="Contact">Contact</option>
                        <option value="About">About</option>
                    </select>
                    <div className='flex  justify-between flex-1 '>
                        <input className="w-full outline-none px-3 border-l-2" type="text" placeholder="Searche for item...." />
                        <IoSearchOutline className='text-2xl text-gray-700' />
                    </div>
                </div>
                <div className='search border  rounded-md  flex gap-2  items-center p-1'>
                    <IoLocationOutline className='text-gray-600 ' />
                    <p className='text-green-200'>Your Location</p>
                </div>
                <div className={`nav_collect navbar flex items-center gap-6 ${isMenuOpen ? "show" : ""}`}>
                    <div className="flex items-center gap-1">
                        <IoIosHeartEmpty className='text-2xl'/>
                        <NavLink className='text-xs' to={"/wishlist"}>Wishlist</NavLink>
                    </div>
                    <div className="flex items-center gap-1">
                        <IoCartOutline className='text-2xl'/>
                        <NavLink className='text-xs' to={"/cart"}>Cart</NavLink>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaRegUserCircle className='text-2xl'/>
                        <NavLink className='text-xs font-normal' to={"/login"}>Account</NavLink>
                    </div>
                    <div onClick={toggleMenu} className="navbar__menu">
                        <RiMenu2Fill />
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default memo (Header)