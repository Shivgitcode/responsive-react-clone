import React from "react";
import Navbar from "../Navbar/Navbar";
import CTA from "./CTA";

export default function Hero() {
  return (
    <div className=" bg-netflixImg  w-full h-full ">
      <div className=" z-[2] w-full h-full  bg-gradient-to-t from-[rgba(0,0,0,0.8)] from-0% via-[rgba(0,0,0,0)] via-60% to-[rgba(0,0,0,0.8)] to-100% bg-[rgba(0,0,0,0.4)] bg-cover pb-[74px]">
        <div className="w-full">
          <Navbar></Navbar>
        </div>

        <div className="flex flex-col items-center justify-between w-[92%] mx-auto ">
          <h1 className="font-bold font-netflix text-center text-white text-[32px]">
            The biggest Indian hits. The best Indian stories. All streaming
            here.
          </h1>
          <p className="mt-[16px] text-[18px] text-white font-normal font-netflix">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-center flex flex-col items-center font-netflix leading-[27px] text-white font-normal text-[18px] w-[90%] mt-[24px] gap-[16px]">
            Ready to watch? Enter your email to create or restart your
            membership.
            <CTA></CTA>
          </p>
        </div>
      </div>
    </div>
  );
}
