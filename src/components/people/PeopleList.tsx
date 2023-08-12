import React from "react";
import { IPerson } from "../../app/interfaces/IPerson";
import { PersonRow } from "./PersonRow";
import { usePeopleData } from "@/app/data/PeoplDataProvider";
import { LoadSpinner } from "../utils/LoadSpinner";

interface PeopleListProps {
  peopleList: IPerson[];
}

export const PeopleList = () => {
  const { peopleList, loading, isRequested } = usePeopleData();

  return isRequested ? (
    loading ? (
      <div className="w-full">
        <LoadSpinner />
      </div>
    ) : (
      <div className="text-center mx-auto w-full p-2">
        {peopleList.map((person: IPerson, index: number) => (
          <PersonRow key={index} id={index} person={person} />
        ))}
      </div>
    )
  ) : null;
};
