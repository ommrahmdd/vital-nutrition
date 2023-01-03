import React from "react";
import headerBg from "./../../assets/imgs/home/headerImg2.jpg";
import "semantic-ui-css/semantic.min.css";

export default function PageHeader({
  txt,
  left,
  right,
}: {
  txt: string;
  left?: string;
  right?: string;
}) {
  return (
    <div className="flex justify-between items-center relative w-full h-[40vh] mb-[8rem]">
      {/* bg */}
      <img
        src={headerBg}
        alt="headerImg"
        className="absolute top-0 left-0 w-full h-full object-cover blur-lg"
      />
      <div
        className={`z-30 w-full flex items-center  ${
          left ? "justify-between" : "justify-center"
        }`}
      >
        {/* left */}
        {/* Txt */}
        <p className="text-3xl font-bold text-orangeColor md:text-4xl lg:text-6xl">
          {txt}
        </p>
        {/* Right */}
      </div>
    </div>
  );
}
