import React, { useState } from "react";
import Btn from "./Btn";

const WordCounter = () => {
  const [text, setText] = useState("mazahir");
  const [letters, setLetters] = useState(0);
  const [words, setWords] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault(); // default khatam karta ha
    let totalWords = text.split(" ").filter((items) => {
      return items;
    });
    console.log(totalWords);

    setLetters(text.length);
    setWords(totalWords.length);

    setText("");
  };

  return (
    <div className="w-[80%] mx-auto py-[2rem]">
      <h2 className="text-center text-[30px] font-semibold">
        WORD COUNTER APP IN REACTJS
      </h2>
      <form action="" onSubmit={handleSubmit}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="20"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            console.log(text);
          }}
          placeholder="type here ...."
          className="w-full text-gray-900 bg-blue-400 text-[25px] font-semibold shadow-xl border-none rounded-[25px]"
        ></textarea>

        <Btn text={"submit"} styles={"w-[30%]"} />
      </form>

      <div>
        {words == 0 ? (
          <div>
            <h2>Please type the words above</h2>
          </div>
        ) : (
          <div>
            <h2 className="text-[25px] font-semibold">
              total words you type is :{" "}
            </h2>
            <Btn text={words} styles={"w-[100%]"} />
            <Btn text={letters} styles={"w-[100%]"} />
            <h2>{text}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordCounter;
