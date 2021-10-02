import axios from "axios";
import { ADD_CART_FAIL, ADD_CART_SUCCESS } from "../constants/cartConstants";

export const AddCart = (email, id) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://dforceshop.herokuapp.com/api/addCart",
      {
        email,
        id,
      }
    );
    dispatch({ type: ADD_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_CART_FAIL, payload: error.message });
  }
};
