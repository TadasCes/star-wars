import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { IPerson } from "../interfaces/IPerson";

const Context = createContext<any>(null);

export const PeopleDataProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [isRequested, setIsRequested] = useState(false);
  const [peopleList, setPeopleList] = useState<Array<object>>([]);
  const tempArr: any[] | null = [];

  const getPeopleList = async (list: string[]) => {
    setIsRequested(true);
    setLoading(true);
    console.log(list);
    const fetchURL = (url: string) => axios.get(url);
    const promiseArray = list.map(fetchURL);

    Promise.all(promiseArray).then((response) => {
      response.forEach((res) => {
        tempArr.push(res.data);
      });
      console.log(tempArr);
      setPeopleList(tempArr);
      setLoading(false);
    });
    console.log(peopleList);
  };

  return (
    <Context.Provider
      value={{ peopleList, getPeopleList, loading, isRequested }}
    >
      {children}
    </Context.Provider>
  );
};

export const usePeopleData = () => useContext(Context);
