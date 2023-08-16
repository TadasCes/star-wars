type FilmCardBodyProps = {
  children: JSX.Element | JSX.Element[];
};

export const FilmCardBody = ({ children }: FilmCardBodyProps) => {
  return (
    <div className="bg-gray-200 rounded m-2 p-2 flex min-w-fit">
      <div className="flex flex-col max-w-40">{children}</div>
    </div>
  );
};
