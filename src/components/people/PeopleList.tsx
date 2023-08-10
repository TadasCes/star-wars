import React from "react";
import { IPerson } from "./IPerson";
import { PersonRow } from "./PersonRow";

interface PeopleListProps {
  peopleList: IPerson[];
}

export const PeopleList = ({ peopleList }: PeopleListProps) => {
  return (
    <div className="text-center mx-auto w-full p-2">
      <h2>People in film title</h2>
      {peopleList.map((person: IPerson, index: number) => (
        <PersonRow key={index} id={index} person={person} />
      ))}
    </div>
  );
};
