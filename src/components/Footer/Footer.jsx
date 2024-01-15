import React from "react";
import { links } from "../../constant";
import FooterLink from "./FooterLink";
import LanguageButton from "../Navbar/LanguageButton";

export default function Footer() {
  return (
    <div className="bg-black border-t-[8px] border-[#232323] ">
      <div className="w-[95%] flex flex-col items-start justify-between mx-auto px-[32px] mt-[32px]">
        <p className="mb-[12px] font-netflix text-[16px] text-white/70 w-full">
          Questions? Call 000-800-919-1694
        </p>
        <div className="flex flex-col flex-wrap w-full max-h-[330px] mb-[24px]">
          {links.map((el, idx) => {
            return <FooterLink key={idx} el={el}></FooterLink>;
          })}
        </div>
        <div>
          <LanguageButton></LanguageButton>
        </div>
        <p className="text-white/70 mt-[24px]">Netflix India</p>
      </div>
    </div>
  );
}
