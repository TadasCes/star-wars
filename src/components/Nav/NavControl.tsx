import React, { useState } from "react";
import { NavElement } from "./NavElement";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  onMenuButtonClick(): void;
  open: boolean;
  setOpen(open: boolean): void;
};

export const NavControl = ({ open, onMenuButtonClick }: Props) => {
  return (
    <nav className="flex align-center md:hidden bg-zinc-500 text-zinc-100 rounded fixed z-10 px-2 shadow-sm h-12">
      <button className="md:hidden" onClick={onMenuButtonClick}>
        {!open ? (
          <GiHamburgerMenu className="h-6 w-6" />
        ) : (
          <AiOutlineClose className="h-6 w-6" />
        )}
      </button>
    </nav>
  );
};
