import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function CTA() {
  return (
    <div className="flex w-full items-center justify-center gap-[8px]">
      <input
        type="email"
        name=""
        placeholder="Email Address"
        id=""
        className="pt-[1.25rem] pb-[0.25rem]  px-[1rem] lg:min-w-[336px] bg-black/50  rounded-sm  border-[0.2px] border-white/50 appearance-none relative placeholder:relative placeholder:-top-2"
      />

      <button className="px-[24px] py-[15px] mr-[8px] flex items-center justify-center font-medium text-[24px] leading-[24px] text-white bg-[#e50914] hover:bg-[#c11119] transition-all rounded-[4px]">
        Get Started <IoIosArrowForward />
      </button>
    </div>
  );
}
