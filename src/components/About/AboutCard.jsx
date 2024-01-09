import React from "react";

export default function AboutCard({ el }) {
  return (
    <div className="w-full border-t-[8px] border-[#232323]">
      <div className="flex flex-col w-[95%] justify-evenly items-center py-[72px]  mx-auto">
        <h1 className=" font-netflix text-[32px] text-white font-semibold">
          {el.heading}
        </h1>
        <p className="text-center font-normal font-netflix text-white text-[18px] mt-[16px] mb-[24px]">
          {el.desc}
        </p>
        <img src={el.img} alt="not availaible" className="max-w-[557px]" />
      </div>
    </div>
  );
}
