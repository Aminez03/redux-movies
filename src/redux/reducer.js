import { moviesdata } from "../data";
import { DELETE } from "./actionType";

const init = {
  list: moviesdata,
};

const movieReducer = (state = init, { type, payload }) => {
  switch (type) {
    case DELETE:
      return {
        ...state,
        list: state.list.filter((el) => el.id !== payload),
      };

    default:
      return state;
  }
};

export default movieReducer