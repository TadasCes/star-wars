import { FilmCard } from "./FilmCard";
import { IFilm } from "../../app/interfaces/IFilm";
import { LoadSpinner } from "../utils/LoadSpinner";
import { useFilms } from "@/components/films/hooks/useFilms";

export const FilmSection = () => {
  const { loading, filmsData } = useFilms();

  return loading ? (
    <div className="w-full">
      <LoadSpinner />
    </div>
  ) : filmsData ? (
    <div className="w-full overflow-hidden">
      <div className="flex overflow-x-auto space-x-4">
        {filmsData.map((film: IFilm) => (
          <FilmCard key={film.episode_id} film={film} />
        ))}
      </div>
    </div>
  ) : (
    <div>
      <p>Error loading data, please try again later.</p>
    </div>
  );
};
