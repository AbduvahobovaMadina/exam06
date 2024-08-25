import React, {memo} from "react";
import hero from "../../assets/Tabpanel.png"
import { MdOutlineSend } from "react-icons/md";
import "./hero.scss"


const Hero = () => {

  return (
    <div className="container mx-auto">
      <div className="relative items-center justify-center">
            <img className="w-full" src={hero} alt="" />
            <div className="absolute flex flex-col sm:gap-3 md:gap-5 lg:gap-5 left-32 sm:top-1 md:top-2 lg:top-32 w-1/2">
              <div className="title">
                <b className="sm:text-lg font-mono md:text-4xl lg:text-7xl">Fresh Vegetables Big discount</b>
                <p className=" sm:text-base text-gray-500 md:text-xl lg:text-3xl">Save up to 50% off on your first order</p>
              </div>
              <div className="flex items-center rounded-3xl bg-white w-64">
            <form className="flex items-center bg-white rounded-3xl pl-3"action="">
              <MdOutlineSend className="text-gray-400" />
              <input className="outline-none pl-3" placeholder="Your emaill address" type="text" />
              <button className="btn bg-green-700 p-3 rounded-3xl text-white"> Subscribe </button>
            </form>
           
          </div>
            </div>
      </div>
    </div>
  )
}

export default memo (Hero)
