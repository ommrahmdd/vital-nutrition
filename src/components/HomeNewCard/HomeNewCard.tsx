import React from "react";
import newsUser from "./../../assets/imgs/home/newsUser.png";

export default function HomeNewCard({
  type,
  title,
  details,
}: {
  type: string;
  title: string;
  details: string;
}) {
  return (
    <div className="py-5 px-3 space-y-4">
      <p className="text-greenColor font-semibold">{type}</p>
      <h3 className="text-2xl font-semibold lg:max-w-lg">{title}</h3>
      <p className="text-sm leading-6 text-greyColorLight lg:max-w-lg">
        {details}
      </p>
      {/* Admin */}
      <div className="flex items-center gap-x-3">
        <img src={newsUser} alt="userImage" className="w-14" />
        <div className="flex flex-col items-start">
          <p className="text-sm text-orangeColor font-bold ">Admin</p>
          <p className="text-sm text-greyColorLight">January 16, 2022</p>
        </div>
      </div>
    </div>
  );
}
