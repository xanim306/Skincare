const initialState = {
  products: {},
  categories: [],
  // blog: [],
  API_PRODUCTS: "http://127.0.0.1:8000/products/list/",
  API_IMAGE: "http://127.0.0.1:8000",
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CATEGORY":
      return { ...state, categories: action.payload };
    // case "SET_BLOG":
    //   return { ...state, blog: action.payload };
    default:
      return state;
  }
}
