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
    <div className="flex justify-between items-center relative w-full h-[50vh] mb-[8rem] px-20">
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
        {left && (
          <img
            src={left}
            alt="headerImg"
            className="object-contain hidden lg:inline-block  lg:w-72 lg:h-7w-72 "
          />
        )}
        {/* Txt */}
        <p className="text-3xl font-bold text-orangeColor  md:text-4xl lg:text-6xl lg:max-w-xl lg:text-center">
          {txt}
        </p>
        {/* Right */}
        {right && (
          <img
            src={right}
            alt="headerImg"
            className="object-contain hidden lg:inline-block lg:w-72 lg:h-7w-72 "
          />
        )}
      </div>
    </div>
  );
}
