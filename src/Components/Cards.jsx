import React from "react";

import Btn from "./Btn";
import CardsData from "./CardsData";

const handleClick = () => {
  console.log("hello click here");
};

const Cards = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[2rem] w-[90%] mx-auto">
        {CardsData.map(({ id, image, paragraph, btnText }) => {
          return (
            <div
              key={id}
              className=" shadow-xl bg-blue-900 rounded-[20px] overflow-hidden"
            >
              <div className=" overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="w-[100%] transition-all ease-in-out delay-150 hover:scale-150"
                />
              </div>
              <p className="text-[20px] py-2 px-4">{paragraph}</p>
              <Btn text={btnText} styles={"w-[100%] "} onClick={handleClick} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
