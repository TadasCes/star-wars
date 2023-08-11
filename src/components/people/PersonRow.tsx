import React from "react";
import { IPerson } from "../../app/interfaces/IPerson";

interface PersonRowProps {
  id: number;
  person: IPerson;
}

export const PersonRow: React.FC<PersonRowProps> = ({ id, person }) => {
  return (
    <div className="grid grid-cols-7 text-black">
      <div className="">{id}</div>
      <div className="col-span-3">{person.name}</div>
      <div className="">{person.birth_year}</div>
      <div className="">{person.gender}</div>
      <div className="">{person.mass}</div>
    </div>
  );
};
