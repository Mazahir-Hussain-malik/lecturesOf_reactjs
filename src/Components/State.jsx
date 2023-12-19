import React, { useState } from "react";
import Btn from "./Btn";

const State = () => {
  const [count, setCount] = useState(100);

  function hanldeInc() {
    setCount(count + 1);
  }
  return (
    <div>
      <div className="text-center">
        <h2 className="py-12 text-[48px] font-semibold text-center">
          states in reactjs
        </h2>

        <br />
        <Btn text={count} styles={"bg-red-400"} onClick={hanldeInc} />
        <br />
        <Btn text={count} styles={"bg-red-400"} onClick={hanldeInc} />
        <br />
        <Btn text={count} styles={"bg-red-400"} onClick={hanldeInc} />
        <br />
        <Btn text={count} styles={"bg-red-400"} onClick={hanldeInc} />
        <br />

        <button
          className="py-2 px-8 w-[15%] bg-red-600 rounded-md text-[25px] font-semibold"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          click here to add 1
        </button>
      </div>
    </div>
  );
};

export default State;
