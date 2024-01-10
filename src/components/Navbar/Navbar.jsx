import React from "react";
import { netflix } from "../../assets";
import { IoLanguage } from "react-icons/io5";
export default function Navbar() {
  return (
    <nav className="px-[32px] mx-auto py-[24px] flex flex-row justify-between items-center ">
      <div className="h-fit w-full flex flex-row justify-between items-center max-h-[40px]">
        <img src={netflix} alt="" className="w-[89px] h-fit" />
        <div className="flex  justify-center items-baseline gap-x-[8px] ">
          <div className=" px-[36px] py-[6px] rounded-sm border-[1px]  flex justify-between items-center relative bg-[#111010]">
            <IoLanguage
              fill="white"
              fontSize={"15px"}
              stroke="10px"
              className="absolute left-3"
            />
            <select
              name="language"
              id=""
              className="text-white font-netflix w-full h-full bg-transparent leading-[20px] font-medium  "
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
          <div className="px-[16px] py-[7.5px] w-full h-full text-[14px] rounded-[4px] bg-[#e50914] flex-1  hover:bg-[#c11119] transition-all">
            <button className=" font-netflix w-full h-full  leading-[14px]  font-semibold text-white  whitespace-nowrap ">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
