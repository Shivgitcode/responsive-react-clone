import React from "react";
import { useContext } from "react";
import { AppProvider } from "../../context/AppProvider";
import { FiX, FiPlus } from "react-icons/fi";

export default function QuestionBox({ ques }) {
  const { handleDesc } = useContext(AppProvider);
  return (
    <div className="w-full">
      <div className="w-full">
        <div
          className=" flex w-full justify-between p-[24px] bg-[#2d2d2d] hover:bg-[#414141] transition-all mb-[1px]"
          onClick={() => handleDesc(ques.id)}
        >
          <span className="font-netflix font-normal text-[18px] text-white ">
            {ques.heading}
          </span>
          {ques.opacity ? (
            <span>
              <FiPlus stroke="white" fontSize={"24px"}></FiPlus>
            </span>
          ) : (
            <span>
              <FiX stroke="white" fontSize={"24px"}></FiX>
            </span>
          )}
        </div>
        <div
          className={` grid place-items-center bg-[#2d2d2d] ${
            ques.opacity
              ? " scale-y-0 opacity-0 h-0 absolute"
              : "scale-y-100 opacity-100 h-[100%]"
          } transition-all duration-200  origin-top`}
        >
          <span className="font-netflix text-[18px] p-[24px] w-[95%] text-white font-normal ">
            {ques.desc}
          </span>
        </div>
      </div>
    </div>
  );
}
