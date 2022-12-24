import React from "react";

export default function Loader() {
  return (
    <div className="fixed w-full h-screen flex justify-center items-center">
      <video loop autoPlay>
        <source
          src={require("./../../assets/imgs/loader.mp4")}
          type="video/mp4"
        />
      </video>
    </div>
  );
}
