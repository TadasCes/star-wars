import axios from "axios";
import {
  fetchFilmsRequest,
  fetchFilmsSuccess,
  fetchFilmsError,
} from "../features/filmsSlice";
import { AppDispatch } from "../store";

export const fetchFilmsList = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchFilmsRequest());

    const results = await axios
      .get("https://swapi.dev/api/films/")
      .then((response) => response.data.results);

    dispatch(fetchFilmsSuccess(results));
  } catch (err: unknown) {
    if (err instanceof Error) {
      dispatch(fetchFilmsError(`Error: (${err.message})`));
    }
  }
};
