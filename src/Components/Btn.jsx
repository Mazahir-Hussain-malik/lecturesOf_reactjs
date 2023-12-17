import React from "react";

const Btn = ({ text, styles, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`  bg-red-700 py-2 px-4 rounded-[15px] md:text-[22px] text-[14px] hover:bg-red-800 transition-all ease-in-out delay-150 ${styles}`}
    >
      {text}
    </button>
  );
};

export default Btn;
