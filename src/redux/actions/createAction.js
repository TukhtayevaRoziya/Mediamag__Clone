import { SET_BASKET } from "./types";

export const createAction =
  ( actionType, formData) => async (dispatch) => {
    // try {
    //   const res = await api.post(path, formData);
      
      dispatch({
        type: actionType,
        payload: formData,
      });
    // } catch (err) {
    //   console.log(err);
    // }
  };
  export const setCategoriesData = (payload) => ({
    type: SET_BASKET,
    payload,
  });