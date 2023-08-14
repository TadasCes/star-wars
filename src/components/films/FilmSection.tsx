import { FilmCard } from "./FilmCard";
import { IFilm } from "../../app/interfaces/IFilm";
import { useFilmsData } from "@/app/data/FilmsDataProvider";
import { LoadSpinner } from "../utils/LoadSpinner";

export const FilmSection = () => {
  const { filmsData, loading } = useFilmsData();

  return loading ? (
    <div className="w-full">
      <LoadSpinner />
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-fit mb-8 grid-rows-1">
      {filmsData.map((film: IFilm) => (
        <FilmCard key={film.episode_id} film={film} />
      ))}
    </div>
  );
};
