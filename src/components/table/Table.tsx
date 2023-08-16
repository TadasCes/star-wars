type TableProps = {
  children: JSX.Element | JSX.Element[];
};

export const Table = ({ children }: TableProps) => {
  return (
    <table className="w-full pt-2 border-collapse border border-slate-300">
      {children}
    </table>
  );
};
