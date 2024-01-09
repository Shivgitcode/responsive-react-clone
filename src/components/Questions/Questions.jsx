import React from "react";
import { questions } from "../../constant";
import QuestionBox from "./QuestionBox";
import { useContext } from "react";
import { AppProvider } from "../../context/AppProvider";
import CTA from "../Hero/CTA";

export default function Questions() {
  const { show } = useContext(AppProvider);
  return (
    <div className=" bg-[#000000] border-top py-[72px] border-t-[8px] border-[#232323]">
      <div className="flex flex-col items-center w-[95%] mx-auto">
        <h2 className="font-netflix text-[32px] text-white font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col items-start gap-[8px] mt-[24px] w-full">
          {show.map((ques) => {
            return <QuestionBox key={ques.id} ques={ques}></QuestionBox>;
          })}
        </div>
      </div>
      <div className="text-[18px] leading-[27px] text-center font-netflix font-normal text-white mt-[45px]">
        <div className="px-[32px] mx-auto">
          Ready to watch? Enter your email to create or restart your membership.
          <div className="mt-[10px]">
            <CTA></CTA>
          </div>
        </div>
      </div>
    </div>
  );
}
