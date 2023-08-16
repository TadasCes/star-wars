import { IFilm } from "../../app/interfaces/IFilm";
import { FilmCardBody } from "../filmCard/FilmCardBody";
import { FilmCardHeader } from "../filmCard/FilmCardHeader";
import { FilmCardInfo } from "../filmCard/FilmCardInfo";
import { FilmCardAction } from "../filmCard/FilmCardAction";
import { ActionButton } from "../buttons/ActionButton";
import { useFilms } from "./hooks/useFilms";

interface FilmCardProps {
  film: IFilm;
}

export const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  const { handleFetchPeople } = useFilms();

  return (
    <FilmCardBody>
      <FilmCardHeader>
        Episode: {film.episode_id.toString()} — {film.title}
      </FilmCardHeader>
      <FilmCardInfo>Release Date: {film.release_date}</FilmCardInfo>
      <FilmCardAction>
        <ActionButton
          title="Show people"
          onClick={() => handleFetchPeople(film.characters)}
        />
      </FilmCardAction>
    </FilmCardBody>
  );
};

export default FilmCard;
