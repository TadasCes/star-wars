import React from "react";

type TableCellProps = {
  children: string | number;
};
export const TableCell = ({ children }: TableCellProps) => {
  return <td className="border border-slate-300 text-left pl-2">{children}</td>;
};
