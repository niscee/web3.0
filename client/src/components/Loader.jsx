import React from "react";

const Loader = () => {
  return (
    <div className="py-3 w-full flex items-center justify-center">
      <div className="animate-spin rounded-full w-32 h-32 border-2 border-b-0 border-red-800" />
    </div>
  );
};

export default Loader;
