import React from "react";
import { useContext } from "react";
import { AppProvider } from "../../context/AppProvider";

export default function AboutCard({ el, flex }) {
  const { layout } = useContext(AppProvider);
  console.log(flex);
  return (
    <div className="w-full border-t-[8px] border-[#232323]">
      <div
        className={`flex flex-col lg:${flex} w-[95%] lg:w-[63%] justify-evenly items-center py-[72px]  mx-auto`}
      >
        <div className="flex flex-col items-start justify-start">
          <h1 className=" font-netflix text-[32px] text-white font-semibold lg:text-[48px]">
            {el.heading}
          </h1>
          <p className="text-center lg:text-start font-normal font-netflix text-white text-[18px] mt-[16px] mb-[24px] lg:text-[24px]">
            {el.desc}
          </p>
        </div>

        <img src={el.img} alt="not availaible" className="max-w-[557px]" />
      </div>
    </div>
  );
}
