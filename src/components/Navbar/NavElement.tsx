import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

type NavElementProps = {
  title: string;
  to: string;
};

export const NavElement = ({ title, to }: NavElementProps) => {
  return (
    <Link href={to}>
      <div className="p-2 flex place-content-between">
        <span>{title}</span>
        <AiOutlineArrowRight />
      </div>
    </Link>
  );
};
