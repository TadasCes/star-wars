import React from "react";

type TableHeaderProps = {
  children: JSX.Element | JSX.Element[];
};

export const TableHeader = ({ children }: TableHeaderProps) => {
  return <thead className="text-left">{children}</thead>;
};
