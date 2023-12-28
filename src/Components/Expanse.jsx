import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React, { useState } from "react";

const Expanse = () => {
  const [data, setData] = useState([]);

  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      setData(
        data.map((expnases) => {
          return expnases.id === edit.id
            ? { ...edit, item: item, price: price }
            : expnases;
        })
      );
      setEdit(null);
    } else {
      setData((prevExpanse) => [
        ...prevExpanse,
        { id: Date.now(), item: item, price: price },
      ]);
    }

    setItem("");
    setPrice(0);
  };

  const handleDelete = (id) => {
    console.log(id);
    setData(
      data.filter((items) => {
        return items.id !== id;
      })
    );
  };

  const handleEdit = (expanse) => {
    setItem(expanse.item);
    setPrice(expanse.price);
    setEdit(expanse);
  };

  const searchArray = search
    ? data.filter((items) => {
        return items.item.includes(search) || item.price.includes(search);
      })
    : data;

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* form.jsx */}
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
          value={item}
          onChange={(e) => setItem(e.target.value)}
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

      {/* search.jsx */}
      <input
        type="text"
        placeholder="enter item name ..."
        className="py-2 px-4 shadow-lg rounded-[20px]  text-[25px] text-[#000] w-[50%] my-4 "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* list.jsx */}

      <div className=" w-[60%] mx-auto my-[4rem]">
        {searchArray.map((expanse) => {
          return (
            <ul
              className="bg-gray-500 flex justify-around py-4 text-[30px] text-white my-4"
              key={expanse.id}
            >
              <li>{expanse.id}</li>
              <li>{expanse.item}</li>
              <li>{expanse.price}</li>
              <li className="flex gap-[2rem]">
                <FaEdit onClick={() => handleEdit(expanse)} />
                <MdDelete
                  className="text-red-700"
                  onClick={() => handleDelete(expanse.id)}
                />
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Expanse;
