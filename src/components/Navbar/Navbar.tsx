import React from "react";
import { NavElement } from "./NavElement";

export const Navbar = () => {
  return (
    <div className="lg:w-1/6">
      <div>
        <span>Navigation:</span>
      </div>
      <div className="bg-blue-400 drop-shadow-md">
        <NavElement title="About" to={"/about"} />
        <NavElement title="Films" to={"/"} />
      </div>
    </div>
  );
};
