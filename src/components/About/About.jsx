import React from "react";
import desc from "../../constant";
import AboutCard from "./AboutCard";
import { useContext } from "react";
import { AppProvider } from "../../context/AppProvider";

export default function About() {
  const { setLayout } = useContext(AppProvider);
  return (
    <div className="flex flex-col items-center bg-[#000000]">
      {desc.map((el, index) => {
        if (index % 2 == 0) {
          return <AboutCard key={el.id} el={el} flex="flex-row"></AboutCard>;
        } else {
          return (
            <AboutCard key={el.id} el={el} flex="flex-row-reverse"></AboutCard>
          );
        }
      })}
    </div>
  );
}
