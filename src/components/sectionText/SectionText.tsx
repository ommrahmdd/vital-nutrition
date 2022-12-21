import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { SBtn } from "../UI/Buttons";

export default function SectionText({
  smallTitle,
  title,
  text,
  linkTo,
}: {
  smallTitle: string;
  title: string;
  text: string;
  linkTo?: any;
}) {
  let { i18n } = useTranslation();
  return (
    <div className="flex flex-col items-start justify-items-center gap-y-6">
      <p className="tracking-widest text-greenColor">{smallTitle}</p>
      <h3 className="text-2xl text-orangeColor font-semibold lg:max-w-[17rem] lg:text-4xl">
        {title}
      </h3>
      <p className="text-greyColor leading-7 lg:max-w-lg ">{text}</p>
      {linkTo ? linkTo : null}
    </div>
  );
}
