import {
  GET_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT_STOCK,
} from "../constant/productActionType";

//action creator
export const doAddProduct = (id, name, stock) => {
  return {
    type: ADD_PRODUCT,
    payload: { id: id, name: name, stock: stock },
  };
};

export const doUpdateProductStock = (id, stock) => {
  return {
    type: UPDATE_PRODUCT_STOCK,
    payload: { id: id, stock: stock },
  };
};
