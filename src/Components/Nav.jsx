import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const navLinks = [
    {
      id: 1,
      LinkTo: "/",
      title: "Home",
    },
    {
      id: 2,
      LinkTo: "/counterapp",
      title: "Counter",
    },
    {
      id: 3,
      LinkTo: "/expanse",
      title: "Expanse",
    },
    {
      id: 4,
      LinkTo: "/api",
      title: "API",
    },
  ];
  // "Home", "About", "contact", "services", "Projects";

  function handleClick() {
    setToggle(!toggle);
    console.log(toggle);
  }

  return (
    <>
      <div className="flex justify-around bg-gray-900 py-8 shadow-xl md:flex-row flex-col">
        <div>
          <h2 className="text-[24px] font-bold">LOGO</h2>
        </div>

        <div className="absolute right-5 top-5 md:hidden block">
          {toggle ? (
            <div className="text-[22px]">
              <CiMenuFries onClick={handleClick} />
            </div>
          ) : (
            <div className="text-[22px]">
              <RxCross1 onClick={handleClick} />
            </div>
          )}
        </div>

        {/* menu for larage screen */}
        <div
          className={` ${
            toggle
              ? "hidden"
              : "flex gap-[2rem] my-auto md:flex-row flex-col text-center"
          }`}
        >
          {navLinks.map(({ id, LinkTo, title }, index) => {
            return (
              <Link key={id} to={LinkTo}>
                {title}
              </Link>
            );
          })}
        </div>
      </div>

      {/* mobile view  */}
    </>
  );
}

export default Nav;
