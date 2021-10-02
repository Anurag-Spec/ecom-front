import axios from "axios";
import {
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_FAIL,
} from "../constants/wishListConstants";

export const GetWishList = (email) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://dforceshop.herokuapp.com/api/add1Wish",
      {
        email,
      }
    );
    dispatch({ type: GET_WISHLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_WISHLIST_FAIL, payload: error.message });
  }
};
