import React from "react";

type TableHeaderCellProps = {
  children: string;
};

export const TableHeaderCell = ({ children }: TableHeaderCellProps) => {
  return <th className="pl-2">{children}</th>;
};
