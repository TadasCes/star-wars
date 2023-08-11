import React from "react";
import { IFilm } from "../../app/interfaces/IFilm";
import { usePeople } from "@/hooks/usePeople";

interface FilmCardProps {
  film: IFilm;
}

export const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  const { getPeopleList } = usePeople();

  return (
    <div className="bg-gray-200 m-2 p-2 flex">
      <div className="flex flex-col pr-10">
        <div className="text-lg">
          <h3>{film.title}</h3>
        </div>
        <div>
          <p>Release Date: {film.release_date}</p>
        </div>
        <div className="pt-5 text-blue-500">
          <button onClick={() => getPeopleList(film.characters)}>
            <span>Show people</span>
          </button>
        </div>
      </div>
      <div className="w-28 h-28 bg-gray-600">{film.episode_id}</div>
    </div>
  );
};

export default FilmCard;
