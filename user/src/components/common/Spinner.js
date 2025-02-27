import React from "react";

const Spinner = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-slate-900 bg-opacity-50 ${
        isLoading ? "block" : "hidden"
      }`}
    >
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Spinner;
