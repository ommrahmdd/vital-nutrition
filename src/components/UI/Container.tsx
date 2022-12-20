import React from "react";

export default function Container({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  return (
    <div className={`w-11/12 mx-auto md:w-10/12 ${classNames}`}>{children}</div>
  );
}
