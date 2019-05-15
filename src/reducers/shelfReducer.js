const FETCH_PRODUCTS = "FETCH_PRODUCTS"

const initialState = {
  products: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}