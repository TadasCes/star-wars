import React, { useState } from "react";
import { FilmCard } from "./FilmCard";
import { IFilm } from "../../app/interfaces/IFilm";
import { useFilmsData } from "@/app/data/FilmsDataProvider";
import { useEffect } from "react";
import { useGetData } from "@/hooks/useGetData";
import { LoadSpinner } from "../utils/LoadSpinner";
interface FilmSectionProps {
  films: IFilm[] | null;
}

export const FilmSection = () => {
  const { filmsData, loading } = useFilmsData();
  console.log(filmsData);

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
