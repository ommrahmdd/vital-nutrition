import React from "react";
import Container from "../../components/UI/Container";

export default function AboutTxtSection({
  title,
  smallTitle,
  leftSide,
  rightSide,
}: {
  title: string;
  smallTitle: string;
  leftSide: string;
  rightSide: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="">
          <div className="text-center space-y-2">
            <p className="text-greenColorLight tracking-widest">{smallTitle}</p>
            <h4 className="font-semibold text-3xl uppercase text-orangeColorLight">
              {title}
            </h4>
          </div>
          <div className="p-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="leading-9 max-w-full text-greyColor lg:leading-9 lg:text-xl lg:max-w-lg">
              {leftSide}
            </div>
            <div className="leading-9 max-w-full text-greyColor lg:leading-9 lg:text-xl  lg:max-w-lg">
              {rightSide}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
