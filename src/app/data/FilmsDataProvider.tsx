import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { IFilm } from "../interfaces/IFilm";

const Context = createContext<any>(null);

export const FilmsDataProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [filmsData, setFilmsData] = useState<IFilm[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://swapi.dev/api/films/")
        .then((response) => response.data.results)
        .then((data) => setFilmsData(data))
        .then(() => setLoading(false));
    };

    fetchData();
  }, []);

  return (
    <Context.Provider value={{ filmsData, loading }}>
      {children}
    </Context.Provider>
  );
};

export const useFilmsData = () => useContext(Context);
