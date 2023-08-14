import axios, { AxiosResponse } from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext<any>(null);

const handleResults = (results: Array<PromiseSettledResult<AxiosResponse>>) => {
  const isFulfilled = <T,>(
    p: PromiseSettledResult<T>
  ): p is PromiseFulfilledResult<T> => p.status === "fulfilled";
  const isRejected = <T,>(
    p: PromiseSettledResult<T>
  ): p is PromiseRejectedResult => p.status === "rejected";

  const rejected = results.filter(isRejected).map((p) => p);
  const fulfilled = results.filter(isFulfilled).map((p) => p.value.data);

  return { rejected, fulfilled };
};

export const PeopleDataProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [isRequested, setIsRequested] = useState(false);
  const [peopleList, setPeopleList] = useState<Array<object>>([]);

  const getPeopleList = async (list: string[]) => {
    setIsRequested(true);
    setLoading(true);

    try {
      const fetchURL = (url: string) => axios.get(url);
      const promiseArray = list.map(fetchURL);

      const results = await Promise.allSettled(promiseArray);
      const { fulfilled } = handleResults(results);

      setPeopleList(fulfilled);
    } catch (e) {
      console.log("getPeopleList ERROR: ", e);
      return e;
    } finally {
      setLoading(false);
    }
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
