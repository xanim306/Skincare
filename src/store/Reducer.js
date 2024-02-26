const initialState = {
  products: {},
  categories: [],
  basket:[],
  lang: localStorage.getItem("language") || "az",
  // blog: [],
  API_PRODUCTS: "http://127.0.0.1:8000/products/list/",
  API_IMAGE: "http://127.0.0.1:8000",
  words:{
    az:{
      offer:"Dəriniz üçün ən yaxşı məhsulları təklif edirik"
    },
    en:{
      offer:"We Offer the Best Products for your Skin"
    }
  }
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
      case "SET_LANG":
      return { ...state, lang: action.payload };
    case "SET_CATEGORY":
      return { ...state, categories: action.payload };
      case "SET_BASKET":
        return { ...state, basket: action.payload };
    // case "SET_BLOG":
    //   return { ...state, blog: action.payload };
    default:
      return state;
  }
}
