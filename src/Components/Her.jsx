function Her() {
  const inputsData = [
    {
      id: 1,
      placeHoder: "Enter your name",
      type: "text",
    },
    {
      id: 2,
      placeHoder: "Enter Email",
      type: "email",
    },
    {
      id: 3,
      placeHoder: "Enter your number",
      type: "number",
    },
    {
      id: 4,
      placeHoder: "enter your address",
      type: "date",
    },
    {
      id: 5,
      placeHoder: "checkbox",
      type: "checkbox",
    },
  ];

  return (
    <>
      <div className="h-[100vh] flex justify-center items-center">
        <div className="w-[50%]">
          <h2 className="text-[48px] font-semibold">VIsit our Resturant</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quasi
            facilis, voluptas consectetur aliquam odio quaerat molestiae id ipsa
            voluptates cumque doloremque provident, ipsum dicta dolore! Nulla
            est itaque ullam reprehenderit sequi excepturi debitis ratione,
            porro consequatur non, vero quas veniam earum id libero possimus
            voluptatum maiores. Aliquam, obcaecati ipsum!
          </p>
        </div>
        <div className="w-[50%]">
          <form
            action=""
            className="flex flex-col justify-center items-center gap-y-[2rem]"
          >
            {inputsData.map(({ id, placeHoder, type }) => {
              return (
                <input
                  type={`${type}`}
                  className="py-2  w-[50%] rounded-[15px] shadow-lg text-[20px]"
                  placeholder={`${placeHoder}`}
                />
              );
            })}

            <button className="text-[20px] bg-blue-800 py-2 px-10 shadow-lg rounded-[20px]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Her;
