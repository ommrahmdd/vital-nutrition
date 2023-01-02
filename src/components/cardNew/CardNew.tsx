import React from "react";
import { Link } from "react-router-dom";

export function CardNewEn({ _new, index }: { _new: any; index: number }) {
  return (
    <Link
      to={_new._id!}
      className={`flex flex-col items-start gap-10 transition-all duration-300 ease-in-out hover:opacity-30 ${
        index === 0 && "lg:flex-row "
      }`}
    >
      {/* Image */}
      <img
        src={_new.img}
        alt="_new"
        className={`w-full h-[15rem] object-cover rounded-md ${
          index === 0 && "lg:w-1/2"
        } lg:h-auto`}
      />
      {/* Text */}
      <div className="max-w-full lg:max-w-lg">
        <p className="text-greenColor font-semibold uppercase lg:text-lg">
          {_new.en.type}
        </p>
        <p className="text-xl text-greyColor font-bold md:text-2xl">
          {_new.en.title}
        </p>
        <p className="text-greyColorLight">{_new.en.midTitle}</p>
      </div>
    </Link>
  );
}

export function CardNewAr({ _new, index }: { _new: any; index: number }) {
  return (
    <Link
      to={_new._id!}
      className={`flex flex-col items-start gap-10 transition-all duration-300 ease-in-out hover:opacity-30 ${
        index === 0 && "lg:flex-row "
      }`}
    >
      {/* Image */}
      <img
        src={_new.img}
        alt="_new"
        className={`w-full h-[15rem] object-cover rounded-md ${
          index === 0 && "lg:w-1/2"
        } lg:h-auto`}
      />
      {/* Text */}
      <div className="max-w-full lg:max-w-lg">
        <p className="text-greenColor font-semibold uppercase lg:text-lg">
          {_new.ar.type}
        </p>
        <p className="text-xl text-greyColor font-bold md:text-2xl">
          {_new.ar.title}
        </p>
        <p className="text-greyColorLight">{_new.ar.midTitle}</p>
      </div>
    </Link>
  );
}
