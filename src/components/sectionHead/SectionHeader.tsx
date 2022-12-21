import React from "react";

export default function SectionHeader(props: {
  smallTitle: string;
  mainTitleColor: string;
  mainTitle: string;
  midTitle: string;
}) {
  return (
    <div className="text-center space-y-3">
      <p className="text-greenColor capitalize">{props.smallTitle}</p>
      <h3
        className={`text-3xl font-semibold capitalize ${
          props.mainTitleColor === "#F27520" ? "text-orangeColor" : "text-black"
        } lg:text-5xl`}
      >
        {props.mainTitle}
      </h3>
      <p className="capitalize">{props.midTitle}</p>
    </div>
  );
}
