import { AppDispatch, useAppSelector } from "@/redux/store";
import { fetchFilmsList } from "@/redux/thunks/filmsThunk";
import { fetchPeopleList } from "@/redux/thunks/peopleThunk";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useFilms = () => {
  const state = useAppSelector((state) => state.filmsReducer.value);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (state.filmsData === null) {
      dispatch(fetchFilmsList());
    }
  }, [dispatch, state.filmsData]);

  const handleFetchPeople = (urlList: string[]) => {
    dispatch(fetchPeopleList(urlList));
  };

  return {
    loading: state.isLoading,
    filmsData: state.filmsData,
    handleFetchPeople,
  };
};
