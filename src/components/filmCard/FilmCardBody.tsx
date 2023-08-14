import React from "react";

type FilmCardBodyProps = {
  children: JSX.Element | JSX.Element[];
};

export const FilmCardBody = ({ children }: FilmCardBodyProps) => {
  return (
    <div className="bg-gray-200 rounded m-2 p-2 flex">
      <div className="flex flex-col ">{children}</div>;
    </div>
  );
};
