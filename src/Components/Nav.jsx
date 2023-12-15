function Nav() {
  const navLinks = ["Home", "About", "contact", "services", "Projects"];

  return (
    <>
      <div className="flex justify-around">
        <div>
          <h2 className="text-[24px] font-bold">LOGO</h2>
        </div>
        <div className="flex gap-[2rem] my-auto">
          {navLinks.map((items) => {
            return <a>{items}</a>;
          })}
        </div>
      </div>
    </>
  );
}

export default Nav;
