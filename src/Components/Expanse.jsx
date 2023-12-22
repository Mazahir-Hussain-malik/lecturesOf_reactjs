import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Expanse = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "apple",
      price: 200,
    },
  ]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevExpanse) => [
      ...prevExpanse,
      { id: Date.now(), name: name, price: price },
    ]);

    setName("");
    setPrice(0);
  };



  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-center text-[3rem] my-4 text-[#ffff] font-semibold">
        EXPANSE TRACKER
      </h2>
      <form
        action=""
        className="flex flex-col gap-y-[3rem] w-[40%] mx-auto bg-blue-400 py-4 px-8 rounded-[25px] shadow-xl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="enter item name ..."
          className="py-2 px-4 shadow-lg rounded-[20px]  text-[25px] text-[#000] "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="enter item price ..."
          className="py-2 px-4 shadow-lg rounded-[20px]  text-[25px] text-[#000] "
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          type="submit"
          className="py-4 w-[100%] bg-red-700 rounded-[20px] shadow-lg"
        >
          ADD
        </button>
      </form>

      <div className="w-[100%]">
        {data.map((items) => {
          return (
            <ul
              key={items.id}
              className="flex justify-between px-8 my-4 w-[60%] bg-gray-800 mx-auto py-4 text-[28px]"
            >
              <li>{items.id}</li>
              <li>{items.name}</li>
              <li>{items.price}</li>
              <li className=" flex gap-x-[2rem] ">
                <FaEdit />
                <MdDelete />
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Expanse;
