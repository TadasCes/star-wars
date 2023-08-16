import axios, { AxiosResponse } from "axios";
import {
  fetchPeopleRequest,
  fetchPeopleSuccess,
  fetchPeopleError,
} from "../features/peopleSlice";
import { AppDispatch } from "../store";

const handleResults = (results: Array<PromiseSettledResult<AxiosResponse>>) => {
  const isFulfilled = <T>(
    p: PromiseSettledResult<T>
  ): p is PromiseFulfilledResult<T> => p.status === "fulfilled";
  const isRejected = <T>(
    p: PromiseSettledResult<T>
  ): p is PromiseRejectedResult => p.status === "rejected";

  const rejected = results.filter(isRejected).map((p) => p);
  const fulfilled = results.filter(isFulfilled).map((p) => p.value.data);

  return { rejected, fulfilled };
};

export const fetchPeopleList =
  (urlList: string[]) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchPeopleRequest());

      const fetchURL = (url: string) => axios.get(url);
      const promiseArray = urlList.map(fetchURL);
      
      const results = await Promise.allSettled(promiseArray);
      const { fulfilled } = handleResults(results);

      dispatch(fetchPeopleSuccess(fulfilled));
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch(fetchPeopleError(err.message));
      }
    }
  };
