type FilmCardActionProps = {
  children: JSX.Element | JSX.Element[];
};

export const FilmCardAction = ({ children }: FilmCardActionProps) => {
  return <div className="flex items-end grow justify-end">{children}</div>;
};
