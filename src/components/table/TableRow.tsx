type TableRowProps = {
  children: JSX.Element | JSX.Element[];
  background?: boolean;
};

export const TableRow = ({ children, background }: TableRowProps) => {
  return <tr className={`${background && "bg-slate-200"}`}>{children}</tr>;
};
