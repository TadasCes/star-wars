import React from "react";
import { NavElement } from "./NavElement";
import { AiOutlineClose } from "react-icons/ai";
type Props = {
  open: boolean;
};
const Sidebar = ({ open }: Props) => {
  return (
    <div
      className={`
        "flex flex-col justify-between
        bg-zinc-700 text-zinc-50
        md:w-full md:sticky md:z-0 top-0 z-20 fixed
        md:h-full h-full w-[300px]
        transition-transform .3s ease-in-out md:translate-x-0 ${
          !open && "-translate-x-full"
        }`}
    >
      <div>
        <nav className="md:sticky top-0 md:top-16">
          <ul className="py-2 flex flex-col gap-2">
            <NavElement title="About" to={"/about"} />
            <NavElement title="Films" to={"/"} />
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
