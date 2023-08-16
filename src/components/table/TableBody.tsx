type TableBodyProps = {
  children: JSX.Element | JSX.Element[];
};

export const TableBody = ({ children }: TableBodyProps) => {
  return <tbody>{children}</tbody>;
};
