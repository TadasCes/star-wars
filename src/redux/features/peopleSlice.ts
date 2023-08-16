import { IPerson } from "@/app/interfaces/IPerson";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: PeopleState;
};

type PeopleState = {
  isRequested: boolean;
  isLoading: boolean;
  peopleList: IPerson[] | null;
  error: string | null;
};

const initialState = {
  value: {
    isRequested: false,
    isLoading: false,
    peopleList: null,
    error: null,
  } as PeopleState,
} as InitialState;

export const people = createSlice({
  name: "people",
  initialState,
  reducers: {
    fetchPeopleRequest: (state) => {
      state.value.isRequested = true;
      state.value.isLoading = true;
      state.value.error = null;
    },
    fetchPeopleSuccess: (state, action: PayloadAction<IPerson[]>) => {
      state.value.peopleList = action.payload;
      state.value.isLoading = false;
      state.value.error = null;
    },
    fetchPeopleError: (state, action: PayloadAction<string>) => {
      state.value.isLoading = false;
      state.value.error = action.payload;
    },
  },
});

export const { fetchPeopleRequest, fetchPeopleSuccess, fetchPeopleError } =
  people.actions;

export default people.reducer;
