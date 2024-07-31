// import api from "../../utility/api";
// import {

//   GET_CONSTRUCTIONS

// } from "./types";

export const getAction = (actionType) => async (dispatch) => {
  try {
    // const res = await api.get(path);
    dispatch({
      type: actionType,
    //   payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

// export const getConstructions = () => async (dispatch) => {
//     type: SET_CATEGORIES,
//     categories,
// //   try {
// //     const res = await api.get("construction");
// //     dispatch({
// //       type: GET_CONSTRUCTIONS,
// //       payload: res.data,
// //     });
// //   } catch (err) {
// //     console.log(err);
// //   }
// };