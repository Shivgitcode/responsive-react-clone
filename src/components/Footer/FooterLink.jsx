import React from "react";

export default function FooterLink({ el }) {
  return (
    <div className="font-netflix text-[14px] underline font-normal text-white/70  w-fit mt-[16px]">
      <a href="/nope">{el}</a>
    </div>
  );
}
