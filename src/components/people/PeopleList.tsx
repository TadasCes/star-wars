import React from "react";
import { IPerson } from "../../app/interfaces/IPerson";
import { PersonRow } from "./PersonRow";
import { usePeopleData } from "@/app/data/PeoplDataProvider";

interface PeopleListProps {
  peopleList: IPerson[];
}

export const PeopleList = () => {
  const { peopleList, loading } = usePeopleData();

  return (
    <div className="text-center mx-auto w-full p-2">
      <h2>People in film title</h2>
      {loading ? (
        <div>Loading</div>
      ) : (
        peopleList.map((person: IPerson, index: number) => (
          <PersonRow key={index} id={index} person={person} />
        ))
      )}
    </div>
  );
};
