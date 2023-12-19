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
      <div className="lg:h-[100vh] h-auto flex lg:flex-row flex-col justify-center items-center w-[90%] mx-auto">
        <div className="md:w-[50%] w-[95%] py-4 px-8">
          <h2 className="lg:text-[48px] text-[24px] font-semibold  lg:w-[60%] w-[95%] mx-auto ">
            VIsit our Resturant
          </h2>
          <p className="lg:w-[60%] w-[95%] mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quasi
            facilis, voluptas consectetur aliquam odio quaerat molestiae id ipsa
            voluptates cumque doloremque provident, ipsum dicta dolore! Nulla
            est itaque ullam reprehenderit sequi excepturi debitis ratione,
            porro consequatur non, vero quas veniam earum id libero possimus
            voluptatum maiores. Aliquam, obcaecati ipsum!
          </p>
        </div>
        <div className="lg:w-[50%] w-[95%] mx-auto">
          <form
            action=""
            className="flex flex-col justify-center items-center gap-y-[2rem] py-4"
          >
            {inputsData.map(({ id, placeHoder, type }) => {
              return (
                <input
                  key={id}
                  type={`${type}`}
                  className="py-2 md:w-[50%] w-[100%] rounded-[15px] shadow-lg text-[20px] h-[5vh] text-gray-900"
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
