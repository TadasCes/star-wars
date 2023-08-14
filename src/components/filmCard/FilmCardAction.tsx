import React from "react";

type FilmCardActionProps = {
  children: JSX.Element | JSX.Element[];
};

export const FilmCardAction = ({ children }: FilmCardActionProps) => {
  return <div className="flex items-end grow">{children}</div>;
};
