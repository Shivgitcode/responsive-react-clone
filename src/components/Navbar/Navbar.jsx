import React from "react";
import { netflix } from "../../assets";

import LanguageButton from "./LanguageButton";
export default function Navbar() {
  return (
    <nav className="px-[32px] lg:px-[48px] mx-auto py-[24px] flex flex-row justify-between items-center ">
      <div className="h-fit w-full flex flex-row justify-between items-center max-h-[40px]">
        <img src={netflix} alt="" className="w-[89px] lg:w-[140px] h-fit" />
        <div className="flex  justify-center items-baseline gap-x-[8px] ">
          <LanguageButton></LanguageButton>
          <div className="px-[16px] py-[4px] w-full h-full text-[14px] rounded-[4px] bg-[#e50914] flex-1  hover:bg-[#c11119] transition-all">
            <button className=" font-netflix w-full h-full  leading-[14px]  font-semibold text-white  whitespace-nowrap ">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
