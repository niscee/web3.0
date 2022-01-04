import React from "react";
import { default as LoaderType } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <LoaderType type="BallTriangle" color="#00BFFF" height={200} width={200} />
    </div>
  );
};

export default Loader;
