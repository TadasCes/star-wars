import { IFilm } from "@/app/interfaces/IFilm";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: FilmsState;
};

type FilmsState = {
  isLoading: boolean;
  filmsData: IFilm[] | null;
  error: string | null;
};

const initialState = {
  value: {
    isLoading: true,
    filmsData: null,
    error: null,
  } as FilmsState,
} as InitialState;

export const films = createSlice({
  name: "films",
  initialState,
  reducers: {
    fetchFilmsRequest: (state) => {
      state.value.isLoading = true;
      state.value.error = null;
    },
    fetchFilmsSuccess: (state, action: PayloadAction<IFilm[]>) => {
      state.value.filmsData = action.payload;
      state.value.isLoading = false;
      state.value.error = null;
    },
    fetchFilmsError: (state, action: PayloadAction<string>) => {
      state.value.isLoading = false;
      state.value.error = action.payload;
    },
  },
});

export const { fetchFilmsRequest, fetchFilmsSuccess, fetchFilmsError } =
  films.actions;
export default films.reducer;
