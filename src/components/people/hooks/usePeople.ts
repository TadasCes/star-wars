import { useAppSelector } from "@/redux/store";

export const usePeople = () => {
  const state = useAppSelector((state) => state.peopleReducer.value);

  return {
    isRequested: state.isRequested,
    loading: state.isLoading,
    peopleList: state.peopleList,
  };
};
