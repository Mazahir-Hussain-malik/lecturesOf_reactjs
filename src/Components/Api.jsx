import React, { useState, useEffect } from "react";
import Btn from "./Btn";

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await api;
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.log("some thing went wrong", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 w-[90%] mx-auto gap-[2rem]">
      {data.map((items) => {
        return (
          <div className="border-2 rounded-[30px] p-4 text-[48px]">
            <h2>{items.id}</h2>
            <p>{items.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
