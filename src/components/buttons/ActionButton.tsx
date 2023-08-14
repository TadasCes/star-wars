import React, { MouseEventHandler } from "react";

type ActionButtonProps = {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const ActionButton = ({ title, onClick }: ActionButtonProps) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
