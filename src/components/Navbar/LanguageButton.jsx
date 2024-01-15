import React from "react";
import { IoLanguage } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

export default function LanguageButton() {
  return (
    <div className=" flex justify-between items-center relative bg-[#111010] ">
      <IoLanguage
        fill="white"
        fontSize={"15px"}
        stroke="10px"
        className="absolute left-3"
      />
      <select
        name="language"
        id=""
        className="text-white font-netflix w-full h-full bg-transparent leading-[20px] font-medium appearance-none  focus:outline-offset-2 focus:outline-8  px-[34px] py-[4px] rounded-[4px] border-[1px] border-white/50 "
      >
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
      <IoMdArrowDropdown
        className="absolute right-3"
        fill="white"
      ></IoMdArrowDropdown>
    </div>
  );
}
