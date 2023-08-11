import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { IFilm } from "../interfaces/IFilm";

type FilmContextType = {
  films: IFilm[];
};

const Context = createContext<IFilm[] | null>(null);

export const FilmsDataProvider = ({ children }: any) => {
  const [filmsData, setFilmsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://swapi.dev/api/films/")
        .then((response) => response.data.results)
        .then((data) => setFilmsData(data));
    };

    fetchData();
  }, []);

  return <Context.Provider value={filmsData}>{children}</Context.Provider>;
};

export const useFilmsData = () => useContext(Context);
