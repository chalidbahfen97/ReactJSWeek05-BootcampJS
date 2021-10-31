import {
  GET_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT_STOCK,
} from "../constant/productActionType";

//initial data reducer
const INITIAL_STATE = [
  { id: 1, name: "laptop", stock: 5 },
  { id: 2, name: "camera", stock: 10 },
  { id: 3, name: "gelas", stock: 150 },
];

//reducer
function productReducer(state = { products: INITIAL_STATE }, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return applyAddProduct(state, action);
    case UPDATE_PRODUCT_STOCK:
      return applyUpdateProductStock(state, action);
    default:
      return state;
  }
}

//ACTION REDUCER
const applyAddProduct = (state, action) => {
  return {
    products: [...state.products, action.payload],
  };
};

const applyUpdateProductStock = (state, action) => {
  const products = [...state];
  products.map((prod) => {
    if (prod.id === action.payload.id) {
      prod.stock = prod.stock - action.payload.stock;
      return prod;
    }
    return prod;
  });
  return products;
};

export default productReducer;
