import { usePeopleData } from "@/app/data/PeoplDataProvider";
import axios from "axios";
import { useEffect, useState } from "react";

export const usePeople = () => {
  const { peopleData, getPeopleList, loading } = usePeopleData();

  return { getPeopleList, peopleData, loading };
};
