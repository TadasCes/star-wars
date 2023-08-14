import React from "react";
import { IPerson } from "../../app/interfaces/IPerson";
import { PersonRow } from "./PersonRow";
import { usePeopleData } from "@/app/data/PeoplDataProvider";
import { LoadSpinner } from "../utils/LoadSpinner";
import { Table } from "../table/Table";
import { TableRow } from "../table/TableRow";
import { TableHeader } from "../table/TableHeader";
import { TableHeaderCell } from "../table/TableHeaderCell";
import { TableBody } from "../table/TableBody";

export const PeopleList = () => {
  const { peopleList, loading, isRequested } = usePeopleData();

  return isRequested ? (
    loading ? (
      <div className="w-full">
        <LoadSpinner />
      </div>
    ) : (
      <div className="p-2 w-full">
        <Table>
          <TableHeader>
            <TableRow background={true}>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Gender</TableHeaderCell>
              <TableHeaderCell>Birth year</TableHeaderCell>
              <TableHeaderCell>Mass</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {peopleList.map((person: IPerson, index: number) => (
              <PersonRow key={index} id={index} person={person} />
            ))}
          </TableBody>
        </Table>
      </div>
    )
  ) : null;
};
