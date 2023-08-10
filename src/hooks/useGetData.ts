import axios from "axios";
import { useState } from "react";

export const useGetData = () => {
  const [data, setData] = useState({});
  const getData = async () => {
    return await axios.get("https://swapi.dev/api/films").then((res) => {
      return setData(res.data);
    });
  };
  return { getData, data };
};
