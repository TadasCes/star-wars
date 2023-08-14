import React from "react";

type FilmCardInfoProps = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

export const FilmCardInfo = ({ children }: FilmCardInfoProps) => {
  return <div className="mb-6">{children}</div>;
};
