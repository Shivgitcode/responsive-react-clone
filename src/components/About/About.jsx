import React from "react";
import desc from "../../constant";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <div className="flex flex-col items-center bg-[#000000]">
      {desc.map((el) => {
        return <AboutCard key={el.id} el={el}></AboutCard>;
      })}
    </div>
  );
}
