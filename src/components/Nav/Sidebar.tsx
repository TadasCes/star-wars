import React from "react";
import { NavElement } from "./NavElement";

type SidebarProps = {
  open: boolean;
};
const Sidebar = ({ open }: SidebarProps) => {
  return (
    <nav
      className={`
        rounded-tr-lg rounded-br-lg
        flex justify-between
        bg-zinc-700 text-zinc-50
        pt-4
        px-8
        md:w-fit
        md:sticky md:z-0 top-0 z-20 fixed
        md:h-full h-full
        transition-transform .3s ease-in-out md:translate-x-0 ${
          !open && "-translate-x-full"
        }`}
    >
      <ul className="py-2 flex flex-col gap-2 justify-items-center">
        <NavElement title="About" to={"/about"} />
        <NavElement title="Films" to={"/"} />
      </ul>
    </nav>
  );
};
export default Sidebar;
