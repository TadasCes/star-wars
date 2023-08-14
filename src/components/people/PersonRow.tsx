import React from "react";
import { IPerson } from "../../app/interfaces/IPerson";
import { TableCell } from "../table/TableCell";
import { TableRow } from "../table/TableRow";

interface PersonRowProps {
  id: number;
  person: IPerson;
}

export const PersonRow = ({ id, person }: PersonRowProps) => {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{person.name}</TableCell>
      <TableCell>{person.gender}</TableCell>
      <TableCell>{person.birth_year}</TableCell>
      <TableCell>{person.mass}</TableCell>
    </TableRow>
  );
};
