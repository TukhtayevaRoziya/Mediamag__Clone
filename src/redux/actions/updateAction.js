import { getAction } from "./readAction";
import { GET_BASKET } from "./types";

export const updateAction =
  (actionType, data) => async (dispatch) => {
    try {
    //   const res = await api.put(`${path}/${id}`, data);

      dispatch({
        type: actionType,
        payload: dispatch(getAction( GET_BASKET))+1,
      });
      console.log(dispatch(getAction( GET_BASKET)))
    //   if (path === "news") {
    //     dispatch(getAction("news", GET_NEWS));
    //   }
     
    } catch (err) {
      console.log(err);
    }
  };